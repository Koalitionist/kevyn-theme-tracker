import { ProductCardFlatWide } from "/product-card-flat-wide";
import { ProductCardSmall } from "/product-card-small";
import clsx from "clsx";
import { GiftItemType, useCartDrawer, useGlobalProducts } from "global-stores";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "icons";
import { Image } from "image";
import { ScrollBar } from "scrollbar";
import { JSONParse } from "utils";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { useProductQuickView } from "product-quick-view";
import { GiftWithPurchaseSection } from "_types";
import { _Product_liquid } from "_types";

export const GiftItems: FC = () => {
  const giftItemsRoot = document.querySelector<HTMLScriptElement>("[data-gift-with-purchase]");
  const { settings, blocks: giftItemBlocks } = JSONParse<{
    settings: GiftWithPurchaseSection["settings"];
    blocks: GiftItemType[];
  }>(giftItemsRoot?.innerHTML);
  const [showGiftSection, setShowGiftSection] = useState(true);
  const giftItemLengthRef = useRef(0);
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));
  const { updateProduct } = useProductQuickView(({ updateProduct }) => ({ updateProduct }));
  const { getAsyncProduct, hydrated, getProduct } = useGlobalProducts(
    ({ getAsyncProduct, hydrated, getProduct }) => ({
      getAsyncProduct,
      hydrated,
      getProduct,
    })
  );

  const [discountProducts, setDiscountProducts] = useState<
    (_Product_liquid & { discount: number })[]
  >([]);

  console.log(giftItemBlocks);
  const getGiftItems = useCallback(async () => {
    let giftItems = [];

    for (let i = 0; i < giftItemBlocks.length; i++) {
      const {
        type,
        target,
        target_collection,
        target_products,
        receives_discount_percentage,
        receives_products,
        receives_quantity,
      } = giftItemBlocks[i];

      let targetValue = 0;
      let receivedQuantity = 0;
      for (let j = 0; j < cartData?.items.length; j++) {
        const lineItem = cartData?.items[j];

        if (receives_products?.includes(lineItem.handle)) {
          receivedQuantity += lineItem.quantity;
        }

        if (target_products?.includes(lineItem.handle)) {
          targetValue += type === "price" ? lineItem?.final_line_price : lineItem?.quantity;
          continue;
        }

        const product = await getAsyncProduct(lineItem.handle);
        if (product?.collections?.some((c) => c?.handle === target_collection)) {
          targetValue += type === "price" ? lineItem?.final_line_price : lineItem?.quantity;
        }
      }

      const targetReached = targetValue >= target;
      const receivedReached = receivedQuantity >= receives_quantity;

      if (targetReached && !receivedReached) {
        const blockDiscountProducts = (
          await Promise.all(receives_products?.map((handle) => getAsyncProduct(handle)))
        )?.map((product) => ({
          ...product,
          discount: receives_discount_percentage,
        }));

        giftItems = [...giftItems, ...blockDiscountProducts];
      }

      console.log(giftItems);
      setDiscountProducts((current) => (current.length !== giftItems.length ? giftItems : current));
    }
  }, [cartData?.items, giftItemBlocks]);

  useEffect(() => {
    if (hydrated && giftItemBlocks?.length > 0 && cartData.item_count > 0) {
      getGiftItems();
    }
  }, [hydrated, giftItemBlocks?.length, cartData.item_count]);

  const handleViewProduct = useCallback(async (e, adjustedProduct: _Product_liquid) => {
    if (updateProduct) {
      e.preventDefault();

      updateProduct(adjustedProduct);
      // document.dispatchEvent(new Event("product-quick-view:open"));
      setTimeout(() => document.dispatchEvent(new Event("product-quick-view:open")), 1);
    }
  }, [updateProduct]);

  return (
    <>
      {discountProducts?.length
        ? <>
            <div className="h-4"></div>
            <div className={clsx("-m-4 bg-[#F5E8FF] p-4", showGiftSection && "")}>
              <div className="relative">
                <header className="flex items-baseline justify-between text-lg font-semibold">
                  <div>{settings.title}</div>
                  <button
                    className="flex items-center gap-1 p-1"
                    type="button"
                    onClick={(e) => {
                      setShowGiftSection((current) => !current);
                    }}
                  >
                    <ChevronLeftIcon
                      className={clsx(
                        "h-5 w-5 transition-all ease-linear",
                        showGiftSection ? "rotate-90" : "-rotate-90"
                      )}
                    />
                  </button>
                </header>
                {showGiftSection
                  ? <div className="grid gap-6 pb-2 pt-3">
                      {discountProducts.map(({ discount, ...product }) => {
                        if (!product?.available) return null;
                        product.variants = product?.variants?.map((v) => ({
                          ...v,
                          compare_at_price: v.compare_at_price || v.price,
                          price: v.price - v.price * (discount / 100),
                        }));
                        product.selected_or_first_available_variant = {
                          ...product?.selected_or_first_available_variant,
                          compare_at_price:
                            product?.selected_or_first_available_variant?.compare_at_price ||
                            product?.selected_or_first_available_variant?.price,
                          price:
                            product?.selected_or_first_available_variant?.price -
                            product?.selected_or_first_available_variant?.price * (discount / 100),
                        };
                        product.compare_at_price = product?.compare_at_price || product?.price;
                        product.compare_at_price_min =
                          product.compare_at_price_min || product?.price_min;
                        product.price = product?.price - product?.price * (discount / 100);
                        product.price_min =
                          product?.price_min - product?.price_min * (discount / 100);

                        return (
                          <div key={product?.id} className="border-b-300 border-b pb-6">
                            <ProductCardFlatWide product={product} disableCartOpen={true} />
                          </div>
                          /* <article
                            key={product?.id}
                            className="relative flex flex-col items-stretch space-y-1 "
                          >
                            <a
                              className="relative grid h-0 w-full pb-[100%] outline-none hf:outline-none"
                              href={`/products/${product?.handle}`}
                            >
                              <div
                                className={clsx(
                                  "absolute inset-0 h-full w-full overflow-hidden",
                                  !product?.featured_media && "opacity-0"
                                )}
                                style={{ background: "transparent" }}
                              >
                                {product?.featured_media?.src
                                  ? <Image
                                      src={`${product?.featured_media?.src}?width=200`}
                                      alt={product?.title}
                                      width={170}
                                      height={334}
                                      className="inset-0 h-full w-full object-cover "
                                    />
                                  : null}
                              </div>
                              {product?.images?.[1]
                                ? <div className="absolute inset-0 h-full w-full overflow-hidden opacity-0 transition-all duration-75 hf:opacity-100">
                                    <Image
                                      src={`${product?.images[1]}?width=200`}
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

                            <div className="text-xl" data-card-price="">
                              <div className=" product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
                                {product?.price_min <= 0
                                  ? <>Free</>
                                  : <>
                                      {product?.price_varies &&
                                      product?.compare_at_price_min < product?.price_min
                                        ? <span className="text-xs font-normal">On Sale from:</span>
                                        : product?.price_varies
                                        ? <span className="text-xs font-normal">From:</span>
                                        : null}
                                      <span
                                        className=""
                                        dangerouslySetInnerHTML={{
                                          __html: window.formatMoney(product?.price_min),
                                        }}
                                      ></span>
                                      {product?.compare_at_price > product?.price
                                        ? <span
                                            className="text-xs text-theme-text/50 line-through"
                                            dangerouslySetInnerHTML={{
                                              __html: window.formatMoney(product?.compare_at_price),
                                            }}
                                          ></span>
                                        : null}
                                    </>}
                              </div>
                            </div>

                            <div className="mt-auto flex w-full flex-1 flex-col justify-end self-end text-center">
                              <a
                                className="button-primary mt-2 w-full px-3 py-1 text-sm outline-none hf:outline-none"
                                href={`/products/${product?.handle}`}
                                onClick={(e) => handleViewProduct(e, product)}
                              >
                                {product?.available
                                  ? <span className="whitespace-nowrap">View</span>
                                  : <span className="">Sold Out</span>}
                              </a>
                            </div>
                          </article>*/
                        );
                      })}
                      <ScrollBar itemCount={discountProducts?.length} />
                    </div>
                  : null}
              </div>
            </div>
          </>
        : null}
    </>
  );
};

export function initGiftDiscounts() {
  const giftItemsRoot = document.querySelector<HTMLElement>("[data-cart-drawer-gifts]");

  if (giftItemsRoot) {
    giftItemsRoot.innerHTML = "";
    render(<GiftItems />, giftItemsRoot);
  }
}
