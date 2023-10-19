import clsx from "clsx";
import { ProductCardContainer } from "product-card";
import { useCartDrawer, useGlobalProducts } from "global-stores";
import { CheckMarkIcon, CloseIcon } from "icons";
import { Image } from "image";
import { LoadingSpinner } from "loading-spinner";
import { placeHolderImageURL } from "placeholder-image";
import { ScrollContainer } from "scroll-container";
import { _Cart_fetch_api_Items } from "types";
import { JSONParse } from "utils";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { render } from "react-dom";
import { BundleSection } from "_types";
import { _Product_liquid } from "_types";

export const initBundles = () => {
  document.querySelectorAll<HTMLElement>("[data-bundle-section]").forEach((sectionElement) => {
    const settings = JSONParse<Settings>(sectionElement.dataset.bundleSection);
    const bundleBarRoot = sectionElement.querySelector("[data-bundle-bar]");
    const previewRoot = sectionElement.querySelector("[data-bundle-preview-items]");
    const drawerRoot = document.querySelector(
      `[data-drawer="bundle--${settings.section_id}"] [data-bundle-drawer]`
    );

    if (bundleBarRoot) {
      render(<BundleBar settings={settings} />, bundleBarRoot);
    }
    if (previewRoot) {
      render(<BundlePreview settings={settings} />, previewRoot);
    }
    if (drawerRoot) {
      render(<BundleDrawer settings={settings} />, drawerRoot);
    }
  });
};

