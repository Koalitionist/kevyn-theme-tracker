import { globalProducts } from "global-stores";
import { JSONParse } from "utils";
import { render } from "preact";
import React from "react";
import { ProductAddToCartBar } from "product-add-to-cart-bar";
import { ProductBuyButtons } from "product.buy_buttons";
import { ProductComplementaryItems } from "product.complementary";
import { ProductDescription } from "product.description";
import { DynamicProductBuyButtons } from "product.dynamic_buy_buttons";
import { ProductGalleryHorizontal, ProductGalleryVertical } from "product.gallery";
import { ProductImage } from "product.image";
import { ProductInventorySlider } from "product.inventory";
import { ProductPreOrder } from "product.pre_order";
import { ProductPrice } from "product.price";
import { ProductSibling } from "product.product_sibling";
import { ProductQuantitySelector } from "product.quantity_selector";
import { ProductRating } from "product.rating";
import { ProductShare } from "product.share";
import { ProductSideEffects } from "product.side-effects";
import { ProductSku } from "product.sku";
import { ProductTitle } from "product.title";
import { ProductVariantSelector } from "product.variant_selector";
import { ProductVariantUpsell } from "product.variant_upsell";
import { ProductVendor } from "product.vendor";
import { ProductBlocks, ProductBlocksBuy_buttons, ProductBlocksComplementary, ProductBlocksDescription, ProductBlocksDynamic_buy_buttons, ProductBlocksImage, ProductBlocksInventory, ProductBlocksPre_order, ProductBlocksProduct_sibling, ProductBlocksTitle, ProductBlocksVariant_selector, ProductBlocksVariant_upsell, ProductSection } from "_types";
import { _Product_liquid, _Variant_liquid } from "_types";
import { create as createReact } from "zustand";

export type ReactProductState = {
  product: _Product_liquid & { openCartAfterAdd: boolean };
  selectedVariant: _Variant_liquid;
  selectedSellingPlan?: number | string;
  setSelectedSellingPlan: (selling_plan: number | string) => void;
  formId: string;
  setSelectedVariant: (variantId: number) => void;
  setOptionsVariant: (optionIndex: number, value: string) => void;
  getOptionsVariant: (optionIndex: number, value: string) => _Variant_liquid | null;
  options: string[];
  setQuantity: (quantity: number) => void;
  quantity: number;
  updateProduct: (product: _Product_liquid, openCartAfterAdd?: boolean) => void;
  setSiblingProduct: (product: _Product_liquid) => void;
  productSiblings: ProductSiblingGroup[] | null;
};

