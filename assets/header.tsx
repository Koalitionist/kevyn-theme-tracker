import { delay, trapFocus } from "utils";

export const initHeaderMenu = async () => {
  const header = document.querySelector(`[data-section="header"]:not([data-initiated])`);
  if (header) {
    // header.setAttribute("data-initiated", "");
    initDesktopNav();
    initMobileNav();
  }

  // initShopifyEvents();
};

function initMobileNav() {
  const mobileNav = document.querySelector<HTMLElement>("[data-mobile-nav]");
  const menuLinklist = document.querySelectorAll<HTMLElement>("[data-mobile-menu-dropdown]");
  const menuLinks = document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu-link]");
  const menuBackButton = document.querySelectorAll<HTMLAnchorElement>("[data-mobile-menu-back]");

  document.addEventListener("nav:closed", () => {
    menuLinklist.forEach((linklist) => {
      const dropdownLevel = +linklist.dataset.mobileMenuLevel;
      linklist.classList.remove("-translate-x-full", "opacity-0");
      if (dropdownLevel > 1) {
        linklist.classList.add("translate-x-full", "opacity-0");
      }
    });
  });

  const handleMenuLinkClick = (e) => {
    const handle = e.currentTarget.dataset.mobileMenuLink;
    const currentHandle = e.currentTarget.dataset.mobileMenuCurrentDropdown;
    const currentDropdown = mobileNav.querySelector(
      `[data-mobile-menu-dropdown="${currentHandle}"]`
    );
    const dropdown = mobileNav.querySelector(`[data-mobile-menu-dropdown="${handle}"]`);

    if (!dropdown) {
      document.dispatchEvent(new Event("nav:close"));
      return;
    }
    currentDropdown.classList.add("-translate-x-full", "opacity-0");
    dropdown.classList.remove("translate-x-full", "opacity-0");
    e.preventDefault();
  };

  const handleMenuBackClick = (e) => {
    const prevHandle = e.currentTarget.dataset.mobileMenuPrevDropdown;
    const currentHandle = e.currentTarget.dataset.mobileMenuBack;
    const prevMenu = mobileNav.querySelector(`[data-mobile-menu-dropdown="${prevHandle}"]`);
    const currentMenu = mobileNav.querySelector(`[data-mobile-menu-dropdown="${currentHandle}"]`);

    currentMenu.classList.add("translate-x-full", "opacity-0");
    prevMenu.classList.remove("-translate-x-full", "opacity-0");
    e.preventDefault();
  };

  menuLinks.forEach((link) => {
    link.addEventListener("click", handleMenuLinkClick);
  });

  menuBackButton.forEach((link) => {
    link.addEventListener("click", handleMenuBackClick);
  });

  document.addEventListener("shopify:block:select", (e) => {
    const megaMenu = e.target as HTMLElement;
    const handle = megaMenu.dataset.mobileMenuDropdown;

    if (handle) {
      const link = document.querySelector<HTMLElement>(`[data-header-link="${handle}"]`);
      if (!link) {
        megaMenu.classList.remove("translate-x-full", "opacity-0");
        document.dispatchEvent(new Event("nav:open"));

        return;
      }
    }
  });

  document.addEventListener("shopify:block:deselect", (e) => {
    const megaMenu = e.target as HTMLElement;
    const handle = megaMenu.dataset.mobileMenuDropdown;
    if (handle) {
      const link = document.querySelector<HTMLElement>(`[data-header-link="${handle}"]`);
      if (!link) {
        document.dispatchEvent(new Event("nav:open"));

        return;
      }
    }
  });
}

