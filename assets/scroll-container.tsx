import clsx from "clsx";
import { useWindowSize } from "scrollbar";
import { scrollToX } from "utils";
import React, { FC, PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";

export const ScrollContainer: FC<
  PropsWithChildren<{ count: number; containerOverflow?: boolean; centerItems?: boolean }>
> = ({ children, count, containerOverflow = true, centerItems = false }) => {
  const [showScrollbar, setShowScrollbar] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [pointerPosition, setPointerPosition] = useState<{
    startX: number | null;
    startLeft: number | null;
  }>({ startX: null, startLeft: 0 });
  const [scrollbarProps, setScrollbarProps] = useState({ width: 0, left: 0 });
  const { width } = useWindowSize();
  const manualScrolling = useRef(false);

  const handleScrollEvent = useCallback(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const containerWidth = scrollContainer?.clientWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX === null && width) {
      setScrollbarProps({
        width: containerWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * scrollbarRef.current?.clientWidth,
      });
    }
  }, [pointerPosition.startX, width]);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pointerPosition.startX === null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: e.clientX, startLeft: scrollbarProps.left });
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const handlePointerMove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const containerWidth = scrollContainer?.clientWidth;
    const { scrollWidth } = scrollContainer;
    const scrollBarWidth = scrollbarRef.current?.clientWidth;

    if (pointerPosition.startX !== null) {
      const left = Math.min(
        Math.max(0, (pointerPosition.startLeft ?? 0) + e.clientX - pointerPosition.startX),
        scrollBarWidth - (containerWidth / scrollWidth) * scrollBarWidth
      );

      scrollContainer?.scrollTo({
        left: (left / scrollBarWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });
      setScrollbarProps({
        width: containerWidth / scrollWidth,
        left: left,
      });
    }
  }, [pointerPosition]);

  const handlePointerUp = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pointerPosition.startX !== null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
      document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const scrollToIndex = useCallback((index: number) => {
    if (manualScrolling.current) return;
    manualScrolling.current = true;
    const { left: containerLeft } = scrollContainerRef.current.getBoundingClientRect();
    const { paddingLeft } = getComputedStyle(scrollContainerRef.current);
    const basePosition = +paddingLeft.replace("px", "");

    const scrollItems = [...scrollContainerRef.current.children] as unknown as HTMLElement[];

    const currentItemIndex = [...scrollItems].findIndex((element) => {
      const { left, width } = element.getBoundingClientRect();
      const itemLeft = left - containerLeft - 5;
      const itemRight = itemLeft + width + 5;
      return itemLeft <= basePosition && itemRight >= basePosition;
    });

    scrollContainerRef.current.classList.remove("snap-x");

    const { offsetLeft } = [...scrollItems][Math.min(Math.max(currentItemIndex + index, 0), count)];
    scrollToX(200, offsetLeft - basePosition, scrollContainerRef.current, () => {
      scrollContainerRef.current.classList.add("snap-x");
      manualScrolling.current = false;
    });
  }, [count]);

  const handleClick = useCallback(async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (pointerPosition.startX === null) {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;
      const containerWidth = scrollContainer?.clientWidth;
      const { scrollWidth } = scrollContainer;
      const thumbWidth = containerWidth / scrollWidth;
      const clickPosition = e.clientX - scrollContainer?.getBoundingClientRect().left;
      const positionPercentage = clickPosition / scrollContainer?.clientWidth;

      const left = Math.min(
        Math.max(
          0,
          containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
        ),
        containerWidth - (containerWidth / scrollWidth) * containerWidth
      );

      scrollContainer?.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });
    }
  }, [pointerPosition.startX]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return () => {};

    scrollContainer?.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollContainer?.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScrollEvent]);

  useEffect(() => {
    document.addEventListener("pointerup", handlePointerUp);

    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, [handlePointerMove, handlePointerUp]);

  useEffect(() => {
    if (pointerPosition.startX !== null) {
      document.addEventListener("pointermove", handlePointerMove);

      return () => {
        document.removeEventListener("pointermove", handlePointerMove);
      };
    }
    return () => {};
  }, [handlePointerMove, pointerPosition.startX]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    if (width || count) {
      setShowScrollbar(scrollContainer?.scrollWidth > scrollContainer?.clientWidth);
    }
    handleScrollEvent();
    setTimeout(
      () => {
        handleScrollEvent();
        setShowScrollbar(scrollContainer?.scrollWidth > scrollContainer?.clientWidth);
      },
      10
    );
    setTimeout(
      () => {
        handleScrollEvent();
        setShowScrollbar(scrollContainer?.scrollWidth > scrollContainer?.clientWidth);
      },
      500
    );
    setTimeout(
      () => {
        handleScrollEvent();
        setShowScrollbar(scrollContainer?.scrollWidth > scrollContainer?.clientWidth);
      },
      1000
    );
  }, [width, count, handleScrollEvent]);

  return (
    <section className="relative mb-8 block">
      <main
        className={clsx(!containerOverflow && "container", centerItems && "flex justify-center")}
      >
        <div
          className={clsx(
            "scrollbar-none grid w-min max-w-full snap-x snap-mandatory auto-cols-auto grid-flow-col-dense gap-6 overflow-x-auto pb-8",
            containerOverflow &&
              "scroll-pl-4 px-4 md:scroll-pl-[max(2rem,calc((100%-var(--layout-page-width)+4rem)/2))] md:px-[max(2rem,calc((100%-var(--layout-page-width)+4rem)/2))]"
          )}
          ref={scrollContainerRef}
        >
          {children}
        </div>
      </main>

      <footer className={clsx("container relative select-none", !showScrollbar && "hidden")}>
        <div className="relative">
          <div
            className="group/scrollbar absolute top-full flex h-4 w-full cursor-pointer touch-none items-center"
            ref={scrollbarRef}
            onClick={handleClick}
          >
            <div className="relative h-0.5 w-full bg-gray-200 transition-all group-hover:h-0.5">
              <button
                type="button"
                className="absolute top-1/2 flex min-h-full cursor-grab items-center justify-center py-2 will-change-transform active:cursor-grabbing [&:active_div]:!h-0.5"
                style={{
                  transform: `translateY(-50%) translateX(${scrollbarProps.left}px)`,
                  width: `${scrollbarProps.width * 100}%`,
                }}
                onPointerDown={handlePointerDown}
                onClick={(e) => e.stopPropagation()}
                aria-label="Scrollbar Thumb"
              >
                <div className="h-0.5 w-full bg-gray-900 transition-all group-hover:h-0.5" />
              </button>
            </div>
          </div>
        </div>

        <button
          className="group absolute right-14 top-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
          onClick={() => {
            scrollToIndex(-1);
          }}
          style={{
            opacity: scrollbarProps.left > 0 ? "100" : "0",
            pointerEvents: scrollbarProps.left > 0 ? "auto" : "none",
          }}
        >
          <span className="sr-only">Show Previous Item</span>
          <svg
            className="mr-1 h-3 w-3 rotate-180 stroke-2"
            fill="none"
            viewBox="0 0 10 10"
            aria-hidden="true"
            stroke="currentColor"
          >
            <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
            <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
          </svg>
        </button>
        <button
          className="group absolute right-5 top-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
          onClick={() => {
            scrollToIndex(1);
          }}
          style={{
            opacity:
              scrollbarProps.left + scrollbarRef.current?.clientWidth * scrollbarProps.width + 1 <=
              scrollbarRef.current?.clientWidth
                ? "100"
                : "0",
            pointerEvents:
              scrollbarProps.left + scrollbarRef.current?.clientWidth * scrollbarProps.width + 1 <=
              scrollbarRef.current?.clientWidth
                ? "auto"
                : "none",
          }}
        >
          <span className="sr-only">Show Next Item</span>
          <svg
            className="ml-1 h-3 w-3 stroke-2"
            fill="none"
            viewBox="0 0 10 10"
            aria-hidden="true"
            stroke="currentColor"
          >
            <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
            <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
          </svg>
        </button>

        {/*<button
          className="group absolute -top-96 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-theme-bg/80 stroke-2 text-gray-400 shadow-sm transition-all ease-in-out hf:text-gray-900 2xl:-left-12"
          style={{
            opacity: scrollbarProps.left > 0 ? "100" : "0",
            pointerEvents: scrollbarProps.left > 0 ? "auto" : "none",
          }}
        >
          <span className="sr-only">Show Previous Item</span>
          <ChevronLeftIcon className="ml-1 h-3 w-3 stroke-2" />
        </button>
        <button
          className="group absolute -top-96 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-theme-bg/80 stroke-2 text-gray-400 shadow-sm transition-all ease-in-out hf:text-gray-900 2xl:-right-12"
          style={{
            opacity: scrollbarProps.left > 0 ? "100" : "0",
            pointerEvents: scrollbarProps.left > 0 ? "auto" : "none",
          }}
        >
          <span className="sr-only">Show Next Item</span>
          <ChevronRightIcon className="ml-1 h-3 w-3 stroke-2" />
        </button>*/}
      </footer>
    </section>
  );
};
