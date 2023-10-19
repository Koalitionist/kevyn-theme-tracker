export const initPasswordInput = async () => {
  document.querySelectorAll<HTMLLabelElement>("[data-password]").forEach((label) => {
    const input = label.querySelector<HTMLButtonElement>("[data-password-input]");
    const toggle = label.querySelector<HTMLButtonElement>("[data-password-toggle]");

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (input.type === "text") {
        input.type = "password";
      } else {
        input.type = "text";
      }

      toggle.classList.toggle("active");
    });
  });
};
