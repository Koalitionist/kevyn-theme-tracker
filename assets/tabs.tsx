export const initTabs = async () => {
  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const buttons = tabGroup.querySelectorAll<HTMLButtonElement>("[data-tabs-button]");
    const tabs = tabGroup.querySelectorAll<HTMLElement>("[data-tabs-content]");

    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const tabIndex = +button.dataset.tabsButton;
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        button.classList.add("active");
        tabGroup
          .querySelector<HTMLElement>(`[data-tabs-content="${tabIndex}"]`)
          .classList.add("active");
      });
    });
  });
};
