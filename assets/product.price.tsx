import { FC, useState, useEffect } from "react";
import { ReactProductState } from "product";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductPrice: FC<{ useProduct: UseBoundStore<StoreApi<ReactProductState>> }> = ({
  useProduct,
}) => {
  const { selectedVariant } = useProduct(({ selectedVariant }) => ({
    selectedVariant,
  }));
  const [customDiscount, setCustomDiscount] = useState(0);
  const [hasDiscountCustomer, setHasDiscountCustomer] = useState(false);
  const [customDiscountedPrice, setCustomDiscountedPrice] = useState(0);
  const [customCompareAtPrice, setCustomCompareAtPrice] = useState(0);

  useEffect(() => {
    const price = selectedVariant?.price;

    const tags = window.product.tags;

    if (tags.indexOf("no-discount") !== -1) {
      return;
    }

    const customerTags = window.customerTags || [];

    let discount = 0;
    let hasCustomDiscount = false;

    if (customerTags.indexOf("Pro") !== -1) {
      hasCustomDiscount = true;
      discount = window.proDiscount;
    } else if (customerTags.indexOf("Industry") !== -1) {
      hasCustomDiscount = true;
      discount = window.industryDiscount;
    } else if (customerTags.indexOf("Production") !== -1) {
      hasCustomDiscount = true;
      discount = window.productionDiscount;
    }

    if (hasCustomDiscount) {
      const discount_percentage = discount / 100;
      const discountedPrice = price - price * discount_percentage;
      setCustomDiscount(discount_percentage);
      setHasDiscountCustomer(true);
      setCustomCompareAtPrice(price);
      setCustomDiscountedPrice(discountedPrice);
    }
  }, [selectedVariant]);

  return (
    <div className="product-price grid auto-cols-min grid-flow-col-dense items-baseline gap-2 whitespace-nowrap">
      <span
        dangerouslySetInnerHTML={{
          __html: window.formatMoney(
            hasDiscountCustomer && customDiscount ? customDiscountedPrice : selectedVariant?.price
          ),
        }}
      ></span>
      {hasDiscountCustomer && customDiscount
        ? <span
            className="text-xs text-theme-text/50 line-through"
            dangerouslySetInnerHTML={{
              __html: window.formatMoney(customCompareAtPrice),
            }}
          ></span>
        : selectedVariant?.compare_at_price > selectedVariant?.price
        ? <span
            className="text-xs text-theme-text/50 line-through"
            dangerouslySetInnerHTML={{
              __html: window.formatMoney(selectedVariant?.compare_at_price),
            }}
          ></span>
        : null}
    </div>
  );
};