function initDesktopNav() {
  const primaryLinks = document.querySelectorAll<HTMLElement>("[data-header-link]");
  let navActive = false;

  primaryLinks.forEach((link) => {
    initMenuLink(link);
  });

  function initMenuLink(link: HTMLElement) {
    const handle: string = link.dataset.headerLink;
    const dropdownMenu = document.querySelector<HTMLElement>(
      `[data-header-link-dropdown="${handle}"]`
    );
    const megaMenu = document.querySelector<HTMLElement>(`[data-header-link-megamenu="${handle}"]`);

    if (
      dropdownMenu &&
      (!megaMenu || megaMenu?.dataset?.headerMegamenuVisibility === "md:hidden")
    ) {
      initDropdownMenu({ link, dropdownMenu });
    }
    if (megaMenu && megaMenu?.dataset?.headerMegamenuVisibility !== "md:hidden") {
      initMegamenu({ link, megaMenu });
    }
  }

  function initDropdownMenu({
    link,
    dropdownMenu,
  }: {
    dropdownMenu: HTMLElement;
    link: HTMLElement;
  }) {
    const header = document.querySelector<HTMLElement>("[data-global-header]");

    let menuOpen = false;
    let menuCloseTimeout: NodeJS.Timeout = null;

    const handleExit = (e) => {
      clearTimeout(menuCloseTimeout);
      navActive = false;
      menuCloseTimeout = setTimeout(
        () => {
          menuOpen = false;

          if (!navActive) {
            header.style.zIndex = "";
          }

          link.removeEventListener("mouseleave", handleExit);

          link.classList.remove("active");
          dropdownMenu.style.opacity = "0";
          dropdownMenu.style.pointerEvents = "none";

          dropdownMenu.removeEventListener("mouseover", handleHover);
          dropdownMenu.removeEventListener("mouseleave", handleExit);
        },
        20
      );
    };

    const handleHover = async (e) => {
      clearTimeout(menuCloseTimeout);
      await delay(2);
      if (!menuOpen) {
        menuOpen = true;
        navActive = true;
        header.style.zIndex = "1000";
        e.preventDefault();
        e.stopPropagation();

        link.classList.add("active");
        dropdownMenu.style.left = `${link.getBoundingClientRect().left}px`;
        dropdownMenu.style.opacity = "1";
        dropdownMenu.style.pointerEvents = "auto";

        link.addEventListener("mouseleave", handleExit);
        dropdownMenu.addEventListener("mouseover", handleHover);
        dropdownMenu.addEventListener("mouseleave", handleExit);
      }
    };

    link.addEventListener("mouseover", handleHover);

    const handleDocumentClick = (e) => {
      if (!menuOpen) {
        document.removeEventListener("click", handleDocumentClick, true);
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.pointerEvents = "none";
      }

      const outsideClick = !link.contains(e.target) && !dropdownMenu.contains(e.target);

      if (outsideClick) {
        e.preventDefault();
        e.stopPropagation();
        menuOpen = false;
        navActive = false;
        header.style.zIndex = "";
        document.removeEventListener("click", handleDocumentClick, true);
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.pointerEvents = "none";
      }
    };

    const handleClick = (e) => {
      if (!menuOpen && e.pointerType === "touch") {
        e.stopPropagation();
        e.preventDefault();
        menuOpen = true;
        navActive = true;
        header.style.zIndex = "1000";
        link.classList.add("active");
        dropdownMenu.style.left = `${link.getBoundingClientRect().left}px`;
        dropdownMenu.style.opacity = "1";
        dropdownMenu.style.pointerEvents = "auto";
        document.addEventListener("click", handleDocumentClick, true);
      }
    };

    link.addEventListener("click", handleClick, true);
  }

  function initMegamenu({ link, megaMenu }: { link: HTMLElement; megaMenu: HTMLElement }) {
    const header = document.querySelector<HTMLElement>("[data-global-header]");
    let menuOpen = false;
    const handle = megaMenu.dataset.headerLinkMegamenu;

    let menuCloseTimeout: NodeJS.Timeout = null;

    const handleMouseLeave = (e) => {
      clearTimeout(menuCloseTimeout);
      navActive = false;
      menuCloseTimeout = setTimeout(
        () => {
          menuOpen = false;
          if (!navActive) {
            header.style.zIndex = "";
          }
          link.classList.remove("active");
          megaMenu.style.opacity = "0";
          megaMenu.style.pointerEvents = "none";
          setTimeout(
            () => {
              megaMenu.style.display = "hidden";
            },
            1
          );

          link.removeEventListener("mouseleave", handleMouseLeave);
          megaMenu.removeEventListener("mouseover", handleMouseOver);
          megaMenu.removeEventListener("mouseleave", handleMouseLeave);
        },
        20
      );
    };

    const handleMouseOver = async (e) => {
      clearTimeout(menuCloseTimeout);
      await delay(2);
      if (!menuOpen) {
        menuOpen = true;
        navActive = true;
        e.preventDefault();
        e.stopPropagation();
        header.style.zIndex = "1000";
        megaMenu.style.display = "";

        setTimeout(
          () => {
            menuOpen = true;
            navActive = true;
            link.classList.add("active");
            megaMenu.style.opacity = "1";
            megaMenu.style.pointerEvents = "auto";

            link.addEventListener("mouseleave", handleMouseLeave);
            megaMenu.addEventListener("mouseover", handleMouseOver);
            megaMenu.addEventListener("mouseleave", handleMouseLeave);
          },
          1
        );
      }
    };

    link.addEventListener("mouseover", handleMouseOver);

    const handleDocumentClick = (e) => {
      if (!menuOpen) {
        document.removeEventListener("click", handleDocumentClick, true);
        megaMenu.style.opacity = "0";
        megaMenu.style.pointerEvents = "none";
      }

      const outsideClick = !link.contains(e.target) && !megaMenu.contains(e.target);

      if (outsideClick) {
        e.preventDefault();
        e.stopPropagation();
        menuOpen = false;
        navActive = false;
        header.style.zIndex = "";
        document.removeEventListener("click", handleDocumentClick, true);
        megaMenu.style.opacity = "0";
        megaMenu.style.pointerEvents = "none";
        setTimeout(
          () => {
            megaMenu.style.display = "hidden";
          },
          1
        );
      }
    };

    const handleClick = (e) => {
      if (!menuOpen && e.pointerType === "touch") {
        e.stopPropagation();
        e.preventDefault();
        menuOpen = true;
        navActive = true;
        header.style.zIndex = "1000";
        link.classList.add("active");
        megaMenu.style.display = "";
        megaMenu.style.opacity = "1";
        megaMenu.style.pointerEvents = "auto";
        document.addEventListener("click", handleDocumentClick, true);
      }
    };

    document.addEventListener(`megamenu:${handle}:open`, handleMouseOver);
    document.addEventListener(`megamenu:${handle}:close`, handleMouseLeave);

    link.addEventListener("click", handleClick, true);
  }
}

