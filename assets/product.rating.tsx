import clsx from "clsx";
import { useGlobalSettings } from "global-stores";
import { shortUUID } from "utils";
import { FC, HTMLAttributes } from "react";
import { ReactProductState } from "product";
import { ProductBlocksComplementary, ProductBlocksRating } from "_types";
import { _Product_liquid } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const useProductRatings = (product: _Product_liquid) => {
  const {
    product_data__metafield_rating_average,
    product_data__metafield_rating,
    product_data__metafield_reviews_count,
    product_data__show_review_count: show_count,
    product_data__show_0_reviews: show_0_reviews,
    product_data__type,
  } = useGlobalSettings();

  const [countNS, countMF] = product_data__metafield_reviews_count.split(".");
  const [ratingNS, ratingMF] = product_data__metafield_rating.split(".");
  const [ratingStrNS, ratingstrMF] = product_data__metafield_rating_average.split(".");

  switch (product_data__type) {
    case "shopify": {
      // @ts-ignore
      const rating = +((product?.metafields?.reviews?.rating?.rating as string) ?? 0);
      const star_floor = Math.floor(rating);
      const star_ceil = Math.ceil(rating);
      // @ts-ignore
      const scale_max = +((product?.metafields?.reviews?.rating?.scale_max as string) ?? 5);
      // @ts-ignore
      const scale_min = +((product?.metafields?.reviews?.rating?.scale_min as string) ?? 1);
      const rating_count = +((product?.metafields?.reviews?.rating_count as number) ?? 0);
      return {
        rating,
        star_floor,
        star_ceil,
        scale_max,
        scale_min,
        rating_count,
        show_count,
        show_0_reviews,
      };
    }
    case "rating": {
      // @ts-ignore
      const rating = +((product?.metafields?.[ratingNS]?.[ratingMF]?.rating as string) ?? 0);
      const star_floor = Math.floor(rating);
      const star_ceil = Math.ceil(rating);
      // @ts-ignore
      const scale_max = +((product?.metafields?.[ratingNS]?.[ratingMF]?.scale_max as string) ?? 5);
      // @ts-ignore
      const scale_min = +((product?.metafields?.[ratingNS]?.[ratingMF]?.scale_min as string) ?? 1);
      const rating_count = +((product?.metafields?.[countNS]?.[countMF] as number) ?? 0);
      return {
        rating,
        star_floor,
        star_ceil,
        scale_max,
        scale_min,
        rating_count,
        show_count,
        show_0_reviews,
      };
    }
    case "reviews_rating": {
      // @ts-ignore
      const rating = +((product?.metafields?.[ratingStrNS]?.[ratingstrMF] as string) ?? 0);
      const star_floor = Math.floor(rating);
      const star_ceil = Math.ceil(rating);
      // @ts-ignore
      const scale_max = 5;
      // @ts-ignore
      const scale_min = 1;
      const rating_count = +((product?.metafields?.[countNS]?.[countMF] as number) ?? 0);
      return {
        rating,
        star_floor,
        star_ceil,
        scale_max,
        scale_min,
        rating_count,
        show_count,
        show_0_reviews,
      };
    }
  }
};

export const ProductRatingWithProduct: FC<
  { product: _Product_liquid; className?: string } & HTMLAttributes<HTMLElement>
> = ({ product, className, ...props }) => {
  const id = shortUUID();
  const {
    rating,
    star_floor,
    star_ceil,
    scale_max,
    scale_min,
    rating_count,
    show_count,
    show_0_reviews,
  } = useProductRatings(product);

  console.log("rating-------", rating);
  console.log("show_count----------", show_count);
  return (
    <figure className={clsx("inline-flex items-center", className)} {...props}>
      <div className="relative flex h-5 items-center">
        {rating
          ? <>
              {[...new Array(scale_max - scale_min + 1)].map((_, index) => {
                const lineIndex = index + scale_min - 1;
                return (
                  <svg
                    key={lineIndex}
                    className="h-full w-auto"
                    fill={`url(#${product.id}_${id}_${lineIndex})`}
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.38091 0.0973503C7.10868 -0.0324501 6.7924 -0.0324501 6.52016 0.0973503C6.28482 0.20956 6.15506 0.404385 6.08962 0.511266C6.02198 0.621759 5.95253 0.762511 5.88485 0.899703L4.4477 3.81123L1.23299 4.2811C1.08167 4.30319 0.926395 4.32585 0.800452 4.35614C0.678611 4.38543 0.453338 4.4488 0.274064 4.63803C0.0666695 4.85694 -0.0308653 5.15775 0.00861507 5.45671C0.0427423 5.71513 0.187972 5.89863 0.269439 5.99385C0.35365 6.09227 0.466084 6.20174 0.57566 6.30842L2.90086 8.57316L2.35221 11.772C2.32631 11.9228 2.29974 12.0776 2.28951 12.2068C2.27962 12.3317 2.27006 12.5656 2.39452 12.7948C2.53849 13.0598 2.79441 13.2457 3.09099 13.3007C3.3474 13.3483 3.56692 13.2668 3.68268 13.2188C3.80238 13.1691 3.94132 13.096 4.07676 13.0248L6.95054 11.5135L9.82433 13.0248C9.95976 13.096 10.0987 13.1691 10.2184 13.2188C10.3342 13.2668 10.5537 13.3483 10.8101 13.3007C11.1067 13.2457 11.3626 13.0598 11.5065 12.7948C11.631 12.5656 11.6215 12.3317 11.6116 12.2068C11.6013 12.0776 11.5748 11.9229 11.5489 11.772L11.0002 8.57316L13.3254 6.3084C13.435 6.20172 13.5474 6.09226 13.6316 5.99385C13.7131 5.89863 13.8583 5.71513 13.8925 5.45671C13.9319 5.15775 13.8344 4.85694 13.627 4.63803C13.4477 4.4488 13.2225 4.38543 13.1006 4.35614C12.9747 4.32585 12.8194 4.30319 12.6681 4.2811L9.45338 3.81123L8.01625 0.899753C7.94856 0.762552 7.8791 0.621767 7.81145 0.511266C7.74601 0.404385 7.61626 0.20956 7.38091 0.0973503Z" />
                    <linearGradient id={`${product.id}_${id}_${lineIndex}`}>
                      <stop offset="0%" stopColor="var(--color-review-stars--hex)"></stop>
                      <stop
                        offset={`${
                          lineIndex < star_floor
                            ? 100
                            : lineIndex >= star_floor && lineIndex < star_ceil
                            ? (rating - star_floor) * 100
                            : 0
                        }%`}
                        stopColor="var(--color-review-stars--hex)"
                      ></stop>
                      <stop
                        offset={`${
                          lineIndex < star_floor
                            ? 100
                            : lineIndex >= star_floor && lineIndex < star_ceil
                            ? (rating - star_floor) * 100
                            : 0
                        }%`}
                        stopColor="rgb(var(--color-gray-400))"
                      ></stop>
                      <stop offset="100%" stopColor="rgb(var(--color-gray-400))"></stop>
                    </linearGradient>
                  </svg>
                );
              })}
            </>
          : "No ratings"}
      </div>

      {show_count && (show_0_reviews || rating_count > 0)
        ? <figcaption className={clsx("text-xs text-theme-text/70", rating && "ml-2")}>
            {rating_count ?? "No"} reviews
          </figcaption>
        : null}
    </figure>
  );
};

export const ProductRating: FC<{
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ useProduct }) => {
  const { product } = useProduct(({ product }) => ({ product }));
  return <ProductRatingWithProduct product={product} />;
};
