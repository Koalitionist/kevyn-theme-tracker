import { delay, serializeForm } from "/utils";
import clsx from "clsx";
import { cart } from "cart";
import { useCartDrawer, useGlobalSettings } from "global-stores";
import { LoadingSpinner } from "loading-spinner";
import { FC, useCallback, useState } from "react";
import { ReactProductState } from "product";
import { ProductBlocksBuy_buttons } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductBuyButtons: FC<{
  settings?: ProductBlocksBuy_buttons["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ useProduct, settings }) => {
  const { product, selectedVariant, quantity, formId, selectedSellingPlan } = useProduct(
    ({ product, selectedVariant, quantity, formId, selectedSellingPlan }) => ({
      product,
      selectedVariant,
      quantity,
      formId,
      selectedSellingPlan,
    })
  );

  const { cartData, routeProtectionProducts } = useCartDrawer(
    ({ cartData, routeProtectionProducts }) => ({ cartData, routeProtectionProducts })
  );
  const { product_data__preorder_cta } = useGlobalSettings();

  const inCartItem = cartData?.items?.find(
    (line_item) => line_item.variant_id === selectedVariant.id
  );
  const routeProtection = inCartItem
    ? routeProtectionProducts.find((block) => block?.products?.[0]?.handle === inCartItem?.handle)
    : null;

  const isSingleQuantityRouteProtectionItem = !!routeProtection?.limit_quantity;

  const [loading, setLoading] = useState(false);
  const pre_order = selectedVariant?.metafields?.smart?.pre_order;
  const pre_order_date = selectedVariant?.metafields?.smart?.pre_order_date;

  const handleSubmit = useCallback(
    async (e) => {
      console.log(e, serializeForm(e.target));
      e.preventDefault();
      e.stopPropagation();
      setLoading(true);
      if (
        // @ts-ignore
        window?.Shoppad?.apps?.infiniteoptions?.priceMod?.addToCart &&
        // @ts-ignore
        window?.Shoppad?.apps?.infiniteoptions?.priceMod?.getVariantSubmissions()?.length
      ) {
        // @ts-ignore
        window?.Shoppad?.apps?.infiniteoptions?.priceMod?.addToCart(e);
        await delay(500);
      }

      const properties = {};
      Object.entries(serializeForm(e.target))?.forEach(([key, value]) => {
        if (key.includes("properties[")) {
          properties[key.replace(/^properties\[(.*)]$/gi, "$1")] = value;
        }
      });
      if (pre_order && selectedVariant?.inventory_quantity < quantity) {
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
                  selling_plan: selectedSellingPlan
                    ? +selectedSellingPlan
                    : product?.requires_selling_plan
                    ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                    : undefined,
                  properties,
                },
                {
                  id: selectedVariant?.id,
                  quantity: quantity - selectedVariant?.inventory_quantity,
                  selling_plan: selectedSellingPlan
                    ? +selectedSellingPlan
                    : product?.requires_selling_plan
                    ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                    : undefined,
                  properties: {
                    ...properties,
                    preorder: label,
                  },
                },
              ],
            },
            product?.openCartAfterAdd
          );
        }

        if (selectedVariant?.inventory_quantity <= 0) {
          await cart.add(
            {
              items: [
                {
                  id: selectedVariant?.id,
                  quantity: quantity,
                  selling_plan: selectedSellingPlan
                    ? +selectedSellingPlan
                    : product?.requires_selling_plan
                    ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                    : undefined,
                  properties: {
                    ...properties,
                    preorder: label,
                  },
                },
              ],
            },
            product?.openCartAfterAdd
          );
        }
        if (!product?.openCartAfterAdd) {
          document.dispatchEvent(new Event(`product:close`));
        }
      }

      if (!pre_order || selectedVariant?.inventory_quantity >= quantity) {
        await cart.add(
          {
            items: [
              {
                id: selectedVariant?.id,
                quantity,
                selling_plan: selectedSellingPlan
                  ? +selectedSellingPlan
                  : product?.requires_selling_plan
                  ? product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id
                  : undefined,
                properties,
              },
            ],
          },
          product?.openCartAfterAdd
        );
        if (!product?.openCartAfterAdd) {
          document.dispatchEvent(new Event(`product-quick-view:close`));
        }
      }

      setLoading(false);
    },
    [
      pre_order,
      pre_order_date,
      product?.openCartAfterAdd,
      product?.requires_selling_plan,
      product?.selling_plan_groups,
      quantity,
      selectedSellingPlan,
      selectedVariant?.id,
      selectedVariant?.inventory_quantity,
    ]
  );

  if (!product) {
    return null;
  }

  return (
    <form
      method="post"
      action="/cart/add"
      id={formId}
      acceptCharset="UTF-8"
      encType="multipart/form-data"
      noValidate={true}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form_type" value="product" />
      <input type="hidden" name="utf8" value="✓" />
      <input type="hidden" name="id" value={selectedVariant?.id} />
      <input
        type="hidden"
        name="selling_plan"
        data-selling-plan-output={true}
        value={selectedSellingPlan}
        disabled={!selectedSellingPlan}
      />

      <button
        type="submit"
        name="add"
        disabled={!selectedVariant?.available || isSingleQuantityRouteProtectionItem}
        className={clsx("w-full", settings?.button__style ?? "button-primary")}
      >
        <span>
          {!selectedVariant
            ? window.theme_content?.product?.unavailable
            : selectedVariant?.available
            ? pre_order && product_data__preorder_cta && selectedVariant?.inventory_quantity <= 0
              ? window.theme_content?.product?.pre_order
              : window.theme_content?.product?.add_to
            : window.theme_content?.product?.sold_out}
        </span>
        <LoadingSpinner loading={loading} />
      </button>
    </form>
  );
};
