import { useImageEffects } from "use-image-effects";
import { FC, useCallback, useEffect, useRef } from "react";
import { render } from "react-dom";

export const initGlobalEffects = async () => {
  const root = document.querySelector<HTMLElement>("[data-global-effects]");
  render(<GlobalEffects />, root);
};

export const GlobalEffects: FC = () => {
  useHeaderScrollEffect();
  useProductStickyScroll();
  useImageEffects();

  return null;
};

function useHeaderScrollEffect() {
  const announcementHeight = useRef(document.body.style.getPropertyValue("--announcement-height"));
  const fsBarHeight = useRef(document.body.style.getPropertyValue("--free-shipping-bar-height"));

  const handleWindowScroll = useCallback((e) => {
    if (window.scrollY > 60) {
      document.body.style.setProperty("--announcement-height", "0px");
      document.body.style.setProperty("--free-shipping-bar-height", "0px");
      document.body.style.setProperty(
        "--top-bar-spacing",
        "calc((var(--header-height, 0px) + var(--announcement-height, 0px) + var(--free-shipping-bar-height, 0px)) * var(--top-bar-spacing-multiplier))"
      );
    }
    if (window.scrollY <= 0) {
      document.body.style.setProperty("--announcement-height", announcementHeight.current);
      document.body.style.setProperty("--free-shipping-bar-height", fsBarHeight.current);
      document.body.style.setProperty(
        "--top-bar-spacing",
        "calc((var(--header-height, 0px) + var(--announcement-height, 0px) + var(--free-shipping-bar-height, 0px)) * var(--top-bar-spacing-multiplier))"
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [handleWindowScroll]);

  return null;
}

function useProductStickyScroll() {
  const handleProductStickyScroll = useCallback((e) => {
    const gallery = document.querySelector<HTMLElement>(`[data-product-media-gallery="vertical"]`);
    document
      .querySelectorAll<HTMLElement>(`[data-product-sticky-content]`)
      .forEach((stickySide) => {
        if (stickySide && gallery) {
          if (
            gallery.getBoundingClientRect().bottom - 96 <
            stickySide.scrollHeight - stickySide.scrollTop
          ) {
            stickySide.style.maxHeight = "unset";
          } else {
            stickySide.style.maxHeight = "";
          }
        }
      });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleProductStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleProductStickyScroll);
    };
  }, [handleProductStickyScroll]);

  return null;
}
