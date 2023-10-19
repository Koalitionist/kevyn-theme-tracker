import { EmailIcon, FacebookIcon, PinterestIcon, TwitterIcon } from "icons";
import { FC } from "react";
import { ReactProductState } from "product";
import { escapeComponent } from "uri-js";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductShare: FC<{ useProduct: UseBoundStore<StoreApi<ReactProductState>> }> = ({
  useProduct,
}) => {
  const { product } = useProduct(({ product }) => ({ product }));
  const div = document.createElement("div");
  div.innerHTML = product.description;
  const description = div.textContent.split(" ").slice(0, 20).join(" ");
  const share_url = window.shop.url + product.url;
  const twitter_text = encodeURIComponent(product.title);
  const pinterest_description = encodeURIComponent(description);
  const pinterest_image = `https:${product.featured_media?.src}&width=1024`;
  div.remove();

  return (
    <div className="grid auto-cols-min grid-flow-col-dense gap-2" role="list">
      <a
        data-share="facebook"
        className="text-theme-text/70 hf:text-theme-text"
        title="Share on Facebook"
        role="listitem"
        href={`https://www.facebook.com/sharer.php?u=${share_url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon className="h-4 w-4" />
      </a>
      <a
        data-share="pinterest"
        className="text-theme-text/70 hf:text-theme-text"
        title="Share on Pinterest"
        role="listitem"
        href={`https://pinterest.com/pin/create/button/?url=${share_url}&media=${pinterest_image}&description=${pinterest_description}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <PinterestIcon className="h-4 w-4" />
      </a>
      <a
        data-share="twitter"
        className="text-theme-text/70 hf:text-theme-text"
        title="Share on Twitter"
        role="listitem"
        href={`https://twitter.com/share?text=${twitter_text}&url=${share_url}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon className="h-4 w-4" />
      </a>
      <a
        data-share="email"
        className="text-theme-text/70 hf:text-theme-text"
        title="Share via Email"
        role="listitem"
        href={`mailto:?&subject=${escapeComponent(product.title)}&body=${share_url}`}
      >
        <EmailIcon className="h-4 w-4" />
      </a>
    </div>
  );
};
