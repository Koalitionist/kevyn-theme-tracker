import { ProductQuickViewImageGallery } from "/product-quick-view.image_gallery";
import { cart } from "cart";
import { useGlobalProducts } from "global-stores";
import { JSONParse } from "utils";
import { render } from "preact";
import { useCallback, useEffect, useRef } from "react";
import { initProductStore, ReactProductState } from "product";
import { DynamicProductBuyButtons } from "product.dynamic_buy_buttons";
import { ProductComplementaryItems } from "product.complementary";
import { ProductDescription } from "product.description";
import { ProductBuyButtons } from "product.buy_buttons";
import { ProductImage } from "product.image";
import { ProductInventorySlider } from "product.inventory";
import { PaymentTerms } from "product.payment_terms";
import { ProductPreOrder } from "product.pre_order";
import { ProductPrice } from "product.price";
import { ProductQuantitySelector } from "product.quantity_selector";
import { ProductRating } from "product.rating";
import { ProductShare } from "product.share";
import { ProductSideEffects } from "product.side-effects";
import { ProductSku } from "product.sku";
import { ProductTitle } from "product.title";
import { ProductVariantSelector } from "product.variant_selector";
import { ProductVendor } from "product.vendor";
import { ProductBlocks, ProductBlocksBuy_buttons, ProductBlocksComplementary, ProductBlocksDescription, ProductBlocksDynamic_buy_buttons, ProductBlocksImage, ProductBlocksInventory, ProductBlocksPayment_terms, ProductBlocksPre_order, ProductBlocksTitle, ProductBlocksVariant_selector, ProductQuickViewBlocks, ProductQuickViewBlocksImage_gallery } from "_types";
import { create, StoreApi, UseBoundStore } from "zustand";

const productSection = document.querySelector<HTMLElement>(
  "[data-product-quick-view-product-handle]"
);
const productHandle = productSection?.dataset?.productQuickViewProductHandle ?? "";
const formId = productSection?.dataset?.productQuickViewFormId ?? "";

export const useProductQuickView = create(initProductStore(productSection, productHandle, formId));

if (productSection) {
  initProductQuickView();
}

function ProductQuickViewPreloadEvents({
  useProduct,
}: {
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}) {
  const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct, hydrated }) => ({
    getAsyncProduct,
    hydrated,
  }));

  const productImagesLoaded = useRef([]);
  const updateProduct = useProduct((state) => state?.updateProduct);

  useEffect(() => {
    if (hydrated) {
      document
        .querySelectorAll<HTMLElement>("[data-quick-view-product]")
        .forEach((productElement) => {
          const productHandle = productElement.dataset.quickViewProduct;
          const button = productElement.querySelector<HTMLButtonElement>(
            "[data-product-quick-view-add-button]"
          );

          if (!button || button?.disabled) return;

          if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(async (entries, observer) => {
              for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (!entry.isIntersecting) return;
                observer.unobserve(entry.target);

                const product = await getAsyncProduct(productHandle);

                const withImage = product?.featured_media?.src;
                if (withImage && !productImagesLoaded.current.includes(productHandle)) {
                  productImagesLoaded.current.push(productHandle);

                  const image = document.createElement("img");
                  image.src = `${product?.featured_media?.src}&width=180`;
                }
              }
            });
            observer.observe(productElement);
          }
        });
    }
  }, [hydrated]);

  const handleClick = useCallback((e) => {
    const disableCartOpen = e.target.closest("[data-quick-view-product]")?.dataset
      ?.productCardNoAutoCart;
    const spinner = e.currentTarget.querySelector("[data-loading-spinner]");

    console.log({ disableCartOpen });
    spinner?.classList?.remove("opacity-0");

    const productHandle: string = e.target.closest("[data-product-quick-view-add-button]")?.dataset
      ?.productQuickViewAddButton;
    e.preventDefault();
    getAsyncProduct(productHandle)
      .then(async (p) => {
        if (p) {
          if (p.variants.length > 1) {
            updateProduct(p, !disableCartOpen);
            setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
          }
          if (p.variants.length <= 1) {
            await cart.add(
              {
                items: [
                  {
                    id: p.selected_or_first_available_variant.id,
                    quantity: 1,
                  },
                ],
              },
              true
            );
          }
        }

        spinner?.classList?.add("opacity-0");
      })
      .catch((e) => {
        spinner?.classList?.add("opacity-0");
      });
  }, [getAsyncProduct, updateProduct]);

  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>("[data-product-quick-view-add-button]")
      .forEach((productDrawerButton) => {
        productDrawerButton.addEventListener("click", handleClick);
      });

    return () => {
      document
        .querySelectorAll<HTMLElement>("[data-product-quick-view-add-button]")
        .forEach((productDrawerButton) => {
          productDrawerButton.removeEventListener("click", handleClick);
        });
    };
  }, [handleClick]);

  useEffect(() => {
    const MutationObserver = window.MutationObserver || window["WebKitMutationObserver"];

    // define a new observer
    const mutationObserver = new MutationObserver((e) => {
      e?.forEach((record) =>
        record.addedNodes.forEach(async (node) => {
          if (node?.dataset?.quickViewProduct) {
            const productElement = node as HTMLElement;

            const productHandle = productElement.dataset.quickViewProduct;
            const button = productElement.querySelector<HTMLButtonElement>(
              "[data-product-quick-view-add-button]"
            );

            if (!button || button?.disabled) return;

            const product = await getAsyncProduct(productHandle);

            const withImage = product?.featured_media?.src;
            if (withImage && !productImagesLoaded.current.includes(productHandle)) {
              productImagesLoaded.current.push(productHandle);

              const image = document.createElement("img");
              image.src = `${product?.featured_media?.src}&width=180`;
            }

            button.addEventListener("click", handleClick);
          }
        })
      );
    });

    if (hydrated) {
      // have the observer observe foo for changes in children
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }
    return () => {
      mutationObserver.disconnect();
    };
  }, [handleClick, hydrated]);

  return null;
}

