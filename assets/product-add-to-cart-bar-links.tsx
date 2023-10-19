import { getCoords, scrollToY } from "/utils";

export const initProductAddToCartBarLinks = () => {
  const targets: HTMLElement[] = [];
  document
    .querySelectorAll<HTMLAnchorElement>("[data-product-add-to-cart-bar-link]")
    .forEach((linkElement) => {
      const id = linkElement.href?.split("#")?.at(1)?.split(/[?&]/)?.at(0);
      const target = document.getElementById(id);
      targets.push(target);
    });

  document
    .querySelectorAll<HTMLAnchorElement>("[data-product-add-to-cart-bar-link]")
    .forEach((linkElement) => {
      const id = linkElement.href?.split("#")?.at(1)?.split(/[?&]/)?.at(0);
      const target = document.getElementById(id);
      if (!target || !id) return;

      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          async (entries, observer) => {
            for (let i = 0; i < entries.length; i++) {
              const entry = entries[i];
              if (entry.target !== target) return;

              const activeTarget = targets.find((t) => {
                if (t) {
                  const { top, bottom } = t.getBoundingClientRect();
                  return top < window.innerHeight && bottom > 200;
                }
                return false;
              });

              targets?.forEach((target) => {
                const link = document.querySelector(
                  `[data-product-add-to-cart-bar-link][href*="#${target?.id}"]`
                );
                if (!link) return;

                if (activeTarget === target) {
                  link.classList.add("active");
                  return;
                }
                link.classList.remove("active");
              });
            }
          },
          {
            rootMargin: "0px",
            threshold: 0.1,
          }
        );
        observer.observe(target);

        linkElement.addEventListener("click", (e) => {
          e.preventDefault();
          scrollToY(300, getCoords(target).top - 68);
        });
      }
    });
};
