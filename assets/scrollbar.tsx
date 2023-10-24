import { ChevronLeftIcon, ChevronRightIcon } from "/icons";
import clsx from "clsx";
import { scrollToX } from "utils";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width, height };
};

export const ScrollBarButtons: FC<{ itemCount: number; className?: string }> = ({
  itemCount,
  className,
}) => {
  const sliderNavRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const { width } = useWindowSize();

  const handleScroll = useCallback(() => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
    setShowPrevButton(scrollLeft !== 0);
    setShowNextButton(scrollWidth !== offsetWidth && scrollLeft + offsetWidth !== scrollWidth);
  }, []);

  const handleClickPrev = useCallback((e) => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft } = scrollContainer;
    const itemWidth = scrollWidth / itemCount;
    const currentScrollIndex = Math.round(scrollLeft / itemWidth);

    scrollContainer.classList.remove("snap-x");
    scrollToX(220, Math.max(itemWidth * (currentScrollIndex - 1), 0), scrollContainer, () => {
      scrollContainer.scrollLeft = Math.max(itemWidth * (currentScrollIndex - 1), 0);
      scrollContainer.classList.add("snap-x");
    });
  }, [itemCount]);

  const handleClickNext = useCallback((e) => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
    const itemWidth = scrollWidth / itemCount;
    const currentScrollIndex = Math.round(scrollLeft / itemWidth);

    scrollContainer.classList.remove("snap-x");

    scrollToX(
      220,
      Math.min(itemWidth * (currentScrollIndex + 1), scrollWidth - offsetWidth),
      scrollContainer,
      () => {
        scrollContainer.scrollLeft = Math.min(
          itemWidth * (currentScrollIndex + 1),
          scrollWidth - offsetWidth
        );
        scrollContainer.classList.add("snap-x");
      }
    );
  }, [itemCount]);

  useEffect(() => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, width]);

  return (
    <div
      ref={sliderNavRef}
      className={clsx("pointer-events-none absolute inset-0 z-20", className)}
    >
      <button
        className="group absolute -bottom-10 right-[116px] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
        onClick={handleClickPrev}
        style={{
          opacity: showPrevButton ? "100" : "0",
          pointerEvents: showPrevButton ? "auto" : "none",
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
        className="group absolute -bottom-10 right-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg stroke-2 text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
        onClick={handleClickNext}
        style={{
          opacity: showNextButton ? "100" : "0",
          pointerEvents: showNextButton ? "auto" : "none",
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
    </div>
  );
};

export const ScrollBar: FC<{ itemCount?: number; showCount?: boolean; className?: string }> = ({
  itemCount,
  showCount,
  className,
}) => {
  const [showScrollbar, setShowScrollbar] = useState(true);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [pointerPosition, setPointerPosition] = useState<{
    startX: number | null;
    startLeft: number | null;
  }>({ startX: null, startLeft: 0 });
  const [scrollbarProps, setScrollbarProps] = useState({ width: 0, left: 0 });
  const { width } = useWindowSize();

  const handleScrollEvent = useCallback(() => {
    const scrollbarElement = scrollbarRef.current;
    if (!scrollbarElement) return;

    const scrollContainer = scrollbarElement.parentElement as HTMLElement;
    const containerWidth = scrollbarElement.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX === null && width) {
      setScrollbarProps({
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      });
    }
  }, [pointerPosition.startX, width]);

  const handlePointerDown = useCallback((e) => {
    if (pointerPosition.startX === null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: e.clientX, startLeft: scrollbarProps.left });
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      scrollContainer.classList.remove("snap-mandatory", "snap-x");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    const containerWidth = scrollbarRef.current!.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX !== null) {
      const innerWidth =
        scrollContainer.offsetWidth -
        +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") -
        +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");

      const left = Math.min(
        Math.max(0, (pointerPosition.startLeft ?? 0) + e.clientX - pointerPosition.startX),
        containerWidth - (innerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });

      setScrollbarProps({
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      });
    }
  }, [pointerPosition]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    if (pointerPosition.startX !== null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
      document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      scrollContainer.classList.add("snap-mandatory", "snap-x");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const handleClick = useCallback(async (e) => {
    if (pointerPosition.startX === null) {
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      const containerWidth = scrollbarRef.current!.offsetWidth;
      const { scrollWidth } = scrollContainer;
      const thumbWidth = containerWidth / scrollWidth;
      const clickPosition = e.clientX - scrollbarRef.current!.getBoundingClientRect().left;
      const positionPercentage = clickPosition / containerWidth;

      const left = Math.min(
        Math.max(
          0,
          containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
        ),
        containerWidth - (containerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });
    }
  }, [pointerPosition.startX]);

  useEffect(() => {
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;

    scrollContainer.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScrollEvent]);

  useEffect(() => {
    handleScrollEvent();
  }, [handleScrollEvent, itemCount]);

  useEffect(() => {
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    scrollToX(220, 0, scrollContainer);
  }, [itemCount]);

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
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    if (width) {
      setShowScrollbar(scrollContainer.scrollWidth > scrollContainer.offsetWidth);
    }
  }, [width, itemCount]);

  const currentImageCount =
    Math.round(
      (scrollbarProps.left /
        (scrollbarRef.current?.offsetWidth -
          scrollbarRef.current?.offsetWidth * scrollbarProps.width)) *
        (itemCount - 1)
    ) + 1;

  return (
    <>
      <div
        ref={scrollbarRef}
        className={clsx(
          "group absolute flex h-4 cursor-pointer touch-none items-center",
          showCount ? "w-[calc(100%-80px)]" : "w-full",
          !showScrollbar && "hidden",
          className ? className : "top-full"
        )}
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

      {showCount && itemCount && currentImageCount
        ? <div
            className={clsx(
              "absolute right-0 flex h-4 w-[86px] items-center justify-end gap-2 font-bold",
              className ? className : "top-full"
            )}
          >
            <span>
              {/*{Math.round(1 + scrollbarProps.left * scrollbarProps.width)}{" "}*/}
              {scrollbarRef.current && showScrollbar ? currentImageCount : null} <br />
            </span>{" "}
            of <span>{itemCount}</span>
          </div>
        : null}
    </>
  );
};

