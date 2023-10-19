// @ts-ignore
import clsx from "clsx";
import { useShopifyEvents } from "use-shopify-events";
import { render } from "preact";

render(<Editor />, document.querySelector("[data-editor-root]"));

function Editor() {
  useShopifyEvents();
  return null;
}
