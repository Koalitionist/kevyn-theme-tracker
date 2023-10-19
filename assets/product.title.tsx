import clsx from "clsx";
import { TypeOptions, Typography } from "typography";
import { FC } from "react";
import { ReactProductState } from "product";
import { ProductBlocksTitle } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductTitle: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
  settings: ProductBlocksTitle["settings"];
}> = ({ useProduct, settings }) => {
  const { product } = useProduct(({ product }) => ({ product }));

  return (
    <div>
      {window?.location?.pathname?.includes(product?.url)
        ? <Typography fontType={settings.title_font as TypeOptions}>
            {settings.title.replace("[title]", product?.title)}
          </Typography>
        : <a href={product?.url} className="hf:underline">
            <Typography fontType={settings.title_font as TypeOptions}>
              {settings.title.replace("[title]", product?.title)}
            </Typography>
          </a>}
    </div>
  );
};
