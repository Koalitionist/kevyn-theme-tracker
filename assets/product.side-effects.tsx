import { useCartDrawer } from "global-stores";
import { _Cart_fetch_api_Items } from "types";
import { JSONParse, shortUUID } from "utils";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ReactProductState } from "product";
import { _Product_liquid } from "_types";
import { StoreApi, UseBoundStore } from "zustand";
import equal from "fast-deep-equal";

export const ProductSideEffects: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
  productSection: HTMLElement;
  cartDrawer?: boolean;
}> = ({ useProduct, productSection, cartDrawer }) => {
  const cartItemRef = useRef<_Cart_fetch_api_Items[]>([]);
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));
  const [tryAgainCount, setTryAgainCount] = useState(0);
  const { updateProduct, selectedVariant, product, setSelectedSellingPlan, selectedSellingPlan } =
    useProduct(
      ({
        updateProduct,
        selectedVariant,
        product,
        setSelectedSellingPlan,
        selectedSellingPlan,
      }) => ({
        updateProduct,
        selectedVariant,
        product,
        setSelectedSellingPlan,
        selectedSellingPlan,
      })
    );

  const productData = useRef<_Product_liquid>(
    window.transformProducts(
      JSONParse(
        (
          document.querySelector(`[data-product-json="${product?.handle}"]`) ??
          document.querySelector(`[data-product-json]`)
        ).innerHTML
      )
    )
  );

  useEffect(() => {
    const product = productData.current;

    if (!window.Shopify.designMode && !equal(cartData.items, cartItemRef.current)) {
      cartItemRef.current = cartData.items;
      if (!cartDrawer) {
        updateProduct({
          ...product,
          variants: product?.variants?.map((variant) => {
            const lineItemQuantity = cartData?.items?.reduce(
              (acc, lineItem) => {
                if (lineItem.variant_id === variant.id) {
                  acc += lineItem.quantity;
                }
                return acc;
              },
              0
            );
            if (lineItemQuantity === 0) return variant;

            const inventory_quantity = variant.inventory_quantity - lineItemQuantity;
            return {
              ...variant,
              available:
                inventory_quantity > 0 ||
                variant.inventory_policy === "continue" ||
                variant.inventory_management !== "shopify",
              inventory_quantity,
            };
          }),
        });
      }
    }
  }, [cartData.items, cartDrawer, updateProduct]);

  useEffect(() => {
    if (window?.location?.pathname?.includes(`/products/${product?.handle ?? shortUUID()}`)) {
      const otherQueryParams = window.location.search
        .split(/[?&]/gi)
        .filter((param) => param && !/^variant=/gi.test(param));

      window.history.replaceState(
        null,
        null,
        `?variant=${selectedVariant?.id}${otherQueryParams.map((param) => `&${param}`).join("")}`
      );
    }
  }, [product?.handle, selectedVariant?.id]);

  const handleHashChange = useCallback(() => {
    setTimeout(
      () => {
        const selling_plan =
          window.location.search
            ?.split(/[?&]/gi)
            ?.filter((param) => param && /^selling_plan=/gi.test(param))
            ?.map((searchParams) => searchParams.split("=")?.at(-1))?.[0] ?? "";

        setSelectedSellingPlan(selling_plan);
      },
      100
    );
  }, [setSelectedSellingPlan]);

  useEffect(() => {
    handleHashChange();
    setTimeout(
      () => {
        handleHashChange();
      },
      1000
    );
    setTimeout(
      () => {
        handleHashChange();
      },
      4000
    );
  }, [handleHashChange]);

  useEffect(() => {
    document.addEventListener("change", handleHashChange);
    return () => {
      document.removeEventListener("change", handleHashChange);
    };
  }, [handleHashChange]);

  useEffect(() => {
    const mutationObserver = new MutationObserver((e) => {
      e?.forEach((record) => {
        const value = (record.target as HTMLInputElement).value;
        if (!value) return;
        const sellingPlan = value ? `&selling_plan=${value}` : "";

        setSelectedSellingPlan(value);
        if (window.location.pathname.includes(`/products/${product?.handle ?? shortUUID()}`)) {
          const otherQueryParams = window.location.search
            .split(/[?&]/gi)
            .filter((param) => param && !/^variant=/gi.test(param))
            .filter((param) => param && !/^selling_plan=/gi.test(param));

          window.history.replaceState(
            null,
            null,
            `?variant=${selectedVariant?.id}${sellingPlan}${otherQueryParams
              .map((param) => `&${param}`)
              .join("")}`
          );
        }
      });
    });

    const sellingPlans = [
      ...productSection.querySelectorAll(
        'input[name="selling_plan"]:not([data-selling-plan-output])'
      ),
    ];

    sellingPlans.forEach((appInput) => {
      mutationObserver.observe(appInput, {
        attributes: true,
      });
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, [product?.handle, productSection, selectedVariant?.id, setSelectedSellingPlan, tryAgainCount]);

  useEffect(() => {
    const mutationObserver = new MutationObserver((e) => {
      e?.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (
            node?.parentElement?.querySelectorAll(
              'input[name="selling_plan"]:not([data-selling-plan-output])'
            )
          ) {
            setTryAgainCount((prev) => (prev += 1));
          }
        });
      });
    });

    mutationObserver.observe(productSection, {
      subtree: true,
      childList: true,
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, [productSection]);

  useEffect(() => {
    const blocks = productSection.querySelector<HTMLElement>("[data-product-blocks]");
    blocks?.setAttribute("data-product-blocks", product.handle);
  }, [product.handle, productSection]);

  useEffect(() => {
    if (selectedVariant?.available) {
      productSection.style.removeProperty("--display-variant-available");
      productSection.style.setProperty("--display-variant-unavailable", "none");
    } else {
      productSection.style.removeProperty("--display-variant-unavailable");
      productSection.style.setProperty("--display-variant-available", "none");
    }
  }, [productSection.style, selectedVariant?.available]);

  return null;
};
