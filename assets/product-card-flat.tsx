import clsx from "clsx";
import { cart } from "cart";
import { useCartDrawer, useGlobalProducts, useGlobalSettings } from "global-stores";
import { Image } from "image";
import { LoadingSpinner } from "loading-spinner";
import { TypeOptions, Typography } from "typography";
import React, { FC, useCallback, useState } from "react";
import { useProductQuickView } from "product-quick-view";
import { _Product_liquid } from "_types";

export const ProductCardFlat: FC<{ product: _Product_liquid; disableCartOpen?: boolean }> = ({
  product,
  disableCartOpen = false,
}) => {
  const settings = useGlobalSettings();

  const [loading, setLoading] = useState(false);
  const { updateProduct } = useProductQuickView(({ updateProduct }) => ({
    updateProduct,
  }));
  const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct }) => ({
    getAsyncProduct,
  }));

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

  const handleViewComplementaryProduct = useCallback(async (e, upsellProduct: _Product_liquid) => {
    if (updateProduct && !isSingleQuantityRouteProtectionItem) {
      e.preventDefault();
      setLoading(true);

      getAsyncProduct(upsellProduct?.handle).then(async (p) => {
        if (p.variants.length > 1) {
          updateProduct(p, !disableCartOpen);
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
            true
          );
        }

        setLoading(false);
      });
    }
  }, [disableCartOpen, updateProduct]);

  if (!product) return null;

  return (
    <article className="relative flex flex-col items-stretch space-y-1 rounded-theme-sm border border-gray-400 p-4">
      <div className="flex items-center">
        <picture
          className={clsx(
            "relative mr-2 h-16 w-16 overflow-hidden",
            !product?.featured_media?.src && !product?.featured_image && "opacity-0"
          )}
          style={{ background: "transparent" }}
        >
          <Image
            src={`${product?.featured_media?.preview_image?.src || product?.featured_image}`}
            alt={product?.title}
            width={128}
            height={128}
            className="h-full w-full object-cover "
          />
        </picture>
        <h1 className="product-card-title--small inline-flex">
          <a
            className="outline-none hf:underline hf:outline-none"
            href={`/products/${product?.handle}`}
          >
            {product?.title}
          </a>
        </h1>
      </div>

      <div className="mt-auto flex w-full flex-1 flex-col justify-end self-end text-center">
        <a
          className="button-primary--outline mt-2 flex w-full items-center justify-between px-3 py-2 text-sm outline-none hf:outline-none"
          href={`/products/${product?.handle}`}
          onClick={(e) => handleViewComplementaryProduct(e, product)}
        >
          {isSingleQuantityRouteProtectionItem
            ? <span className="whitespace-nowrap">Already Added</span>
            : product?.available
            ? <span className="whitespace-nowrap">Add</span>
            : <span className="">Sold Out</span>}

          <div data-card-price="">
            <div className="grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
              {product?.price_varies && product?.compare_at_price_min < product?.price_min
                ? <span className="text-xs font-normal">On Sale from:</span>
                : product?.price_varies
                ? <span className="text-xs font-normal">From:</span>
                : null}
              <span
                className=""
                dangerouslySetInnerHTML={{ __html: window.formatMoney(product?.price_min) }}
              ></span>
              {product?.compare_at_price > product?.price
                ? <span
                    className="text-xs text-theme-text/50 line-through"
                    dangerouslySetInnerHTML={{
                      __html: window.formatMoney(product?.compare_at_price),
                    }}
                  ></span>
                : null}
            </div>
          </div>
          <LoadingSpinner loading={loading} />
        </a>
      </div>
    </article>
  );
};