export const BundleBar: FC<{ settings: Settings }> = (props) => {
  const [settings, setSettings] = useState(props.settings);

  const [width, setWidth] = useState(0);
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));

  const sortedBlocks = settings.blocks?.sort((a, b) => a.target - b.target);
  const { getProduct } = useGlobalProducts(({ getProduct }) => ({
    getProduct,
  }));

  useEffect(() => {
    const targetItems = [
      ...cartData.items
        .map((item, index) => ({ ...item, cartIndex: index }))
        .filter((item) => {
          if (item.quantity <= 0) {
            return false;
          }
          if (props.settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles =
            window.cartProductCollections[item.handle] ??
            getProduct(item.handle)?.collections?.map((c) => c.handle);
          return (
            cHandles &&
            props.settings.target_collections?.some((handle) => cHandles.includes(handle))
          );
        }),
    ].reverse();

    if (targetItems.length) {
      const target = targetItems?.reduce(
        (acc, item) => {
          if (settings.discount_target === "amount") {
            acc += item.original_line_price;
            return acc;
          }
          acc += item.quantity;
          return acc;
        },
        0
      );
      let width = 0;
      setSettings((current) => ({
        ...current,
        blocks: current.blocks.map((block, index, arr) => {
          if (target >= block.target) {
            width += 100 / arr.length;
          }
          if (target < block.target && arr[index - 1] && target >= arr[index - 1]?.target) {
            const prevBlock = arr[index - 1];
            width +=
              (100 / arr.length) *
              ((target - prevBlock.target) / (block.target - prevBlock.target));
          }
          if (target < block.target && !arr[index - 1]) {
            width += ((100 / arr.length) * target) / block.target;
          }
          return { ...block, completed: target >= block.target };
        }),
      }));
      setWidth(Math.max(0, Math.min(width, 100)));
    }
    if (targetItems.length === 0) {
      setSettings(props.settings);
      setWidth(0);
    }
  }, [cartData.items, getProduct, props.settings]);

  const actionBlock = useMemo(() => {
    return props.settings.discount_type === "specific_product"
      ? sortedBlocks?.find((block) => {
          if (!block.completed || !block?.receives_quantity) return false;
          const inCartQuantity = cartData?.items?.reduce(
            (acc, item) => {
              if (
                item.total_discount > 0 &&
                block?.receives_products?.includes(item.handle) &&
                item.line_level_discount_allocations.some((disc) =>
                  disc.discount_application.value.includes(`${block?.receives_discount}`)
                )
              ) {
                acc += item.quantity;
              }
              return acc;
            },
            0
          );
          return inCartQuantity < block?.receives_quantity;
        })
      : null;
  }, [cartData.items, props.settings.discount_type, sortedBlocks]);

  return (
    <div className="relative grid items-center gap-16 pt-1 max-md:gap-20 md:grid-cols-[1fr_260px]">
      <div className="relative flex items-center justify-between gap-2">
        <div className="5 absolute left-0 top-1/2 isolate h-1.5 w-[calc(100%-2px)] -translate-y-1/2 overflow-hidden rounded-full bg-theme-bg shadow shadow-theme-bg/50">
          <div
            className="absolute left-0 h-full bg-theme-text/90 transition-all duration-500 ease-linear"
            style={{ width: `${width}%` }}
          ></div>
        </div>
        <div className="relative order-first h-12 w-6 rounded-full">
          <h4 className="absolute left-0 top-[calc(100%+0.5rem)] text-xs text-white sm:text-sm sm:font-semibold md:whitespace-nowrap">
            Unlock:
          </h4>
        </div>
        {sortedBlocks.map((block, index, arr) => {
          return (
            <div
              className={clsx(
                "relative flex h-12 w-12 items-center justify-center rounded-full transition-all",
                block.completed ? "bg-primary-text" : "bg-theme-bg"
              )}
              key={block.id}
            >
              <CheckMarkIcon
                className={clsx(
                  "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-primary-bg transition-all",
                  block.completed ? "" : "pointer-events-none opacity-0"
                )}
              />

              <div
                className={clsx(
                  "whitespace-nowrap text-center text-sm font-semibold text-primary-bg",
                  !block.completed ? "" : "pointer-events-none opacity-0"
                )}
                dangerouslySetInnerHTML={{
                  __html:
                    settings.discount_target === "amount"
                      ? window.formatMoney(
                          block.target,
                          window.shop.money_format.replace("amount", "amount_no_decimals")
                        )
                      : `${block.target}x`,
                }}
              ></div>
              <h4 className="absolute left-1/2 top-[calc(100%+0.5rem)] -translate-x-1/2 text-center text-xs text-white sm:text-sm sm:font-semibold md:whitespace-nowrap">
                {block.type === "free_shipping"
                  ? <>Free Shipping</>
                  : {
                      specific_product:
                        block.receives_quantity <= 1
                          ? block?.receives_discount === 100
                            ? "Free Product"
                            : "Discounted Product"
                          : block?.receives_discount === 100
                          ? "Free Products"
                          : "Discounted Products",
                      product_percentage: `${block?.receives_discount}% Off each`,
                      product_amount: (
                        <span
                          dangerouslySetInnerHTML={{
                            __html: `${window.formatMoney(
                              block?.receives_discount,
                              window.shop.money_format.replace("amount", "amount_no_decimals")
                            )} Off each`,
                          }}
                        />
                      ),
                    }[settings.discount_type]}
              </h4>
            </div>
          );
        })}
      </div>
      <form action={window.routes.cart_url} method="post" className="grid w-full">
        {actionBlock
          ? <button
              type="button"
              className="button-base flex items-center justify-center bg-theme-bg text-primary-bg"
              onClick={(e) => {
                e.preventDefault();
                setTimeout(
                  () => {
                    document.dispatchEvent(new Event(`bundle--${settings.section_id}:open`));
                  },
                  1
                );
              }}
            >
              Select your {actionBlock?.receives_discount === 100 ? "Free" : "Discounted"}{" "}
              {actionBlock.receives_quantity > 1 ? "Products" : "Product"}
            </button>
          : <button
              type="submit"
              name="checkout"
              className="button-base flex items-center justify-between whitespace-nowrap bg-theme-bg text-primary-bg"
            >
              <span className="font-medium">Checkout</span>
              <span className="ml-3 flex items-center justify-center">
                {cartData.total_discount > 0
                  ? <>
                      <span
                        className="line-through opacity-80 grayscale"
                        dangerouslySetInnerHTML={{
                          __html: window.formatMoney(cartData.original_total_price),
                        }}
                      ></span>
                      <span
                        className="ml-2"
                        dangerouslySetInnerHTML={{
                          __html: window.formatMoney(cartData.total_price),
                        }}
                      ></span>
                    </>
                  : <span
                      dangerouslySetInnerHTML={{ __html: window.formatMoney(cartData.total_price) }}
                    ></span>}
              </span>
            </button>}
      </form>
    </div>
  );
};

