import { globalSettings, useGlobalProducts } from "/global-stores";
import { Image } from "/image";
import { ProductRatingWithProduct } from "/product.rating";
import { TypeOptions, Typography } from "/typography";
import clsx from "clsx";
import { ProductCardContainer } from "product-card";
import { CloseIcon, SearchIcon } from "icons";
import { LoadingSpinner } from "loading-spinner";
import { ScrollContainer } from "scroll-container";
import colors from "tailwindcss/colors";
import { useDebouncedEffect } from "use-debounce-effect";
import { JSONParse, serializeFormWithGroups } from "utils";
import { FC, useCallback, useEffect, useState } from "react";
import { render } from "preact";
import { SearchBlocksTrending_collections, SearchBlocksTrending_products, SearchSection } from "_types";
import { _Article_liquid, _Collection_liquid, _Page_liquid, _Product_liquid } from "_types";

export const initSearch = async () => {
  const searchContent = document.querySelector<HTMLElement>(
    '[data-drawer="search"] [data-search-root]'
  );
  const settings = JSONParse<SearchSection["settings"]>(searchContent.dataset.searchRoot);
  const blocks = JSONParse<SearchSection["blocks"][number]["settings"][]>(
    searchContent.dataset.searchBlocks
  );
  const searchTerms = JSONParse<string>(searchContent.dataset.searchDefaultValue);

  if (settings) {
    render(<Search settings={settings} searchTerms={searchTerms} blocks={blocks} />, searchContent);
  }

  const pageForm = document.querySelector("[data-search-types-form]");
  pageForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    window.location.href = `${window.location.href.split("?")[0]}?${new URLSearchParams(
      Object.entries(serializeFormWithGroups(pageForm)).map(([key, value]) => [
        key,
        value.join(","),
      ])
    ).toString()}`;
  });
};

type SearchState = {
  showResults: boolean;
  loading: boolean;
  count: number;
  products: (_Product_liquid & { variants_size?: number })[];
  collections: _Collection_liquid[];
  articles: _Article_liquid[];
  pages: _Page_liquid[];
  types: string[];
  terms: string;
};

