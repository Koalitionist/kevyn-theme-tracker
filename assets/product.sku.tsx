import { FC } from "react";
import { ReactProductState } from "product";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductSku: FC<{ useProduct: UseBoundStore<StoreApi<ReactProductState>> }> = ({
  useProduct,
}) => {
  const variant = useProduct(({ selectedVariant }) => selectedVariant);

  return (
    <div className="flex text-sm text-theme-text/80" title="SKU">
      {variant?.sku}
    </div>
  );
};
