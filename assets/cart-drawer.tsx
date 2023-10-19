import clsx from "clsx";
import { cartDrawer, useCartDrawer, useGlobalProducts } from "global-stores";
import { CloseIcon, MinusIcon, PlusIcon, TimerIcon } from "icons";
import { Image } from "image";
import { _Cart_fetch_api, _Cart_fetch_api_Items } from "types";
import { capitalize, JSONParse } from "utils";
import { render } from "preact";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { PromotionalItems } from "cart-drawer.promotional-items";
import { initRouteProtectionItems } from "cart-drawer.route-protection";
import { CartSideEffects } from "cart-drawer.side-effects";

import { initGiftDiscounts } from "gift-with-purchase";
import { CartLineItems } from "main-cart";
import { CartDrawerSection } from "_types";
import { _Variant_liquid } from "_types";

export const CartDrawerLineItems = () => {
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));

  return (
    <>
      {cartData && cartData.items?.length
        ? <>
            {cartData.items.map((line_item, index, line_items) => {
              if (line_item?.quantity === 0) return null;
              return (
                <CartDrawerLineItem
                  key={line_item?.key}
                  line_item={line_item}
                  index={index}
                  line_items={line_items}
                />
              );
            })}
          </>
        : ""}
    </>
  );
};

export const CartLastAddedItems = () => {
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));
  const [lastCartItems, setLastCartItems] = useState<_Cart_fetch_api_Items[]>([]);
  const timeout = useRef<NodeJS.Timeout>(null);

  useEffect(() => {
    if (!lastCartItems?.length && window?.lastCartItems?.length) {
      setLastCartItems(window.lastCartItems);
    }
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    timeout.current = setTimeout(
      () => {
        document.dispatchEvent(new CustomEvent("cart-added-modal:close"));
        setLastCartItems([]);
      },
      3000
    );
  }, [cartData.item_count, lastCartItems.length]);

  return (
    <div>
      {window.lastCartItems?.map((item) => (
        <div key={item.key} className="grid gap-4">
          <Image
            src={item?.featured_image?.url}
            width={50}
            height={50}
            alt={item?.featured_image?.alt ?? item.title}
          />
          <div className="product-card-title">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export const CartDrawerLineItem: FC<{
  line_item: _Cart_fetch_api_Items;
  index: number;
  line_items: _Cart_fetch_api_Items[];
}> = ({ line_items, line_item, index }) => {
  const { adjustItem, routeProtectionProducts } = useCartDrawer(
    ({ adjustItem, routeProtectionProducts }) => ({ adjustItem, routeProtectionProducts })
  );
  const [variant, setVariant] = useState<_Variant_liquid>(null);
  const { hydrated, getAsyncProduct } = useGlobalProducts(({ hydrated, getAsyncProduct }) => ({
    hydrated,
    getAsyncProduct,
  }));

  const routeProtection = routeProtectionProducts.find(
    (block) => block?.products?.[0]?.handle === line_item?.handle
  );

  const isSingleQuantityRouteProtectionItem = !!routeProtection?.limit_quantity;

  const disableIncreaseQuantity = useMemo(() => {
    if (!variant) return false;
    const { inventory_management, inventory_policy, inventory_quantity } = variant;

    const quantityInCart = line_items?.reduce(
      (acc, item) => {
        if (item.variant_id === line_item?.variant_id) {
          acc += item.quantity;
        }
        return acc;
      },
      0
    );

    const continueSelling = inventory_policy === "continue" || inventory_management !== "shopify";

    if (!continueSelling && quantityInCart >= inventory_quantity) {
      return true;
    }

    if (continueSelling) {
      const pre_order = variant.metafields?.smart?.pre_order;
      const pre_order_limit = +(variant.metafields?.smart?.pre_order_limit ?? 0);
      if (pre_order && quantityInCart >= pre_order_limit + inventory_quantity) {
        return true;
      }
    }

    return false;
  }, [line_item?.variant_id, line_items, variant]);

  useEffect(() => {
    if (!variant && hydrated) {
      getAsyncProduct(line_item?.handle).then((p) => {
        setVariant(p?.variants?.find(({ id }) => id === line_item?.variant_id));
      });
    }
  }, [hydrated, line_item?.handle, line_item?.variant_id, variant]);

  return (
    <article className="flex items-start space-x-5 border-b border-gray-200 py-6 sm:mx-4">
      <a
        className={clsx(
          "relative block self-center rounded-theme-sm",
          isSingleQuantityRouteProtectionItem ? "h-10 w-24" : "h-24 w-24"
        )}
        href={line_item?.url}
      >
        <Image
          src={`${line_item?.image}&crop=center&height=100&width=100`}
          width={100}
          height={100}
          className={clsx(
            "h-full w-full object-contain",
            !line_item?.image && "pointer-events-none hidden overflow-hidden opacity-0"
          )}
          alt={line_item?.featured_image?.alt ?? line_item?.title}
        />
      </a>
      <main className="flex flex-1 flex-col">
        <a className="product-card-title--small hf:underline" href={line_item?.url}>
          {line_item?.product_title}
        </a>

        {isSingleQuantityRouteProtectionItem
          ? null
          : <h4 className="text-xs text-gray-500 ">{line_item?.variant_title}</h4>}
        {Object.entries(line_item?.properties ?? {})
          ?.filter(([key]) => !/^_/gi.test(key))
          ?.map(([key, value]) => {
            if (key === "preorder") {
              return (
                <p key={key} className="mt-1 flex text-xs text-gray-600 opacity-70">
                  <TimerIcon className="mr-2 h-4 w-4" /> <span>{value}</span>
                </p>
              );
            }
            return (
              <p key={key} className="text-xs text-gray-600">
                {capitalize(key)}: {value}
              </p>
            );
          })}
        {line_item?.selling_plan_allocation?.selling_plan?.name
          ? <p className="text-xs text-gray-600">
              {line_item?.selling_plan_allocation?.selling_plan?.name}
            </p>
          : null}

        <div className="mt-1 text-sm font-medium">
          {isSingleQuantityRouteProtectionItem
            ? null
            : <span
                className={clsx(
                  "text-theme-text/50 line-through",
                  line_item?.original_price === line_item?.discounted_price &&
                    "pointer-events-none hidden overflow-hidden opacity-0"
                )}
                dangerouslySetInnerHTML={{
                  __html: `${window.formatMoney(line_item?.original_price)} `,
                }}
              ></span>}

          <span
            className="font-bold text-primary-outline"
            dangerouslySetInnerHTML={{ __html: window.formatMoney(line_item?.final_price) }}
          ></span>
        </div>
        {isSingleQuantityRouteProtectionItem
          ? null
          : line_item?.discounts?.length
          ? <div className="text-xs font-medium opacity-50">
              {line_item?.discounts?.map((discount) => (
                <div key={discount.title}>Discount: {discount.title}</div>
              ))}
            </div>
          : null}
        {isSingleQuantityRouteProtectionItem
          ? null
          : <div className="mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold">
              <button
                type="button"
                className="flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900"
                onClick={() => adjustItem(line_item, -1, index)}
              >
                <span className="sr-only">Decrease quantity by 1</span>
                <MinusIcon className="h-2.5 w-2.5" />
              </button>
              <span className="text-gray-800">{line_item?.quantity}</span>
              <button
                type="button"
                onClick={() => adjustItem(line_item, 1, index)}
                className="flex items-center justify-center p-1.5 text-gray-600 hf:text-gray-900"
                disabled={disableIncreaseQuantity}
              >
                <span className="sr-only">Increase quantity by 1</span>
                <PlusIcon className="h-2.5 w-2.5" />
              </button>
            </div>}
      </main>

      <button
        type="button"
        className="hf:text-theme-text/ ml-auto flex rounded-theme p-1 text-theme-text/90 transition-all "
        onClick={() => adjustItem(line_item, -line_item?.quantity, index)}
      >
        <span className="sr-only">Remove item from Cart</span>
        <CloseIcon className="h-6 w-6" />
      </button>
    </article>
  );
};

export const initLineItems = async () => {
  const cartDrawerLineItems = document.querySelector<HTMLElement>("[data-cart-drawer-line-items]");
  const cartLineItems = document.querySelector<HTMLElement>("[data-cart-line-items]");
  const cartSideEffects = document.querySelector<HTMLElement>("[data-cart-side-effects]");

  await cartDrawer.getState().initCart();

  if (cartDrawerLineItems) {
    cartDrawerLineItems.innerHTML = "";
    render(<CartDrawerLineItems />, cartDrawerLineItems);
  }
  if (cartLineItems) {
    render(<CartLineItems />, cartLineItems);
  }
  if (cartSideEffects) {
    render(<CartSideEffects />, cartSideEffects);
  }
};
export const initNonDrawerModal = async () => {
  const drawerAddedItems = document.querySelector<HTMLElement>("[data-drawer-added-items]");

  if (drawerAddedItems) {
    render(<CartLastAddedItems />, drawerAddedItems);
  }
};

export const initCart = async () => {
  initAnnouncementBars();
  initFreeShippingBar();
  initLineItems();
  initNonDrawerModal();
  initPromotionalItems();
  initRouteProtectionItems();
  initGiftDiscounts();
};

function initAnnouncementBars() {
  const announcementBars = document.querySelectorAll<HTMLElement>(
    "[data-announcement-bar]:not([data-initiated])"
  );

  announcementBars.forEach((announcementBar) => {
    announcementBar.setAttribute("data-initiated", "");
    let activeIndex = 0;

    displayAnnouncements();

    function displayAnnouncements() {
      [...announcementBar.querySelectorAll<HTMLElement>("[data-announcement-index]")].forEach(
        (announcement, i, arr) => {
          const index = +announcement.dataset.announcementIndex;
          const duration = +announcement.dataset.announcementDuration;
          const textColor = announcement.dataset.announcementText;
          const bgColor = announcement.dataset.announcementBg;

          if (arr.length === 1) {
            announcementBar.style.setProperty("--color-bg-hex", bgColor);
            announcementBar.style.setProperty("--color-text-hex", textColor);
            announcement.style.opacity = "1";
            announcement.style.pointerEvents = "auto";
            return;
          }

          if (activeIndex === index) {
            announcementBar.style.setProperty("--color-bg-hex", bgColor);
            announcementBar.style.setProperty("--color-text-hex", textColor);
            announcement.style.opacity = "1";
            announcement.style.pointerEvents = "auto";
            setTimeout(
              () => {
                activeIndex = activeIndex + 1 === arr.length ? 0 : activeIndex + 1;
                displayAnnouncements();
              },
              duration * 1000
            );
          }

          if (activeIndex !== index) {
            announcement.style.opacity = "0";
            announcement.style.pointerEvents = "none";
            announcement.tabIndex = -1;
          }
        }
      );
    }
  });
}

function initFreeShippingBar() {
  document
    .querySelectorAll<HTMLElement>("[data-free-shipping-bar-target]:not([data-initiated])")
    .forEach((shippingBar) => {
      shippingBar.setAttribute("data-initiated", "");

      const target = +shippingBar.dataset.freeShippingBarTarget;
      const type = shippingBar.dataset.freeShippingBarType as "item_count" | "total_price";
      const content = shippingBar.querySelector<HTMLElement>("[data-free-shipping-bar-content]");
      const message = content.dataset.freeShippingBarMessage;
      const messageSuccess = content.dataset.freeShippingBarMessageSuccess;
      const percentageSlider = shippingBar.querySelector<HTMLElement>(
        "[data-free-shipping-bar-percentage]"
      );

      document.addEventListener("cart:update", (event: CustomEvent<_Cart_fetch_api>) => {
        const current = event.detail[type];
        const difference = Math.max(target - current, 0);
        const percentage = Math.min((current / target) * 100, 100);
        percentageSlider.style.width = `${percentage}%`;

        /* TODO: Content in JS is not a great idea!! */
        if (percentage === 100) {
          content.innerHTML = messageSuccess.replace(/\[remaining]/gi, `${difference}`);
        }
        if (percentage < 100 && type === "item_count") {
          content.innerHTML = message.replace(/\[remaining]/gi, `${difference}`);
        }
        if (percentage < 100 && type === "total_price") {
          content.innerHTML = message.replace(/\[remaining]/gi, window.formatMoney(difference));
        }
      });
    });
}

function initPromotionalItems() {
  const promotionalItems = document.querySelector<HTMLElement>(
    "[data-cart-drawer-promotion-items]"
  );
  if (!promotionalItems) return;
  const settings = JSONParse(promotionalItems.querySelector("[data-section-settings]")?.innerHTML);
  if (settings) {
    render(
      <PromotionalItems settings={settings as CartDrawerSection["settings"]} />,
      promotionalItems
    );
  }
}
