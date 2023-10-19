import { initCartDrawerGiftMessage } from "/cart-drawer.gift-message";
import { initProductAddToCartBarLinks } from "/product-add-to-cart-bar-links";
import { initCollapsible } from "accordion";
import { initAccountOrders } from "account-orders";
import { initAnimationSlide } from "animation-slide";
import { initBundles } from "bundle";
import { initCart } from "cart-drawer";
import { initCollection } from "collection";
import { initColorSwatches } from "color-swatches";
import { initDrawerMenu } from "drawer-menu";
import { initFeaturedObjects } from "featured-objects";
import { initForms } from "forms";
import { initGlobalEffects } from "global-effects";
import "global-stores";
import { initHeaderMenu } from "header";
import { initPasswordInput } from "password-input";
import { initProducts } from "product";
import { initProductCards } from "product-card";
import "product-drawer";
import "product-quick-view";
import { initProductsScrollable } from "products-scrollable";
import { initScrollSlider } from "scroll-slider";
import { initSearch } from "search";
import { initSlideInDrawers } from "slide-in-drawers";
import { initSlider } from "slider";
import { initSlideshow } from "slideshow";
import { initSlideshowNew } from "slideshow-new";
import { initTabs } from "tabs";
import { initTooltip } from "tooltip";
import { trapFocus } from "utils";
import { initVideoBanner } from "video-banner";
import { initStoreLocatorMaps } from "store-locator";

const initNoJs = () => {
  document
    .querySelectorAll(".no-js-hidden")
    .forEach((element) => element.classList.remove("no-js-hidden"));
};

const initTheme = () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    `${window.innerWidth - document.documentElement.clientWidth}px`
  );

  initNoJs();
  initTooltip();
  initFeaturedObjects();
  initSlideshowNew();
  initBundles();
  initDrawerMenu();
  initGlobalEffects();
  initProductsScrollable();
  initProductCards();
  initColorSwatches();
  initSlideInDrawers();
  initCollection();
  initScrollSlider();
  initHeaderMenu();
  initCart();
  initProducts();
  initSearch();
  initAnimationSlide();
  initSlideshow();
  initSlider();
  initCollapsible();
  initTabs();
  initPasswordInput();
  initForms();
  initAccountOrders();
  initVideoBanner();
  trapFocus(document.body);
  initStoreLocatorMaps();
  initProductAddToCartBarLinks();
  initCartDrawerGiftMessage();
};

initTheme();

const shopifyEvents = [
  "shopify:inspector:activate",
  "shopify:inspector:deactivate",
  "shopify:section:load",
  "shopify:section:unload",
  "shopify:section:select",
  "shopify:section:deselect",
  "shopify:section:reorder",
  "shopify:section:reorder",
  "shopify:block:select",
  "shopify:block:deselect",
];

type ShopifyThemeEditorEvent = Event & {
  detail: any;
};

/*
shopifyEvents.forEach((eventName) => {
  document.addEventListener(eventName, (e: ShopifyThemeEditorEvent) => {


    initTheme();
    initNoJs();
  });
});
*/

document.addEventListener("shopify:section:load", (e) => {
  const element = e.target as HTMLElement;
  const { type, disabled } = JSON.parse(element.dataset.shopifyEditorSection);

  initTheme();
});

export const isExternalUrl = (url: string): boolean => {
  const host = window?.location?.hostname;

  const linkHost = (function (url) {
    if (/^https?:?\/\//.test(url)) {
      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      return anchorElement.hostname;
    } else {
      return window?.location?.hostname;
    }
  })(url);

  return host !== linkHost;
};

export const isNotSamePageUrl = (url: string): boolean => {
  if (isExternalUrl(url)) {
    return true;
  }

  const path = window.location.pathname;

  const linkPath = (function (url) {
    if (/^https?:?\/\//.test(url)) {
      const anchorElement = document.createElement("a");
      anchorElement.href = url;
      return anchorElement.pathname;
    } else {
      const anchorElement = document.createElement("a");
      anchorElement.href = window.location.origin + url;
      return anchorElement.pathname;
    }
  })(url);

  return path !== linkPath;
};

export default initTheme;
