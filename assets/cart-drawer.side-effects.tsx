import { useCartDrawer, useGlobalProducts } from "global-stores";
import { useDebouncedEffect } from "use-debounce-effect";
import { useEffect } from "react";
import { initCart } from "cart-drawer";

function useUpdateLoadingState() {
  const cartCountItems = document.querySelectorAll<HTMLElement>("[data-cart-item-count]");
  const loadingSpinner = document.querySelectorAll<HTMLElement>(
    `[data-drawer="cart"] [data-loading-spinner], [data-cart-content] [data-loading-spinner], [data-cart-loading-spinner]`
  );
  const cartTotals = document.querySelectorAll<HTMLElement>("[data-cart-total]");
  const { cartData, loading, routeProtectionProducts } = useCartDrawer(
    ({ cartData, loading, routeProtectionProducts }) => ({
      cartData,
      loading,
      routeProtectionProducts,
    })
  );

  useEffect(() => {
    cartTotals.forEach((cartTotal) => {
      if (cartData.total_discount > 0) {
        cartTotal.innerHTML = `<span class="inline-flex items-center">
                  <span class="line-through opacity-50 grayscale">${window.formatMoney(
                    cartData.original_total_price
                  )}</span>
                  <span class="ml-2">${window.formatMoney(cartData.total_price)}</span>
                </span>`;
      } else {
        cartTotal.innerHTML = window.formatMoney(cartData.total_price);
      }
    });
    if (loading) {
      loadingSpinner.forEach((spinner) => spinner.classList.remove("opacity-0"));
    }
    if (!loading) {
      loadingSpinner.forEach((spinner) => spinner.classList.add("opacity-0"));
    }
    cartCountItems.forEach((cartCounter) => {
      cartCounter.innerHTML = `${cartData.item_count}`;
    });

    const routeProtectionOnlyInCart = cartData.items.every((line_item) => {
      const routeProtection = routeProtectionProducts?.find(
        (block) => block?.products?.[0]?.handle === line_item?.handle
      );
      return !!routeProtection?.checkout_disabled;
    });

    document
      .querySelectorAll<HTMLButtonElement>("[data-cart-checkout-button]")
      .forEach((buttonElement) => {
        buttonElement.disabled = cartData.item_count <= 0 || routeProtectionOnlyInCart;
      });
  }, [loading, cartData, cartTotals, loadingSpinner, cartCountItems, routeProtectionProducts]);
}

function useHandleCartUpdates() {
  const { updates, fetchUpdates } = useCartDrawer(({ updates, fetchUpdates }) => ({
    updates,
    fetchUpdates,
  }));

  useDebouncedEffect(
    () => {
      if (updates !== null) {
        fetchUpdates();
      }
    },
    800,
    [updates]
  );
}

function useInitCart() {
  const updateCartState = useCartDrawer((state) => state.initCart);

  useEffect(() => {
    document.addEventListener("cart:add", initCart);
    document.addEventListener("_cart-update", updateCartState);
    return () => {
      document.removeEventListener("cart:add", initCart);
      document.removeEventListener("_cart-update", updateCartState);
    };
  }, [updateCartState]);
}

function usePreloadCartProducts() {
  const { cartData } = useCartDrawer(({ cartData }) => ({
    cartData,
  }));
  const { getAsyncProduct, hydrated } = useGlobalProducts(({ getAsyncProduct, hydrated }) => ({
    getAsyncProduct,
    hydrated,
  }));

  useEffect(() => {
    if (hydrated) {
      cartData?.items?.forEach((item) => {
        getAsyncProduct(item.handle);
      });
    }
  }, [cartData.items, hydrated]);
}
function useEmptyCartDrawer() {
  const { cartData } = useCartDrawer(({ cartData }) => ({
    cartData,
  }));

  useEffect(() => {
    const cartDrawerFooterEmpty = document.querySelector("[data-cart-drawer-empty-footer]");
    const cartDrawerFooter = document.querySelector("[data-cart-checkout-form]");
    const cartDrawerContentEmpty = document.querySelector("[data-cart-drawer-empty-content]");
    const cartDrawerContent = document.querySelector("[data-cart-drawer-content]");

    if (
      !cartDrawerFooterEmpty ||
      !cartDrawerFooter ||
      !cartDrawerContentEmpty ||
      !cartDrawerContent
    ) {
      return;
    }

    if (cartData.item_count === 0 && cartDrawerFooterEmpty.children.length) {
      cartDrawerFooterEmpty.classList.remove("hidden");
      cartDrawerFooter.classList.add("hidden");
    } else {
      cartDrawerFooterEmpty.classList.add("hidden");
      cartDrawerFooter.classList.remove("hidden");
    }

    if (cartData.item_count === 0 && cartDrawerContentEmpty.children.length) {
      cartDrawerContentEmpty.classList.remove("hidden");
      cartDrawerContent.classList.add("hidden");
    } else {
      cartDrawerContentEmpty.classList.add("hidden");
      cartDrawerContent.classList.remove("hidden");
    }
  }, [cartData.item_count]);
}

export const CartSideEffects = () => {
  useInitCart();
  useUpdateLoadingState();
  useHandleCartUpdates();
  usePreloadCartProducts();
  useEmptyCartDrawer();

  return null;
};
