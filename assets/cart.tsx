import { _Cart_fetch_api, _Cart_fetch_api_add_input, _Cart_fetch_api_add_return, _Cart_fetch_api_Items, _Cart_fetch_api_update_input, CartItem } from "types";

export const cart = {
  open: async (): Promise<_Cart_fetch_api> => {
    const data = await (await fetch("/cart.js")).json();
    const cartEvent = new CustomEvent("cart:update", { detail: data });
    document.dispatchEvent(cartEvent);
    window.cartData = data;
    document.dispatchEvent(new CustomEvent("cart:open"));

    return data;
  },
  get: async (): Promise<_Cart_fetch_api> => {
    const data = (await (await fetch("/cart.js")).json()) as _Cart_fetch_api;
    window.cartData = data;
    const cartEvent = new CustomEvent("cart:update", { detail: data });
    document.dispatchEvent(cartEvent);
    return data;
  },
  add: async (
    cartItems: _Cart_fetch_api_add_input,
    open = false
  ): Promise<_Cart_fetch_api_add_return> => {
    const data = await (
      await fetch("/cart/add.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItems),
      })
    ).json();
    window.lastCartItems = data?.items;
    /*if (data?.status === 422 && data?.description?.includes("selling plan")) {
      data = await (
        await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...cartItems,
            items: cartItems.items?.map(({ selling_plan, ...item }) => item),
          }),
        })
      ).json();
    }*/

    document.dispatchEvent(new CustomEvent("cart:add", { detail: data }));

    if (open) {
      document.querySelectorAll<HTMLElement>("[data-drawer]").forEach((otherRoot) => {
        if (otherRoot.classList.contains("active")) {
          const otherName = otherRoot.dataset.drawer;
          otherRoot.classList.add("hidden");
          document.dispatchEvent(new Event(`${otherName}:close`));
        }
      });

      const addedCartItems = document.querySelector('[data-drawer="cart-added-modal"]');
      addedCartItems?.classList?.remove("hidden");
      setTimeout(
        () => {
          addedCartItems?.classList?.add("active");
        },
        50
      );

      await cart.open();
      return data;
    }
    cart.get();
    return data;
  },
  update: async (updates: _Cart_fetch_api_update_input): Promise<_Cart_fetch_api> => {
    const data = await (
      await fetch("/cart/update.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      })
    ).json();
    window.cartData = data;
    const cartEvent = new CustomEvent("cart:update", { detail: data });
    document.dispatchEvent(cartEvent);
    cart.get();
    return data;
  },
  change: async (cartItem: CartItem): Promise<_Cart_fetch_api> => {
    const data = await (
      await fetch("/cart/change.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
    ).json();
    cart.get();
    window.cartData = data;
    const cartEvent = new CustomEvent("cart:change", { detail: data });
    document.dispatchEvent(cartEvent);
    return data;
  },
  clear: async (): Promise<_Cart_fetch_api> => {
    const data = await (
      await fetch("/cart/clear.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
    ).json();
    cart.get();
    window.cartData = data;
    const cartEvent = new CustomEvent("cart:clear", { detail: data });
    document.dispatchEvent(cartEvent);
    return data;
  },
};
window["cart"] = cart;
