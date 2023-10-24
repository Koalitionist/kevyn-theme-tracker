import { FC } from "react";
import { ReactProductState } from "product";
import { ProductBlocksPre_order } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductPreOrder: FC<{
  settings: ProductBlocksPre_order["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { selectedVariant, formId } = useProduct(({ selectedVariant, formId }) => ({
    selectedVariant,
    formId,
  }));

  const pre_order = selectedVariant?.metafields?.smart?.pre_order;
  const pre_order_date = selectedVariant?.metafields?.smart?.pre_order_date;

  if (!pre_order || selectedVariant?.inventory_quantity > 0 || !selectedVariant.available) {
    return <div></div>;
  }

  const now_date = Date.now();
  let label = "Preorder Shipping this week";
  let timeOfMonth = "early ";

  if (pre_order_date) {
    const target_date = new Date(pre_order_date as string).getTime();
    const target_day = +new Date(pre_order_date as string).toLocaleString("en", { day: "2-digit" });
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

  switch (settings.preorder_date) {
    case "estimate":
      return (
        <>
          <span className="font-bold text-primary-bg">
            {pre_order_date ? label : "On Preorder"}
          </span>
          <input
            type="hidden"
            name="properties[preorder]"
            value={pre_order_date ? label : "On Preorder"}
            form={`${formId}-dynamic`}
          />
        </>
      );
    case "precise":
      return (
        <>
          <span className="font-bold text-primary-bg">
            {pre_order_date
              ? `Preorder shipping on ${new Date(pre_order_date as string).toLocaleDateString(
                  window.Shopify.locale,
                  { month: "short", year: "numeric", day: "2-digit" }
                )}`
              : "On Preorder"}
          </span>
          <input
            type="hidden"
            name="properties[preorder]"
            value={
              pre_order_date
                ? `Preorder shipping on ${new Date(pre_order_date as string).toLocaleDateString(
                    window.Shopify.locale,
                    { month: "short", year: "numeric", day: "2-digit" }
                  )}`
                : "On Preorder"
            } /**/
            form={`${formId}-dynamic`}
          />
        </>
      );
    case "none":
      return (
        <>
          <span className="font-bold text-primary-bg">On Preorder</span>
          <input
            type="hidden"
            name="properties[preorder]"
            value="On Preorder"
            form={`${formId}-dynamic`}
          />
        </>
      );
  }
};