export const BundlePreview: FC<{ settings: Settings }> = ({ settings }) => {
  const [targetItems, setTargetItems] = useState<(_Cart_fetch_api_Items & { cartIndex: number })[]>(
    []
  );
  const { cartData, adjustItem, loading } = useCartDrawer(({ cartData, adjustItem, loading }) => ({
    cartData,
    adjustItem,
    loading,
  }));

  const { getProduct } = useGlobalProducts(({ getProduct }) => ({
    getProduct,
  }));

  useEffect(() => {
    const initialItems = [
      ...cartData.items
        .map((item, index) => ({ ...item, cartIndex: index }))
        .filter((item) => {
          if (item.quantity <= 0) {
            return false;
          }
          if (settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles =
            window.cartProductCollections[item.handle] ??
            getProduct(item.handle)?.collections?.map((c) => c.handle);
          return (
            cHandles && settings.target_collections?.some((handle) => cHandles.includes(handle))
          );
        }),
    ].reverse();

    setTargetItems(initialItems);
  }, [cartData.items, settings.target_collections, settings.target_products]);

  return (
    <>
      <main className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 md:gap-4 xl:gap-6 max-md:sm:[&>div:empty:nth-last-child(-n+3)]:hidden max-sm:[&>div:empty:nth-last-child(-n+4)]:hidden">
        {[...new Array(Math.max(6, Math.ceil(targetItems.length / 6) * 6, targetItems.length))].map(
          (_, index) => {
            const item = targetItems[index];
            return (
              <div
                key={index}
                className="relative border border-dashed border-theme-bg/80 pb-[100%]"
              >
                {item
                  ? <figure className="group absolute h-full w-full bg-gradient-to-b from-gray-900/10 to-gray-900/20">
                      <Image
                        src={
                          item.featured_image.url
                            ? `${item.featured_image.url}&width=200`
                            : placeHolderImageURL
                        }
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white text-gray-600 opacity-0 shadow-lg transition-opacity hf:text-gray-900 hf:shadow-sm group-hf:opacity-100"
                        onClick={() => {
                          adjustItem(item, -item.quantity, item.cartIndex);
                        }}
                      >
                        <CloseIcon className="h-4 w-4" />
                        <span className="sr-only">Remove From Cart</span>
                      </button>
                      {item.total_discount > 0
                        ? <div className="absolute right-2 top-2 flex h-7 items-center justify-center overflow-hidden rounded-theme-sm bg-primary-bg px-1.5 text-sm font-medium text-theme-bg shadow-lg">
                            {item.final_price === 0
                              ? "FREE"
                              : settings.discount_type === "product_amount"
                              ? <span
                                  dangerouslySetInnerHTML={{
                                    __html: `save ${window.formatMoney(
                                      item.total_discount,
                                      window.shop.money_format.replace(
                                        "amount",
                                        "amount_no_decimals"
                                      )
                                    )}`,
                                  }}
                                ></span>
                              : `${(item.total_discount / item.original_line_price) * 100}% off`}
                            <LoadingSpinner loading={loading} />
                          </div>
                        : null}
                      <div className="absolute bottom-2 left-2 flex flex-col text-xs text-theme-bg drop-shadow-[1px_1px_1px_black] [text-shadow:1px_1px_1px_black]">
                        <span className="mb-0.5 font-semibold">{item.product_title}</span>
                        <span>{item.variant_title}</span>
                      </div>
                      <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-theme-sm bg-primary-bg text-sm font-medium text-theme-bg shadow-lg">
                        {item.quantity}
                      </div>
                    </figure>
                  : null}
              </div>
            );
          }
        )}
      </main>
      <footer className="mt-4 flex flex-col items-center justify-center text-center text-theme-bg">
        <div>Begin adding items below to create your bundle</div>
      </footer>
    </>
  );
};

export const BundleDrawer: FC<{ settings: Settings }> = (props) => {
  const [settings, setSettings] = useState(props.settings);
  const [products, setProducts] = useState<_Product_liquid[]>([]);

  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));

  const sortedBlocks = settings.blocks?.sort((a, b) => a.target - b.target);
  const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
    ({ getProduct, hydrated, getAsyncProduct }) => ({
      getProduct,
      getAsyncProduct,
      hydrated,
    })
  );

  useEffect(() => {
    const targetItems = [
      ...cartData.items
        .map((item, index) => ({ ...item, cartIndex: index }))
        .filter((item) => {
          if (item.quantity <= 0) {
            return false;
          }
          if (props.settings.target_products.includes(item.handle)) {
            return true;
          }
          const cHandles =
            window.cartProductCollections[item.handle] ??
            getProduct(item.handle)?.collections?.map((c) => c.handle);
          return (
            cHandles &&
            props.settings.target_collections?.some((handle) => cHandles.includes(handle))
          );
        }),
    ].reverse();

    if (targetItems.length) {
      const target = targetItems?.reduce(
        (acc, item) => {
          if (props.settings.discount_target === "amount") {
            acc += item.original_line_price;
            return acc;
          }
          acc += item.quantity;
          return acc;
        },
        0
      );
      setSettings((current) => ({
        ...current,
        blocks: current.blocks.map((block) => {
          return { ...block, completed: target >= block.target };
        }),
      }));
    }
    if (targetItems.length === 0) {
      setSettings(props.settings);
    }
  }, [cartData.items, getProduct, props.settings]);

  const actionBlock = useMemo(() => {
    return props.settings.discount_type === "specific_product"
      ? sortedBlocks?.find((block) => {
          if (!block.completed || !block?.receives_quantity) return false;
          const inCartQuantity = cartData?.items?.reduce(
            (acc, item) => {
              if (
                item.total_discount > 0 &&
                block?.receives_products?.includes(item.handle) &&
                item.line_level_discount_allocations.some((disc) =>
                  disc.discount_application.value.includes(`${block?.receives_discount}`)
                )
              ) {
                acc += item.quantity;
              }
              return acc;
            },
            0
          );
          return inCartQuantity < block?.receives_quantity;
        })
      : null;
  }, [cartData.items, props.settings.discount_type, sortedBlocks]);

  const loadBundleItems = useCallback(async () => {
    if (!actionBlock) {
      setProducts([]);
      return;
    }
    const productsWithData = await Promise.all(
      actionBlock?.receives_products?.map((handle) => getAsyncProduct(handle))
    );

    setProducts((current) =>
      current.length !== productsWithData.length ? productsWithData : current
    );
  }, [actionBlock?.receives_products]);

  useEffect(() => {
    if (hydrated) {
      loadBundleItems();
    }
  }, [loadBundleItems, hydrated, actionBlock]);

  if (products.length === 0) {
    return null;
  }
  return (
    <div className="pointer-events-none relative inset-x-0 bottom-0 w-full translate-y-[105%] bg-white pb-4 pt-10 opacity-0 shadow-invert-md transition-all ease-linear group-ac:pointer-events-auto group-ac:translate-y-0 group-ac:opacity-100">
      <header className="container">
        <h3 className="h3 mb-3 text-center">
          Select your {actionBlock?.receives_discount === 100 ? "Free" : "Discounted"}{" "}
          {actionBlock?.receives_quantity > 1 ? "Products" : "Product"}
        </h3>
      </header>
      <ScrollContainer
        count={Math.min(actionBlock?.receives_products?.length, 18) ?? 0}
        containerOverflow={true}
        centerItems={true}
      >
        {products?.map((productData) => {
          const discount = actionBlock?.receives_discount;
          const product = { ...productData };

          product.variants = product?.variants?.map((v) => ({
            ...v,
            compare_at_price: v.price,
            price: v.price - v.price * (discount / 100),
          }));
          product.selected_or_first_available_variant = {
            ...product?.selected_or_first_available_variant,
            compare_at_price: product?.selected_or_first_available_variant?.price,
            price:
              product?.selected_or_first_available_variant?.price -
              product?.selected_or_first_available_variant?.price * (discount / 100),
          };
          product.compare_at_price = product?.price;
          product.compare_at_price_min = product?.price_min;
          product.price = product?.price - product?.price * (discount / 100);
          product.price_min = product?.price_min - product?.price_min * (discount / 100);

          return (
            <ProductCardContainer
              key={product.handle}
              product={product}
              className="w-[calc(100vw/4)] min-w-[180px] md:w-[calc(var(--layout-page-width)/6)]"
              data-product-card-no-auto-cart="true"
            />
          );
        })}
      </ScrollContainer>
    </div>
  );
};

export type Settings = {
  section_id: string;
  discount_target: BundleSection["settings"]["discount_target"];
  discount_type: BundleSection["settings"]["discount_type"];
  target_collections: string[];
  target_products: string[];
  blocks: Blocks[];
};

export type Blocks = {
  id: string;
  type: BundleSection["blocks"][number]["type"];
  discount_code: string;
  target: number;
  receives_quantity?: number;
  receives_products?: string[];
  receives_discount?: number;
  completed?: boolean;
};
