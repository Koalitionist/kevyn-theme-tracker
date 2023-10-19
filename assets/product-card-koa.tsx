
import { _Product_liquid } from "/_types";
import { globalProducts, useGlobalProducts, useGlobalSettings } from "/global-stores";
import { Image } from "/image";
import { useProductDrawer } from "/product-drawer";
import { ProductRatingWithProduct } from "/product.rating";
import { TypeOptions, Typography } from "/typography";
import { toKebabCase } from "/utils";
import clsx from "clsx";

import { render } from "preact";
import { FC, HTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { escapeComponent } from "uri-js";

export const initProductCardsKoa = async () => {
  document.querySelectorAll<HTMLElement>("[data-product-card]").forEach((productCardContainer) => {
    const collectionUrl = productCardContainer.dataset.productCardCollectionUrl;
    const productHandle = productCardContainer.dataset.drawerProduct;

    if (
      !productCardContainer.querySelector("[data-product-card-variant-selector]") &&
      !window.Shopify.designMode
    ) {
      return;
    }

    const productData = globalProducts.getState().products[productHandle];
    if (!productData) {
      const subscription = globalProducts.subscribe((state) => {
        const product = state.products[productHandle];
        if (product) {
          subscription();
          productCardContainer.innerHTML = "";

          render(
            <ProductCardInner
              product={product}
              collectionUrl={collectionUrl}
              productCardContainer={productCardContainer}
            />,
            productCardContainer
          );
        }
      });
    } else {
      productCardContainer.innerHTML = "";

      render(
        <ProductCardInner
          product={productData}
          collectionUrl={collectionUrl}
          productCardContainer={productCardContainer}
        />,
        productCardContainer
      );
    }
  });
};

export const ProductCardInner: FC<
  {
    product: _Product_liquid;
    collectionUrl?: string;
    className?: string;
    productCardContainer: HTMLElement;
  } & HTMLAttributes<HTMLElement>
> = ({ product, collectionUrl, className, productCardContainer, ...props }) => {
  const updateProduct = useProductDrawer((state) => state.updateProduct);
  const settings = useGlobalSettings();
  const colorOption = useMemo(() => {
    return product?.options_with_values?.find((option) =>
      settings?.product_card__variant_selector__color_list
        .split(",")
        .map((c) => c.trim().toLowerCase())
        .includes(option.name.trim().toLowerCase())
    );
  }, [product?.options_with_values, settings?.product_card__variant_selector__color_list]);

  const [selectedColor, setSelectedColor] = useState(colorOption?.values?.[0]);

  const [primaryImage, setPrimaryImage] = useState(product?.featured_media?.preview_image);
  const [secondaryImage, setSecondaryImage] = useState(product?.media?.[1]?.preview_image);

  const handleClick = useCallback(() => {
    const disableCartOpen = productCardContainer?.dataset?.productCardNoAutoCart;
    updateProduct(product, !disableCartOpen);
    setTimeout(() => document.dispatchEvent(new Event("product:open")), 1);
  }, [productCardContainer?.dataset?.productCardNoAutoCart, updateProduct, product]);

  const handleColorSelect = useCallback((value) => {
    setSelectedColor(value);
    const mediaIds = [];

    const variantWithPrimaryImage = product.variants.find((v) => {
      if (
        v.options[colorOption?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    const variantWithSecondaryImage = product.variants.find((v) => {
      if (
        v.options[colorOption?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    if (variantWithPrimaryImage) {
      setPrimaryImage(variantWithPrimaryImage.featured_media.preview_image);
    }
    if (variantWithSecondaryImage) {
      setSecondaryImage(variantWithSecondaryImage.featured_media.preview_image);
    }
  }, [colorOption?.position, product.variants]);

  const handlePreloadImage = useCallback((value) => {
    const mediaIds = [];

    const variantWithPrimaryImage = product.variants.find((v) => {
      if (
        v.options[colorOption?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    const variantWithSecondaryImage = product.variants.find((v) => {
      if (
        v.options[colorOption?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    if (variantWithPrimaryImage) {
      const imgEl = document.createElement("img");
      imgEl.src = `${variantWithPrimaryImage?.featured_media.preview_image.src}&width=500`;
      imgEl.onload = () => imgEl.remove();
    }
    if (variantWithSecondaryImage) {
      const imgEl = document.createElement("img");
      imgEl.src = `${variantWithSecondaryImage?.featured_media.preview_image.src}&width=500`;
      imgEl.onload = () => imgEl.remove();
    }
  }, [colorOption?.position, product.variants]);

  return (
    <>
      <a
        className={clsx(
          "relative -mx-3 -mt-3 grid h-0 outline-none hf:outline-none ",
          settings.product_card__image__ratio
        )}
        href={collectionUrl ? collectionUrl + product.url : product.url}
        aria-label={product.title}
        style={{ marginBottom: `${settings.product_card__image__margin_bottom}px` }}
      >
        <div
          className="absolute inset-0 h-full w-full overflow-hidden"
          style={{ background: settings.product_card__image__background }}
        >
          <Image
            src={primaryImage?.src}
            width={500}
            height={primaryImage?.aspect_ratio * 500}
            maxWidth={640}
            alt={product?.featured_media?.alt ?? product.title}
            className={clsx(
              "inset-0 h-full w-full select-none object-cover",
              settings.product_card__image__drop_shadow && "drop-shadow-product"
            )}
          />
        </div>
        {settings.product_card__image__show_secondary && secondaryImage?.src
          ? <div className="absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100">
              <Image
                src={secondaryImage?.src}
                width={500}
                height={secondaryImage?.aspect_ratio * 500}
                maxWidth={640}
                alt={product.title}
                className={clsx(
                  "inset-0 h-full w-full select-none object-cover",
                  settings.product_card__image__drop_shadow && "drop-shadow-product"
                )}
              />
            </div>
          : null}
        {settings.product_card__variant_count__show && product?.variants?.length > 1
          ? <div
              className={clsx(
                "pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs tracking-wide text-theme-bg drop-shadow-[1px_1px_1px_black] [text-shadow:1px_1px_1px_black]",
                settings.product_card__variant_count__responsive_visibility
              )}
            >
              Available in {product?.variants?.length} variations
            </div>
          : null}

        {settings.product_card__labels__show
          ? <div
              className={clsx(
                "absolute right-3 top-3 -m-0.5 flex max-w-[65%] flex-wrap justify-end",
                settings.product_card__labels__responsive_visibility
              )}
            >
              {Array.isArray(product.metafields?.smart?.product_labels)
                ? product.metafields?.smart?.product_labels?.map((label) => {
                    return (
                      <div className="label m-0.5" key={label}>
                        {label}
                      </div>
                    );
                  })
                : null}

              {product.price < product.compare_at_price && product.available
                ? <div className="label--primary m-0.5">
                    {
                      {
                        sale: <>On Sale</>,
                        percentage:
                          product.price === 0
                            ? "FREE"
                            : <>
                                {Math.round(
                                  ((product.compare_at_price - product.price) * 100) /
                                    product.compare_at_price
                                )}
                                % Off
                              </>,
                        value:
                          product.price === 0
                            ? "FREE"
                            : <>
                                Save {window.formatMoney(product.compare_at_price - product.price)}
                              </>,
                      }[settings.product_card__labels__discount]
                    }
                  </div>
                : null}

              {!product.available
                ? <div className="label-theme-inverted m-0.5">Sold out</div>
                : null}
            </div>
          : null}
      </a>

      <div style={{ marginBottom: `${settings.product_card__title__margin_bottom}px` }}>
        <Typography fontType={settings.product_card__title__type as TypeOptions}>
          <a
            className="outline-none hf:underline hf:outline-none"
            href={collectionUrl ? collectionUrl + product.url : product.url}
          >
            {product.title}
          </a>
        </Typography>
      </div>

      {settings.product_card__rating__show && product?.metafields?.reviews.rating
        ? <ProductRatingWithProduct
            product={product}
            className={settings.product_card__rating__responsive_visibility}
            style={{ marginBottom: `${settings.product_card__rating__margin_bottom}px` }}
          />
        : null}

      {settings.product_card__vendor__show && product.vendor
        ? <h2
            className={clsx(
              "inline-flex text-sm text-theme-text/60",
              settings.product_card__vendor__responsive_visibility
            )}
            style={{ marginBottom: `${settings.product_card__vendor__margin_bottom}px` }}
          >
            <a
              href={`/collections/vendors?q=${escapeComponent(product.vendor)}`}
              className="hf:underline"
              title={product.vendor}
            >
              {product.vendor}
            </a>
          </h2>
        : null}

      {settings.product_card__price__show
        ? <div
            className={clsx("text-xl", settings.product_card__price__responsive_visibility)}
            style={{ marginBottom: `${settings.product_card__price__margin_bottom}px` }}
          >
            <div className=" grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap text-sm font-semibold">
              {product.price_varies && !product.compare_at_price_varies
                ? <span className="text-xs font-normal">
                    From: {window.formatMoney(product.price_min)}
                  </span>
                : null}
              {product.compare_at_price_varies
                ? <span className="text-xs font-normal">
                    On Sale from: {window.formatMoney(product.compare_at_price_min)}
                  </span>
                : null}

              {!product.price_varies ? <span>{window.formatMoney(product.price)}</span> : null}

              {!product.price_varies && product.compare_at_price > product.price
                ? <span className="text-xs text-theme-text/50 line-through ">
                    {window.formatMoney(product.compare_at_price)}
                  </span>
                : null}
            </div>
          </div>
        : null}

      {settings.product_card__variant_selector__show && colorOption?.values?.length > 1
        ? <div className="relative">
            <fieldset className="group mt-2 flex flex-wrap gap-2">
              {colorOption?.values?.map((value) => (
                <label
                  key={value}
                  className="cursor-pointer rounded-full border border-theme-text/50"
                  title={value}
                >
                  <input
                    type="radio"
                    name={`variant-selector-${product.id}-${colorOption?.name}`}
                    className="peer absolute appearance-none outline-none hfa:outline-none"
                    value={value}
                    onChange={() => handleColorSelect(value)}
                    onMouseOver={() => handlePreloadImage(value)}
                    checked={value === selectedColor}
                  />

                  <span
                    className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full ring-2 ring-transparent ring-offset-1 peer-checked:ring-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 hf:ring-primary-outline peer-disabled:hf:opacity-70"
                    style={{
                      background: `var(--color-swatch--${toKebabCase(value)}, ${value})`,
                    }}
                  ></span>
                </label>
              ))}
            </fieldset>
          </div>
        : null}

      <div className="mt-4 mt-auto flex w-full flex-1 flex-col justify-end self-end text-center">
        {product.available
          ? <>
              <a
                className={clsx(" w-full", settings.product_card__button__style)}
                style={{ display: "var(--product-drawer-off-display, flex)" }}
                href={collectionUrl ? collectionUrl + product.url : product.url}
              >
                View Product
              </a>
              <button
                className={clsx("mt-2 w-full", settings.product_card__button__style)}
                data-product-drawer-add-button={product.handle}
                onClick={handleClick}
                style={{ display: "var(--product-drawer-on-display, flex)" }}
              >
                <span className="max-md:hidden">Choose an option2</span>
                <span className="whitespace-nowrap md:hidden">View more</span>
              </button>
            </>
          : <a
              className={clsx(" w-full", settings.product_card__button__style)}
              aria-disabled="true"
            >
              Sold Out
            </a>}
      </div>
    </>
  );
};

export const ProductCardContainerKoa: FC<
  {
    product?: _Product_liquid;
    handle?: string;
    collectionUrl?: string;
    className?: string;
  } & HTMLAttributes<HTMLElement>
> = ({ handle, collectionUrl, className, product, ...props }) => {
  const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct, hydrated }) => ({
    getAsyncProduct,
    hydrated,
  }));
  const [currentProduct, setCurrentProduct] = useState(product);
  const settings = useGlobalSettings();
  const productCardContainer = useRef<HTMLElement>();

  useEffect(() => {
    if (hydrated && !currentProduct) {
      getAsyncProduct(handle).then((p) => {
        if (p) {
          setCurrentProduct(p);
        }
      });
    }
  }, [hydrated, currentProduct, handle]);

  if (!currentProduct) {
    return null;
  }

  return (
    <article
      ref={productCardContainer}
      className={clsx("relative flex flex-col items-stretch space-y-1 p-3", className)}
      style={{ background: settings.product_card__background_color as string }}
      {...props}
    >
      <ProductCardInner
        product={currentProduct}
        collectionUrl={collectionUrl}
        productCardContainer={productCardContainer.current}
      />
    </article>
  );
};

