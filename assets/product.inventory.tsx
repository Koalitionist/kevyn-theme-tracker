import { FC } from "react";
import { ReactProductState } from "product";
import { ProductBlocksInventory } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductInventorySlider: FC<{
  settings: ProductBlocksInventory["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings: { threshold }, useProduct }) => {
  const variant = useProduct(({ selectedVariant }) => selectedVariant);
  const sellPast = variant?.inventory_policy === "continue";
  const trackInventory = variant?.inventory_management === "shopify";
  const quantity = variant?.inventory_quantity ?? 0;
  const hasInventory = quantity > 0;
  const pre_order = variant?.metafields?.smart?.pre_order;
  const pre_order_limit = +(variant?.metafields?.smart?.pre_order_limit ?? 0);
  const available = variant?.available;
  const percentage =
    pre_order && pre_order_limit
      ? ((quantity + pre_order_limit) / threshold) * 100
      : variant?.inventory_management !== "shopify" || variant?.inventory_policy === "continue"
      ? 100
      : !variant?.available
      ? 0
      : (quantity / threshold) * 100;

  const color = percentage < 33 ? "error" : percentage >= 66 ? "success" : "warning";

  const description =
    pre_order &&
    !hasInventory &&
    available &&
    (!pre_order_limit || quantity + pre_order_limit > threshold)
      ? "On Preorder"
      : pre_order && !hasInventory && available && pre_order_limit && quantity + pre_order_limit > 0
      ? `${quantity + pre_order_limit} items on Preorder`
      : !trackInventory || sellPast || quantity >= threshold
      ? "Available"
      : !available
      ? "Sold out"
      : variant?.inventory_quantity === 1
      ? "Last item"
      : `${variant?.inventory_quantity} items left`;

  return (
    <>
      <div className="flex h-2 w-full max-w-xl overflow-hidden rounded-full bg-gray-300">
        <div className="relative h-full flex-1">
          <div
            className="h-full transition-all duration-500 ease-in-out data-[color=error]:bg-error data-[color=success]:bg-success data-[color=warning]:bg-warning"
            style={{ width: `Max(0%, Min(100%, ${percentage}%))` }}
            data-color={color}
          ></div>
        </div>
      </div>
      <span className="text-right text-xs font-medium">{description}</span>
    </>
  );
};
