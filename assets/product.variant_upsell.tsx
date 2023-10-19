import clsx from "clsx";
import { CheckMarkIcon } from "icons";
import { Image } from "image";
import React, { FC } from "react";
import { ReactProductState } from "product";
import { ProductBlocksVariant_upsell } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductVariantUpsell: FC<{
  settings: ProductBlocksVariant_upsell["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product, selectedVariant, getOptionsVariant, setOptionsVariant } = useProduct(
    ({ product, selectedVariant, setOptionsVariant, getOptionsVariant }) => ({
      product,
      selectedVariant,
      setOptionsVariant,
      getOptionsVariant,
    })
  );

  return (
    <div className="grid gap-2">
      {product?.variants?.length === 1
        ? null
        : product?.options_with_values?.map(({ name, position, values }) => {
            const index = position - 1;
            const isUpsellCheckbox = settings?.option_name === name;
            if (!isUpsellCheckbox) return null;

            if (!values.some((value) => value === settings.value_name)) return null;

            const noUpsellVariantValue = values.find((value) => value !== settings.value_name);
            const upsellVariant =
              selectedVariant.options[index] === settings.value_name
                ? selectedVariant
                : getOptionsVariant(index, settings.value_name);
            const downsellVariant =
              selectedVariant.options[index] !== settings.value_name
                ? selectedVariant
                : getOptionsVariant(index, noUpsellVariantValue);

            if (!upsellVariant || !noUpsellVariantValue) return null;

            const difference = upsellVariant?.price - selectedVariant.price;
            const downsellDifference = selectedVariant.price - downsellVariant?.price;

            return (
              <article
                key={name}
                className="relative flex flex-col items-stretch space-y-1 rounded-theme-sm border border-gray-400 p-4"
              >
                <div className="relative flex items-center">
                  <picture
                    className={clsx(
                      "relative mr-2 h-16 w-16 overflow-hidden",
                      !settings.image && "opacity-0"
                    )}
                    style={{ background: "transparent" }}
                  >
                    <Image
                      src={`${settings.image}`}
                      alt={settings?.value_label}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover "
                    />
                  </picture>
                  <h1 className="product-card-title--small inline-flex">{settings?.value_label}</h1>
                  {upsellVariant.id === selectedVariant.id
                    ? <div className="absolute right-4 top-4">
                        <CheckMarkIcon className="h-6 w-6 text-success" />
                      </div>
                    : null}
                </div>

                <div className="mt-auto flex w-full flex-1 flex-col justify-end self-end text-center">
                  <button
                    className="button-primary--outline group mt-2 flex w-full items-center justify-between px-3 py-2 text-sm outline-none disabled:opacity-50 hf:outline-none"
                    type="button"
                    disabled={!upsellVariant?.available}
                    onClick={(e) => {
                      setOptionsVariant(
                        index,
                        upsellVariant.id === selectedVariant.id
                          ? noUpsellVariantValue
                          : settings.value_name
                      );
                    }}
                  >
                    {!upsellVariant?.available
                      ? <span className="whitespace-nowrap">Not Available</span>
                      : upsellVariant.id !== selectedVariant.id
                      ? <span className="whitespace-nowrap">Add</span>
                      : <>
                          <span className="group-hover:hidden">Added</span>
                          <span className="hidden group-hover:inline-block">Remove</span>
                        </>}

                    <div className="text-xl" data-card-price="">
                      <div className="product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
                        {upsellVariant.id !== selectedVariant.id
                          ? <>
                              +
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: window.formatMoney(difference),
                                }}
                              />
                            </>
                          : <>
                              <span className="inline-grid auto-cols-min grid-flow-col-dense items-baseline gap-2 group-hover:hidden">
                                +
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: window.formatMoney(difference),
                                  }}
                                />
                              </span>
                              <span className="hidden auto-cols-min grid-flow-col-dense items-baseline gap-2 group-hover:inline-grid">
                                -
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: window.formatMoney(downsellDifference),
                                  }}
                                />
                              </span>
                            </>}
                      </div>
                    </div>
                  </button>
                </div>
              </article>
            );

            /*return (
                    <label
                      key={name}
                      className="items-center cursor-pointer flex text-sm {{ class | escape }}"
                    >
                      <span className="relative flex h-4 w-4">
                        <input
                          type="checkbox"
                          className="peer h-full w-full rounded-theme-sm border-2 border-primary-outline bg-theme-bg"
                          name={`variant-selector-${product?.id}-${name}`}
                          value={value}
                          onChange={() => {
                            setOptionsVariant(
                              index,
                              options[index] === value ? noUpsellVariantValue : value
                            );
                          }}
                          disabled={
                            !product?.variants?.some((variant) => {
                              switch (index) {
                                case 0: {
                                  return variant.options[index] === value && variant.available;
                                }
                                case 1: {
                                  return (
                                    variant.options[0] === options[0] &&
                                    variant.options[index] === value &&
                                    variant.available
                                  );
                                }
                                case 2: {
                                  return (
                                    variant.options[0] === options[0] &&
                                    variant.options[1] === options[1] &&
                                    variant.options[index] === value &&
                                    variant.available
                                  );
                                }
                              }
                              return false;
                            })
                          }
                          checked={options[index] === value}
                        />
                        {/!*<span className="absolute left-0 top-0 flex h-full w-full items-center justify-center opacity-0 peer-checked:opacity-100">
                              <CheckMarkIcon className={clsx("h-5 w-5")} />
                            </span>*!/}
                      </span>
                      <span className="ml-2">{settings.value_label || value}</span>
                    </label>
                  );*/
          })}
    </div>
  );
};
