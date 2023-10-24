import clsx from "clsx";
import { cart } from "cart";
import { useCartDrawer, useGlobalProducts } from "global-stores";
import { Image } from "image";
import { JSONParse } from "utils";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { CartDrawerBlocksRoute_protection_product } from "_types";

export const RouteProtection: FC<{
  settings: CartDrawerBlocksRoute_protection_product["settings"];
}> = ({ settings }) => {
  const { lineItems, adjustItem, loading } = useCartDrawer((state) => ({
    lineItems: state.cartData.items,
    adjustItem: state.adjustItem,
    loading: state.loading,
  }));
  const [autoLoading, setAutoLoading] = useState(true);
  const [added, setAdded] = useState(
    lineItems.some((item) => item.variant_id === +settings.variant_id)
  );
  const loadingRef = useRef<NodeJS.Timeout>(null);
  const product = settings.products[0];

  const variant = product?.variants?.find((variant) => variant.id === +settings.variant_id);

  const lineItemTotal = lineItems.reduce(
    (acc, item) => (item.variant_id === +settings.variant_id ? acc : acc + item.final_line_price),
    0
  );

  const price = !settings.use_advanced_pricing
    ? variant.price
    : lineItemTotal > +settings.percentage_threshold
    ? lineItemTotal * (+settings.percentage / 100)
    : settings.price;

  const handleToggle = useCallback(() => {
    const variantLineItemIndex = lineItems.findIndex(
      (item) => item.variant_id === +settings.variant_id
    );
    const variantLineItem = lineItems[variantLineItemIndex];
    if (added && variantLineItem) {
      setAdded(false);
      adjustItem(variantLineItem, -variantLineItem.quantity, variantLineItemIndex);
      return;
    }
    setAdded(true);
    cart.add(
      {
        items: [
          {
            id: +settings.variant_id,
            quantity: 1,
          },
        ],
      },
      false
    );
    return;
  }, [added, adjustItem, lineItems, settings.variant_id]);

  useEffect(() => {
    const isLineItem = lineItems.some((item) => item.variant_id === +settings.variant_id);

    setAutoLoading((added && !isLineItem) || (!added && isLineItem));

    if (!loading) {
      loadingRef.current = setTimeout(
        () => {
          if (!loading && added && !isLineItem) {
            setAdded(false);
          }
          if (!loading && !added && isLineItem) {
            setAdded(true);
          }
        },
        1000
      );
    }

    if (loading && loadingRef.current) {
      clearTimeout(loadingRef.current);
    }
  }, [added, lineItems, loading, settings.variant_id]);

  if (lineItems.length === 0 && !settings.empty_cart_show) {
    return null;
  }

  if (!settings.content__show) {
    return null;
  }

  return (
    <div className="mt-4 grid grid-cols-[32px_1fr_auto] items-center gap-2">
      <picture className="relative h-8 w-8">
        {product?.featured_image
          ? <Image
              alt={settings.title || product?.title}
              src={product?.featured_image}
              width={60}
              className="h-full w-full object-cover"
            />
          : null}
      </picture>
      <div className="ml-2">
        <h4 className="text-[13px] font-semibold">{settings.title || product.title}</h4>
        <p className="mt-1 text-[11px] leading-[1.7]">{settings.description}</p>
      </div>
      <div className="ml-2 grid gap-1.5 text-right">
        <span
          className="mr-2 text-xs font-bold"
          dangerouslySetInnerHTML={{ __html: window.formatMoney(price) }}
        ></span>
        <button
          disabled={autoLoading}
          type="button"
          className="group relative ml-auto inline-flex h-4 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-1 focus:ring-primary-bg/80 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
          role="switch"
          aria-checked="false"
          onClick={handleToggle}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-full w-full rounded-md bg-white"
          ></span>
          <span
            aria-hidden="true"
            className={clsx(
              " pointer-events-none absolute mx-auto h-3 w-7 rounded-full transition-colors duration-200 ease-in-out",
              added ? "bg-primary-bg" : "bg-theme-text/10"
            )}
          ></span>
          <span
            aria-hidden="true"
            className={clsx(
              " pointer-events-none absolute left-0 inline-block h-4 w-4 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
              added ? "translate-x-[18px]" : "translate-x-0"
            )}
          ></span>
        </button>
      </div>
    </div>
  );
};

export const initRouteProtectionItems = () => {
  const cartPageRouteProtection = document.querySelector("[data-cart-page-route-protection]");
  document.querySelectorAll<HTMLElement>("[data-route-protection]").forEach((element) => {
    const settings = JSONParse<CartDrawerBlocksRoute_protection_product["settings"]>(
      element.dataset.routeProtectionSettings
    );
    if (!settings?.products?.[0]?.variants?.length) {
      return;
    }
    render(<RouteProtection settings={settings} />, element);

    if (cartPageRouteProtection) {
      render(<RouteProtection settings={settings} />, cartPageRouteProtection);
    }
  });
};
