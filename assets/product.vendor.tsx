import { FC } from "react";
import { ReactProductState } from "product";
import { escapeComponent } from "uri-js";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductVendor: FC<{ useProduct: UseBoundStore<StoreApi<ReactProductState>> }> = ({
  useProduct,
}) => {
  const { product } = useProduct(({ product }) => ({ product }));
  return (
    <a
      href={`${window?.routes?.collections_url}/vendors?q=${escapeComponent(product?.vendor)}`}
      className="flex text-sm opacity-60 hf:underline"
      title={product?.vendor}
    >
      {product?.vendor}
    </a>
  );
};
