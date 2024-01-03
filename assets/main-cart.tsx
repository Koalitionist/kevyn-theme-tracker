import clsx from "clsx";
import { useGlobalProducts, useCartDrawer } from "global-stores";
import { MinusIcon, PlusIcon, TimerIcon } from "icons";
import { Image } from "image";
import { _Cart_fetch_api_Items } from "types";
import { capitalize } from "utils";
import React, { FC, useEffect, useMemo, useState } from "react";
import { _Variant_liquid } from "_types";

export const CartLineItems = () => {
  const { cartData } = useCartDrawer(({ cartData }) => ({ cartData }));

  return (
    <>
      {cartData && cartData?.items?.length
        ? <>
            {cartData?.items?.map((line_item, index, line_items) => {
              if (line_item?.quantity === 0) return null;
              return (
                <CartLineItem
                  key={line_item?.key}
                  line_item={line_item}
                  index={index}
                  line_items={line_items}
                />
              );
            })}
          </>
        : null}
    </>
  );
};

export const CartLineItem: FC<{
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

  const routeProtection = routeProtectionProducts.find(
    (block) => block?.products?.[0]?.handle === line_item?.handle
  );

  const isSingleQuantityRouteProtectionItem = !!routeProtection?.limit_quantity;

  useEffect(() => {
    if (!variant && hydrated) {
      getAsyncProduct(line_item?.handle).then((p) => {
        setVariant(p?.variants?.find(({ id }) => id === line_item?.variant_id));
      });
    }
    debugger;
  }, [hydrated, line_item?.handle, line_item?.variant_id, variant]);

  return (
    <tr className="group hf:bg-gray-50">
      <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="grid w-full items-center gap-4 sm:grid-cols-[100px_1fr]">
          <Image
            src={`${line_item?.image}&crop=center&height=100&width=100`}
            alt={line_item?.featured_image?.alt ?? line_item?.title}
            width={100}
            height={100}
            className={clsx(
              "w-[100px]",
              !line_item?.image && "pointer-events-none hidden overflow-hidden opacity-0"
            )}
          />

          <a className="block flex-1" href={line_item?.url}>
            <h3 className="font-semibold group-hf:underline">{line_item?.product_title}</h3>
            <h4 className="text-xs uppercase tracking-wide text-gray-500">
              {line_item?.variant_title}
            </h4>

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

            <div className="mt-1 text-sm font-medium">
              <span
                className={clsx(
                  "text-theme-text/50 line-through",
                  line_item?.original_price === line_item?.discounted_price &&
                    "pointer-events-none hidden overflow-hidden opacity-0"
                )}
                dangerouslySetInnerHTML={{
                  __html: `${window.formatMoney(line_item?.compare_at_price ? line_item?.compare_at_price :  line_item?.original_price)} `,
                }}
              ></span>
              <span
                className="font-bold text-primary-outline"
                dangerouslySetInnerHTML={{ __html: window.formatMoney(line_item?.final_price) }}
              ></span>
            </div>
            {line_item?.discounts?.length
              ? <div className="text-xs font-medium opacity-50">
                  {line_item?.discounts?.map((discount) => (
                    <div key={discount.title}>Discount: {discount.title}</div>
                  ))}
                </div>
              : null}
          </a>
        </div>
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-500 max-md:hidden sm:px-6">
        {line_item?.sku}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-right text-sm text-gray-500 max-sm:hidden sm:px-6">
        {isSingleQuantityRouteProtectionItem
          ? null
          : <div className="relative flex">
              <div className="mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold">
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
                  disabled={disableIncreaseQuantity || isSingleQuantityRouteProtectionItem}
                >
                  <span className="sr-only">Increase quantity by 1</span>
                  <PlusIcon className="h-2.5 w-2.5" />
                </button>
              </div>
              <span className="absolute left-0 top-full mt-0.5 block w-full text-center text-xs">
                <button
                  className="text-gray-400 hf:text-gray-500 hf:underline"
                  onClick={() => adjustItem(line_item, -line_item?.quantity, index)}
                >
                  Remove
                </button>
              </span>
            </div>}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-right text-sm font-medium text-gray-700 sm:px-6">
        <span
          dangerouslySetInnerHTML={{ __html: window.formatMoney(line_item?.final_line_price) }}
        ></span>
        <div className="mb-auto mt-4 sm:hidden">
          {isSingleQuantityRouteProtectionItem
            ? null
            : <div className="relative flex">
                <div className="mr-auto mt-2 flex select-none items-center space-x-2.5 rounded-theme border border-gray-300 px-1.5 py-0.5 text-[13px] font-semibold">
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
                    disabled={disableIncreaseQuantity || isSingleQuantityRouteProtectionItem}
                  >
                    <span className="sr-only">Increase quantity by 1</span>
                    <PlusIcon className="h-2.5 w-2.5" />
                  </button>
                </div>
                <span className="absolute left-0 top-full mt-0.5 block w-full text-center text-xs">
                  <button
                    className="text-gray-400 hf:text-gray-500 hf:underline"
                    onClick={() => adjustItem(line_item, -line_item?.quantity, index)}
                  >
                    Remove
                  </button>
                </span>
              </div>}
        </div>
      </td>
    </tr>
  );
};
