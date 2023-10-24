import { debounce } from "utils";
import create from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

const initCollectionGridWithFiltersDropdown = () => {
  const filterGrid = document.querySelector<HTMLButtonElement>(
    "[data-collection-grid-with-filters]"
  );
  const toggleButton = document.querySelector<HTMLElement>(
    "[data-collection-grid-filters-toggle-button]"
  );
  const sortButton = document.querySelector<HTMLButtonElement>("[data-collection-sort-button]");
  const sortContainer = document.querySelector<HTMLElement>("[data-collection-sort-container]");

  if (!sortContainer) return;

  toggleButton?.addEventListener("click", () => {
    filterGrid?.classList.toggle("active");
  });

  let showSort = false;

  const toggleSort = () => {
    if (showSort) {
      showSort = false;
      sortContainer.style.maxHeight = `${0}px`;
      sortContainer.style.opacity = "0";
    } else {
      showSort = true;
      sortContainer.style.maxHeight = `${sortContainer?.scrollHeight || 2000}px`;
      sortContainer.style.opacity = "100";
    }
  };

  sortButton.addEventListener("click", toggleSort);

  document.querySelectorAll("[data-collection-grid-filters-sidebar]").forEach((sidebar) => {
    sidebar
      ?.querySelectorAll<HTMLElement>("[data-collection-grid-filter-item]")
      .forEach((filter, index) => {
        const toggle = filter?.querySelector<HTMLElement>("[data-collection-filter-toggle]");
        const dropdown = filter?.querySelector<HTMLElement>("[data-collection-filter-container]");
        let show = index < 4;

        const toggleFilter = () => {
          if (show) {
            dropdown.style.maxHeight = `${0}px`;
            dropdown.style.opacity = "0";
          } else {
            dropdown.style.maxHeight = `${dropdown.scrollHeight || 2000}px`;
            dropdown.style.opacity = "100";
          }
          show = !show;
        };
        toggleFilter();
        toggleFilter();
        toggle.addEventListener("click", toggleFilter);
      });
  });
};

const initFiltersAutoApply = () => {
  document.querySelectorAll<HTMLFormElement>("[data-filter-auto-apply]").forEach((form) => {
    const eventHandler = debounce((e) => form.submit(), 750);
    form.addEventListener("change", eventHandler);
  });
};

export const initCollection = async () => {
  document
    .querySelectorAll<HTMLFormElement>('[data-collection-filter-type="price_range"]')
    .forEach((priceFilter) => {
      initPriceFilter(priceFilter);
    });

  document
    .querySelectorAll<HTMLFormElement>(
      '[data-collection-filter-type="boolean"], [data-collection-filter-type="list"]'
    )
    .forEach((filter) => initFilter(filter));
  initFiltersDropdown();
  initCollectionGridWithFiltersDropdown();
  initFiltersAutoApply();
};

export type FilterState = {
  showFilter: boolean;
  filterHeight: number;
  filterContainer: HTMLElement;
  toggleButton: HTMLButtonElement;
  setShowFilter: (input: boolean) => void;
};

export type PriceFilterState = FilterState & {
  maxPrice: number;
  minPrice: number;
  minMaxDifference: number;
  fromPriceElement: HTMLElement;
  fromPriceInput: HTMLInputElement;
  toPriceElement: HTMLElement;
  toPriceInput: HTMLInputElement;
  sliderDrag: "from" | "to" | null;
  slider: HTMLElement;
  sliderBar: HTMLElement;
  sliderFromThumb: HTMLButtonElement;
  sliderToThumb: HTMLButtonElement;
  priceFilterForm: HTMLFormElement;
  priceRange: {
    from: number;
    to: number;
  };
  setSliderDrag: (input: "from" | "to" | null) => void;
  setPriceRange: (input: { from: number; to: number }) => void;
  updatePriceSlider: (input: PriceFilterState, submitForm?: boolean) => void;
};

