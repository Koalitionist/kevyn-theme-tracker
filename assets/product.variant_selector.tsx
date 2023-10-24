import clsx from "clsx";
import { useGlobalSettings } from "global-stores";
import { CheckMarkIcon, ChevronUpDownIcon, CloseIcon } from "icons";
import { Image } from "image";
import { toKebabCase } from "utils";
import React, { FC, useCallback } from "react";
import { ReactProductState } from "product";
import { ProductBlocksVariant_selector, ProductBlocksVariant_upsell } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductVariantSelector: FC<{
  settings: ProductBlocksVariant_selector["settings"];
  upsellSettings?: ProductBlocksVariant_upsell["settings"] | null;
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct, upsellSettings }) => {
  const { product, selectedVariant, formId, setSelectedVariant, options, setOptionsVariant } =
    useProduct(
      ({ product, selectedVariant, formId, setSelectedVariant, options, setOptionsVariant }) => ({
        product,
        selectedVariant,
        formId,
        setSelectedVariant,
        options,
        setOptionsVariant,
      })
    );
  const { product_data__hide_oos_variants, product_data__variants_color_swatches } =
    useGlobalSettings();

  const getColorSwatch = useCallback((value: string, optionIndex) => {
    const variantWithImage = product?.variants.find(
      (variant) => variant.options[optionIndex] === value && variant.featured_media?.src
    );

    const [namespace, key] = product_data__variants_color_swatches.trim().split(".");

    const variantWithMetafield = product?.variants.find(
      (variant) => variant.options[optionIndex] === value && variant?.metafields?.[namespace]?.[key]
    );

    switch (settings.color_selector__source) {
      case "via_option": {
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
      case "via_option_then_image": {
        if (variantWithImage) {
          return `var(--color-swatch--${toKebabCase(value)}, url("${
            variantWithImage?.featured_media?.src
          }&width=${settings.color_selector_size}&height=${settings.color_selector_size}"))`;
        }
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
      case "via_image": {
        if (variantWithImage) {
          return `url(${variantWithImage?.featured_media?.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
        }
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
      case "via_metafield": {
        if (variantWithMetafield) {
          return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
        }
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
      case "via_image_then_metafield": {
        if (variantWithImage) {
          return `url(${variantWithImage?.featured_media?.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
        }
        if (variantWithMetafield) {
          return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
        }
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
      case "via_metafield_then_image": {
        if (variantWithMetafield) {
          return `${variantWithMetafield?.metafields?.[namespace]?.[key]}`;
        }
        if (variantWithImage) {
          return `url(${variantWithImage?.featured_media?.src}&width=${settings.color_selector_size}&height=${settings.color_selector_size})`;
        }
        return `var(--color-swatch--${toKebabCase(value)}, ${value})`;
      }
    }
    // eslint-disable-next-line max-len
  }, [product?.variants, product_data__variants_color_swatches, settings.color_selector__source, settings.color_selector_size]);

  if (
    settings?.image_selector &&
    product?.variants?.length <= 18 &&
    product?.variants?.every((v) => v.featured_media?.preview_image) &&
    product?.variants?.filter((variant) => !product_data__hide_oos_variants || variant.available)
      ?.length > 0
  ) {
    if (product?.variants.length === 1 && product?.variants?.[0]?.option1 === "Default Title") {
      return null;
    }

    return (
      <div>
        <h3 className="text-sm font-semibold">{product?.options.join(" / ")}:</h3>
        <div className="relative pt-6">
          <fieldset className="group grid grid-cols-[repeat(auto-fill,3.5rem)] gap-1">
            {product?.variants
              ?.filter((variant) => !product_data__hide_oos_variants || variant.available)
              ?.map((variant) => (
                <label className="cursor-pointer" key={variant.id}>
                  <input
                    type="radio"
                    name="variant-image-selector"
                    value={variant.id}
                    form={formId}
                    checked={variant.id === selectedVariant?.id}
                    className="peer absolute appearance-none outline-none hfa:outline-none"
                    onChange={() => {
                      setSelectedVariant(variant.id);
                    }}
                    disabled={settings.disable_unavailable && !variant.available}
                  />
                  <picture
                    data-product-vs-variant-title={variant.title}
                    className="flex h-14 w-14 overflow-hidden rounded-theme-md border-2 border-transparent bg-theme-bg before:absolute peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-theme-text/60 peer-disabled:hf:opacity-70 b:pointer-events-none b:left-0 b:top-0 b:text-xs b:text-theme-text/80 b:opacity-0 b:content-[attr(data-product-vs-variant-title)] peer-checked:b:opacity-100 hf:b:!opacity-100 group-hfa:b:opacity-0 peer-hfwa:border-primary-outline"
                  >
                    <Image
                      src={`${variant.featured_media?.preview_image?.src}&width=60&height=60`}
                      alt={variant.featured_media?.alt ?? variant.title}
                      className="pointer-events-none h-full w-full object-cover object-center"
                    />
                  </picture>
                </label>
              ))}
          </fieldset>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-2">
      {product?.variants?.filter((variant) => !product_data__hide_oos_variants || variant.available)
        ?.length <= 0 ||
      (product?.variants?.length === 1 && product?.variants?.[0]?.option1 === "Default Title")
        ? null
        : <>
            {product?.options_with_values?.map(({ name, position, values }) => {
              const index = position - 1;
              const isColorSelector =
                settings?.color_selector &&
                settings?.color_list
                  .split(",")
                  .map((color) => color.trim().toLowerCase())
                  .includes(name.toLowerCase());
              const isUpsellCheckbox = upsellSettings && upsellSettings?.option_name === name;

              if (isUpsellCheckbox) {
                return null;
                /*return (
                  <div key={name} className="relative">
                    <fieldset className="group flex flex-wrap gap-1.5">
                      {values.map((value) => {
                        const isUpsellVariant = upsellSettings.value_name === value;
                        const noUpsellVariantValue = values.find(
                          (value) => value !== upsellSettings.value_name
                        );
                        if (!isUpsellVariant) return null;

                        return (
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
                                  settings?.disable_unavailable &&
                                  !product?.variants?.some((variant) => {
                                    switch (index) {
                                      case 0: {
                                        return (
                                          variant.options[index] === value && variant.available
                                        );
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
                            <span className="ml-2">{upsellSettings.value_label || value}</span>
                          </label>
                        );
                      })}
                    </fieldset>
                  </div>
                );*/
              }

              if (isColorSelector) {
                return (
                  <div key={name} className="relative order-first">
                    <h3 className="text-sm font-semibold">{name}</h3>
                    <fieldset className="group mt-2 flex flex-wrap gap-2">
                      {values.map((value) => {
                        const notAvailable = !product?.variants?.some((variant) => {
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
                        });

                        const unavailable = !product?.variants?.some(
                          (variant) => variant.options[index] === value && variant.available
                        );

                        if (product_data__hide_oos_variants && unavailable) {
                          return null;
                        }

                        return (
                          <label
                            key={value}
                            className="relative cursor-pointer"
                            style={{
                              borderRadius:
                                settings.color_selector_radius >= 0
                                  ? `${settings.color_selector_radius}px`
                                  : `9999px`,
                            }}
                            data-tooltip={value}
                            title={value}
                          >
                            <input
                              type="radio"
                              name={`variant-selector-${product?.id}-${name}`}
                              className="peer absolute hidden appearance-none outline-none hfa:outline-none"
                              value={value}
                              onChange={() => {
                                setOptionsVariant(index, value);
                              }}
                              checked={options[index] === value}
                              disabled={settings?.disable_unavailable && notAvailable}
                            />

                            <span
                              className={clsx(
                                "flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-gray-300 ring-2 ring-transparent ring-offset-1 peer-checked:ring-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 hf:ring-primary-outline peer-disabled:hf:opacity-70 md:h-8 md:w-8",
                                notAvailable && "variant-not-available"
                              )}
                              style={{
                                borderRadius:
                                  settings.color_selector_radius >= 0
                                    ? `${settings.color_selector_radius}px`
                                    : `9999px`,
                                width: `${settings.color_selector_size}px`,
                                height: `${settings.color_selector_size}px`,
                                background: getColorSwatch(value, index),

                                /*    settings.color_selector_via_variant_image

                                  ? `url(${
                                      product?.variants.find(
                                        (variant) => variant.options[index] === value
                                      )?.featured_media?.src
                                    }&width=${settings.color_selector_size}&height=${
                                      settings.color_selector_size
                                    })`
                                  : product_data__variants_color_swatches
                                  ? (product?.variants?.find((v) => v.options[index] === value)
                                      ?.metafields[
                                      product_data__variants_color_swatches?.split(".")?.[0]
                                    ][
                                      product_data__variants_color_swatches?.split(".")?.[1]
                                    ] as string) ??
                                    `var(--color-swatch--${toKebabCase(value)}, ${value})`
                                  : `var(--color-swatch--${toKebabCase(value)}, ${value})`,*/
                              }}
                            ></span>
                          </label>
                        );
                      })}
                    </fieldset>
                  </div>
                );
              }
              if (settings.default_type === "radio") {
                return (
                  <div key={name} className="relative">
                    <h3 className="text-sm font-semibold">{name}</h3>
                    <fieldset className="group flex flex-wrap gap-1.5">
                      {values.map((value) => {
                        const notAvailable = !product?.variants?.some((variant) => {
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
                        });

                        const unavailable = !product?.variants?.some(
                          (variant) => variant.options[index] === value && variant.available
                        );

                        if (product_data__hide_oos_variants && unavailable) {
                          return null;
                        }

                        return (
                          <label key={value} className="cursor-pointer select-none">
                            <input
                              type="radio"
                              name={`variant-selector-${product?.id}-${name}`}
                              value={value}
                              onChange={() => {
                                setOptionsVariant(index, value);
                              }}
                              checked={options[index] === value}
                              disabled={settings.disable_unavailable && notAvailable}
                              className="peer absolute appearance-none outline-none hfa:outline-none"
                            />
                            <span
                              className={clsx(
                                "label--primary--outline peer-checked:label--primary label-item min-w-[34px] truncate whitespace-nowrap peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-primary-outline peer-disabled:hf:opacity-70",
                                notAvailable && "variant-not-available"
                              )}
                            >
                              {value}
                            </span>
                          </label>
                        );
                      })}
                    </fieldset>
                  </div>
                );
              }
              return (
                <label key={name} className="relative">
                  <span className="text-sm font-semibold">{name}</span>
                  <div className="relative w-full p-0">
                    <select
                      className="input--primary--outline input-element grid w-full appearance-none pr-6 font-button"
                      onChange={(e) => {
                        setOptionsVariant(index, (e.target as HTMLSelectElement)?.value);
                      }}
                      value={options[index]}
                    >
                      {values.map((value) => {
                        const notAvailable = !product?.variants?.some((variant) => {
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
                        });

                        const unavailable = !product?.variants?.some(
                          (variant) => variant.options[index] === value && variant.available
                        );

                        if (product_data__hide_oos_variants && unavailable) {
                          return null;
                        }
                        return (
                          <option
                            key={value}
                            value={value}
                            className="disabled:text-theme-text/50"
                            selected={options[index] === value}
                            disabled={settings.disable_unavailable && notAvailable}
                          >
                            {value}
                          </option>
                        );
                      })}
                    </select>
                    <div className="pointer-events-none absolute right-2 top-0 flex h-full items-center justify-center">
                      <ChevronUpDownIcon className="h-5 w-5" />
                    </div>
                  </div>
                </label>
              );
            })}
          </>}
    </div>
  );
};
