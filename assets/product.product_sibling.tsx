import { useGlobalProducts } from "global-stores";
import { ChevronUpDownIcon } from "icons";
import { Image } from "image";
import { toKebabCase } from "utils";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { ReactProductState } from "product";
import { ProductBlocksProduct_sibling } from "_types";
import { _Product_liquid } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductSibling: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
  settings: ProductBlocksProduct_sibling["settings"];
}> = ({ useProduct, settings }) => {
  const { getProduct, hydrated, getAsyncProduct } = useGlobalProducts(
    ({ getProduct, hydrated, getAsyncProduct }) => ({
      getProduct,
      getAsyncProduct,
      hydrated,
    })
  );
  const { product, productSiblings, setSiblingProduct } = useProduct(
    ({ product, productSiblings, setSiblingProduct }) => ({
      product,
      productSiblings,
      setSiblingProduct,
    })
  );
  const [siblingProducts, setSiblingProducts] = useState<_Product_liquid[]>([]);

  const siblingGroup = useMemo(() => {
    return productSiblings?.find((group) => group.products.some((p) => p.id === product.id));
  }, [product.id, productSiblings]);

  const loadSiblingProducts = useCallback(async () => {
    if (!siblingGroup) {
      setSiblingProducts([]);
      return;
    }
    const productsWithData = await Promise.all(
      siblingGroup.products?.map((product) => getAsyncProduct(product.handle))
    );

    setSiblingProducts((current) =>
      current.length !== productsWithData.length ? productsWithData : current
    );
  }, [siblingGroup]);

  useEffect(() => {
    if (hydrated && siblingGroup) {
      loadSiblingProducts();
    }
  }, [hydrated, siblingGroup]);

  if (!siblingGroup) {
    return <></>;
  }

  const options = siblingGroup.options.split(",").map((option) => option.trim());

  switch (settings.selector) {
    case "image":
      return (
        <div>
          <h3 className="text-sm font-semibold">{siblingGroup.title}:</h3>
          <div className="relative pt-6">
            <fieldset className="group grid grid-cols-[repeat(auto-fill,3.5rem)] gap-1">
              {siblingGroup.products.map((sibling, index) => {
                return (
                  <label className="cursor-pointer" key={sibling.id}>
                    <input
                      type="radio"
                      name="product-sibling-selector"
                      value={sibling.id}
                      checked={sibling.id === product.id}
                      className="peer absolute appearance-none outline-none hfa:outline-none"
                      onChange={() => {
                        const siblingProduct = getProduct(sibling.handle);

                        if (!siblingProduct) {
                          return null;
                        }
                        setSiblingProduct(siblingProduct);
                      }}
                    />
                    <picture
                      data-product-sibling-title={
                        siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                      }
                      className="flex h-14 w-14 overflow-hidden rounded-theme-md border-2 border-transparent bg-theme-bg before:absolute peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-theme-text/60 peer-disabled:hf:opacity-70 b:pointer-events-none b:left-0 b:top-0 b:text-xs b:text-theme-text/80 b:opacity-0 b:content-[attr(data-product-sibling-title)] peer-checked:b:opacity-100 hf:b:!opacity-100 group-hfa:b:opacity-0 peer-hfwa:border-primary-outline"
                    >
                      <Image
                        src={`${sibling.image}&width=60&height=60`}
                        alt={
                          siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                        }
                        className="pointer-events-none h-full w-full object-cover object-center"
                      />
                    </picture>
                  </label>
                );
              })}
            </fieldset>
          </div>
        </div>
      );
    case "color":
      return (
        <div>
          <h3 className="text-sm font-semibold">{siblingGroup.title}:</h3>
          <fieldset className="group mt-2 flex flex-wrap gap-2">
            {siblingGroup.products.map((sibling, index) => {
              return (
                <label
                  key={siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                  className="cursor-pointer rounded-full border border-theme-text/50"
                  title={siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                >
                  <input
                    type="radio"
                    name="product-sibling-selector"
                    className="peer absolute appearance-none outline-none hfa:outline-none"
                    value={
                      siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                    }
                    onChange={() => {
                      const siblingProduct = getProduct(sibling.handle);

                      if (!siblingProduct) {
                        return null;
                      }
                      setSiblingProduct(siblingProduct);
                    }}
                    checked={sibling.id === product.id}
                  />

                  <span
                    className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full ring-2 ring-transparent ring-offset-1 peer-checked:ring-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 svg:opacity-0 peer-checked:svg:opacity-100 hf:ring-primary-outline peer-disabled:hf:opacity-70 md:h-8 md:w-8"
                    style={{
                      background: `var(--color-swatch--${toKebabCase(
                        siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                      )}, ${
                        siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                      })`,
                    }}
                  ></span>
                </label>
              );
            })}
          </fieldset>
        </div>
      );
    case "radio":
      return (
        <div>
          <h3 className="text-sm font-semibold">{siblingGroup.title}:</h3>
          <fieldset className="group mt-2 flex flex-wrap gap-2">
            {siblingGroup.products.map((sibling, index) => {
              return (
                <label
                  key={siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                  className="cursor-pointer select-none"
                  title={siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                >
                  <input
                    type="radio"
                    name="product-sibling-selector"
                    className="peer absolute appearance-none outline-none hfa:outline-none"
                    value={
                      siblingGroup.title_type === "metafield" ? sibling.option : options[index]
                    }
                    onChange={() => {
                      const siblingProduct = getProduct(sibling.handle);

                      if (!siblingProduct) {
                        return null;
                      }
                      setSiblingProduct(siblingProduct);
                    }}
                    checked={sibling.id === product.id}
                  />

                  <span className="label--primary--outline peer-checked:label--primary min-w-[34px] truncate whitespace-nowrap peer-checked:border-theme-text peer-disabled:cursor-not-allowed peer-disabled:opacity-60 hf:border-primary-outline peer-disabled:hf:opacity-70">
                    {siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                  </span>
                </label>
              );
            })}
          </fieldset>
        </div>
      );
    case "select":
      return (
        <label className="relative">
          <span className="text-sm font-semibold">{siblingGroup.title}:</span>
          <select
            className="input--primary--outline relative isolate grid w-full appearance-none pr-6 accent-primary-bg"
            onChange={(e) => {
              const sibling = getProduct(`${e.currentTarget.value}`);

              if (!sibling) {
                return null;
              }

              setSiblingProduct(sibling);
            }}
          >
            {siblingGroup.products.map((sibling, index) => {
              return (
                <option
                  key={siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                  value={sibling.id}
                  className="disabled:text-theme-text/50"
                  selected={sibling.id === product.id}
                >
                  {siblingGroup.title_type === "metafield" ? sibling.option : options[index]}
                </option>
              );
            })}
          </select>
          <ChevronUpDownIcon className="pointer-events-none absolute bottom-0 right-2 z-10 my-2.5 h-5 w-5 text-theme-text/70" />
        </label>
      );
  }
};
