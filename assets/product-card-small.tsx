import clsx from "clsx";
import { useGlobalProducts } from "global-stores";
import { Image } from "image";
import { LoadingSpinner } from "loading-spinner";
import React, { FC, useCallback, useState } from "react";
import { useProductQuickView } from "product-quick-view";
import { _Product_liquid } from "_types";

export const ProductCardSmall: FC<{ product: _Product_liquid; disableCartOpen?: boolean }> = ({
  product,
  disableCartOpen = false,
}) => {
  const [loading, setLoading] = useState(false);
  const { updateProduct } = useProductQuickView(({ updateProduct }) => ({
    updateProduct,
  }));
  const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct }) => ({
    getAsyncProduct,
  }));

  const handleViewComplementaryProduct = useCallback(async (e, upsellProduct: _Product_liquid) => {
    if (updateProduct) {
      e.preventDefault();
      setLoading(true);
      getAsyncProduct(upsellProduct?.handle).then((p) => {
        if (p) {
          updateProduct(p, !disableCartOpen);
          setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
        }
        setLoading(false);
      });
    }
  }, [disableCartOpen, updateProduct]);

  if (!product) return null;

  return (
    <article className="relative flex flex-col items-stretch space-y-1">
      <a
        className="relative grid h-0 w-full pb-[100%] outline-none hf:outline-none"
        href={`/products/${product?.handle}`}
      >
        <div
          className={clsx(
            "absolute inset-0 h-full w-full overflow-hidden",
            !product?.featured_media?.src && !product?.featured_image && "opacity-0"
          )}
          style={{ background: "transparent" }}
        >
          <Image
            src={`${
              product?.featured_media?.preview_image?.src || product?.featured_image
            }&width=200`}
            alt={product?.title}
            width={170}
            height={334}
            className="inset-0 h-full w-full object-cover "
          />
        </div>
        {product?.images?.[1]
          ? <div className="absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100">
              <Image
                src={`${product?.images[1]}&width=200`}
                alt={product?.title}
                width={170}
                height={334}
                className="inset-0 h-full w-full object-cover "
              />
            </div>
          : null}

        {product?.variants?.length > 1
          ? <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-xs tracking-wide text-theme-bg drop-shadow-[1px_1px_1px_black] [text-shadow:1px_1px_1px_black]">
              Available in {product?.variants?.length} variations
            </div>
          : null}
      </a>

      <h1 className=" inline-flex pt-2 text-sm font-semibold leading-[1.2] tracking-tight">
        <a
          className="outline-none hf:underline hf:outline-none"
          href={`/products/${product?.handle}`}
        >
          {product?.title}
        </a>
      </h1>

      <div className="" data-card-price="">
        <div className=" product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
          {product?.price_varies && product?.compare_at_price_min < product?.price_min
            ? <span className="text-xs font-normal">On Sale from:</span>
            : product?.price_varies
            ? <span className="text-xs font-normal">From:</span>
            : null}
          <span
            className=""
            dangerouslySetInnerHTML={{ __html: window.formatMoney(product?.price_min) }}
          ></span>
          {product?.compare_at_price > product?.price
            ? <span
                className="text-xs text-theme-text/50 line-through"
                dangerouslySetInnerHTML={{ __html: window.formatMoney(product?.compare_at_price) }}
              ></span>
            : null}
        </div>
      </div>

      <div className="mt-auto flex w-full flex-1 flex-col justify-end self-end text-center">
        <a
          className="button-primary mt-2 w-full px-3 py-1 text-sm outline-none hf:outline-none"
          href={`/products/${product?.handle}`}
          onClick={(e) => handleViewComplementaryProduct(e, product)}
        >
          {product?.available
            ? <span className="whitespace-nowrap">View</span>
            : <span className="">Sold Out</span>}
          <LoadingSpinner loading={loading} />
        </a>
      </div>
    </article>
  );
};
