import { ProductCardContainer } from "product-card";
import { useGlobalProducts } from "global-stores";
import { ScrollContainer } from "scroll-container";
import { JSONParse } from "utils";
import React, { FC, useCallback, useEffect, useState } from "react";
import { render } from "react-dom";
import { ProductsScrollableSection } from "_types";
import { _Product_liquid } from "_types";

const ProductsScrollableRecentlyViewed: FC<{
  shopifySection: HTMLElement;
  settings: ProductsScrollableSection["settings"];
}> = ({ shopifySection, settings }) => {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState<_Product_liquid[]>([]);
  const { recentlyViewed, hydrated, currentProductHandle, getProduct } = useGlobalProducts(
    ({ recentlyViewed, hydrated, currentProductHandle, getProduct }) => ({
      recentlyViewed,
      hydrated,
      currentProductHandle,
      getProduct,
    })
  );

  const getRecentlyViewedProducts = useCallback(() => {
    const currentProducts = recentlyViewed
      ?.filter((handle) => {
        const product = getProduct(handle);
        if (!product || product.hidden) {
          return false;
        }
        if (settings.hide_out_of_stock) {
          return `${handle}` !== `${currentProductHandle}` && product.available;
        }
        return `${handle}` !== `${currentProductHandle}`;
      })
      .map((handle) => getProduct(handle))
      .slice(0, +settings.product_limit);

    setRecentlyViewedProducts(currentProducts);
    if (currentProducts.length) {
      shopifySection.style.setProperty("--scrollable-display", "block");
    } else {
      shopifySection.style.setProperty("--scrollable-display", "none");
    }
  }, [currentProductHandle, recentlyViewed, settings.hide_out_of_stock, settings.product_limit]);

  useEffect(() => {
    if (hydrated && recentlyViewed.length) {
      getRecentlyViewedProducts();
    }
  }, [getRecentlyViewedProducts, hydrated, recentlyViewed.length]);

  return (
    <>
      {recentlyViewedProducts.length
        ? <ScrollContainer
            count={recentlyViewedProducts?.length ?? 0}
            containerOverflow={settings.container_overflow}
            centerItems={settings.center_products}
          >
            {recentlyViewedProducts.map((product) => {
              return (
                <ProductCardContainer
                  key={product.id}
                  product={product}
                  className="w-[calc(100vw/2)] min-w-[180px] md:w-[calc(var(--layout-page-width)/4)]"
                />
              );
            })}
          </ScrollContainer>
        : null}
    </>
  );
};

const ProductsScrollableRecommended: FC<{
  shopifySection: HTMLElement;
  settings: ProductsScrollableSection["settings"];
  productId: string | number;
}> = ({ shopifySection, settings, productId }) => {
  const [relatedProducts, setRelatedProducts] = useState<_Product_liquid[]>([]);
  const { setProducts } = useGlobalProducts(({ setProducts }) => ({ setProducts }));

  const getRelatedProducts = useCallback(async () => {
    const products = await fetch(
      `${window.Shopify.routes.root}recommendations/products?product_id=${productId}&section_id=product-recommendations&limit=6&intent=${settings.product_source}`
    )
      .then((content) => content.text())
      .then((htmlString) => {
        const dataElement = document.createElement("div");
        dataElement.innerHTML = htmlString;
        return (
          JSONParse<{ type: "related" | "complementary"; products: _Product_liquid[] }>(
            dataElement.querySelector("script")?.innerHTML
          )?.products ?? []
        );
      });

    setProducts(products);

    setRelatedProducts(
      products
        .map((product) => window.transformProducts(product))
        .filter((product) => !product.hidden)
    );
  }, [productId, settings.product_source]);

  useEffect(() => {
    if (!relatedProducts.length) {
      getRelatedProducts();
    }
  }, [getRelatedProducts, relatedProducts.length]);

  useEffect(() => {
    if (relatedProducts.length) {
      shopifySection.style.setProperty("--scrollable-display", "block");
    }
  }, [relatedProducts.length, shopifySection.style]);

  return (
    <>
      {relatedProducts.length
        ? <ScrollContainer
            count={relatedProducts?.length ?? 0}
            containerOverflow={settings.container_overflow}
            centerItems={settings.center_products}
          >
            {relatedProducts.slice(0, settings.product_limit).map((product) => {
              return (
                <ProductCardContainer
                  key={product.id}
                  product={window.transformProducts(product)}
                  className="w-[calc(100vw/2)] min-w-[180px] md:w-[calc(var(--layout-page-width)/4)]"
                />
              );
            })}
          </ScrollContainer>
        : null}
    </>
  );
};

export const initProductsScrollable = async () => {
  document
    .querySelectorAll<HTMLElement>("[data-products-scrollable-recently-viewed]")
    .forEach((container) => {
      const settings = JSONParse<ProductsScrollableSection["settings"]>(
        container.dataset.productsScrollableRecentlyViewed
      );
      render(
        <ProductsScrollableRecentlyViewed
          shopifySection={container.closest(".shopify-section")}
          settings={settings}
        />,
        container
      );
    });

  document
    .querySelectorAll<HTMLElement>("[data-products-scrollable-recommended]")
    .forEach((container) => {
      const settings = JSONParse<ProductsScrollableSection["settings"]>(
        container.dataset.productsScrollableRecommended
      );
      const productId = container.dataset.productsScrollableProductId;
      render(
        <ProductsScrollableRecommended
          shopifySection={container.closest(".shopify-section")}
          settings={settings}
          productId={productId}
        />,
        container
      );
    });
};