export const initProductStore = (
  productSection: HTMLElement,
  productHandle: string,
  formId: string,
  providedProduct?: _Product_liquid
) => {
  const getProduct = globalProducts.getState().getProduct;

  const product = providedProduct ?? getProduct(productHandle);

  const productSiblings = JSONParse(
    document.querySelector("[data-product-siblings]")?.innerHTML
  ) as ProductSiblingGroup[];

  if (!product) {
    return null;
  }

  window.product = product;

  let selling_plan =
    window.location.search
      ?.split(/[?&]/gi)
      ?.filter((param) => param && /^selling_plan=/gi.test(param))
      ?.map((searchParams) => searchParams.split("=")?.at(-1))?.[0] ?? "";
  const selling_plan_groups = product?.selling_plan_groups || [];

  if (
    selling_plan &&
    !selling_plan_groups?.some((group) =>
      group?.selling_plans?.some((plan) => `${plan.id}` === `${selling_plan}`)
    )
  ) {
    selling_plan = null;
  }

  return (set, get) => {
    return {
      product: { ...product, openCartAfterAdd: true },
      productSiblings,
      formId,
      selectedVariant: product?.selected_or_first_available_variant,
      selectedSellingPlan: selling_plan,
      options: [...(product?.selected_or_first_available_variant?.options ?? [])],
      quantity: 1,
      setQuantity: (quantity) => set({ quantity }),
      setSelectedSellingPlan: (selling_plan_id) => {
        const sellingPlanGroups = get().product?.selling_plan_groups || [];
        if (
          sellingPlanGroups?.some((group) =>
            group?.selling_plans?.some((plan) => `${plan.id}` === `${selling_plan_id}`)
          )
        ) {
          set({ selectedSellingPlan: selling_plan_id });
          return;
        }

        if (get().product?.product?.requires_selling_plan) {
          set({ selectedSellingPlan: product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id });
          return;
        }
        set({ selectedSellingPlan: null });
      },
      setSelectedVariant: (variantId) => {
        const selectedVariant = get().product.variants.find((variant) => variant.id === variantId);

        set({
          selectedVariant,
          options: [...(selectedVariant?.options ?? [])],
          quantity: 1,
        });
      },
      setOptionsVariant: (optionIndex, value) => {
        let options = get().options;
        options[optionIndex] = value;
        const variants = get().product.variants;
        const selectedVariant =
          variants.find(
            (v) => v.options.every((option, index) => option === options[index]) && v.available
          ) ??
          variants.find((v) => v.options.every((option, index) => option === options[index])) ??
          variants.find((variant) => variant.options[optionIndex] === value && variant.available) ??
          variants.find((variant) => variant.available) ??
          variants.find((variant) => variant);

        options = [...(selectedVariant?.options ?? [])];

        set({
          options,
          selectedVariant,
          quantity: 1,
        });
      },
      getOptionsVariant: (optionIndex, value) => {
        const options = structuredClone(get().options);
        options[optionIndex] = value;

        return get().product.variants.find((v) =>
          v.options.every((option, index) => option === options[index])
        );
      },
      updateProduct: (product, openCartAfterAdd = true) => {
        const selectedVariant =
          product?.variants?.find((variant) => variant.id === get().selectedVariant?.id) ??
          product?.selected_or_first_available_variant ??
          product?.variants?.[0];
        let selectedSellingPlan = get().selectedSellingPlan;

        if (
          selectedSellingPlan &&
          !(product?.selling_plan_groups ?? [])?.some((group) =>
            group?.selling_plans?.some((plan) => `${plan.id}` === `${selectedSellingPlan}`)
          )
        ) {
          selectedSellingPlan = null;
        }

        if (product.requires_selling_plan && !selectedSellingPlan) {
          selectedSellingPlan = product?.selling_plan_groups?.[0]?.selling_plans?.[0]?.id;
        }

        set({
          options: [...(selectedVariant?.options ?? [])],
          product: { ...product, openCartAfterAdd },
          selectedVariant,
          selectedSellingPlan,
          quantity: 1,
        });
      },
      setSiblingProduct: (product) => {
        const selectedVariant =
          product.variants.find((variant) => variant.id === get().selectedVariant?.id) ??
          product.selected_or_first_available_variant ??
          product.variants[0];

        const otherQueryParams = window.location.search
          .split(/[?&]/gi)
          .filter((param) => !/^variant=/gi.test(param));

        window.history.replaceState(
          null,
          product.title,
          `${product.handle}?variant=${selectedVariant?.id}${otherQueryParams
            .map((param) => `&${param}`)
            .join("")}`
        );

        set({
          options: [...(selectedVariant?.options ?? [])],
          product: window.structuredClone(product),
          selectedVariant,
          quantity: 1,
        });
      },
    };
  };
};

export const initProducts = async () => {
  document.querySelectorAll<HTMLElement>("[data-product-handle]").forEach((productSection) => {
    initProduct(productSection);
  });
};

export type ProductSiblingGroup = {
  title: string;
  title_type: "list" | "metafield";
  options: string;
  products: { id: number; handle: string; image?: string; option?: string }[];
};

