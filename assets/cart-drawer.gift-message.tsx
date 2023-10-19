export const initCartDrawerGiftMessage = () => {
  document
    .querySelectorAll<HTMLInputElement>("[data-cart-gift-checkbox]")
    .forEach((checkbox, index, arr) => {
      if (window.cartData?.attributes["This is a gift"] === "Yes") {
        arr.forEach((element) => (element.checked = true));
      }
      checkbox.addEventListener("change", (e) => {
        window.cartData?.note;
        arr.forEach((element) => (element.checked = checkbox.checked));
      });
    });
  document
    .querySelectorAll<HTMLTextAreaElement>("[data-cart-note-textarea]")
    .forEach((textarea, index, arr) => {
      if (window.cartData?.note) {
        arr.forEach((element) => (element.value = window.cartData?.note));
      }
      textarea.addEventListener("input", (e) => {
        arr.forEach((element) => (element.value = textarea.value));
      });
    });
};
