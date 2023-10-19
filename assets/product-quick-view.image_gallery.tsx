import { ProductQuickViewBlocks, ProductQuickViewBlocksImage_gallery, ProductSection } from "/_types";
import { Image } from "/image";
import { ReactProductState } from "/product";
import { ScrollBar, ScrollBarButtons, ScrollBarButtonsNew, ScrollBarNew, useWindowSize } from "/scrollbar";
import { scrollToX, scrollToXY, shortUUID } from "/utils";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductQuickViewImageGallery: FC<{
  settings: ProductQuickViewBlocksImage_gallery["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product, selectedVariant } = useProduct(({ product, selectedVariant }) => ({
    product,
    selectedVariant,
  }));
  const variantRef = useRef(selectedVariant?.id);
  const productRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const { width } = useWindowSize();
  const [showScroll, setShowScroll] = useState(false);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (variantRef.current !== selectedVariant?.id) {
      variantRef.current = selectedVariant.id;
      scrollToX(0, 0, scrollContainer.current);
    }
  }, [selectedVariant, width]);

  useEffect(() => {
    setTimeout(
      () => {
        const overlay = document.querySelector("[data-product-loading-screen]");
        overlay?.classList?.add("opacity-0", "pointer-events-none");
        /*setTimeout(
          () => {
            overlay?.remove();
          },
          250
        );*/
      },
      10
    );
  }, []);

  useEffect(() => {
    if (productRef.current !== product?.id && showScroll) {
      productRef.current = product?.id;
      setShowScroll((prev) => false);
      timeoutRef.current = setTimeout(
        () => {
          setShowScroll((prev) => true);
        },
        50
      );
    }
    if (productRef.current !== product?.id && !showScroll) {
      productRef.current = product?.id;
      timeoutRef.current = setTimeout(
        () => {
          setShowScroll((prev) => true);
        },
        50
      );
    }
  }, [product?.id, showScroll]);

  useEffect(() => {
    const handleQuickViewOpened = (e) => {
      if (showScroll) {
        setShowScroll((prev) => false);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(
          () => {
            setShowScroll((prev) => true);
          },
          50
        );
      }
    };
    document.addEventListener("product-quick-view:opened", handleQuickViewOpened);
    return () => {
      document.removeEventListener("product-quick-view:opened", handleQuickViewOpened);
    };
  }, [showScroll]);

  const scrollToMedia = useCallback((mediaId: number) => {
    const scrollTarget = scrollContainer.current.querySelector<HTMLElement>(
      `[data-media-id="${mediaId}"]`
    );
    if (scrollTarget) {
      const { offsetTop, offsetLeft } = scrollTarget;
      scrollToXY(200, offsetLeft, offsetTop, scrollContainer.current);
    }
  }, []);

  if (!product.handle || !selectedVariant) {
    return null;
  }

  let mediaItems = [selectedVariant?.featured_media];

  if (settings.variants_multi_images === "via_metafield") {
    const [namespace, key] = settings.variants_image_metafield?.trim()?.split(".") ?? [
      "smart",
      "images",
    ];
    (selectedVariant?.metafields?.[namespace]?.[key] as string[])?.forEach((url) => {
      mediaItems.push({
        aspect_ratio: 1,
        height: 1,
        id: shortUUID() as unknown as number,
        media_type: "image",
        position: -1,
        preview_image: {
          aspect_ratio: 1,
          height: 1,
          src: url,
          width: 1,
        },
        src: url,
        width: 1,
      });
    });
  }

  if (settings.variants_multi_images === "via_image_order") {
    const positions = [...new Set(product?.variants.map((v) => v.featured_media?.position))].sort(
      (a, b) => a - b
    );
    const from = selectedVariant.featured_media?.position;
    const to = positions[positions.findIndex((position) => position === from) + 1] ?? 9999;

    product?.media.forEach((media) => {
      if (media?.position > from && media?.position < to) {
        mediaItems.push(media);
      }
    });
  }

  mediaItems =
    [
      ...mediaItems,
      ...((!settings.hide_not_selected_variant_images || !selectedVariant?.featured_media?.src
        ? product?.media?.filter((media) => media?.id !== selectedVariant?.featured_media?.id) ?? []
        : []) ?? []),
    ]?.filter((media) => media) ?? [];

  const variantsWithImage = product?.variants?.filter(
    (v1, i, a) =>
      v1.featured_media &&
      a.findIndex((v2) => v1?.featured_media?.id === v2?.featured_media?.id) === i
  );

  return (
    <>
      <main className="scroll-container grid h-full md:absolute md:inset-0">
        <div
          className="scrollbar-none md:min-h-56 grid max-w-full flex-1 snap-x snap-mandatory auto-cols-[40%] grid-flow-col-dense overflow-x-auto md:auto-cols-[100%] md:gap-8"
          ref={scrollContainer}
        >
          {mediaItems
            ?.filter((m) => m?.alt !== "hide-image")
            ?.map((media) => {
              return (
                <figure
                  data-media-id={media.id}
                  key={`media-${media.id}`}
                  className="image-test relative grid aspect-1 h-full w-full snap-start snap-always overflow-hidden transition-all ease-in-out"
                  /*style={{
                    aspectRatio: media?.aspect_ratio?.toFixed(3),
                    "--image-aspect-ratio": media?.aspect_ratio?.toFixed(3),
                  }}*/
                >
                  {
                    {
                      image: (
                        <Image
                          src={`${media.src}`}
                          maxWidth={settings.gallery__zoom ? 1200 : 640}
                          alt={media.alt ?? product?.title}
                          className="absolute left-0 top-0 h-full w-full bg-inherit object-contain object-center"
                          screenPercentage={70}
                          onMouseMove={
                            settings.gallery__zoom && width > 768
                              ? (e) => {
                                  const { left, top, width, height } =
                                    e.currentTarget.parentElement.getBoundingClientRect();
                                  const maxPercentage =
                                    50 - 50 / (+settings.gallery__zoom_scale / 100);
                                  const leftPercentage =
                                    (((((e.clientX - left) / width) * 100 - 50) * 2) / 100) *
                                    maxPercentage;
                                  const topPercentage =
                                    (((((e.clientY - top) / height) * 100 - 50) * 2) / 100) *
                                    maxPercentage;

                                  e.currentTarget.style.transform = `scale(${
                                    +settings.gallery__zoom_scale / 100
                                  }) translate(${-leftPercentage}%, ${-topPercentage}%)`;
                                }
                              : undefined
                          }
                          onMouseLeave={
                            settings.gallery__zoom && width > 768
                              ? (e) => {
                                  e.currentTarget.style.transform = ``;
                                }
                              : undefined
                          }
                        />
                      ),
                      video: (
                        <video
                          playsInline={true}
                          controls={true}
                          autoPlay={true}
                          loop={settings.gallery__loop_videos}
                          preload="none"
                          className="absolute left-0 top-0 h-full w-full bg-inherit object-contain"
                          muted={true}
                          aria-label={media.alt ?? product?.title}
                          poster={media.preview_image.src}
                        >
                          <source
                            src={
                              media?.sources?.find(
                                (src) => src.format === "mp4" && src.width <= 852
                              )?.url
                            }
                            type="video/mp4"
                          />

                          <Image
                            src={media.preview_image.src}
                            alt={media.alt ?? product?.title}
                            screenPercentage={60}
                          />
                        </video>
                      ),
                      external_video: (
                        <iframe
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen={true}
                          className="js-youtube absolute left-0 top-0 h-full w-full border-0 bg-inherit object-contain"
                          loading="lazy"
                          src={
                            media.host === "youtube"
                              ? `https://www.youtube.com/embed/${
                                  media.external_id
                                }?autoplay=0&controls=1&muted=1&enablejsapi=1&loop=${
                                  settings.gallery__loop_videos ? 1 : 0
                                }&modestbranding=1&playsinline=1&rel=0`
                              : `https://player.vimeo.com/video/${media.external_id}`
                          }
                          title={media.alt ?? product?.title}
                        ></iframe>
                      ),
                      model: (
                        <>
                          <span
                            className="relative left-0 top-0 block h-full w-full"
                            style={{
                              // paddingBottom: `calc(100% * ${media.preview_image.aspect_ratio})`,
                              width: `Min(calc(460px * ${media.preview_image.aspect_ratio}), 85vw)`,
                              height: `Min(calc(460px / ${media.preview_image.aspect_ratio}), calc(85vw / ${media.preview_image.aspect_ratio})`,
                            }}
                          />
                          <span className="absolute left-0 top-0 block h-full w-full pb-[100%]">
                            {/* @ts-ignore */}
                            <model-viewer
                              className="h-full w-full bg-inherit object-contain"
                              style="--poster-color: transparent; position: absolute;"
                              src={media.sources?.find((source) => source.format === "glb")?.url}
                              camera-controls="true"
                              data-shopify-feature="1.12"
                              alt={media.alt ?? product?.title}
                              poster={media.preview_image.src}
                              data-js-focus-visible=""
                              ar-status="not-presenting"
                            />
                          </span>
                        </>
                      ),
                    }[media.media_type]
                  }
                </figure>
              );
            })}
          {showScroll
            ? <>
                <ScrollBarButtonsNew itemCount={mediaItems?.length} />
                <ScrollBarNew itemCount={mediaItems?.length} showCount={true} />
              </>
            : null}
        </div>
      </main>
    </>
  );
};
