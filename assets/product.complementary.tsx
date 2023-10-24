import { ProductCardContainer } from "/product-card";
import clsx from "clsx";
import { ProductCardFlat } from "product-card-flat";
import { ProductCardSmall } from "product-card-small";
import { useGlobalProducts } from "global-stores";
import { ScrollBar } from "scrollbar";
import { Typography } from "typography";
import { current } from "immer";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useProductQuickView } from "product-quick-view";
import { ReactProductState } from "product";
import { ProductBlocksComplementary } from "_types";
import { _Product_liquid } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductComplementaryItems: FC<{
  settings: ProductBlocksComplementary["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product } = useProduct(({ product }) => ({ product }));
  const { getUntransformedAsyncProduct, hydrated } = useGlobalProducts(
    ({ getUntransformedAsyncProduct, hydrated }) => ({
      getUntransformedAsyncProduct,
      hydrated,
    })
  );

  const [products, setProducts] = useState([]);

  const loadComplementaryProducts = useCallback(async () => {
    let complementaryProducts = (
      settings.source === "complementary"
        ? product?.metafields?.["shopify--discovery--product_recommendation"]
            ?.complementary_products ?? []
        : product?.metafields?.["shopify--discovery--product_recommendation"]?.related_products ??
          []
    ) as _Product_liquid[];

    if (!settings.hide_upsell_products || complementaryProducts.length === 0) {
      complementaryProducts = [...complementaryProducts, ...settings.products];
    }

    const finalProducts = await Promise.all(
      complementaryProducts
        ?.filter((p) => p.id !== product?.id)
        ?.map((product) => window.transformProducts(product))
        ?.filter((product) => !product?.hidden)
        ?.slice(0, 5)
        ?.map((p) => getUntransformedAsyncProduct(p.handle))
    );

    setProducts(
      finalProducts
        ?.map((product) => window.transformProducts(product))
        ?.filter((product) => !product?.hidden)
    );
  }, [product?.id, product?.metafields, settings.products]);

  useEffect(() => {
    if (hydrated) {
      loadComplementaryProducts();
    }
  }, [loadComplementaryProducts, hydrated]);

  return (
    <div className="pb-4">
      {products.length > 0
        ? <>
            <Typography fontType={settings.title_font as 1 | 2 | 3}>{settings.title}</Typography>
            <main className="relative py-2">
              {products.length === 1 && settings.style === "small"
                ? <div>
                    {products?.map((upsellProduct) =>
                      settings.style === "small"
                        ? <ProductCardFlat key={upsellProduct.id} product={upsellProduct} />
                        : <ProductCardContainer key={upsellProduct.id} product={upsellProduct} />
                    )}
                  </div>
                : <div
                    className={clsx(
                      "scrollbar-none -my-8 grid snap-x snap-mandatory scroll-pl-8 grid-flow-col-dense gap-4 overflow-x-auto py-8 "
                    )}
                    style={{
                      gridAutoColumns: settings.style === "small" ? "170px" : "calc(50% - 8px)",
                    }}
                  >
                    {products?.map((upsellProduct) =>
                      settings.style === "small"
                        ? <ProductCardSmall key={upsellProduct.id} product={upsellProduct} />
                        : <ProductCardContainer key={upsellProduct.id} product={upsellProduct} />
                    )}
                    <ScrollBar itemCount={products.length} />
                  </div>}
            </main>
          </>
        : null}
    </div>
  );
};
