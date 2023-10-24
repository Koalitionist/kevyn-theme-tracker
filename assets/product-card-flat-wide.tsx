import clsx from "clsx";
import { cart } from "cart";
import { useCartDrawer, useGlobalProducts, useGlobalSettings } from "global-stores";
import { ChevronUpDownIcon } from "icons";
import { Image } from "image";
import { LoadingSpinner } from "loading-spinner";
import React, { FC, useCallback, useState } from "react";
import { useProductQuickView } from "product-quick-view";
import { _Product_liquid, _Variant_liquid } from "_types";

export const ProductCardFlatWide: FC<{ product: _Product_liquid; disableCartOpen?: boolean }> = ({
  product,
  disableCartOpen = false,
}) => {
  const { small_product_card__variant_selector__show, product_data__hide_oos_variants } =
    useGlobalSettings();
  const [loading, setLoading] = useState(false);
  const { updateProduct } = useProductQuickView(({ updateProduct }) => ({
    updateProduct,
  }));
  const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct }) => ({
    getAsyncProduct,
  }));
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.find((variant) => variant.available)?.id
  );

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

  const handleClickCTA = useCallback(async (e, upsellProduct: _Product_liquid) => {
    if (
      small_product_card__variant_selector__show &&
      selectedVariant &&
      !isSingleQuantityRouteProtectionItem
    ) {
      e.preventDefault();
      setLoading(true);
      await cart.add({ items: [{ id: selectedVariant, quantity: 1 }] }, true);
      setLoading(false);
      return;
    }
    if (updateProduct && !isSingleQuantityRouteProtectionItem) {
      e.preventDefault();
      setLoading(true);
      getAsyncProduct(upsellProduct?.handle).then(async (p) => {
        if (p.variants.length > 1) {
          updateProduct(p);
          setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
        }
        if (p.variants.length <= 1) {
          await cart.add(
            {
              items: [
                {
                  id: p.selected_or_first_available_variant.id,
                  quantity: 1,
                  selling_plan: p?.requires_selling_plan
                    ? p?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                    : undefined,
                },
              ],
            },
            !disableCartOpen
          );
        }
        setLoading(false);
      });
    }
  }, [disableCartOpen, selectedVariant, small_product_card__variant_selector__show, updateProduct]);

  if (!product) return null;

  return (
    <article className="relative flex flex-col items-stretch space-y-1">
      <div className="flex items-center">
        <picture
          className={clsx(
            "relative mr-2 h-16 w-16 min-w-[64px] overflow-hidden",
            !product?.featured_media?.src && !product?.featured_image && "opacity-0"
          )}
          style={{ background: "transparent" }}
        >
          {small_product_card__variant_selector__show &&
          product?.variants?.find((variant) => variant.id === selectedVariant)?.featured_media?.src
            ? <Image
                src={`${
                  product.variants.find((variant) => variant.id === selectedVariant)?.featured_media
                    ?.src || product?.featured_image
                }`}
                alt={product?.title}
                width={90}
                height={90}
                className="h-full w-full object-cover"
              />
            : <Image
                src={`${product?.featured_media?.preview_image?.src || product?.featured_image}`}
                alt={product?.title}
                width={90}
                height={90}
                className="h-full w-full object-cover"
              />}
        </picture>
        <div className="flex min-h-full flex-1 py-1 pl-1">
          <div className="flex-1">
            <h1 className="product-card-title--small inline-flex">
              <a
                className="outline-none hf:underline hf:outline-none"
                href={`/products/${product?.handle}`}
              >
                {product?.title}
              </a>
            </h1>
            <div data-card-price="">
              <div className="whitespace-nowrapfont-semibold grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap text-xs">
                {product?.price_varies && product?.compare_at_price_min < product?.price_min
                  ? <span className="font-normal">On Sale from:</span>
                  : product?.price_varies
                  ? <span className="font-normal">From:</span>
                  : null}
                <span
                  className=""
                  dangerouslySetInnerHTML={{ __html: window.formatMoney(product?.price_min) }}
                ></span>
                {product?.compare_at_price > product?.price
                  ? <span
                      className="text-theme-text/50 line-through"
                      dangerouslySetInnerHTML={{
                        __html: window.formatMoney(product?.compare_at_price),
                      }}
                    ></span>
                  : null}
              </div>
            </div>
          </div>
          <div className="ml-3 flex min-w-[90px] justify-between gap-1 text-center">
            <a
              className="button-theme--outline flex h-min w-full items-center px-3 py-2 text-sm outline-none hf:outline-none"
              href={`/products/${product?.handle}`}
              onClick={(e) => handleClickCTA(e, product)}
            >
              {product?.available
                ? <span className="whitespace-nowrap">
                    {product?.variants?.length > 1 ? "View" : "Add"}
                  </span>
                : <span className="">Sold Out</span>}
              <LoadingSpinner loading={loading} className="bg-primary-bg" />
            </a>
          </div>
        </div>
      </div>
      {small_product_card__variant_selector__show
        ? <div className="w-full flex-1">
            {product.variants?.filter(
              (variant) => !product_data__hide_oos_variants || variant.available
            ).length > 1
              ? <label className="relative flex">
                  <select
                    className="input-element input--primary--outline flex w-full appearance-none truncate py-1 pl-4 pr-8"
                    onChange={(e) => {
                      setSelectedVariant(+e?.currentTarget?.value);
                    }}
                  >
                    {product.variants
                      ?.filter((variant) => !product_data__hide_oos_variants || variant.available)
                      .map((variant) => {
                        return (
                          <option
                            key={variant.id}
                            className="truncate"
                            disabled={!variant.available}
                            selected={variant.id === selectedVariant}
                            value={variant.id}
                          >
                            {variant.title} -{" "}
                            <span
                              className="ml-auto inline-flex"
                              dangerouslySetInnerHTML={{
                                __html: window.formatMoney(variant.price),
                              }}
                            ></span>
                            {!variant.available ? <>- Sold Out</> : null}
                          </option>
                        );
                      })}
                  </select>
                  <ChevronUpDownIcon className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2" />
                </label>
              : null}
          </div>
        : null}
    </article>
  );
};
