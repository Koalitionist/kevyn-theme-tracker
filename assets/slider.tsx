import { scrollToX } from "utils";

export const initSlider = async () => {
  document.querySelectorAll<HTMLElement>("[data-slider]").forEach((slider) => {
    const autoRotate = slider.dataset.sliderAutoRotate === "true";
    const rotateDuration = +slider.dataset.sliderSlideDuration;
    const container = slider.querySelector<HTMLElement>("[data-slider-container]");
    const buttons = slider.querySelectorAll<HTMLButtonElement>("[data-slider-button]");
    const prev = slider.parentElement.querySelector<HTMLButtonElement>("[data-slider-prev]");
    const next = slider.parentElement.querySelector<HTMLButtonElement>("[data-slider-next]");
    const slides = container?.scrollWidth / container?.clientWidth;
    const rotateRef = { current: null };

    const handleResize = () => {
      clearInterval(rotateRef.current);
      if (slides > 1 && autoRotate) {
        const currentIndex = Math.round(container.scrollLeft / container.clientWidth);
        buttons.forEach((button) => {
          button.classList.remove("active");
        });
        setTimeout(
          () => {
            buttons[currentIndex].classList.add("active");
          },
          2
        );

        rotateRef.current = setInterval(
          () => {
            const nextPosition = container.scrollLeft + container.clientWidth;

            buttons.forEach((button) => {
              button.classList?.remove("active");
            });

            container?.classList?.remove("snap-mandatory", "snap-x");
            scrollToX(
              250,
              nextPosition - 50 >= container.scrollWidth - container.clientWidth ? 0 : nextPosition,
              container,
              () => {
                const nextIndex = Math.round(container.scrollLeft / container.clientWidth);
                buttons[nextIndex]?.classList?.add("active");
                container?.classList?.add("snap-mandatory", "snap-x");
              }
            );
          },
          rotateDuration * 1000
        );
      }

      if (prev && next) {
        prev.style.display = container.scrollLeft ? "" : "none";
        next.style.display =
          container.scrollLeft + container.clientWidth < container.scrollWidth - 10 ? "" : "none";
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonIndex = +button.dataset?.sliderButton;
        const targetPosition = buttonIndex * container.clientWidth;

        if (targetPosition === container.scrollLeft) return;

        container.classList.remove("snap-mandatory", "snap-x");
        scrollToX(250, targetPosition, container, () => {
          container.classList.add("snap-mandatory", "snap-x");
          button.classList.add("active");
          handleResize();
        });
      });
    });

    if (prev) {
      prev.addEventListener("click", () => {
        const buttonIndex = Math.round(container.scrollLeft / container.clientWidth) - 1;
        const targetPosition = buttonIndex * container.clientWidth;

        if (targetPosition === container.scrollLeft) return;

        container.classList.remove("snap-mandatory", "snap-x");
        scrollToX(250, targetPosition, container, () => {
          container.classList.add("snap-mandatory", "snap-x");
          handleResize();
        });
      });
    }

    if (next) {
      next.addEventListener("click", (e) => {
        console.log(e);
        const buttonIndex = Math.round(container.scrollLeft / container.clientWidth) + 1;
        const targetPosition = buttonIndex * container.clientWidth;

        if (targetPosition === container.scrollLeft) return;

        container.classList.remove("snap-mandatory", "snap-x");
        scrollToX(250, targetPosition, container, () => {
          container.classList.add("snap-mandatory", "snap-x");
          handleResize();
        });
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  });
};
