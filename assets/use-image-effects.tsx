import { useCallback, useEffect, useState } from "react";

const imageSizes = [180, 300, 400, 600, 800, 1000, 1200, 1800, 2400];

function getParentWidth(parent: HTMLElement, position) {
  if (position === "absolute") {
    return (
      parent.clientWidth || getParentWidth(parent.parentElement, getComputedStyle(parent).position)
    );
  }
  return parent.clientWidth;
}

const loaded = [];

const isOnScreen = (elem, isParent = false) => {
  if (!(elem instanceof Element)) {
    return false;
  }
  const style = getComputedStyle(elem);
  if (style.display === "none") return false;
  if (style.visibility !== "visible") return false;
  if (+style.opacity < 0.1) return false;
  const { top, height, left, width } = elem.getBoundingClientRect();
  if (top + height < 0 || top > (window.innerHeight || document.documentElement.clientHeight)) {
    return false;
  }
  if (left + width < 0 || left > (window.innerWidth || document.documentElement.clientWidth)) {
    return false;
  }
  if (elem.parentElement) {
    return isOnScreen(elem.parentElement, true);
  }
  return true;
};

export const useImageEffects = () => {
  const [hydrated, setHydrated] = useState(false);

  const loadImages = useCallback(() => {
    document.querySelectorAll<HTMLImageElement>("[data-image]").forEach((imageElement) => {
      const isVisible = isOnScreen(imageElement);
      if (isVisible) {
        loaded.push(imageElement);
        return;
      }
      const loading =
        (imageElement.dataset.image as "lazy" | "eager") || imageElement.getAttribute("loading");
      if (loading === "eager") return;
      const src = imageElement.src.split("&")[0];
      if (!src.includes("shopify.com")) return;
      imageElement.removeAttribute("data-image");
      const parent = imageElement.parentElement;

      let width = imageElement.clientWidth;

      if (!width) {
        const position = getComputedStyle(imageElement).position;
        const parentWidth = getParentWidth(parent, position);
        if (parentWidth) {
          width = parentWidth;
        }
      }

      setTimeout(
        () => {
          if (!loaded.includes(imageElement) && !isOnScreen(imageElement)) {
            if (loading === "eager") return;
            parent.classList.add("image-parent");
            imageElement.classList.add("image-loading", "image-unloading");
          }
        },
        150
      );

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(async (entries, observer) => {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (!entry.isIntersecting) return;
            observer.unobserve(imageElement);
            loaded.push(imageElement);
            imageElement.classList.remove("image-loading");
            setTimeout(
              () => {
                parent.classList.remove("image-parent");
                imageElement.classList.remove("image-unloading");
              },
              380
            );
          }
        });
        observer.observe(imageElement);
      }
    });
  }, []);

  useEffect(() => {
    if (!hydrated) {
      setHydrated(true);
      loadImages();
      setTimeout(loadImages, 800);
      setTimeout(loadImages, 1600);
    }
  }, [hydrated, loadImages]);
};