const initFiltersDropdown = () => {
  const button = document.querySelector<HTMLButtonElement>("[data-collection-filters-button]");
  const dropdown = document.querySelector<HTMLElement>("[data-collection-filters-dropdown]");
  if (!button || !dropdown) return;

  const toggles = dropdown?.querySelectorAll<HTMLElement>("[data-collection-filter-toggle]");
  const dropdowns = dropdown?.querySelectorAll<HTMLElement>("[data-collection-filter-container]");
  let dropdownMaxHeight = 32 + 50;
  let tallestDropdown = 0;

  toggles.forEach((el) => {
    dropdownMaxHeight += el.clientHeight;
  });
  dropdowns.forEach((el) => {
    tallestDropdown = tallestDropdown >= el.scrollHeight ? tallestDropdown : el.scrollHeight;
  });

  dropdownMaxHeight += tallestDropdown;

  let show = false;

  const handleClickOutside = (e) => {
    if (
      !dropdown.contains(e.target) &&
      !button.contains(e.target) &&
      button !== e.target &&
      document.body !== e.target
    ) {
      show = !show;
      dropdown.style.maxHeight = show ? `${dropdownMaxHeight}px` : "0";
      dropdown.style.opacity = show ? `1` : "0";
      document.removeEventListener("click", handleClickOutside);
    }
  };

  button.addEventListener("click", (e) => {
    show = !show;
    dropdown.style.maxHeight = show ? `${dropdownMaxHeight}px` : "0";
    dropdown.style.opacity = show ? `1` : "0";
    if (show) {
      setTimeout(
        () => {
          document.addEventListener("click", handleClickOutside);
        },
        1
      );
    }
  });
};

export const initFilter = (filterForm: HTMLFormElement) => {
  const store = create(
    immer<FilterState>(() => {
      const el = filterForm;
      const filterContainer = el.querySelector<HTMLElement>("[data-collection-filter-container]");

      return {
        showFilter: false,
        filterHeight: filterContainer.scrollHeight,
        filterContainer,
        toggleButton: el.querySelector<HTMLButtonElement>("[data-collection-filter-toggle]"),
        setShowFilter: (show) => {
          setState((state) => {
            if (state.filterContainer?.dataset?.collectionFilterContainer !== "no-toggle") {
              state.filterContainer.style.maxHeight = show ? `${state.filterHeight}px` : "0";
              state.filterContainer.style.opacity = show ? `1` : "0";
              state.showFilter = show;
            }
          });

          if (show) {
            setTimeout(
              () => {
                document.addEventListener("click", handleCloseFilterToggle);
              },
              1
            );
          }
          if (!show) {
            document.removeEventListener("click", handleCloseFilterToggle);
          }
        },
        submitForm: (event) => {},
      };
    })
  );

  const { getState, setState, subscribe, destroy } = store;

  const handleCloseFilterToggle = (e) => {
    if (!getState().filterContainer.contains(e.target)) {
      getState().setShowFilter(false);
    }
  };

  const handleFilterToggle = (e) => {
    getState().setShowFilter(!getState().showFilter);
  };

  getState().toggleButton?.addEventListener("click", handleFilterToggle);
};

