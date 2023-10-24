import { cart } from "cart";
import { delay } from "utils";

export const initAccountOrders = async () => {
  document.querySelectorAll<HTMLTableRowElement>("[data-order-link]").forEach((link) => {
    const href = link.dataset.orderLink;
    link.addEventListener("click", () => {
      window.location.href = href;
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-order-reorder]").forEach((reorderButton) => {
    const lineItems = JSON.parse(
      reorderButton.querySelector<HTMLScriptElement>(`script[type="application/json"]`).innerText
    );
    reorderButton.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      reorderButton.classList.add("active");

      const cartItems = await cart.add({ items: lineItems });
      if (cartItems?.items?.length) {
        await delay(800);
        cart.open();
      }
      if (lineItems?.length > 1) {
        const successItems = [];
        for (let i = 0; i < lineItems?.length; i++) {
          successItems?.push(await cart.add({ items: [lineItems[i]] }));
        }
        if (successItems?.some((item) => item.items?.length)) {
          await delay(800);
          cart.open();
        } else {
          alert(successItems?.find((item) => !item.items?.length)?.description);
        }
      }

      reorderButton.classList.remove("active");
    });
  });
};
