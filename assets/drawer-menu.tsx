export const initDrawerMenu = () => {
  document.querySelectorAll<HTMLElement>("[data-drawer-menu]").forEach((blockElement) => {
    blockElement
      .querySelectorAll<HTMLElement>("[data-drawer-menu-handle]")
      .forEach((dropdownMenu) => {
        const handle = dropdownMenu.dataset.drawerMenuHandle;
        const url = dropdownMenu.dataset.drawerMenuUrl;
        const hasLinks = dropdownMenu.dataset.drawerMenuHasLinks === "true";
        const toggle = dropdownMenu.querySelector<HTMLButtonElement>(`[data-drawer-menu-toggle]`);
        const content = dropdownMenu?.querySelector<HTMLElement>("[data-drawer-menu-dropdown]");
        const icon = dropdownMenu?.querySelector<HTMLElement>("[data-drawer-menu-dropdown-icon]");
        const megaMenu = document.querySelector<HTMLElement>(
          `[data-header-link-megamenu="${handle}"]`
        );

        const megamenuSections = document?.querySelectorAll<HTMLElement>(
          `[data-megamenu-handle="${handle}"] > section`
        );

        if (megaMenu && megaMenu?.dataset?.headerMegamenuVisibility === "max-md:hidden") {
          return;
        }

        if (!hasLinks && !megamenuSections.length) {
          return;
        }

        if (blockElement.classList.contains("grid-cols-2")) {
          dropdownMenu.classList.add("col-span-2", "order-first");
        }

        if (!handle || !toggle || !content) return;
        icon.classList.remove("hidden");

        let neverOpened = true;
        if (megamenuSections.length) {
          let megamenuContent = "";
          megamenuSections.forEach((megamenuSection) => {
            megamenuContent = megamenuContent + megamenuSection.innerHTML;
          });
          content.firstElementChild.innerHTML = megamenuContent;
        }

        toggle.addEventListener("click", (e) => {
          if ((e.target as HTMLElement)?.hasAttribute("data-drawer-menu-view-all")) {
            return;
          }
          e.preventDefault();
          e.stopPropagation();

          if (toggle.classList.contains("active")) {
            content.style.maxHeight = "0px";
            toggle.classList.remove("active");
            return;
          }
          if (neverOpened) {
            content.style.maxHeight = `${9999999}px`;
            toggle.classList.add("active");
            neverOpened = false;
            return;
          }
          content.style.maxHeight = `${content.scrollHeight}px`;
          toggle.classList.add("active");
        });
      });
  });
};
