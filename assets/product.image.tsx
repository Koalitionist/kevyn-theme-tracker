import clsx from "clsx";
import { FC, useEffect, useRef } from "react";
import { ReactProductState } from "product";
import { ProductBlocksImage } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductImage: FC<{
  settings: ProductBlocksImage["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product, selectedVariant } = useProduct(({ product, selectedVariant }) => ({
    product,
    selectedVariant,
  }));
  const preloadedImages = useRef<number[]>([]);

  useEffect(() => {
    product?.variants?.forEach((variant) => {
      if (
        variant?.featured_media?.id &&
        !preloadedImages.current.includes(variant?.featured_media?.id)
      ) {
        preloadedImages.current.push(variant?.featured_media?.id);
        new Image().src = `${variant?.featured_media?.preview_image?.src}&width=180`;
      }
    });
  }, [product?.variants]);

  return (
    <>
      {window?.location?.pathname?.includes(product?.url)
        ? <figure
            className={clsx(
              "relative grid h-0 w-full outline-none hf:outline-none",
              settings.image__ratio
            )}
          >
            <div
              className="absolute inset-0 h-full w-full overflow-hidden rounded-theme shadow-md"
              style={{ background: settings.image__background }}
            >
              {product?.featured_media || selectedVariant?.featured_media?.preview_image?.src
                ? <img
                    src={`${
                      selectedVariant?.featured_media?.preview_image?.src ||
                      product?.featured_media?.preview_image.src
                    }&width=180`}
                    alt={product?.featured_media?.alt ?? product?.title}
                    className={clsx(
                      "inset-0 h-full w-full object-cover",
                      settings.image__drop_shadow && "drop-shadow-product"
                    )}
                  />
                : null}
            </div>
          </figure>
        : <a href={product?.url} className="hf:underline">
            <figure
              className={clsx(
                "relative grid h-0 w-full outline-none hf:outline-none",
                settings.image__ratio
              )}
            >
              <div
                className="absolute inset-0 h-full w-full overflow-hidden rounded-theme shadow-md"
                style={{ background: settings.image__background }}
              >
                {product?.featured_media || selectedVariant?.featured_media?.preview_image?.src
                  ? <img
                      src={`${
                        selectedVariant?.featured_media?.preview_image?.src ||
                        product?.featured_media?.preview_image.src
                      }&width=180`}
                      alt={product?.featured_media?.alt ?? product?.title}
                      className={clsx(
                        "inset-0 h-full w-full object-cover",
                        settings.image__drop_shadow && "drop-shadow-product"
                      )}
                    />
                  : null}
              </div>
            </figure>
          </a>}
    </>
  );
};