export const initProduct = (productSection: HTMLElement) => {
  const productHandle = productSection.dataset?.productHandle;
  const formId = productSection.dataset.productFormId;
  const localProduct: _Product_liquid = JSONParse(
    document.querySelector(`[data-product-json="${productHandle}"]`)?.innerHTML
  );

  const useProduct = createReact(
    initProductStore(productSection, productHandle, formId, window.transformProducts(localProduct))
  );

  const sectionSettings = JSONParse(
    productSection.querySelector(`[data-section-settings]`)?.innerHTML
  ) as ProductSection["settings"];

  productSection.querySelectorAll<HTMLElement>(`[data-product-block]`).forEach((block) => {
    const type = block.dataset.productBlock as ProductBlocks["type"] | "side_effects";
    const settings = block.dataset.blockSettings ? JSONParse(block.dataset.blockSettings) : null;
    const variantUpsell = productSection.querySelector<HTMLElement>(
      '[data-product-block="variant_upsell"]'
    );

    const variantUpsellSettings = variantUpsell
      ? JSONParse<ProductBlocksVariant_upsell["settings"]>(variantUpsell.dataset?.blockSettings)
      : null;

    switch (type) {
      case "payment_terms":
        return;
      case "popup":
        return;
      case "@app":
        return;
      case "text":
        return;
      case "title":
        // block.innerHTML = "";
        render(
          <ProductTitle
            useProduct={useProduct}
            settings={settings as ProductBlocksTitle["settings"]}
          />,
          block
        );
        return;
      case "vendor":
        // block.innerHTML = "";
        render(<ProductVendor useProduct={useProduct} />, block);
        return;
      case "description":
        // block.innerHTML = "";
        render(
          <ProductDescription
            settings={settings as ProductBlocksDescription["settings"]}
            useProduct={useProduct}
          />,
          block
        );
        return;
      case "share":
        // block.innerHTML = "";
        render(<ProductShare useProduct={useProduct} />, block);
        return;
      case "custom_liquid":
        return;
      case "collapsible_tab":
        return;
      case "rating":
        // block.innerHTML = "";
        render(<ProductRating useProduct={useProduct} />, block);
        return;
      case "complementary":
        // block.innerHTML = "";
        render(
          <ProductComplementaryItems
            settings={settings as ProductBlocksComplementary["settings"]}
            useProduct={useProduct}
          />,
          block
        );
        return;
      case "icon_with_text":
        return;
      case "price": {
        // block.innerHTML = "";
        render(<ProductPrice useProduct={useProduct} />, block);
        return;
      }
      case "variant_selector": {
        // block.innerHTML = "";
        render(
          <ProductVariantSelector
            useProduct={useProduct}
            settings={settings as ProductBlocksVariant_selector["settings"]}
            upsellSettings={variantUpsellSettings}
          />,
          block
        );
        return;
      }
      case "variant_upsell": {
        render(
          <ProductVariantUpsell
            useProduct={useProduct}
            settings={settings as ProductBlocksVariant_upsell["settings"]}
          />,
          block
        );
        return;
      }
      case "product_sibling": {
        // block.innerHTML = "";
        render(
          <ProductSibling
            useProduct={useProduct}
            settings={settings as ProductBlocksProduct_sibling["settings"]}
          />,
          block
        );
        return;
      }
      case "sku": {
        // block.innerHTML = "";
        render(<ProductSku useProduct={useProduct} />, block);
        return;
      }
      case "quantity_selector": {
        block.innerHTML = "";
        render(<ProductQuantitySelector useProduct={useProduct} />, block);
        return;
      }
      case "buy_buttons": {
        // block.innerHTML = "";
        render(
          <ProductBuyButtons
            useProduct={useProduct}
            settings={settings as ProductBlocksBuy_buttons["settings"]}
          />,
          block
        );
        return;
      }
      case "dynamic_buy_buttons": {
        const eventBlock = block.querySelector("[data-product-block-dynamic-button-events]");
        // console.log(eventBlock);
        render(
          <DynamicProductBuyButtons
            container={block}
            useProduct={useProduct}
            settings={settings as ProductBlocksDynamic_buy_buttons["settings"]}
          />,
          eventBlock
        );
        return;
      }
      case "inventory": {
        // block.innerHTML = "";
        render(
          <ProductInventorySlider
            settings={settings as ProductBlocksInventory["settings"]}
            useProduct={useProduct}
          />,
          block
        );
        return;
      }
      case "image": {
        render(
          <ProductImage
            settings={settings as ProductBlocksImage["settings"]}
            useProduct={useProduct}
          />,
          block
        );
        return;
      }
      case "pre_order": {
        block.innerHTML = "";
        render(
          <ProductPreOrder
            settings={settings as ProductBlocksPre_order["settings"]}
            useProduct={useProduct}
          />,
          block
        );
        return;
      }
      case "side_effects": {
        // block.innerHTML = "";
        render(
          <ProductSideEffects useProduct={useProduct} productSection={productSection} />,
          block
        );
        return;
      }
    }
  });

  productSection
    .querySelectorAll<HTMLElement>(`[data-product-media-gallery]`)
    .forEach((galleryElement) => {
      const type = galleryElement.dataset.productMediaGallery as "horizontal" | "vertical";

      switch (type) {
        case "horizontal":
          render(
            <ProductGalleryHorizontal settings={sectionSettings} useProduct={useProduct} />,
            galleryElement
          );
          return;
        case "vertical":
          render(
            <ProductGalleryVertical settings={sectionSettings} useProduct={useProduct} />,
            galleryElement
          );
          return;
      }
    });

  const root = document.querySelector<HTMLElement>("[data-product-add-to-cart-bar]");
  const productAddToCartBarUpsellProduct = root?.dataset?.productAddToCartBarUpsellProduct;

  if (root) {
    root.innerHTML = "";
    render(
      <ProductAddToCartBar
        useProduct={useProduct}
        upsellProductHandle={productAddToCartBarUpsellProduct}
      />,
      root
    );
  }
};
