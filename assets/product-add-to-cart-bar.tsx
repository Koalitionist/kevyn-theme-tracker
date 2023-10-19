import { useCartDrawer, useGlobalProducts, useGlobalSettings } from "global-stores";
import { Image } from "image";
import { scrollToY } from "utils";
import { FC, useCallback, useEffect, useState } from "react";
import { useProductQuickView } from "product-quick-view";
import { ReactProductState } from "product";
import { ProductBuyButtons } from "product.buy_buttons";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductAddToCartBar: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
  upsellProductHandle?: string;
}> = ({ useProduct, upsellProductHandle }) => {
  const { selectedVariant, product } = useProduct(({ selectedVariant, product }) => ({
    selectedVariant,
    product,
  }));
  const [upsellProduct, setUpsellProduct] = useState(null);
  const { getAsyncProduct } = useGlobalProducts(({ getAsyncProduct }) => ({ getAsyncProduct }));
  const { updateProduct } = useProductQuickView(({ updateProduct }) => ({ updateProduct }));
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));

  const handleClick = useCallback((e) => {
    const productElement = document.querySelector<HTMLElement>(
      `[data-product-handle="${product?.handle}"]`
    );
    const headerElement = document.querySelector<HTMLElement>(`.header-position`);
    if (productElement) {
      scrollToY(500, productElement.offsetTop - headerElement.clientHeight);
    }
  }, [product?.handle]);

  useEffect(() => {
    if (!upsellProduct && upsellProductHandle) {
      getAsyncProduct(upsellProductHandle).then((p) => setUpsellProduct(p));
    }
  }, [upsellProduct, upsellProductHandle]);

  const handleUpsellProductClick = useCallback((e) => {
    updateProduct(upsellProduct);
    setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
  }, [updateProduct, upsellProduct]);

  if (cartData.items?.some((item) => item.variant_id === selectedVariant?.id)) {
    if (!upsellProduct) {
      return <></>;
    }

    return (
      <>
        <picture className="relative block h-[50px] w-[50px] overflow-hidden rounded-theme-sm max-sm:hidden">
          <Image
            src={
              upsellProduct?.selected_or_first_available_variant?.featured_media?.src ??
              upsellProduct?.featured_media?.src
            }
            alt={upsellProduct?.title}
            width={50}
            className="inset-0 block h-full w-full object-cover object-center"
          />
        </picture>
        <a
          className="flex flex-col justify-center overflow-hidden whitespace-nowrap max-sm:hidden"
          href={upsellProduct?.url.split("?")?.[0]}
        >
          <span className="max-w-[100px] truncate text-sm font-semibold tracking-tight sm:max-w-[300px]">
            {upsellProduct?.title}
          </span>

          {upsellProduct?.variants.length > 1
            ? <span className="max-w-[100px] truncate text-xs tracking-tight sm:max-w-[300px]">
                {upsellProduct?.selected_or_first_available_variant?.title}
              </span>
            : null}
        </a>

        {window.product_drawer
          ? <button
              type="button"
              className="button-primary flex w-full"
              onClick={handleUpsellProductClick}
            >
              Add to Cart
            </button>
          : <ProductBuyButtons useProduct={useProduct} />}
      </>
    );
  }

  return (
    <>
      <picture className="relative block h-[50px] w-[50px] overflow-hidden rounded-theme-sm max-sm:hidden">
        <Image
          src={selectedVariant?.featured_media?.src ?? product?.featured_media?.preview_image?.src}
          alt={selectedVariant?.featured_media?.alt ?? product?.title}
          width={50}
          className="inset-0 block h-full w-full object-cover object-center"
        />
      </picture>
      <button
        className="flex flex-col justify-center overflow-hidden whitespace-nowrap max-sm:hidden"
        type="button"
        onClick={handleClick}
      >
        <span className="max-w-[100px] truncate text-sm font-semibold tracking-tight sm:max-w-[300px]">
          {product?.title}
        </span>
        {product?.variants.length > 1
          ? <span className="max-w-[100px] truncate text-xs tracking-tight sm:max-w-[300px]">
              {selectedVariant?.title}
            </span>
          : null}
      </button>
      <ProductBuyButtons useProduct={useProduct} />
    </>
  );
};
