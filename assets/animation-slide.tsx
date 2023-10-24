import { cloneElement } from "react";

export const initAnimationSlide = async () => {
  window.addEventListener("resize", handleResize);
  handleResize();
};

const handleResize = () => {
  const containerWidth = document.querySelector("[data-animation-slide-width]")?.clientWidth;
  const slideContainer = document.querySelector<HTMLElement>("[data-animation-slide-container]");

  document.querySelectorAll<HTMLElement>("[data-animation-slide]").forEach((slide) => {
    const content = [...slide.querySelectorAll<HTMLElement>("[data-animation-slide-content]")];

    if (content?.[0] && content?.[0].clientWidth > containerWidth && content.length === 1) {
      slide.classList.add("animate-slide");
      const duplicateContent = content?.[0].cloneNode(true);
      slide.appendChild(duplicateContent);

      slideContainer.style.alignItems = "unset";
      slideContainer.style.justifyContent = "unset";
      slideContainer.style.flexDirection = "row";
    }

    if (content?.[0] && content?.[0].clientWidth <= containerWidth && content.length > 1) {
      slide.classList.remove("animate-slide");
      slide.removeChild(content?.[1]);
      slideContainer.style.alignItems = "";
      slideContainer.style.justifyContent = "";
      slideContainer.style.flexDirection = "";
    }
  });
};