export const ScrollBarButtonsNew: FC<{ itemCount: number; className?: string }> = ({
  itemCount,
  className = "-bottom-8 md:-bottom-8",
}) => {
  const sliderNavRef = useRef<HTMLDivElement>(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const { width } = useWindowSize();

  const handleScroll = useCallback(() => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
    setShowPrevButton(scrollLeft !== 0);
    setShowNextButton(scrollWidth !== offsetWidth && scrollLeft + offsetWidth <= scrollWidth - 5);
  }, []);

  const handleClickPrev = useCallback((e) => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft } = scrollContainer;
    const itemWidth = scrollWidth / itemCount;
    const currentScrollIndex = Math.round(scrollLeft / itemWidth);

    scrollContainer.classList.remove("snap-x");
    scrollToX(220, Math.max(itemWidth * (currentScrollIndex - 1), 0), scrollContainer, () => {
      scrollContainer.scrollLeft = Math.max(itemWidth * (currentScrollIndex - 1), 0);
      scrollContainer.classList.add("snap-x");
    });
  }, [itemCount]);

  const handleClickNext = useCallback((e) => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;
    const { scrollWidth, scrollLeft, offsetWidth } = scrollContainer;
    const itemWidth = scrollWidth / itemCount;
    const currentScrollIndex = Math.round(scrollLeft / itemWidth);

    scrollContainer.classList.remove("snap-x");

    scrollToX(
      220,
      Math.min(itemWidth * (currentScrollIndex + 1), scrollWidth - offsetWidth),
      scrollContainer,
      () => {
        scrollContainer.scrollLeft = Math.min(
          itemWidth * (currentScrollIndex + 1),
          scrollWidth - offsetWidth
        );
        scrollContainer.classList.add("snap-x");
      }
    );
  }, [itemCount]);

  useEffect(() => {
    const scrollContainer = sliderNavRef.current!.parentElement as HTMLElement;

    handleScroll();
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, width]);

  return (
    <div
      ref={sliderNavRef}
      className={clsx("pointer-events-none absolute z-20 w-full max-md:px-4", className)}
    >
      <div className="relative">
        <button
          className="group absolute -bottom-10 left-0 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
          onClick={handleClickPrev}
          style={{
            opacity: showPrevButton ? "100" : "0",
            pointerEvents: showPrevButton ? "auto" : "none",
          }}
        >
          <span className="sr-only">Show Previous Item</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </button>
        <button
          className="group absolute -bottom-10 right-0 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-theme-bg text-gray-400 shadow transition-all ease-in-out hf:text-gray-900"
          onClick={handleClickNext}
          style={{
            opacity: showNextButton ? "100" : "0",
            pointerEvents: showNextButton ? "auto" : "none",
          }}
        >
          <span className="sr-only">Show Next Item</span>
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export const ScrollBarNew: FC<{ itemCount?: number; showCount?: boolean; className?: string }> = ({
  itemCount,
  showCount,
  className = "-bottom-7 md:-bottom-8",
}) => {
  const [showScrollbar, setShowScrollbar] = useState(true);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [pointerPosition, setPointerPosition] = useState<{
    startX: number | null;
    startLeft: number | null;
  }>({ startX: null, startLeft: 0 });
  const [scrollbarProps, setScrollbarProps] = useState({ width: 0, left: 0 });
  const { width } = useWindowSize();

  const handleScrollEvent = useCallback(() => {
    const scrollbarElement = scrollbarRef.current;
    if (!scrollbarElement) return;

    const scrollContainer = scrollbarElement.parentElement as HTMLElement;
    const containerWidth = scrollbarElement.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX === null && width) {
      setScrollbarProps({
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      });
    }
  }, [pointerPosition.startX, width]);

  const handlePointerDown = useCallback((e) => {
    if (pointerPosition.startX === null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: e.clientX, startLeft: scrollbarProps.left });
      document.body.classList.add("[&_*]:!pointer-events-none", "!cursor-grabbing");
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      scrollContainer.classList.remove("snap-mandatory", "snap-x");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    const containerWidth = scrollbarRef.current!.offsetWidth;
    const { scrollWidth, scrollLeft } = scrollContainer;

    if (pointerPosition.startX !== null) {
      const innerWidth =
        scrollContainer.offsetWidth -
        +getComputedStyle(scrollContainer, null).paddingLeft.replace("px", "") -
        +getComputedStyle(scrollContainer, null).paddingRight.replace("px", "");

      const left = Math.min(
        Math.max(0, (pointerPosition.startLeft ?? 0) + e.clientX - pointerPosition.startX),
        containerWidth - (innerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });

      setScrollbarProps({
        width: scrollContainer.offsetWidth / scrollWidth,
        left: (scrollLeft / scrollWidth) * containerWidth,
      });
    }
  }, [pointerPosition]);

  const handlePointerUp = useCallback((e: PointerEvent) => {
    if (pointerPosition.startX !== null) {
      e.preventDefault();
      e.stopPropagation();
      setPointerPosition({ startX: null, startLeft: scrollbarProps.left });
      document.body.classList.remove("[&_*]:!pointer-events-none", "!cursor-grabbing");
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      scrollContainer.classList.add("snap-mandatory", "snap-x");
    }
  }, [pointerPosition.startX, scrollbarProps.left]);

  const handleClick = useCallback(async (e) => {
    if (pointerPosition.startX === null) {
      const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
      const containerWidth = scrollbarRef.current!.offsetWidth;
      const { scrollWidth } = scrollContainer;
      const thumbWidth = containerWidth / scrollWidth;
      const clickPosition = e.clientX - scrollbarRef.current!.getBoundingClientRect().left;
      const positionPercentage = clickPosition / containerWidth;

      const left = Math.min(
        Math.max(
          0,
          containerWidth * positionPercentage - thumbWidth * containerWidth * positionPercentage
        ),
        containerWidth - (containerWidth / scrollWidth) * containerWidth
      );

      scrollContainer.scrollTo({
        left: (left / containerWidth) * scrollWidth,
        // @ts-ignore
        behavior: "instant",
      });
    }
  }, [pointerPosition.startX]);

  useEffect(() => {
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;

    scrollContainer.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollContainer.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScrollEvent]);

  useEffect(() => {
    handleScrollEvent();
  }, [handleScrollEvent, itemCount]);

  useEffect(() => {
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    scrollToX(220, 0, scrollContainer);
  }, [itemCount]);

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
    const scrollContainer = scrollbarRef.current!.parentElement as HTMLElement;
    if (width) {
      setShowScrollbar(scrollContainer.scrollWidth > scrollContainer.offsetWidth);
    }
  }, [width, itemCount]);

  const currentImageCount =
    Math.round(
      (scrollbarProps.left /
        (scrollbarRef.current?.offsetWidth -
          scrollbarRef.current?.offsetWidth * scrollbarProps.width)) *
        (itemCount - 1)
    ) + 1;

  return (
    <>
      <div
        ref={scrollbarRef}
        className={clsx(
          "group absolute flex h-4 cursor-pointer touch-none items-center max-md:left-4 max-md:right-4 md:w-full",
          !showScrollbar && "hidden",
          className
        )}
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
        {showCount && itemCount && currentImageCount
          ? <div
              className={clsx(
                "absolute left-1/2 flex h-4 w-[86px] -translate-x-1/2 items-center justify-center gap-2 font-bold",
                "-bottom-7"
              )}
            >
              <span>
                {/*{Math.round(1 + scrollbarProps.left * scrollbarProps.width)}{" "}*/}
                {scrollbarRef.current && showScrollbar ? currentImageCount : null} <br />
              </span>{" "}
              of <span>{itemCount}</span>
            </div>
          : null}
      </div>
    </>
  );
};
