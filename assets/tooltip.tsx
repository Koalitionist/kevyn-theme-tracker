import { useGlobalSettings } from "/global-stores";
import { shortUUID } from "/utils";
import { useCallback, useEffect, useState } from "react";
import { render } from "react-dom";

let timeout: NodeJS.Timeout = null;

const Tooltips = () => {
  const { design_tooltips_show } = useGlobalSettings();
  const [tooltips, setTooltips] = useState(
    new Set(document.querySelectorAll<HTMLElement>("[data-tooltip]"))
  );

  const handleHover = useCallback((event: MouseEvent) => {
    const trigger = event.currentTarget as HTMLElement;
    const tooltip = document.querySelector<HTMLElement>("[data-tooltip-display]");
    const content = trigger.dataset.tooltip;
    const { left, right, width, height, top, bottom } = trigger.getBoundingClientRect();
    if (timeout) {
      clearTimeout(timeout);
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.right = `${right}px`;
    tooltip.style.width = `${width}px`;
    tooltip.style.height = `${height}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.bottom = `${bottom}px`;
    tooltip.style.opacity = `1`;
    tooltip.dataset.tooltipDisplay = content;
  }, []);

  const handleExit = useCallback((event: MouseEvent) => {
    const tooltip = document.querySelector<HTMLElement>("[data-tooltip-display]");
    timeout = setTimeout(
      () => {
        tooltip.style.opacity = "";

        setTimeout(
          () => {
            tooltip.style.left = "-9999px";
            tooltip.style.right = "";
            tooltip.style.top = "-9999px";
            tooltip.style.bottom = "";
            tooltip.style.width = "0";
            tooltip.style.height = "0";
            tooltip.dataset.tooltipDisplay = "";
          },
          150
        );
      },
      150
    );
  }, []);

  useEffect(() => {
    if (!design_tooltips_show) return;
    const newNodes = [];
    document.querySelectorAll<HTMLElement>("[data-tooltip]").forEach((element) => {
      if (!tooltips.has(element)) {
        newNodes.push(element);
      }
    });

    if (newNodes.length) {
      setTooltips((prev) => {
        newNodes.forEach((node) => prev.add(node));

        return new Set([...prev]);
      });
    }

    const mutationObserver = new MutationObserver((e) => {
      e?.forEach((record) => {
        const nodes = [];

        ([...record.addedNodes] as HTMLElement[]).forEach((node) => {
          if (node?.dataset?.tooltip) {
            nodes.push(node);
            return;
          }
          if (node instanceof Element) {
            node?.querySelectorAll("[data-tooltip]").forEach((label) => {
              nodes.push(label);
            });
          }
        });

        if (nodes.length) {
          setTooltips((prev) => {
            nodes.forEach((node) => prev.add(node));

            return new Set([...prev]);
          });
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });
  }, [design_tooltips_show, tooltips]);

  useEffect(() => {
    if (!design_tooltips_show) return () => {};
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", handleHover);
      tooltip.addEventListener("mouseleave", handleExit);
    });

    return () => {
      tooltips.forEach((tooltip) => {
        tooltip.removeEventListener("mouseover", handleHover);
        tooltip.removeEventListener("mouseleave", handleExit);
      });
    };
  }, [design_tooltips_show, handleExit, handleHover, tooltips]);

  return <></>;
};

export const initTooltip = async () => {
  const tooltipContainer = document.querySelector<HTMLElement>("[data-tooltip-display]");

  if (tooltipContainer) {
    render(<Tooltips />, tooltipContainer);
  }
};