function initProductQuickView() {
  productSection.querySelectorAll<HTMLElement>(`[data-product-block]`).forEach((block) => {
    const type = block.dataset.productBlock as
      | ProductQuickViewBlocks["type"]
      | "side_effects"
      | "preload_products";
    const settings = block.dataset.blockSettings ? JSONParse(block.dataset.blockSettings) : null;

    switch (type) {
      case "image_gallery": {
        block.innerHTML = "";
        render(
          <ProductQuickViewImageGallery
            useProduct={useProductQuickView}
            settings={settings as ProductQuickViewBlocksImage_gallery["settings"]}
          />,
          block
        );
        return;
      }

      case "payment_terms": {
        const eventBlock = block.querySelector("[data-product-block-payment-terms-events]");

        render(
          <PaymentTerms
            container={block}
            useProduct={useProductQuickView}
            settings={settings as ProductBlocksPayment_terms["settings"]}
          />,
          eventBlock
        );
        return;
      }
      case "text":
        return;
      case "title":
        block.innerHTML = "";
        render(
          <ProductTitle
            useProduct={useProductQuickView}
            settings={settings as ProductBlocksTitle["settings"]}
          />,
          block
        );
        return;
      case "vendor":
        render(<ProductVendor useProduct={useProductQuickView} />, block);
        return;
      case "description":
        render(
          <ProductDescription
            settings={settings as ProductBlocksDescription["settings"]}
            useProduct={useProductQuickView}
          />,
          block
        );
        return;
      case "share":
        render(<ProductShare useProduct={useProductQuickView} />, block);
        return;
      case "custom_liquid":
        return;
      case "collapsible_tab":
        return;
      case "rating":
        render(<ProductRating useProduct={useProductQuickView} />, block);
        return;
      case "complementary":
        render(
          <ProductComplementaryItems
            settings={settings as ProductBlocksComplementary["settings"]}
            useProduct={useProductQuickView}
          />,
          block
        );
        return;
      case "icon_with_text":
        return;
      case "price": {
        block.innerHTML = "";
        render(<ProductPrice useProduct={useProductQuickView} />, block);
        return;
      }
      case "variant_selector": {
        block.innerHTML = "";
        render(
          <ProductVariantSelector
            useProduct={useProductQuickView}
            settings={settings as ProductBlocksVariant_selector["settings"]}
          />,
          block
        );
        return;
      }
      case "sku": {
        block.innerHTML = "";
        render(<ProductSku useProduct={useProductQuickView} />, block);
        return;
      }
      case "quantity_selector": {
        block.innerHTML = "";
        render(<ProductQuantitySelector useProduct={useProductQuickView} />, block);
        return;
      }
      case "buy_buttons": {
        block.innerHTML = "";
        render(
          <ProductBuyButtons
            useProduct={useProductQuickView}
            settings={settings as ProductBlocksBuy_buttons["settings"]}
          />,
          block
        );
        return;
      }
      case "dynamic_buy_buttons": {
        const eventBlock = block.querySelector("[data-product-block-dynamic-button-events]");
        render(
          <DynamicProductBuyButtons
            container={block}
            useProduct={useProductQuickView}
            settings={settings as ProductBlocksDynamic_buy_buttons["settings"]}
          />,
          eventBlock
        );
        return;
      }
      case "inventory": {
        block.innerHTML = "";
        render(
          <ProductInventorySlider
            settings={settings as ProductBlocksInventory["settings"]}
            useProduct={useProductQuickView}
          />,
          block
        );
        return;
      }
      case "side_effects": {
        block.innerHTML = "";
        render(
          <ProductSideEffects
            useProduct={useProductQuickView}
            productSection={productSection}
            cartDrawer={true}
          />,
          block
        );
        return;
      }
      case "preload_products": {
        block.innerHTML = "";
        render(<ProductQuickViewPreloadEvents useProduct={useProductQuickView} />, block);
        return;
      }
      case "pre_order": {
        block.innerHTML = "";
        render(
          <ProductPreOrder
            settings={settings as ProductBlocksPre_order["settings"]}
            useProduct={useProductQuickView}
          />,
          block
        );
        return;
      }
    }
  });
}
