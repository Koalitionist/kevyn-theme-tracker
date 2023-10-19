import clsx from "clsx";
import { Image } from "image";
import { ScrollBar, ScrollBarButtons, ScrollBarButtonsNew, ScrollBarNew, useWindowSize } from "scrollbar";
import { scrollToX, scrollToXY, scrollToY, shortUUID } from "utils";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { ReactProductState } from "product";
import { ProductSection } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductGalleryHorizontal: FC<{
  settings: ProductSection["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product, setSelectedVariant, selectedVariant } = useProduct(
    ({ product, setSelectedVariant, selectedVariant }) => ({
      product,
      setSelectedVariant,
      selectedVariant,
    })
  );
  const variantRef = useRef(selectedVariant?.id);
  const { width } = useWindowSize();

  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (width > 1024 && settings.gallery__layout !== "horizontal") {
      return null;
    }
    if (!window?.Shopify.designMode && variantRef.current !== selectedVariant?.id) {
      variantRef.current = selectedVariant?.id;
      scrollToX(0, 0, scrollContainer.current);
    }
  }, [selectedVariant, settings.gallery__layout, width]);

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

  const scrollToMedia = useCallback((mediaId: number) => {
    const scrollTarget = scrollContainer.current.querySelector<HTMLElement>(
      `[data-media-id="${mediaId}"]`
    );
    if (scrollTarget) {
      const { offsetTop, offsetLeft } = scrollTarget;
      scrollToXY(200, offsetLeft, offsetTop, scrollContainer.current);
    }
  }, []);

  if (width > 1024 && settings.gallery__layout !== "horizontal") {
    return null;
  }

  let mediaItems = [selectedVariant?.featured_media];

  if (settings.variants_multi_images === "via_metafield") {
    const [namespace, key] = settings.variants_image_metafield?.trim()?.split(".") ?? [
      "smart",
      "images",
    ];
    (selectedVariant?.metafields?.[namespace]?.[key] as string[])?.forEach((url) => {
      if (typeof url !== "string" && typeof url === "object" && "src" in url) {
        url = url["src"];
      }
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
    const positions = [...new Set(product.variants.map((v) => v.featured_media?.position))].sort(
      (a, b) => a - b
    );
    const from = selectedVariant?.featured_media?.position;
    const to = positions[positions.findIndex((position) => position === from) + 1] ?? 9999;

    product.media.forEach((media) => {
      if (media?.position > from && media?.position < to) {
        mediaItems.push(media);
      }
    });
  }

  mediaItems = [
    ...mediaItems,
    ...(!settings.hide_not_selected_variant_images || !selectedVariant?.featured_media?.src
      ? product?.media?.filter((media) => media.id !== selectedVariant?.featured_media?.id) ?? []
      : []),
  ].filter((media) => media);

  mediaItems = mediaItems.filter(
    (media, i, arr) => arr.findIndex((m) => m.src === media.src) === i
  );

  const variantsWithImage = product?.variants?.filter(
    (v1, i, a) =>
      v1.featured_media &&
      a.findIndex((v2) => v1?.featured_media?.id === v2?.featured_media?.id) === i
  );

  return (
    <>
      <main className="scroll-container relative grid">
        <div
          className={clsx(
            "scrollbar-none md:min-h-56 grid max-w-full flex-1 snap-x snap-mandatory auto-cols-min grid-flow-col-dense gap-4 overflow-x-auto md:gap-8",
            mediaItems?.filter((m) => m?.alt !== "hide-image").length > 1 ? "pb-12" : "pb-6"
          )}
          ref={scrollContainer}
        >
          {mediaItems
            ?.filter((m) => m?.alt !== "hide-image")
            ?.map((media) => {
              return (
                <figure
                  data-media-id={media.id}
                  key={`media-${media.id}`}
                  className="image-test relative grid max-h-[680px] w-screen max-w-[min(85vw,_calc(680px*var(--image-aspect-ratio)))] snap-start snap-always overflow-hidden transition-all ease-in-out max-lg:max-h-[460px] max-lg:max-w-[min(85vw,_calc(460px*var(--image-aspect-ratio)))] md:aspect-[unset]"
                  style={{
                    aspectRatio: media?.aspect_ratio?.toFixed(3),
                    "--image-aspect-ratio": media?.aspect_ratio?.toFixed(3),
                  }}
                >
                  {
                    {
                      image: (
                        <Image
                          src={`${media.src}`}
                          maxWidth={1200}
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
          <ScrollBarButtonsNew itemCount={mediaItems?.length} className="bottom-8" />
          <ScrollBarNew itemCount={mediaItems?.length} showCount={true} className="bottom-8" />
        </div>
      </main>

      {settings.gallery__show_thumbnails !== "hidden"
        ? <footer
            className={clsx(
              "scrollbar-x-slim relative mt-12 flex min-h-[100px] flex-1 gap-1 overflow-x-auto pb-2",
              settings.gallery__show_thumbnails
            )}
          >
            {/*{product?.variants
              ?.filter(
                (v1, i, a) =>
                  a.findIndex((v2) => v1?.featured_media?.id === v2?.featured_media?.id) === i
              )
              .map((variant) => {
                if (!variant?.featured_media) return null;
                return (
                  <button
                    key={`thumbnail-${variant?.featured_media?.id}`}
                    className="relative block h-[100px] shrink-0 border border-gray-200"
                    onClick={() => {
                      setSelectedVariant(variant?.id);
                    }}
                  >
                    <Image
                      src={`${variant?.featured_media?.preview_image?.src}`}
                      alt={variant?.featured_media?.alt ?? variant?.title}
                      width={Math.round(variant?.featured_media?.aspect_ratio * 100)}
                      height={100}
                      className="h-full w-full object-contain"
                      screenPercentage={10}
                    />
                  </button>
                );
              })}*/}

            {variantsWithImage?.length !== -1
              ? mediaItems
                  ?.filter((m) => m?.alt !== "hide-image")
                  /*?.filter(
                    (media) => !variantsWithImage?.some((v) => v.featured_media?.id === media.id)
                  )*/
                  .map((media) => {
                    return (
                      <button
                        key={`thumbnail-${media.id}`}
                        className="relative block h-[100px] shrink-0 border border-gray-200"
                        onClick={() => scrollToMedia(media.id)}
                      >
                        <Image
                          src={`${media?.preview_image?.src}`}
                          alt={media?.alt ?? product?.title}
                          width={Math.round(media.aspect_ratio * 100)}
                          height={100}
                          className="h-full w-full object-contain"
                          screenPercentage={10}
                        />
                      </button>
                    );
                  })
              : null}
          </footer>
        : null}
    </>
  );
};

export const ProductGalleryVertical: FC<{
  settings: ProductSection["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product, setSelectedVariant, selectedVariant } = useProduct(
    ({ product, setSelectedVariant, selectedVariant }) => ({
      product,
      setSelectedVariant,
      selectedVariant,
    })
  );
  const lastVariantId = useRef<number>(selectedVariant?.id);
  const { width } = useWindowSize();
  const scrollContainer = useRef<HTMLElement>(null);
  const [currentMediaId, setCurrentMediaId] = useState(
    selectedVariant?.featured_media?.id ?? product?.featured_media?.id
  );
  useEffect(() => {
    if (lastVariantId.current !== selectedVariant?.id) {
      lastVariantId.current = selectedVariant?.id;

      setCurrentMediaId(selectedVariant?.featured_media?.id ?? product?.featured_media?.id);
      if (width >= 1024) {
        scrollToY(100, scrollContainer.current.offsetTop);
      }
    }
  }, [product?.featured_media?.id, selectedVariant, width]);

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

  const scrollToMedia = useCallback((mediaId: number) => {
    if (settings.gallery__layout === "standard") {
      const selectedMediaItem = scrollContainer.current.querySelector<HTMLElement>(
        `[data-media-id="${mediaId}"]`
      );
      scrollContainer.current.querySelectorAll("figure").forEach((mediaItem) => {
        mediaItem.classList.add("hidden");
      });
      selectedMediaItem.classList.remove("hidden");
      return;
    }

    const scrollTarget = scrollContainer.current.querySelector<HTMLElement>(
      `[data-media-id="${mediaId}"]`
    );
    if (scrollTarget) {
      const { offsetTop, offsetLeft } = scrollTarget;
      scrollToXY(200, offsetLeft, offsetTop);
    }
  }, [settings.gallery__layout]);

  if (width <= 1024) {
    return null;
  }

  let mediaItems = [selectedVariant?.featured_media];

  if (settings.variants_multi_images === "via_metafield") {
    const [namespace, key] = settings.variants_image_metafield?.trim()?.split(".") ?? [
      "smart",
      "images",
    ];

    (selectedVariant?.metafields?.[namespace]?.[key] as string[])?.forEach((url) => {
      if (typeof url !== "string" && typeof url === "object" && "src" in url) {
        url = url["src"];
      }
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
    const positions = [...new Set(product.variants.map((v) => v.featured_media?.position))].sort(
      (a, b) => a - b
    );
    const from = selectedVariant?.featured_media?.position;
    const to = positions[positions.findIndex((position) => position === from) + 1] ?? 9999;

    product.media.forEach((media) => {
      if (media?.position > from && media?.position < to) {
        mediaItems.push(media);
      }
    });
  }

  mediaItems = [
    ...mediaItems,
    ...(!settings.hide_not_selected_variant_images || !selectedVariant?.featured_media?.src
      ? product?.media?.filter((media) => media.id !== selectedVariant?.featured_media?.id) ?? []
      : []),
  ].filter((media) => media);

  let imageOdd = 0;

  const variantsWithImage = product?.variants?.filter(
    (v1, i, a) =>
      v1.featured_media &&
      a.findIndex((v2) => v1?.featured_media?.id === v2?.featured_media?.id) === i
  );

  mediaItems = mediaItems.filter(
    (media, i, arr) => arr.findIndex((m) => m.src === media.src) === i
  );
  console.log({ mediaItems });
  return (
    <>
      {settings.gallery__show_thumbnails === "responsive" ||
      settings.gallery__show_thumbnails === "max-md:hidden"
        ? <aside
            className="scrollbar-none sticky grid h-min max-h-[calc(100vh-var(--top-bar-spacing))] gap-1 overflow-y-auto pr-1 transition-all ease-linear top-spacing-8"
            data-product-sticky-content={true}
          >
            {/*{variantsWithImage?.map((variant) => {
              return (
                <button
                  key={`thumbnail-${variant?.featured_media?.id}`}
                  className="relative grid h-full w-full border border-gray-200"
                  onClick={() => {
                    setSelectedVariant(variant?.id);
                  }}
                >
                  <Image
                    src={`${variant?.featured_media?.preview_image?.src}`}
                    alt={variant?.featured_media?.alt ?? variant?.title}
                    width={100}
                    height={Math.round((1 / variant?.featured_media?.aspect_ratio) * 100)}
                    className="h-full w-full object-contain"
                    screenPercentage={10}
                  />
                </button>
              );
            })}*/}
            {variantsWithImage?.length !== -1
              ? mediaItems
                  ?.filter((m) => m?.alt !== "hide-image")
                  /*?.filter(
                    (media) => !variantsWithImage?.some((v) => v.featured_media?.id === media.id)
                  )*/
                  .map((media) => {
                    return (
                      <button
                        key={`thumbnail-${media.id}`}
                        className="relative grid h-full w-full border border-gray-200"
                        onClick={() => {
                          scrollToMedia(media.id);
                        }}
                      >
                        <Image
                          src={`${media?.preview_image?.src}`}
                          alt={media?.alt ?? product?.title}
                          width={100}
                          height={Math.round((1 / media.aspect_ratio) * 100)}
                          className="h-full w-full object-contain"
                          screenPercentage={10}
                        />
                      </button>
                    );
                  })
              : null}
          </aside>
        : null}

      <main
        ref={scrollContainer}
        data-gallery__layout={settings.gallery__layout}
        data-currentmedia={currentMediaId}
        className={clsx(
          "grid h-min",
          settings.gallery__layout === "vertical"
            ? "gap-6"
            : settings.gallery__layout === "standard"
            ? ""
            : "grid-cols-2 gap-3"
        )}
      >
        {mediaItems
          ?.filter((m) => m?.alt !== "hide-image")
          ?.map((media, index, arr) => {
            const count = index + 1;
            let order = count * 100;
            const isGrid = settings.gallery__layout === "grid";
            let gridClasses = "";

            if (settings.gallery__layout === "standard") {
              gridClasses = media.id !== currentMediaId ? "hidden" : "";
            }
            if (
              isGrid &&
              (media.aspect_ratio > 1.75 || (settings.gallery__first_image_full && index === 0))
            ) {
              gridClasses = "col-span-2";

              if (count % 2 === imageOdd) {
                order = order + 150;
              }
              imageOdd = imageOdd ? 0 : 1;
            }

            if (arr.length === 1) {
              gridClasses = "col-span-2";
            }

            return (
              <figure
                data-media-id={media.id}
                key={media.id}
                className={clsx(
                  "relative grid h-full w-full overflow-hidden rounded-theme-sm transition-all ease-in-out ac:ring ac:ring-primary-outline",
                  gridClasses,
                  settings.gallery__aspect_ratio !== "auto" &&
                    gridClasses !== "col-span-2" &&
                    "overflow-hidden"
                )}
                style={{
                  order: `${order}`,
                  aspectRatio:
                    settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2"
                      ? settings.gallery__aspect_ratio
                      : undefined,
                }}
              >
                {
                  {
                    image: (
                      <Image
                        src={`${media.src}`}
                        maxWidth={1200}
                        alt={media.alt ?? product?.title}
                        className={clsx(
                          "h-full w-full bg-inherit ",
                          settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2"
                            ? "object-cover object-center"
                            : "object-contain"
                        )}
                        onMouseMove={
                          settings.gallery__zoom
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
                          settings.gallery__zoom
                            ? (e) => {
                                e.currentTarget.style.transform = ``;
                              }
                            : undefined
                        }
                        screenPercentage={70}
                      />
                    ),
                    video: (
                      <video
                        playsInline={true}
                        controls={true}
                        autoPlay={true}
                        loop={settings.gallery__loop_videos}
                        preload="none"
                        className={clsx(
                          "h-full w-full bg-inherit ",
                          settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2"
                            ? "object-cover object-center"
                            : "object-contain"
                        )}
                        muted={true}
                        aria-label={media.alt ?? product?.title}
                        poster={media.preview_image.src}
                      >
                        <source
                          src={
                            media?.sources?.find((src) => src.format === "mp4" && src.width <= 852)
                              ?.url
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
                        className={clsx(
                          "h-full w-full bg-inherit ",
                          settings.gallery__aspect_ratio !== "auto" && gridClasses !== "col-span-2"
                            ? "object-cover object-center"
                            : "object-contain",
                          media.host === "youtube" ? "js-youtube" : "js-vimeo"
                        )}
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
                            paddingBottom: `calc(100% * ${media.preview_image.aspect_ratio})`,
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
      </main>
    </>
  );
};
