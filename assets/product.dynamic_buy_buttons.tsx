import { FC, useEffect } from "react";
import { ReactProductState } from "product";
import { ProductBlocksDynamic_buy_buttons } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const DynamicProductBuyButtons: FC<{
  settings?: ProductBlocksDynamic_buy_buttons["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
  container: HTMLElement;
}> = ({ useProduct, settings, container }) => {
  const { selectedVariant, selectedSellingPlan } = useProduct(
    ({ selectedVariant, selectedSellingPlan }) => ({
      selectedVariant,
      selectedSellingPlan,
    })
  );

  useEffect(() => {
    const button = container.querySelector<HTMLButtonElement>(".shopify-payment-button__button");
    const variantInput = container.querySelector<HTMLInputElement>("[data-product-form-variant]");
    if (button) {
      button.disabled = !selectedVariant?.available;
    }
    if (variantInput) {
      variantInput.value = `${selectedVariant?.id}`;
    }

    const selling_planInput = container.querySelector<HTMLInputElement>(
      "[data-product-form-selling-plan-variant]"
    );

    if (selling_planInput) {
      selling_planInput.disabled = !selectedSellingPlan;
      selling_planInput.value = `${selectedSellingPlan}`;
    }
    // console.log(selling_planInput);
  }, [container, selectedSellingPlan, selectedVariant?.available, selectedVariant?.id]);

  return null;
};
