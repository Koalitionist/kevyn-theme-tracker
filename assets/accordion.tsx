import clsx from "clsx";
import { PlusIcon } from "icons";
import { render } from "preact";
import { FC, useCallback, useEffect, useRef, useState } from "react";

export const Accordion: FC<{
  title: string;
  content: string;
  blockId?: string;
  initOpen?: boolean;
}> = ({ title, content, blockId, initOpen = false }) => {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const heightElementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);
  const contentRef = useRef(content);
  const titleRef = useRef(title);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    setMaxHeight(open ? 0 : heightElementRef.current.scrollHeight || 9999);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (!open) {
      setOpen(true);
    }
    if (open) {
      timeoutRef.current = setTimeout(
        () => {
          setOpen(false);
        },
        220
      );
    }
    setTimeout(
      () => {
        setMaxHeight(open ? 0 : heightElementRef.current.scrollHeight || 9999);
      },
      20
    );
  }, [open]);

  const handleShopifyBlockSelect = useCallback((e) => {
    if (e?.detail?.blockId === blockId) {
      setMaxHeight(heightElementRef.current.scrollHeight || 9999);
      setOpen(true);
    }
  }, [blockId]);

  const handleShopifyBlockDeselect = useCallback((e) => {
    if (e?.detail?.blockId === blockId) {
      setMaxHeight(0);
      timeoutRef.current = setTimeout(
        () => {
          setOpen(false);
        },
        155
      );
    }
  }, [blockId]);

  useEffect(() => {
    if (blockId) {
      document.addEventListener("shopify:block:select", handleShopifyBlockSelect);
      document.addEventListener("shopify:block:deselect", handleShopifyBlockDeselect);
      return () => {
        document.removeEventListener("shopify:block:select", handleShopifyBlockSelect);
        document.removeEventListener("shopify:block:deselect", handleShopifyBlockDeselect);
      };
    }
    return () => {};
  }, [blockId, handleShopifyBlockDeselect, handleShopifyBlockSelect]);

  useEffect(() => {
    if (initOpen) {
      setOpen((current) => {
        if (!current) {
          setMaxHeight(!initOpen ? 0 : heightElementRef.current.scrollHeight || 9999);
          return initOpen;
        }
        return current;
      });
    }
  }, [initOpen]);

  useEffect(() => {
    if (title !== titleRef.current || content !== contentRef.current) {
      setMaxHeight(!initOpen ? 0 : heightElementRef.current.scrollHeight || 9999);
      setOpen(initOpen);
      titleRef.current = title;
      contentRef.current = content;
    }
  }, [content, initOpen, title]);

  /*  function htmlDecode(input) {
    const doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }*/

  return (
    <details className="group flex appearance-none" open={open}>
      <summary className="cursor-pointer select-none py-2.5" onClick={handleClick} tabIndex={0}>
        <span className="flex items-center justify-between">
          <h2 className="text-sm font-semibold" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="relative flex h-2.5 w-2.5 items-center justify-center ">
            <div
              className={clsx(
                "absolute h-0.5 w-2.5 rounded-full bg-current transition-all duration-200",
                maxHeight ? "rotate-0" : "-rotate-180"
              )}
            ></div>
            <div
              className={clsx(
                "absolute h-0.5 w-2.5 origin-center rounded-full bg-current transition-all",
                maxHeight ? "rotate-0" : "-rotate-90"
              )}
            ></div>
          </div>
        </span>
      </summary>

      <div
        className="overflow-hidden transition-all duration-150 ease-linear"
        style={{
          maxHeight: `${
            maxHeight > 0
              ? Math.max(heightElementRef.current.scrollHeight || 9999, maxHeight + 60)
              : 0
          }px`,
        }}
        ref={heightElementRef}
      >
        <div
          className="prose prose-sm prose-theme max-w-none pb-2 [&_>_*]:max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </details>
  );
};

export const initCollapsible = async () => {
  document.querySelectorAll<HTMLDetailsElement>("[data-collapsible]").forEach((item) => {
    const blockId = item.dataset.blockId;
    const title = item.querySelector<HTMLElement>("[data-collapsible-title]").innerHTML;
    const content = item.querySelector<HTMLElement>("[data-collapsible-content]").innerHTML;

    render(
      <Accordion title={title} content={content} blockId={blockId} initOpen={!!item.open} />,
      item.parentElement
    );
  });

  const MutationObserver = window.MutationObserver || window["WebKitMutationObserver"];

  // define a new observer
  const mutationObserver = new MutationObserver((e) => {
    e?.forEach((record) =>
      record.addedNodes.forEach(async (node) => {
        if (node?.dataset?.collapsible) {
          const item = node as HTMLDetailsElement;
          const title = item.querySelector<HTMLElement>("[data-collapsible-title]").innerHTML;
          const content = item.querySelector<HTMLElement>("[data-collapsible-content]").innerHTML;

          render(
            <Accordion title={title} content={content} initOpen={!!item.open} />,
            item.parentElement
          );
        }
      })
    );
  });

  // have the observer observe foo for changes in children
  mutationObserver.observe(document.body, { childList: true, subtree: true });
};