export const initPriceFilter = (priceFilterForm: HTMLFormElement) => {
  const store = create(
    immer<PriceFilterState>(() => {
      const el = priceFilterForm;
      const form = el.closest("form");
      const filterContainer = el.querySelector<HTMLElement>("[data-collection-filter-container]");
      const fromPriceElement = el.querySelector<HTMLElement>("[data-collection-filter-price-from]");
      const fromPriceInput = el.querySelector<HTMLInputElement>(
        "[data-collection-filter-price-from-input]"
      );
      const toPriceElement = el.querySelector<HTMLElement>("[data-collection-filter-price-to]");
      const toPriceInput = el.querySelector<HTMLInputElement>(
        "[data-collection-filter-price-to-input]"
      );
      const priceRange = {
        from: +fromPriceElement.dataset.collectionFilterPriceFrom ?? 0,
        to: +toPriceElement.dataset.collectionFilterPriceTo,
      };

      const minPrice = +fromPriceElement.dataset.collectionFilterPriceMin;
      const maxPrice = +toPriceElement.dataset.collectionFilterPriceMax;

      const eventHandler = debounce((e) => form.submit(), 1500);

      return {
        priceFilterForm,
        maxPrice,
        minPrice,
        minMaxDifference: maxPrice - minPrice,
        priceRange,
        fromPriceElement,
        toPriceElement,
        fromPriceInput,
        toPriceInput,
        sliderDrag: null,
        showFilter: false,
        filterHeight: filterContainer.scrollHeight,
        filterContainer,
        toggleButton: el.querySelector<HTMLButtonElement>("[data-collection-filter-toggle]"),
        slider: el.querySelector<HTMLElement>("[data-collection-filter-price-slider]"),
        sliderBar: el.querySelector<HTMLElement>("[data-collection-filter-price-slider-bar]"),
        sliderFromThumb: el.querySelector<HTMLButtonElement>(
          "[data-collection-filter-price-slider-from-thumb]"
        ),
        sliderToThumb: el.querySelector<HTMLButtonElement>(
          "[data-collection-filter-price-slider-to-thumb]"
        ),
        submitButton: el.querySelector<HTMLButtonElement>(
          "[data-collection-filter-price-slider-to-thumb]"
        ),
        setSliderDrag: (input) => {
          setState((state) => {
            state.sliderDrag = input;
          });
        },
        setPriceRange: ({ from, to }) => {
          setState((state) => {
            state.priceRange = { from, to };
          });
        },
        updatePriceSlider: (state, submitForm = false) => {
          const {
            priceRange,
            minPrice,
            minMaxDifference,
            sliderDrag,
            sliderFromThumb,
            sliderToThumb,
            sliderBar,
            fromPriceElement,
            toPriceElement,
          } = state;

          if (sliderDrag === null) {
            sliderFromThumb.classList.remove("scale-150", "text-primary-outline");
            sliderToThumb.classList.remove("scale-150", "text-primary-outline");
          }
          if (sliderDrag === "from") {
            sliderFromThumb.classList.add("scale-150", "text-primary-outline");
          }
          if (sliderDrag === "to") {
            sliderToThumb.classList.add("scale-150", "text-primary-outline");
          }
          fromPriceElement.innerHTML = window.formatMoney(priceRange.from);
          fromPriceInput.value = `${priceRange.from / 100}`;
          toPriceElement.innerHTML = window.formatMoney(priceRange.to);
          toPriceInput.value = `${priceRange.to / 100}`;

          sliderBar.style.left = `${((priceRange.from - minPrice) / minMaxDifference) * 100}%`;
          sliderBar.style.width = `${
            ((priceRange.to - minPrice) / minMaxDifference) * 100 -
            ((priceRange.from - minPrice) / minMaxDifference) * 100
          }%`;
          sliderFromThumb.style.left = `${
            ((priceRange.from - minPrice) / minMaxDifference) * 100
          }%`;

          sliderToThumb.style.left = `calc(${
            ((priceRange.to - minPrice) / minMaxDifference) * 100
          }% - 0.75rem)`;

          if (submitForm && form?.dataset?.filterAutoApply) {
            eventHandler();
          }
        },
        setShowFilter: (show) => {
          setState((state) => {
            state.filterContainer.style.maxHeight = show ? `${state.filterHeight}px` : "0";
            state.filterContainer.style.opacity = show ? `1` : "0";
            state.showFilter = show;
          });

          if (show) {
            setTimeout(
              () => {
                document.addEventListener("click", handleCloseFilterToggle);
              },
              1
            );
          }
          if (!show) {
            document.removeEventListener("click", handleCloseFilterToggle);
          }
        },
        submitForm: (event) => {},
      };
    })
  );

  const { getState, setState, subscribe, destroy } = store;

  subscribe((state) => {
    getState().updatePriceSlider(state, true);
  });
  getState().updatePriceSlider(getState());

  const handleSliderClick = (e) => {
    if (getState().sliderDrag !== null) return;
    const width = getState().slider.offsetWidth;
    const left = e.clientX - getState().slider.getBoundingClientRect().left;
    const fromLeft = getState().sliderFromThumb.offsetLeft;
    const toLeft = getState().sliderToThumb.offsetLeft;

    if (Math.abs(left - fromLeft) <= Math.abs(left - toLeft)) {
      const newFrom = Math.max(
        ((left - 1) / width) * getState().minMaxDifference + getState().minPrice,
        getState().minPrice
      );

      getState().setPriceRange({
        from:
          newFrom * 0.99 < getState().minPrice
            ? getState().minPrice
            : Math.round(newFrom / 1000) * 1000,
        to: getState().priceRange.to,
      });
    }
    if (Math.abs(left - fromLeft) > Math.abs(left - toLeft)) {
      const newTo = Math.min(
        ((left + 1) / width) * getState().minMaxDifference + getState().minPrice,
        getState().maxPrice
      );
      getState().setPriceRange({
        to:
          newTo * 1.01 > getState().maxPrice
            ? getState().maxPrice
            : Math.round(newTo / 1000) * 1000,
        from: getState().priceRange.from,
      });
    }
  };

  const handleSlideFromStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    getState().setSliderDrag("from");
    document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
    document.addEventListener("pointermove", handleSlideDrag);
    document.addEventListener("pointerup", handleSlideEnd);
  };

  const handleSlideToStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    getState().setSliderDrag("to");
    document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
    document.addEventListener("pointermove", handleSlideDrag);
    document.addEventListener("pointerup", handleSlideEnd);
  };

  const handleSlideEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setTimeout(() => getState().setSliderDrag(null), 1);
    document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
    document.removeEventListener("pointermove", handleSlideDrag);
    document.removeEventListener("pointerup", handleSlideEnd);
  };

  const handleSlideDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const width = getState().slider.offsetWidth;
    const left = e.clientX - getState().slider.getBoundingClientRect().left;

    const newFrom = Math.min(
      Math.max(
        ((left - 1) / width) * getState().minMaxDifference + getState().minPrice,
        getState().minPrice
      ),
      getState().priceRange.to - 0.09 * getState().minMaxDifference
    );
    const newTo = Math.min(
      Math.max(
        ((left + 1) / width) * getState().minMaxDifference + getState().minPrice,
        getState().priceRange.from + 0.09 * getState().minMaxDifference
      ),
      getState().maxPrice
    );

    getState().setPriceRange({
      from:
        getState().sliderDrag === "from"
          ? newFrom * 0.99 < getState().minPrice
            ? getState().minPrice
            : Math.round(newFrom / 1000) * 1000
          : getState().priceRange.from,
      to:
        getState().sliderDrag === "to"
          ? newTo * 1.01 > getState().maxPrice
            ? getState().maxPrice
            : Math.round(newTo / 1000) * 1000
          : getState().priceRange.to,
    });
  };

  const handleSliderFromKeydown = (e) => {
    if (e.key === "ArrowRight") {
      const newFrom = Math.min(
        getState().priceRange.from + getState().minMaxDifference / 40,
        getState().priceRange.to - 0.09 * getState().minMaxDifference
      );
      getState().setPriceRange({
        from:
          newFrom * 0.99 < getState().minPrice
            ? getState().minPrice
            : Math.round(newFrom / 1000) * 1000,
        to: getState().priceRange.to,
      });
    }
    if (e.key === "ArrowLeft") {
      const newFrom = Math.max(
        getState().priceRange.from - getState().minMaxDifference / 40,
        getState().minPrice
      );

      getState().setPriceRange({
        from:
          newFrom * 0.99 < getState().minPrice
            ? getState().minPrice
            : Math.round(newFrom / 1000) * 1000,
        to: getState().priceRange.to,
      });
    }
  };

  const handleSliderToKeydown = (e) => {
    if (e.key === "ArrowRight") {
      const newTo = Math.min(
        getState().priceRange.to + getState().minMaxDifference / 40,
        getState().maxPrice
      );
      getState().setPriceRange({
        to:
          newTo * 1.01 > getState().maxPrice
            ? getState().maxPrice
            : Math.round(newTo / 1000) * 1000,
        from: getState().priceRange.from,
      });
    }
    if (e.key === "ArrowLeft") {
      const newTo = Math.max(
        getState().priceRange.to - getState().minMaxDifference / 40,
        getState().priceRange.from + 0.09 * getState().minMaxDifference
      );
      getState().setPriceRange({
        to:
          newTo * 1.01 > getState().maxPrice
            ? getState().maxPrice
            : Math.round(newTo / 1000) * 1000,
        from: getState().priceRange.from,
      });
    }
  };

  const handleCloseFilterToggle = (e) => {
    if (!getState().filterContainer.contains(e.target) && e.target !== document.body) {
      getState().setShowFilter(false);
    }
  };

  const handleFilterToggle = (e) => {
    getState().setShowFilter(!getState().showFilter);
  };

  getState().slider?.addEventListener("click", handleSliderClick);
  getState().sliderFromThumb?.addEventListener("pointerdown", handleSlideFromStart);
  getState().sliderFromThumb?.addEventListener("keydown", handleSliderFromKeydown);
  getState().sliderToThumb?.addEventListener("pointerdown", handleSlideToStart);
  getState().sliderToThumb?.addEventListener("keydown", handleSliderToKeydown);
  getState().toggleButton?.addEventListener("click", handleFilterToggle);
};
