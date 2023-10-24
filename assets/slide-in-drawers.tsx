import { delay, FocusElement, scrollToY, selectorString, trapFocus } from "utils";

export const initSlideInDrawers = async () => {
  const header = document.querySelector<HTMLElement>("[data-global-header]");
  const footer = document.querySelector<HTMLElement>("[data-global-footer]");
  const shopifySections = document.querySelectorAll<HTMLElement>(".shopify-section");
  document.querySelectorAll<HTMLElement>("[data-drawer]").forEach((root) => {
    const name = root.dataset.drawer;
    const drawer = {
      name,
      content: root.querySelector<HTMLElement>("[data-drawer-content]"),
      overlay: root.querySelector<HTMLElement>("[data-drawer-overlay]"),
      openButtons: document.querySelectorAll<HTMLElement>(`[data-drawer-open="${name}"]`),
      closeButtons: document.querySelectorAll<HTMLElement>(`[data-drawer-close="${name}"]`),
    };

    const closeDrawer = () => {
      document.dispatchEvent(new Event(`${name}:closed`));
      trapFocus(document.body);
      root.classList.remove("active");
      document.body.style.overflow = "";
      header.style.zIndex = "";
      footer.style.zIndex = "";
      root.style.zIndex = "";
      document.removeEventListener("click", handleClose);
      document.removeEventListener("keydown", handleKeydown);
      shopifySections.forEach((section) =>
        section.classList.remove("shopify-section-drawer-z-index")
      );

      drawer.openButtons.forEach((openButton) => {
        openButton.addEventListener("click", openDrawer);
        openButton.removeEventListener("click", closeDrawer);
      });

      if (!root.classList.contains("hidden")) {
        setTimeout(
          () => {
            if (!root.classList.contains("active")) {
              root.classList.add("hidden");
            }
          },
          300
        );
      }
    };

    const openDrawer = async () => {
      document.querySelectorAll<HTMLElement>("[data-drawer]").forEach((otherRoot) => {
        if (otherRoot.classList.contains("active")) {
          const otherName = otherRoot.dataset.drawer;
          otherRoot.classList.add("hidden");
          document.dispatchEvent(new Event(`${otherName}:close`));
        }
      });
      root.classList.remove("hidden");
      await delay(5);
      document.dispatchEvent(new Event(`${name}:opened`));

      root.classList.add("active");

      trapFocus(drawer.content);
      drawer.content.querySelectorAll<FocusElement>(selectorString)[0]?.focus();

      // drawer.content.querySelectorAll<FocusElement>(selectorString)[0]?.blur();
      document.body.style.overflow = "hidden";
      footer.style.zIndex = "41";
      shopifySections.forEach((section) => section.classList.add("shopify-section-drawer-z-index"));
      if (window.scrollY < 250 || ["cart", "product", "nav"].includes(name)) {
        header.style.zIndex = "2147483646";
      }
      root.style.zIndex = "2147483647";
      document.addEventListener("click", handleClose);
      document.addEventListener("keydown", handleKeydown);
      drawer.openButtons.forEach((openButton) => {
        openButton.addEventListener("click", closeDrawer);
        openButton.removeEventListener("click", openDrawer);
      });
      const scrollContainer = root.querySelector<HTMLElement>(`[class*="overflow-y-auto"]`);
      if (scrollContainer) {
        scrollToY(100, 0, scrollContainer);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    };

    const handleClose = (e) => {
      const outsideClick =
        !drawer.content.contains(e.target) &&
        ![...drawer.closeButtons].some((el) => el.contains(e.target)) &&
        ![...drawer.closeButtons].some((el) => el === e.target) &&
        ![...drawer.openButtons].some((el) => el.contains(e.target)) &&
        ![...drawer.openButtons].some((el) => el === e.target) &&
        !document.elementsFromPoint(e.x, e.y).some((el) => el === drawer.content);

      if (outsideClick) {
        closeDrawer();
      }
    };

    document.addEventListener(`${name}:open`, openDrawer);
    document.addEventListener(`${name}:close`, closeDrawer);

    drawer.openButtons.forEach((el) => {
      el.addEventListener("click", openDrawer);
    });
    drawer.closeButtons.forEach((el) => {
      el.addEventListener("click", closeDrawer);
    });
  });
};
