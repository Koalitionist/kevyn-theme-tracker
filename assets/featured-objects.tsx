export const initFeaturedObjects = () => {
  document.querySelectorAll<HTMLElement>("[data-featured-objects-section]").forEach((section) => {
    const activeTab = { current: 0 };
    const tabButtons = section.querySelectorAll<HTMLButtonElement>(
      "[data-featured-objects-tab-button]"
    );
    const tabContainer = section.querySelector<HTMLElement>(
      "[data-featured-objects-tab-container]"
    );

    const grids = section.querySelectorAll<HTMLElement>("[data-featured-objects-grid]");

    const tabContent = [
      ...section.querySelectorAll<HTMLElement>("[data-featured-objects-tab-content]"),
    ];

    tabButtons.forEach((tabButton) => {
      tabButton.addEventListener("click", () => {
        const tabIndex = +tabButton.dataset.featuredObjectsTabButton;
        activeTab.current = tabIndex;
        tabButtons.forEach((tabButton) => {
          tabButton.classList.remove("active");
        });
        tabButton.classList.add("active");
        tabContainer.scrollTo(tabContent[tabIndex]?.offsetLeft ?? 0, 0);
      });
    });
    grids.forEach((grid) => {
      const toggleButton = grid.querySelector<HTMLElement>(
        "[data-featured-objects-show-more-button]"
      );
      if (toggleButton) {
        toggleButton.addEventListener("click", () => {
          grid.classList.toggle("active");
        });
      }
    });
    window.addEventListener("resize", () => {
      tabContainer.scrollTo(tabContent[activeTab.current]?.offsetLeft ?? 0, 0);
    });
  });
};