export const Search: FC<{
  settings: SearchSection["settings"];
  searchTerms: string;
  blocks?: SearchSection["blocks"][number]["settings"][];
}> = ({ blocks, settings, searchTerms }) => {
  const [upsellProducts, setUpsellProducts] = useState<
    (_Product_liquid & { timestamp?: number; hidden?: boolean })[]
  >([]);
  const [searchInput, setSearchInput] = useState(searchTerms ?? "");
  const [searchResults, setSearchResults] = useState<SearchState>({
    loading: false,
    showResults: false,
    count: 0,
    products: [],
    collections: [],
    articles: [],
    pages: [],
    types: [],
    terms: searchTerms,
  });
  const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
    ({ getProduct, hydrated, getAsyncProduct }) => ({
      getProduct,
      getAsyncProduct,
      hydrated,
    })
  );
  const handleClose = useCallback(() => {
    document.dispatchEvent(new Event("search:close"));
  }, []);

  const handleChange = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    setSearchInput(e.target.value);
    console.log(window.location.href);
    const otherQueryParams = window.location.search
      .split(/[?&]/gi)
      .filter((param) => param && !/^q=/gi.test(param));

    window.history.replaceState(
      null,
      null,
      `?q=${e.target.value}${otherQueryParams.map((param) => `&${param}`).join("")}`
    );

    setSearchResults((current) => ({ ...current, loading: true }));
  }, []);

  const searchTypes = [
    settings.search_products ? "product" : null,
    settings.search_articles ? "article" : null,
    settings.search_pages ? "page" : null,
  ]
    .filter(Boolean)
    .join(",");

  const preloadSearch = useCallback(async () => {
    if (searchInput) {
      const data = await fetch(
        `${
          window.Shopify.routes.root
        }search/suggest?q=${searchInput}&resources[type]=product&resources[limit]=${5}&section_id=predictive-search`
      );
      const content = await data.text();
      const dataElement = document.createElement("div");
      dataElement.innerHTML = content;
      const searchData = JSONParse<SearchState>(dataElement?.querySelector("script")?.innerHTML);

      if (searchData) {
        setSearchResults({
          ...{
            ...searchData,
            products: searchData.products
              .map((product) => window.transformProducts(product))
              .filter((product) => !product.hidden),
          },
          showResults: true,
          loading: false,
        });
      }
    }
    setSearchResults((current) => ({ ...current, loading: false }));
    if (!searchInput) {
      setSearchResults((current) => ({ ...current, products: [], loading: false }));
    }
  }, [searchInput]);

  useEffect(() => {
    const productBlock: SearchBlocksTrending_products["settings"] = blocks.find(
      (block) => "products" in block && block?.products.length
    );
    if (
      hydrated &&
      productBlock &&
      upsellProducts.filter(Boolean).length < productBlock?.products.length
    ) {
      productBlock?.products.forEach((handle, index) => {
        getAsyncProduct(handle as unknown as string).then((product) =>
          setUpsellProducts((prev) => {
            prev[index] = product;
            return [...prev];
          })
        );
      });
    }
  }, [blocks, upsellProducts, hydrated]);

  useDebouncedEffect(
    () => {
      preloadSearch();
    },
    900,
    [searchInput]
  );

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    window.location.href = `/search?q=${searchInput}&type=${searchTypes}`;
    setSearchResults((current) => ({ ...current, loading: true }));
  }, [searchInput, searchTypes]);

  return (
    <div className="relative bg-theme-bg group-ac:pointer-events-auto">
      <header className="container-bg-full relative z-10 flex h-[--header-height] min-h-[80px] items-center justify-between gap-4 bg-theme-bg py-2 text-theme-text">
        <form
          method="get"
          className="flex-1"
          role="search"
          onSubmit={handleSubmit}
          id="header-search-form"
        >
          <label className="flex w-full items-center gap-4">
            <SearchIcon className="h-5 w-5" />
            <input
              type="text"
              value={searchInput}
              onChange={handleChange}
              data-search-input-focus=""
              placeholder={settings.placeholder}
              className="w-full py-2 text-base outline-none placeholder:pl-1 placeholder:text-theme-text/50 hf:outline-none"
            />
            <span className="sr-only">Search</span>
            <button
              type="submit"
              className="absolute right-3 top-1/2 flex -translate-y-1/2 appearance-none"
            >
              <span className="sr-only">Search</span>
            </button>
          </label>
        </form>
        <div className="flex justify-end">
          <button type="button" onClick={handleClose}>
            <span className="sr-only">Close Search</span>
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <div className="container-bg-full">
        <hr className="container border-t border-t-gray-200" />
      </div>
      <div className="scrollbar-none absolute inset-x-0 top-full max-h-[calc(100vh-var(--header-height)-4rem)] w-full -translate-y-full overflow-y-scroll bg-theme-bg shadow-md transition-all delay-300 duration-300 group-ac:translate-y-0">
        {/*{searchResults?.products.length ||
        (searchInput && !searchResults.loading) ||
        (searchResults.loading && !blocks.length)
          ? <section
              className={clsx(
                "relative min-h-[400px] overflow-hidden bg-theme-bg py-8 text-theme-text"
              )}
            >
              <div className={clsx("container-bg-full")}>
                <header className="flex w-full items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                  <div className="flex items-baseline gap-4">
                    <Typography fontType={settings.search_results_title_font as TypeOptions}>
                      {settings.search_results_title}
                    </Typography>
                  </div>
                  <button type="submit" className="hf:underline" form="header-search-form">
                    View all
                  </button>
                </header>
              </div>
              <main
                className={clsx("relative mt-9 overflow-hidden bg-theme-bg pb-8 text-theme-text")}
              >
                {searchResults?.products.length
                  ? <ScrollContainer count={searchResults?.products?.length ?? 0}>
                      {searchResults?.products.map((product) => {
                        return (
                          <ProductCardContainer
                            key={product.id}
                            product={product}
                            className="w-[calc(100vw/2)] min-w-[180px] md:w-[calc(var(--layout-page-width)/4.35)]"
                          />
                        );
                      })}
                    </ScrollContainer>
                  : <div className="container-bg-full">
                      <Typography fontType={settings.search_results_empty_font as TypeOptions}>
                        {settings.search_results_empty}
                      </Typography>
                    </div>}
              </main>
              {searchResults.loading
                ? <div className="absolute inset-0 z-10 flex w-full items-center justify-center bg-theme-bg/40">
                    <LoadingSpinner loading={true} className="scale-150" />
                  </div>
                : null}
            </section>
          : blocks.length
          ?*/}{" "}
        <main
          className={clsx(
            "container-bg-full relative grid gap-16 overflow-hidden bg-theme-bg pb-14 pt-10 text-theme-text lg:flex"
          )}
        >
          {blocks.some((block) => "products" in block)
            ? <>
                {blocks.map((block, index, arr) => {
                  const productBlock: SearchBlocksTrending_products["settings"] =
                    "products" in block &&
                    upsellProducts.filter(Boolean).length >= block?.products.length
                      ? block
                      : null;

                  const collectionBlock: SearchBlocksTrending_collections["settings"] =
                    "collections" in block && block?.collections.length ? block : null;

                  if (productBlock) {
                    return (
                      <section key={index} className="flex-1">
                        {searchResults.products.length || (searchInput && !searchResults.loading)
                          ? <header className="flex w-full items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                              <div className="flex items-baseline gap-4">
                                <Typography
                                  fontType={settings.search_results_title_font as TypeOptions}
                                >
                                  {settings.search_results_title}
                                </Typography>
                              </div>
                              <button
                                type="submit"
                                className="hf:underline"
                                form="header-search-form"
                              >
                                View all
                              </button>
                            </header>
                          : <header className="flex items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                              <Typography fontType={block?.title_font as TypeOptions}>
                                {block?.title}
                              </Typography>
                              {block?.url
                                ? <a href={block?.url} className="hf:underline">
                                    View all
                                  </a>
                                : null}
                            </header>}
                        <main
                          className={clsx(
                            "mt-9 grid w-full max-w-full flex-1 grid-cols-[--grid-cols-sm] gap-4 md:grid-cols-[--grid-cols-md] md:gap-8 xl:grid-cols-[--grid-cols] max-md:[&>:nth-child(n+3)]:hidden max-xl:[&>:nth-child(n+4)]:hidden",
                            (searchResults.products.length
                              ? searchResults.products.length
                              : upsellProducts.length) >= 3 && "justify-between"
                          )}
                          style={{
                            "--grid-cols": `repeat(${Math.min(
                              searchResults.products.length
                                ? searchResults.products.length
                                : upsellProducts.length
                            )}, minmax(130px, 280px))`,
                            "--grid-cols-md": `repeat(${Math.min(
                              searchResults.products.length
                                ? searchResults.products.length
                                : upsellProducts.length,
                              3
                            )}, minmax(130px, 280px))`,
                            "--grid-cols-sm": `repeat(${Math.min(
                              searchResults.products.length
                                ? searchResults.products.length
                                : upsellProducts.length,
                              2
                            )}, minmax(130px, 280px))`,
                          }}
                        >
                          {(searchResults?.products.length ||
                          (searchInput && !searchResults.loading)
                            ? searchResults.products
                            : upsellProducts
                          ).map((product) => (
                            <div key={product.id} className="grid">
                              <ProductCardContainer
                                product={window.transformProducts(product)}
                                className="w-full flex-1"
                              />

                              {/*<a
                              href={`/collections/${product.handle}`}
                              key={product.id}
                              className="group/product flex items-center gap-4 lg:hidden"
                            >
                              <picture className="relative h-[72px] w-[72px] overflow-hidden rounded-theme-sm bg-theme-text/10">
                                <Image
                                  src={product?.featured_media?.preview_image?.src}
                                  alt={product.title}
                                  width={Math.ceil(
                                    72 *
                                      (product?.featured_media?.width /
                                        product?.featured_media?.height)
                                  )}
                                  height={72}
                                  className="h-full w-full object-cover object-center"
                                />
                              </picture>
                              <div className="grid gap-1">
                                <div className="product-card-title--small group-hover/product:underline">
                                  {product.title}
                                </div>
                                {globalSettings.getState().product_card__rating__show
                                  ? <ProductRatingWithProduct
                                      product={product}
                                      className={clsx(
                                        globalSettings.getState()
                                          .product_card__rating__responsive_visibility,
                                        "product-card__reviews"
                                      )}
                                    />
                                  : null}

                                {globalSettings.getState().product_card__price__show
                                  ? <div
                                      className={clsx(
                                        "product-card__price",
                                        globalSettings.getState()
                                          .product_card__price__responsive_visibility
                                      )}
                                    >
                                      <div className="product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
                                        <span
                                          data-product-price-from-regular=""
                                          className={clsx(
                                            "text-xs font-normal",
                                            product.price_varies && !product.compare_at_price_varies
                                              ? ""
                                              : "hidden"
                                          )}
                                        >
                                          From:
                                        </span>

                                        <span
                                          data-product-price-from-compare=""
                                          className={clsx(
                                            "text-xs font-normal",
                                            product.compare_at_price_varies ? "" : "hidden"
                                          )}
                                        >
                                          On Sale from:
                                        </span>

                                        <span
                                          data-product-price-regular=""
                                          dangerouslySetInnerHTML={{
                                            __html: `${window.formatMoney(product.price_min)}`,
                                          }}
                                        ></span>

                                        <span
                                          data-product-price-compare=""
                                          className={clsx(
                                            "text-xs text-theme-text/50 line-through",
                                            product.compare_at_price_min > product.price_min
                                              ? ""
                                              : "hidden"
                                          )}
                                          dangerouslySetInnerHTML={{
                                            __html: `${window.formatMoney(
                                              product.compare_at_price_min
                                            )}`,
                                          }}
                                        ></span>
                                      </div>
                                    </div>
                                  : null}
                              </div>
                            </a>*/}
                            </div>
                          ))}
                          {!searchResults.loading &&
                          searchInput &&
                          searchResults?.products.length === 0
                            ? <Typography
                                fontType={settings.search_results_empty_font as TypeOptions}
                              >
                                {settings.search_results_empty}
                              </Typography>
                            : null}
                        </main>
                      </section>
                    );
                  }

                  if (collectionBlock) {
                    return (
                      <section key={index} className="sm:min-w-[330px]">
                        <header className="flex items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                          <Typography fontType={block?.title_font as TypeOptions}>
                            {block?.title}
                          </Typography>
                          {block?.url
                            ? <a href={block?.url} className="hf:underline">
                                View all
                              </a>
                            : null}
                        </header>
                        <main className="mt-9 grid gap-6 ">
                          {collectionBlock?.collections.map((collection) => (
                            <a
                              href={`/collections/${collection.handle}`}
                              key={collection.id}
                              className="flex items-center gap-4 hf:underline"
                            >
                              <picture className="relative h-12 w-12 overflow-hidden rounded-theme-sm bg-theme-text/10">
                                <Image
                                  src={collection?.image?.src}
                                  alt={collection.title}
                                  width={Math.ceil(
                                    48 * (collection?.image?.width / collection?.image?.height)
                                  )}
                                  height={48}
                                  className="h-full w-full object-cover object-center"
                                />
                              </picture>
                              <div className="megamenu-link">{collection.title}</div>
                            </a>
                          ))}
                        </main>
                      </section>
                    );
                  }

                  return null;
                })}
              </>
            : <>
                <section className="flex-1">
                  <header className="flex w-full items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                    <div className="flex items-baseline gap-4">
                      <Typography fontType={settings.search_results_title_font as TypeOptions}>
                        {settings.search_results_title}
                      </Typography>
                    </div>
                    <button type="submit" className="hf:underline" form="header-search-form">
                      View all
                    </button>
                  </header>
                  <main
                    className={clsx(
                      "mt-9 grid w-full max-w-full flex-1 grid-cols-[--grid-cols-sm] gap-4 md:grid-cols-[--grid-cols-md] md:gap-8 xl:grid-cols-[--grid-cols] max-md:[&>:nth-child(n+3)]:hidden max-xl:[&>:nth-child(n+4)]:hidden",
                      (searchResults.products.length
                        ? searchResults.products.length
                        : upsellProducts.length) >= 3 && "justify-between"
                    )}
                    style={{
                      "--grid-cols": `repeat(${Math.min(
                        searchResults.products.length
                          ? searchResults.products.length
                          : upsellProducts.length
                      )}, minmax(130px, 280px))`,
                      "--grid-cols-md": `repeat(${Math.min(
                        searchResults.products.length
                          ? searchResults.products.length
                          : upsellProducts.length,
                        3
                      )}, minmax(130px, 280px))`,
                      "--grid-cols-sm": `repeat(${Math.min(
                        searchResults.products.length
                          ? searchResults.products.length
                          : upsellProducts.length,
                        2
                      )}, minmax(130px, 280px))`,
                    }}
                  >
                    {searchResults?.products.map((product) => (
                      <div key={product.id} className="grid">
                        <ProductCardContainer
                          product={window.transformProducts(product)}
                          className="w-full flex-1"
                        />
                      </div>
                    ))}
                    {!searchResults.loading && searchInput
                      ? <Typography fontType={settings.search_results_empty_font as TypeOptions}>
                          {settings.search_results_empty}
                        </Typography>
                      : null}
                  </main>
                </section>
                {blocks.map((block, index, arr) => {
                  const collectionBlock: SearchBlocksTrending_collections["settings"] =
                    "collections" in block && block?.collections.length ? block : null;

                  if (collectionBlock) {
                    return (
                      <section key={index} className="sm:min-w-[330px]">
                        <header className="flex items-baseline justify-between border-b border-b-gray-300 pb-3.5">
                          <Typography fontType={block?.title_font as TypeOptions}>
                            {block?.title}
                          </Typography>
                          {block?.url
                            ? <a href={block?.url} className="hf:underline">
                                View all
                              </a>
                            : null}
                        </header>
                        <main className="mt-9 grid gap-6 ">
                          {collectionBlock?.collections?.map((collection) => (
                            <a
                              href={`/collections/${collection.handle}`}
                              key={collection.id}
                              className="flex items-center gap-4 hf:underline"
                            >
                              <picture className="relative h-12 w-12 overflow-hidden rounded-theme-sm bg-theme-text/10">
                                <Image
                                  src={collection?.image?.src}
                                  alt={collection.title}
                                  width={Math.ceil(
                                    48 * (collection?.image?.width / collection?.image?.height)
                                  )}
                                  height={48}
                                  className="h-full w-full object-cover object-center"
                                />
                              </picture>
                              <div className="megamenu-link">{collection.title}</div>
                            </a>
                          ))}
                        </main>
                      </section>
                    );
                  }
                  return null;
                })}
              </>}
          {searchResults.loading
            ? <div className="absolute inset-0 z-10 flex w-full items-center justify-center bg-theme-bg/40">
                <LoadingSpinner loading={true} className="scale-150" />
              </div>
            : null}
        </main>
        {/*: null*/}
      </div>
    </div>
  );
};
