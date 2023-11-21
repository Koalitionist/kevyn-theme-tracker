import { _Product_liquid, CartDrawerBlocksRoute_protection_product } from "_types";
import { cart } from "cart";
import clsx from "clsx";
import { globalProducts, useCartDrawer, useGlobalProducts, useGlobalSettings } from "global-stores";
import { Image } from "image";
import { render } from "preact";
import { useProductQuickView } from "product-quick-view";
import { ProductRatingWithProduct } from "product.rating";
import { FC, HTMLAttributes, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useWindowSize } from "scrollbar";
import { escapeComponent } from "uri-js";
import { JSONParse, toKebabCase } from "utils";

export const initProductCards = async () => {
  const routeProtectionProducts: CartDrawerBlocksRoute_protection_product["settings"][] = [];
  document.querySelectorAll<HTMLElement>("[data-route-protection]").forEach((element) => {
    const settings = JSONParse<CartDrawerBlocksRoute_protection_product["settings"]>(
      element.dataset.routeProtectionSettings
    );
    routeProtectionProducts.push(settings);
  });

  document.querySelectorAll<HTMLElement>("[data-product-card]").forEach((productCardContainer) => {
    const collectionUrl = productCardContainer.dataset.productCardCollectionUrl;
    const productHandle = productCardContainer.dataset.quickViewProduct;
    const filterColor = productCardContainer
      .closest(".shopify-section")
      .querySelector<HTMLElement>(`[data-collection-color-filter-active]`)
      ?.dataset.collectionColorFilterActive;

    const isLimitedRouteProtectionProduct = !!routeProtectionProducts.find(
      (block) => block?.products?.[0]?.handle === productHandle
    )?.limit_quantity;

    if (
      !isLimitedRouteProtectionProduct &&
      !productCardContainer.querySelector("[data-product-card-variant-selector]") &&
      !window?.Shopify?.designMode
    ) {
      return;
    }

    const productData = globalProducts.getState().getProduct(productHandle);

    if (!productData) {
      const subscription = globalProducts.subscribe((state) => {
        const product = state.getProduct(productHandle);

        if (product) {
          subscription();
          productCardContainer.innerHTML = "";

          render(
            <ProductCardInner
              filterColor={filterColor}
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
          filterColor={filterColor}
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
    filterColor?: string;
    productCardContainer: HTMLElement;
  } & HTMLAttributes<HTMLElement>
> = ({ product, collectionUrl, className, productCardContainer, filterColor, ...props }) => {
  const { product_data__preorder_cta } = useGlobalSettings();
  const containerRef = useRef<HTMLAnchorElement>(null);
  const { width } = useWindowSize();
  const [containerWidth, setContainerWidth] = useState(400);
  const [customDiscount, setCustomDiscount] = useState(0);
  const [hasDiscountCustomer, setHasDiscountCustomer] = useState(false);
  const [customDiscountedPrice, setCustomDiscountedPrice] = useState(0);
  const [customCompareAtPrice, setCustomCompareAtPrice] = useState(0);
  const updateProduct = useProductQuickView((state) => state.updateProduct);
  const settings = useGlobalSettings();

  const colorOption = useMemo(() => {
    let options = product?.options_with_values?.find((option) =>
      settings?.product_card__variant_selector__color_list
        .split(",")
        .map((c) => c.trim().toLowerCase())
        .includes(option.name.trim().toLowerCase())
    );

    const availableValues = options?.values?.filter((value) => {
      const index = options.position - 1;
      const notAvailable = !product?.variants?.some(
        (variant) => variant.options[index] === value && variant.available
      );

      return !(settings.product_data__hide_oos_variants && notAvailable);
    });

    const value = settings.collection__filter_variant_select
      ? product?.variants?.find((v) => {
          if (v?.options?.[options?.position - 1]?.toLowerCase() === filterColor?.toLowerCase()) {
            return true;
          }
          const [namespace, key] = (
            settings?.collection__filter_variant_color_metafield ?? ""
          ).split(".");

          if (namespace && key) {
            return (
              ((v.metafields?.[namespace]?.[key] ?? "") as string)?.toLowerCase() ===
              filterColor?.toLowerCase()
            );
          }
          return false;
        })?.options?.[options?.position - 1] ??
        availableValues?.[0] ??
        options?.values?.[0]
      : availableValues?.[0] ?? options?.values?.[0];

    options = {
      ...options,
      values: [
        options?.values.find((val) => val === value),
        ...(options?.values?.filter((val) => val !== value) ?? []),
      ],
    };
    const mediaIds = [];

    const variantWithPrimaryImage = product?.variants?.find((v) => {
      if (
        v.options[options?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    const variantWithSecondaryImage = product?.variants?.find((v) => {
      if (
        v.options[options?.position - 1] === value &&
        v.featured_media &&
        !mediaIds.includes(v.featured_media?.id)
      ) {
        mediaIds.push(v.featured_media?.id);
        return true;
      }
      return false;
    });

    return {
      ...options,
      values: options?.values?.map((value) => {
        const index = options.position - 1;
        const notAvailable = !product?.variants?.some(
          (variant) => variant.options[index] === value && variant.available
        );

        // return !(settings.product_data__hide_oos_variants && notAvailable);
        return {
          value,
          available: !notAvailable,
        };
      }),
      value: value,
      variantWithPrimaryImage,
      variantWithSecondaryImage,
    };
  }, [
    filterColor,
    product?.options_with_values,
    product.variants,
    settings?.collection__filter_variant_color_metafield,
    settings.collection__filter_variant_select,
    settings?.product_card__variant_selector__color_list,
    settings.product_data__hide_oos_variants,
  ]);

  const { cartData, routeProtectionProducts } = useCartDrawer(
    ({ cartData, routeProtectionProducts }) => ({ cartData, routeProtectionProducts })
  );

  const inCartItem = cartData?.items?.find((line_item) =>
    product.variants.some((variant) => line_item.variant_id === variant.id)
  );
  const routeProtection = inCartItem
    ? routeProtectionProducts.find((block) => block?.products?.[0]?.handle === inCartItem?.handle)
    : null;

  const isSingleQuantityRouteProtectionItem = !!routeProtection?.limit_quantity;

  const [selectedColor, setSelectedColor] = useState(colorOption?.value);

  const [primaryImage, setPrimaryImage] = useState(
    settings.product_card__image__default_source === "variant_image"
      ? colorOption?.variantWithPrimaryImage?.featured_media?.preview_image ??
          product?.featured_media?.preview_image
      : product?.featured_media?.preview_image
  );
  const [secondaryImage, setSecondaryImage] = useState(() => {
    const value = selectedColor;
    const mediaIds = [];

    const variantWithPrimaryImage = product?.variants?.find((v) => {
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

    if (
      variantWithPrimaryImage &&
      settings.product_card__image__default_source === "variant_image"
    ) {
      setPrimaryImage(variantWithPrimaryImage.featured_media?.preview_image);
    }

    switch (settings.product_card__image__secondary_source) {
      case "product": {
        return product?.media?.[1]?.preview_image;
      }
      case "variant": {
        const nextImagePosition = product.media.find(
          (m) =>
            m.position > variantWithPrimaryImage.featured_media.position &&
            product.variants.some((v) => v.featured_media?.id === m.id)
        )?.position;

        const availableImage =
          product.media
            .slice(
              variantWithPrimaryImage.featured_media.position,
              nextImagePosition ? nextImagePosition - 1 : nextImagePosition
            )
            ?.at(1) ?? variantWithPrimaryImage?.featured_media;
        return availableImage;
      }
      case "metafield": {
        const [namespace, key] = settings.product_card__image__secondary_source_metafield
          .trim()
          .split(".");
        const image = Array.isArray(variantWithPrimaryImage?.metafields?.[namespace]?.[key])
          ? variantWithPrimaryImage?.metafields?.[namespace]?.[key]?.[0]
          : variantWithPrimaryImage?.metafields?.[namespace]?.[key];

        return image
          ? { aspect_ratio: 1, height: 500, src: image, width: 500 }
          : variantWithPrimaryImage?.featured_media;
      }
    }
  });

  const handleClick = useCallback(
    async (preview = false) => {
      if (isSingleQuantityRouteProtectionItem) {
        return;
      }

      if (
        ((product.variants.length > 1 ||
          !settings.product_card__button_single_variant_add_to_cart) &&
          !settings.product_card__button_color_variant_add_to_cart) ||
        product.options.filter(Boolean).length > 1 ||
        preview
      ) {
        const disableCartOpen = productCardContainer?.dataset?.productCardNoAutoCart;
        updateProduct(product, !disableCartOpen);
        setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
      }
      if (
        !preview &&
        ((product.variants.length <= 1 &&
          settings.product_card__button_single_variant_add_to_cart) ||
          (product.options.filter(Boolean).length <= 1 &&
            settings.product_card__button_color_variant_add_to_cart))
      ) {
        const selectedVariant = colorOption?.value
          ? product.variants.find((v) => v.option1 === selectedColor)
          : product?.variants?.[0];

        const pre_order = selectedVariant?.metafields?.smart?.pre_order;
        const pre_order_date = selectedVariant?.metafields?.smart?.pre_order_date;

        if (pre_order && selectedVariant?.inventory_quantity < 1) {
          const now_date = Date.now();
          let label = "On Preorder";
          let timeOfMonth = "early ";

          if (pre_order_date) {
            const target_date = new Date(pre_order_date as string).getTime();
            const target_day = +new Date(pre_order_date as string).toLocaleString("en", {
              day: "2-digit",
            });
            const target_month = new Date(pre_order_date as string).toLocaleString("en", {
              month: "long",
            });
            const difference = Math.round((target_date - now_date) / 1000 / 60 / 60 / 24);

            if (target_day > 7) {
              timeOfMonth = "mid ";
            }
            if (target_day > 20) {
              timeOfMonth = "end of ";
            }

            label = "Preorder Shipping this week";

            if (difference > 7) {
              label = "Preorder Shipping next week";
            }
            if (difference > 15) {
              label = "Preorder Shipping end of the month";
            }
            if (difference > 31) {
              label = "Preorder Shipping early next month";
            }
            if (difference > 45) {
              label = `Preorder Shipping ${timeOfMonth} ${target_month}`;
            }
          }

          if (selectedVariant?.inventory_quantity > 0) {
            await cart.add(
              {
                items: [
                  {
                    id: selectedVariant?.id,
                    quantity: selectedVariant?.inventory_quantity,
                    selling_plan: product?.requires_selling_plan
                      ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                      : undefined,
                  },
                  {
                    id: selectedVariant?.id,
                    quantity: 1 - selectedVariant?.inventory_quantity,
                    properties: {
                      preorder: label,
                    },
                    selling_plan: product?.requires_selling_plan
                      ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                      : undefined,
                  },
                ],
              },
              true
            );
          }

          if (selectedVariant?.inventory_quantity <= 0) {
            await cart.add(
              {
                items: [
                  {
                    id: selectedVariant?.id,
                    quantity: 1,
                    properties: {
                      preorder: label,
                    },
                    selling_plan: product?.requires_selling_plan
                      ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                      : undefined,
                  },
                ],
              },
              true
            );
          }
          return;
        }

        if (!pre_order || selectedVariant?.inventory_quantity >= 1) {
          await cart.add(
            {
              items: [
                {
                  id: selectedVariant?.id,
                  quantity: 1,
                  selling_plan: product?.requires_selling_plan
                    ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                    : undefined,
                },
              ],
            },
            true
          );
          return;
        }

        await cart.add(
          {
            items: [
              {
                id: product?.variants?.[0].id,
                quantity: 1,
                selling_plan: product?.requires_selling_plan
                  ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                  : undefined,
              },
            ],
          },
          true
        );
      }
    },
    [
      isSingleQuantityRouteProtectionItem,
      product,
      productCardContainer?.dataset?.productCardNoAutoCart,
      settings.product_card__button_single_variant_add_to_cart,
      updateProduct,
      selectedColor,
    ]
  );

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

    if (variantWithPrimaryImage) {
      setPrimaryImage(variantWithPrimaryImage.featured_media?.preview_image);
    }
    switch (settings.product_card__image__secondary_source) {
      case "product": {
        setSecondaryImage(product?.media?.[1]?.preview_image);
        break;
      }
      case "variant": {
        const nextImagePosition = product.media.find(
          (m) =>
            m.position > variantWithPrimaryImage.featured_media.position &&
            product.variants.some((v) => v.featured_media?.id === m.id)
        )?.position;
        const availableImage =
          product.media
            .slice(
              variantWithPrimaryImage.featured_media.position,
              nextImagePosition ? nextImagePosition - 1 : nextImagePosition
            )
            ?.at(1) ?? variantWithPrimaryImage?.featured_media;
        setSecondaryImage(availableImage);
        break;
      }
      case "metafield": {
        const [namespace, key] = settings.product_card__image__secondary_source_metafield
          .trim()
          .split(".");
        const image = Array.isArray(variantWithPrimaryImage?.metafields?.[namespace]?.[key])
          ? variantWithPrimaryImage?.metafields?.[namespace]?.[key]?.[0]
          : variantWithPrimaryImage?.metafields?.[namespace]?.[key];

        setSecondaryImage(
          image
            ? { aspect_ratio: 1, height: 500, src: image, width: 500 }
            : variantWithPrimaryImage?.featured_media
        );

        break;
      }
    }
    // eslint-disable-next-line max-len
  }, [colorOption?.position, settings.product_card__image__secondary_source, product, settings.product_card__image__secondary_source_metafield]);

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
      const src = variantWithPrimaryImage?.featured_media.preview_image.src
        .replace(/&v=\d+(&)/gi, "$1")
        .replace(/\?v=\d+(&)/gi, "?")
        .replace(/\?v=\d+$/gi, "");

      imgEl.src = `${src}&width=500`;
      imgEl.onload = () => imgEl.remove();
    }
    if (variantWithSecondaryImage) {
      const imgEl = document.createElement("img");

      const src = variantWithSecondaryImage?.featured_media.preview_image.src
        .replace(/&v=\d+(&)/gi, "$1")
        .replace(/\?v=\d+(&)/gi, "?")
        .replace(/\?v=\d+$/gi, "");
      imgEl.src = `${src}&width=500`;
      imgEl.onload = () => imgEl.remove();
    }
  }, [colorOption?.position, product.variants]);

  const getColorSwatch = useCallback(
    (value: string) => {
      const variantWithImage = product.variants.find(
        (variant) =>
          variant.options[colorOption.position - 1] === value && variant.featured_media?.src
      );

      const [namespace, key] = settings.product_data__variants_color_swatches.trim().split(".");

      const variantWithMetafield = product.variants.find(
        (variant) =>
          variant.options[colorOption.position - 1] === value &&
          variant?.metafields?.[namespace]?.[key]
      );

      switch (settings.product_card__color_selector) {
        case "via_option": {
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_option_then_image": {
          if (variantWithImage) {
            return `var(--color-swatch--${toKebabCase(value)}, url("${
              variantWithImage?.featured_media?.src
            }&width=${settings.product_card__color_selector_size}&height=${
              settings.product_card__color_selector_size
            }"))`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_image": {
          if (variantWithImage) {
            return `url(${variantWithImage?.featured_media?.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_metafield": {
          if (variantWithMetafield) {
            return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_image_then_metafield": {
          if (variantWithImage) {
            return `url(${variantWithImage?.featured_media?.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
          }
          if (variantWithMetafield) {
            return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
        case "via_metafield_then_image": {
          if (variantWithMetafield) {
            return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
          }
          if (variantWithImage) {
            return `url(${variantWithImage?.featured_media?.src}&width=${settings.product_card__color_selector_size}&height=${settings.product_card__color_selector_size})`;
          }
          return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
        }
      }
    },
    [
      colorOption.position,
      product.variants,
      settings.product_card__color_selector,
      settings.product_card__color_selector_size,
      settings.product_data__variants_color_swatches,
    ]
  );

  useEffect(() => {
    if (containerRef.current?.clientWidth) {
      setContainerWidth(containerRef.current?.clientWidth);
    }
  }, [width]);

  useEffect(() => {
    const price = product.price_min;
    const tags = product.tags;

    if (tags.indexOf("no-discount") !== -1) {
      return;
    }

    const customerTags = window.customerTags || [];

    let discount = 0;
    let hasCustomDiscount = false;

    if (customerTags.indexOf("Pro") !== -1) {
      hasCustomDiscount = true;
      discount = window.proDiscount;
    } else if (customerTags.indexOf("Industry") !== -1) {
      hasCustomDiscount = true;
      discount = window.industryDiscount;
    } else if (customerTags.indexOf("Production") !== -1) {
      hasCustomDiscount = true;
      discount = window.productionDiscount;
    }

    if (hasCustomDiscount) {
      const discount_percentage = discount / 100;
      const discountedPrice = price - price * discount_percentage;
      setCustomDiscount(discount_percentage);
      setHasDiscountCustomer(true);
      setCustomCompareAtPrice(price);
      setCustomDiscountedPrice(discountedPrice);
    }
  }, [product]);

  return (
    <>
      <a
        ref={containerRef}
        className={clsx(
          "product-card__image group relative grid h-0 outline-none hf:outline-none ",
          settings.product_card__image__ratio
        )}
        href={collectionUrl ? collectionUrl + product.url : product.url}
        aria-label={product.title}
        style={{ marginBottom: `${settings.product_card__image__margin_bottom}px` }}
      >
        <div
          className={clsx("absolute inset-0 h-full w-full overflow-hidden")}
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
          ? <div
              className="absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100"
              style={{ background: settings.product_card__background_color as string }}
            >
              <div
                className="absolute inset-0"
                style={{ background: settings.product_card__image__background }}
              ></div>
              <Image
                src={secondaryImage?.src}
                width={500}
                height={secondaryImage?.aspect_ratio * 500}
                maxWidth={640}
                alt={product.title}
                className={clsx(
                  "relative inset-0 h-full w-full select-none object-cover",
                  settings.product_card__image__drop_shadow && "drop-shadow-product"
                )}
              />
            </div>
          : null}
        {settings.product_card__variant_count__show && product?.variants?.length > 1
          ? <div
              className={clsx(
                "pointer-events-none absolute bottom-2 left-1/2 w-[calc(100%-16px)] -translate-x-1/2 rounded-sm bg-white/80 px-2 py-2 text-center text-[11px] font-semibold transition-all duration-75 md:bottom-3 md:w-[calc(100%-24px)] md:text-xs",
                settings.product_card__variant_count__show_hover &&
                  "opacity-0 group-hf:opacity-100",
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
              {Array.isArray(product.metafields?.smart?.labels)
                ? product.metafields?.smart?.labels?.map((label) => {
                    return (
                      <div
                        className="label m-0.5"
                        key={label}
                        style={{ color: label?.color, background: label?.background_color }}
                      >
                        {label?.label_text}
                      </div>
                    );
                  })
                : null}

              {(product.price < product.compare_at_price ||
                (hasDiscountCustomer && customDiscount > 0)) &&
              product.available
                ? <div className="label-item label--primary m-0.5">
                    {
                      {
                        sale: <>On Sale</>,
                        percentage:
                          product.price === 0
                            ? "FREE"
                            : <>
                                {hasDiscountCustomer
                                  ? customDiscount * 100
                                  : Math.round(
                                      ((product.compare_at_price - product.price) * 100) /
                                        product.compare_at_price
                                    )}
                                % Off
                              </>,
                        value:
                          product.price === 0
                            ? "FREE"
                            : <span
                                dangerouslySetInnerHTML={{
                                  __html: `Save ${window.formatMoney(
                                    product.compare_at_price - product.price
                                  )}`,
                                }}
                              ></span>,
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
      <div className="product-card__title relative flex flex-1 flex-col items-stretch space-y-1 px-3 pb-3">
        <div style={{ marginBottom: `${settings.product_card__title__margin_bottom}px` }}>
          <a
            className="product-card-title outline-none hf:underline hf:outline-none"
            href={collectionUrl ? collectionUrl + product.url : product.url}
          >
            {product.title}
          </a>
        </div>

        {settings.product_card__rating__show
          ? <ProductRatingWithProduct
              product={product}
              className={clsx(
                settings.product_card__rating__responsive_visibility,
                "product-card__reviews"
              )}
              style={{ marginBottom: `${settings.product_card__rating__margin_bottom}px` }}
            />
          : null}

        {settings.product_card__vendor__show && product.vendor
          ? <h2
              className={clsx(
                "product-card__vendor inline-flex text-sm text-theme-text/60",
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
              className={clsx(
                "product-card__price",
                settings.product_card__price__responsive_visibility
              )}
              style={{ marginBottom: `${settings.product_card__price__margin_bottom}px` }}
            >
              <div className="product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
                <span
                  data-product-price-from-regular=""
                  className={clsx(
                    "text-xs font-normal",
                    product.price_varies && !product.compare_at_price_varies ? "" : "hidden"
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
                    __html: `${window.formatMoney(
                      hasDiscountCustomer ? customDiscountedPrice : product.price_min
                    )}`,
                  }}
                ></span>

                <span
                  data-product-price-compare=""
                  className={clsx(
                    "text-xs text-theme-text/50 line-through",
                    hasDiscountCustomer
                      ? ""
                      : product.compare_at_price_min > product.price_min
                      ? ""
                      : "hidden"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: `${window.formatMoney(
                      hasDiscountCustomer ? customCompareAtPrice : product.compare_at_price_min
                    )}`,
                  }}
                ></span>
              </div>
            </div>
          : null}

        {settings.product_card__variant_selector__show && colorOption?.values?.length > 1
          ? <div className="product-card__variant-selector relative">
              <fieldset className="group mt-2 flex gap-1">
                {colorOption?.values
                  ?.slice(
                    0,
                    Math.floor(
                      (containerWidth - 70) / (settings.product_card__color_selector_size + 10)
                    ) - 1
                  )
                  .map(({ value, available }) => {
                    return (
                      <label
                        key={value}
                        className={clsx(
                          "flex cursor-pointer items-center justify-center border p-[2px]",
                          value === selectedColor
                            ? "border-black"
                            : "border-[#DEDEDE] hf:border-[#b3b3b3]",
                          !available && "variant-not-available"
                        )}
                        style={{
                          borderRadius:
                            settings.product_card__color_selector_radius >= 0
                              ? `${settings.product_card__color_selector_radius}px`
                              : `9999px`,
                        }}
                        data-tooltip={available ? value : `Sold out: ${value}`}
                        title={value}
                      >
                        <input
                          type="radio"
                          name={`variant-selector-${product.id}-${colorOption?.name}`}
                          className="peer absolute !block appearance-none outline-none hfa:outline-none"
                          value={value}
                          onChange={() => handleColorSelect(value)}
                          onMouseOver={() => handlePreloadImage(value)}
                          onPointerOver={() => handlePreloadImage(value)}
                          checked={value === selectedColor}
                        />

                        <span
                          className="flex h-[22px] w-[22px] items-center justify-center overflow-hidden rounded-full !bg-contain !bg-center peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 peer-disabled:hf:opacity-70"
                          style={{
                            borderRadius:
                              settings.product_card__color_selector_radius >= 0
                                ? `${settings.product_card__color_selector_radius}px`
                                : `9999px`,
                            width: `${settings.product_card__color_selector_size}px`,
                            height: `${settings.product_card__color_selector_size}px`,
                            background: getColorSwatch(value),
                          }}
                        ></span>
                      </label>
                    );
                  })}
                {colorOption?.values?.length >
                Math.floor(
                  (containerWidth - 70) / (settings.product_card__color_selector_size + 10)
                ) -
                  1
                  ? <>
                      {/*<a
                        className="cursor-pointer rounded-full border border-theme-text/50"
                        style={{ display: "var(--product-quick-view-off-display, flex)" }}
                        href={collectionUrl ? collectionUrl + product.url : product.url}
                      >
                        <span className="sr-only">View More</span>
                        <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-primary-bg/10 ring-2 ring-transparent ring-offset-1 hf:bg-primary-bg/20 md:h-8 md:w-8">
                          <PlusIcon className="h-3 w-3 text-theme-text/70" />
                        </span>
                      </a>*/}
                      <button
                        className="h-7 cursor-pointer items-center gap-1 whitespace-nowrap text-sm"
                        type="button"
                        title="View More"
                        data-product-quick-view-add-button={product.handle}
                        onClick={() => handleClick(true)}
                        style={{ display: "var(--product-quick-view-on-display, flex)" }}
                      >
                        <span>
                          +
                          {colorOption?.values?.length -
                            (Math.floor(
                              (containerWidth - 70) /
                                (settings.product_card__color_selector_size + 10)
                            ) -
                              1)}{" "}
                          Colors
                        </span>
                      </button>
                    </>
                  : null}
              </fieldset>
            </div>
          : null}

        <div
          className={clsx(
            "mt-auto w-full flex-1 flex-col justify-end self-end text-center",
            productCardContainer?.getAttribute("data-product-card-hide-button") ? "hidden" : "flex"
          )}
        >
          {product.available
            ? ((product.variants.length > 1 ||
                !settings.product_card__button_single_variant_add_to_cart) &&
                !settings.product_card__button_color_variant_add_to_cart) ||
              product.options.filter(Boolean).length > 1
              ? <>
                  <a
                    className={clsx("mt-2 w-full", settings.product_card__button__style)}
                    style={{ display: "var(--product-quick-view-off-display, flex)" }}
                    href={collectionUrl ? collectionUrl + product.url : product.url}
                  >
                    {window.theme_content?.product_card?.view_product}
                  </a>
                  <button
                    className={clsx("mt-2 w-full", settings.product_card__button__style)}
                    // data-product-quick-view-add-button={product.handle}
                    onClick={() => handleClick()}
                    style={{ display: "var(--product-quick-view-on-display, flex)" }}
                  >
                    {window.theme_content?.product_card?.choose_an}
                  </button>
                </>
              : <button
                  className={clsx("mt-2 w-full", settings.product_card__button__style)}
                  // data-product-quick-view-add-button={product.handle}
                  onClick={() => handleClick()}
                  disabled={!product.variants[0].available || isSingleQuantityRouteProtectionItem}
                >
                  {isSingleQuantityRouteProtectionItem
                    ? <span>Already Added</span>
                    : product.variants?.[0]?.metafields?.smart?.pre_order &&
                      product_data__preorder_cta &&
                      product.variants?.[0].inventory_quantity <= 0
                    ? <span>Add on Pre-Order</span>
                    : <span>Add to Cart</span>}
                </button>
            : <a
                className={clsx("mt-2 w-full", settings.product_card__button__style)}
                aria-disabled="true"
              >
                Sold Out
              </a>}
        </div>
      </div>
    </>
  );
};

export const ProductCardContainer: FC<
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
      className={clsx(
        "product-card relative flex flex-col items-stretch space-y-1 overflow-hidden rounded-theme-sm",
        className
      )}
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
