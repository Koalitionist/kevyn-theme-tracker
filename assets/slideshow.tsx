export const initSlideshow = async () => {
  document.querySelectorAll<HTMLElement>("[data-slideshow]").forEach((slideshow) => {
    const sectionId = slideshow.dataset.slideshow;
    const slides = slideshow.querySelectorAll<HTMLElement>("[data-slideshow-slide]");
    const paginationButtons = slideshow.querySelectorAll<HTMLElement>("[data-slideshow-button]");
    const autoRotate = slideshow.dataset.slideshowAutoRotate === "true";
    const slideTimer: { current: NodeJS.Timeout } = { current: null };
    const currentSlide: { slide: HTMLElement; index: number } = {
      slide: [...slides].find((slide) => slide.classList.contains("active")),
      index: +[...slides].find((slide) => slide.classList.contains("active"))?.dataset
        ?.slideshowSlide,
    };

    const setSlideIndex = (index: number) => {
      currentSlide.slide = slideshow.querySelector<HTMLElement>(
        `[data-slideshow-slide="${index}"]`
      );
      const slideDuration = +currentSlide.slide?.dataset?.slideshowSlideDuration;
      currentSlide.index = index;

      slides.forEach((slide) => {
        const slideIndex = +slide?.dataset?.slideshowSlide;

        if (slideIndex === index) {
          slide.classList.add("active");
        }
        if (slideIndex !== index) {
          slide.classList.remove("active");
        }
      });

      paginationButtons.forEach((button) => {
        const slideIndex = +button.dataset.slideshowButton;

        if (slideIndex === index) {
          button.classList.remove("active");
          setTimeout(
            () => {
              button.classList.add("active");
            },
            1
          );
        }
        if (slideIndex !== index) {
          button.classList.remove("active");
        }
      });

      if (autoRotate) {
        clearTimeout(slideTimer.current);
        slideTimer.current = setTimeout(
          () => {
            const nextIndex = currentSlide.index + 1;
            setSlideIndex(nextIndex >= slides.length ? 0 : nextIndex);
          },
          slideDuration * 1000
        );
      }
    };

    paginationButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const slideIndex = +button.dataset.slideshowButton;
        setSlideIndex(slideIndex);
      });
    });

    setSlideIndex(currentSlide.index);

    document.addEventListener(`slideshow:${sectionId}:set-slide`, (e: CustomEvent) => {
      if (typeof e.detail.index === "number") {
        setSlideIndex(e.detail.index);
      }
    });
  });
};