/*function initShopifyEvents() {
  document.addEventListener("shopify:section:load", (e) => {
    const element = e.target as HTMLElement;
    const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);

    if (type === "header" && !disabled) {
      initDesktopNav();
      initMobileNav();
    }
  });

  document.addEventListener("shopify:section:select", (e) => {
    const element = e.target as HTMLElement;
    const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);

    if (type === "header-megamenu" && !disabled) {
      const megaMenu = element.querySelector<HTMLElement>(`[data-header-link-megamenu]`);
      const handle = megaMenu.dataset.headerLinkMegamenu;
      const link = document.querySelector<HTMLElement>(`[data-header-link="${handle}"]`);
      link.classList.add("active");
      megaMenu.style.opacity = "1";
      megaMenu.style.pointerEvents = "auto";
    }
  });

  document.addEventListener("shopify:section:deselect", (e) => {
    const element = e.target as HTMLElement;
    const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);

    if (type === "header-megamenu" && !disabled) {
      const megaMenu = element.querySelector<HTMLElement>(`[data-header-link-megamenu]`);
      const handle = megaMenu.dataset.headerLinkMegamenu;
      const link = document.querySelector<HTMLElement>(`[data-header-link="${handle}"]`);
      link.classList.remove("active");
      megaMenu.style.opacity = "0";
      megaMenu.style.pointerEvents = "none";
    }
  });
}*/
