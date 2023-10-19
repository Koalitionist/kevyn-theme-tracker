import { FC, useEffect } from "react";
import { ReactProductState } from "product";
import { ProductBlocksDynamic_buy_buttons, ProductBlocksPayment_terms } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const PaymentTerms: FC<{
  settings?: ProductBlocksPayment_terms["settings"];
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
    const variantInput = container.querySelector<HTMLInputElement>("[data-product-form-variant]");
    variantInput.value = `${selectedVariant?.id}`;
  }, [container, selectedVariant?.available, selectedVariant?.id]);

  useEffect(() => {
    const variantInput = container.querySelector<HTMLInputElement>("[data-product-form-variant]");
    variantInput.value = `${selectedVariant?.id}`;
    const selling_planInput = container.querySelector<HTMLInputElement>(
      "[data-product-form-selling-plan-variant]"
    );

    selling_planInput.disabled = !selectedSellingPlan;
    selling_planInput.value = `${selectedSellingPlan}`;
    // console.log(selling_planInput);
  }, [container, selectedSellingPlan, selectedVariant?.available, selectedVariant?.id]);

  return null;
};
