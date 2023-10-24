import { useCallback, useEffect } from "react";
import { JSONParse } from "utils";

type UseSlideshowEventsHook = () => { output: any };

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

export const useShopifyEvents: UseSlideshowEventsHook = () => {
  const handleShopifyEvents = useCallback((event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const sectionElement = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-shopify-editor-section]"
      );
      const section = JSONParse<{ id: string; type: string; disabled: boolean }>(
        sectionElement?.dataset?.shopifyEditorSection ?? ""
      );
      console.log(section, event.type);
      switch (event.type) {
        case "shopify:section:select": {
          if (section.type === "product-drawer") {
            document.dispatchEvent(new Event("product-quick-view:open"));
          }

          if (section.type === "megamenu") {
            const handle = document.querySelector<HTMLElement>(
              `#shopify-section-${section.id} [data-header-link-megamenu]`
            )?.dataset?.headerLinkMegamenu;
            console.log(handle);

            if (handle) {
              document.dispatchEvent(new Event(`megamenu:${handle}:open`));
            }
          }

          break;
        }
        case "shopify:section:deselect": {
          if (section.type === "product-drawer") {
            document.dispatchEvent(new Event("product:close"));
          }

          if (section.type === "megamenu") {
            const handle = document.querySelector<HTMLElement>(
              `#shopify-section-${section.id} [data-header-link-megamenu]`
            )?.dataset?.headerLinkMegamenu;
            console.log(handle);
            if (handle) {
              document.dispatchEvent(new Event(`megamenu:${handle}:close`));
            }
          }
          break;
        }
        case "shopify:block:select": {
          if (section.type === "megamenu") {
            const handle = document.querySelector<HTMLElement>(
              `#shopify-section-${section.id} [data-header-link-megamenu]`
            )?.dataset?.headerLinkMegamenu;
            console.log(handle);

            if (handle) {
              document.dispatchEvent(new Event(`megamenu:${handle}:open`));
            }
          }
          /*if (section.type === "slideshow") {
            if (document.body.clientWidth >= 768) {
              const index =
                +sectionElement.querySelector<HTMLElement>(
                  `div.max-md\\:hidden [id="block--${event.detail.blockId}"]`
                )?.dataset?.slideshowSlide ?? 0;

              document.dispatchEvent(
                new CustomEvent(`slideshow:${section.id}:set-slide`, { detail: { index } })
              );
            }
            if (document.body.clientWidth < 768) {
              const index =
                +sectionElement.querySelector<HTMLElement>(
                  `div.md\\:hidden [id="block--${event.detail.blockId}"]`
                )?.dataset?.slideshowSlide ?? 0;

              document.dispatchEvent(
                new CustomEvent(`slideshow:${section.id}:set-slide`, { detail: { index } })
              );
            }
          }*/
          if (section.type === "product-drawer") {
            document.dispatchEvent(new Event("product-quick-view:open"));
          }
          break;
        }
        case "shopify:block:deselect": {
          /*if (section.type === "slideshow") {
            document.dispatchEvent(
              new CustomEvent(`slideshow:${section.id}:set-slide`, { detail: { index: 0 } })
            );
          }*/

          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    shopifyEvents.forEach((event) => {
      document.addEventListener(event, handleShopifyEvents);
    });
    return () => {
      shopifyEvents.forEach((event) => {
        document.removeEventListener(event, handleShopifyEvents);
      });
    };
  }, [handleShopifyEvents]);

  return null;
};

export default useShopifyEvents;
