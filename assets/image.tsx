import { FC, HTMLAttributes } from "react";

const getSrcSet = (src, screenPercentage, maxWidth): string => {
  if (src.includes("?")) {
    return [48, 96, 256, 384, 460, 640, 1200, 1920, 3840]
      .map((number) => {
        if (maxWidth && number > maxWidth) {
          return null;
        }
        return `${src}&width=${Math.round((number / 100) * screenPercentage)} ${number}w`;
      })
      ?.filter((d) => !!d)
      .join(",");
  }
  return [48, 96, 256, 384, 460, 640, 1200, 1920, 3840]
    .map((number) => {
      if (maxWidth && number > maxWidth) {
        return null;
      }
      return `${src}?width=${Math.round((number / 100) * screenPercentage)} ${number}w`;
    })
    ?.filter((d) => !!d)
    .join(",");
};

export const Image: FC<
  {
    className?: string;
    src: string;
    alt?: string;
    srcSet?: string;
    width?: number;
    height?: number;
    maxWidth?: 48 | 96 | 256 | 384 | 460 | 640 | 1200 | 1920 | 3840;
    aspectRatio?: number;
    screenPercentage?: number;
    loading?: "eager" | "lazy";
  } & Partial<HTMLAttributes<HTMLImageElement>>
> = ({
  src,
  alt,
  className,
  width,
  height,
  aspectRatio,
  screenPercentage = 100,
  maxWidth,
  loading,
  srcSet,
  ...imageProps
}) => {
  if (!src) {
    return null;
  }

  src = src
    .replace(/&v=\d+(&)/gi, "$1")
    .replace(/\?v=\d+(&)/gi, "?")
    .replace(/\?v=\d+$/gi, "");

  return (
    // @ts-ignore
    <img
      src={
        width
          ? src.includes("?")
            ? `${src}&width=${Math.round(width)}`
            : `${src}?width=${Math.round(width)}`
          : maxWidth
          ? src.includes("?")
            ? `${src}&width=${Math.round(maxWidth)}`
            : `${src}?width=${Math.round(maxWidth)}`
          : src
      }
      alt={alt}
      width={width}
      height={height}
      data-image={loading ? "eager" : "lazy"}
      loading={loading}
      className={className}
      // srcSet={getSrcSet(src, screenPercentage, maxWidth)}
      {...imageProps}
    />
  );
};
