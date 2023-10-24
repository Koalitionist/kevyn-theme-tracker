import { ProductCardFlat } from "product-card-flat";
import { ProductCardFlatWide } from "product-card-flat-wide";
import { ProductCardSmall } from "product-card-small";
import { useCartDrawer, useGlobalProducts } from "global-stores";
import { ScrollBar } from "scrollbar";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { CartDrawerSection } from "_types";
import { _Product_liquid } from "_types";

export function PromotionalItems({ settings }: { settings: CartDrawerSection["settings"] }) {
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));
  const { getUntransformedAsyncProduct, hydrated } = useGlobalProducts(
    ({ getUntransformedAsyncProduct, hydrated }) => ({
      getUntransformedAsyncProduct,
      hydrated,
    })
  );

  const [products, setProducts] = useState([
    ...settings.cart__recommended_products
      .map((product) => window.transformProducts(product))
      .filter((product) => !product.hidden)
      .sort((a, b) => a.price_min - b.price_min),
  ]);

  const loadPromotionalItems = useCallback(async () => {
    const productsWithData = await Promise.all(
      [...(cartData.items ?? []).slice(0).reverse()].map((p) =>
        getUntransformedAsyncProduct(p.handle)
      )
    );

    let productsToLoad: (_Product_liquid & {
      timestamp?: number;
      hidden?: boolean;
    })[] = [];

    productsWithData.forEach((product) => {
      console.log(product);
      const complementaryProducts = (
        settings.cart__recommended_products_source === "complementary"
          ? product.metafields?.["shopify--discovery--product_recommendation"]
              ?.complementary_products ?? []
          : product.metafields?.["shopify--discovery--product_recommendation"]?.related_products ??
            []
      ) as _Product_liquid[];
      productsToLoad = [...productsToLoad, ...complementaryProducts];
    });

    if (!settings.cart__recommended_products_hide_upsell_products || productsToLoad.length === 0) {
      productsToLoad = [...productsToLoad, ...settings.cart__recommended_products];
    }

    const finalProducts = await Promise.all(
      productsToLoad
        ?.filter((p) => !cartData.items.some((item) => +item.product_id === +p.id))
        ?.map((product) => window.transformProducts(product))
        ?.filter((product) => !product.hidden)
        ?.filter((p, index, arr) => arr.findIndex((p2) => p2.id === p.id) === index)
        ?.slice(0, settings.cart__recommended_products_quantity)
        ?.map((p) => getUntransformedAsyncProduct(p.handle))
    );

    /*const unfilteredCartItems = [
      ...productsWithData
        .map(
          (item) =>
            getUntransformedAsyncProduct(item.handle) as unknown as _Product_liquid & {
              timestamp?: number;
              hidden?: boolean;
            }
        )

        .map(
          (product) =>
            (product.metafields?.["shopify--discovery--product_recommendation"]
              ?.complementary_products ?? []) as _Product_liquid[]
        )
        .flat(),
      ...settings.cart__recommended_products,
    ]?.filter((p) => !cartData.items.some((item) => +item.product_id === +p.id));

    const finalProducts = unfilteredCartItems
      ?.filter((p, index) => unfilteredCartItems.findIndex((p2) => p2.id === p.id) === index)
      .sort((a, b) => a.price_min - b.price_min);*/

    setProducts(
      finalProducts
        .map((product) => window.transformProducts(product))
        .filter((product) => !product.hidden)
    );
  }, [
    cartData.items,
    settings.cart__recommended_products,
    settings.cart__recommended_products_hide_upsell_products,
    settings.cart__recommended_products_quantity,
    settings.cart__recommended_products_source,
  ]);

  useEffect(() => {
    if (hydrated) {
      loadPromotionalItems();
    }
  }, [loadPromotionalItems, hydrated]);

  return (
    <>
      {products.length
        ? <>
            <div className="cart-title pt-4 sm:mx-4">You may also like</div>

            <main className="relative py-4 sm:mx-4">
              <div className="grid gap-6 ">
                {products
                  ?.filter((product) => product.available)
                  ?.slice(0, settings.cart__recommended_products_quantity)
                  ?.sort((a, b) => a.price_min - b.price_min)
                  ?.map((upsellProduct) => {
                    return (
                      <div className="border-b border-b-gray-300 pb-6" key={upsellProduct.id}>
                        <ProductCardFlatWide product={upsellProduct} disableCartOpen />
                      </div>
                    );
                  })}
                {/*<ScrollBar itemCount={products?.length} />*/}
              </div>
            </main>
          </>
        : null}
    </>
  );
}
