import { useCartDrawer } from "global-stores";
import { MinusIcon, PlusIcon } from "icons";
import { FC } from "react";
import { ReactProductState } from "product";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductQuantitySelector: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ useProduct }) => {
  const { setQuantity, quantity, formId, selectedVariant } = useProduct(
    ({ setQuantity, quantity, formId, selectedVariant }) => ({
      setQuantity,
      quantity,
      formId,
      selectedVariant,
    })
  );

  const { routeProtectionProducts } = useCartDrawer(({ routeProtectionProducts }) => ({
    routeProtectionProducts,
  }));

  const routeProtection = routeProtectionProducts.find(
    (block) => +block?.variant_id === +selectedVariant.id
  );

  const isSingleQuantityRouteProtectionItem = !!routeProtection?.limit_quantity;

  const sellPast = selectedVariant?.inventory_policy === "continue";
  const trackInventory = selectedVariant?.inventory_management === "shopify";
  const inventory_quantity = selectedVariant?.inventory_quantity ?? 0;
  const hasInventory = inventory_quantity > 0;
  const pre_order = selectedVariant?.metafields.smart?.pre_order;
  const pre_order_limit = +(selectedVariant?.metafields.smart?.pre_order_limit ?? 0);

  if (isSingleQuantityRouteProtectionItem) {
    if (quantity !== 1) {
      setQuantity(1);
    }
    return null;
  }
  return (
    <label className="input--primary--outline input-element flex select-none">
      <span className="flex-1">Quantity</span>
      <button
        type="button"
        className="flex items-center justify-center px-1.5 py-1 text-theme-text hf:text-theme-text/80"
        onClick={() => {
          setQuantity(
            Math.max(
              1,
              sellPast && pre_order && pre_order_limit
                ? Math.min(quantity - 1, inventory_quantity + pre_order_limit)
                : sellPast || !trackInventory
                ? quantity - 1
                : Math.min(quantity - 1, inventory_quantity)
            )
          );
        }}
      >
        <span className="sr-only">Decrease quantity by 1</span>
        <MinusIcon className="h-2.5 w-2.5" />
      </button>
      <input
        className="w-8 appearance-none text-center outline-none"
        type="number"
        name="quantity"
        min="1"
        value={quantity}
        form={formId}
        onChange={(e) => {
          setQuantity(
            Math.max(
              1,
              sellPast && pre_order && pre_order_limit
                ? Math.min(+e.currentTarget.value, inventory_quantity + pre_order_limit)
                : sellPast || !trackInventory
                ? +e.currentTarget.value
                : Math.min(+e.currentTarget.value, inventory_quantity)
            )
          );
        }}
      />
      <button
        type="button"
        className="flex items-center justify-center px-1.5 py-1 text-theme-text hf:text-theme-text/80"
        onClick={() => {
          setQuantity(
            Math.max(
              1,
              sellPast && pre_order && pre_order_limit
                ? Math.min(quantity + 1, inventory_quantity + pre_order_limit)
                : sellPast || !trackInventory
                ? quantity + 1
                : Math.min(quantity + 1, inventory_quantity)
            )
          );
        }}
      >
        <span className="sr-only">Increase quantity by 1</span>
        <PlusIcon className="h-2.5 w-2.5" />
      </button>
    </label>
  );
};
