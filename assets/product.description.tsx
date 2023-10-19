import clsx from "clsx";
import { Accordion } from "accordion";
import React, { FC, useState } from "react";
import { ReactProductState } from "product";
import { ProductBlocksDescription } from "_types";
import { StoreApi, UseBoundStore } from "zustand";

export const ProductDescription: FC<{
  settings: ProductBlocksDescription["settings"];
  useProduct: UseBoundStore<StoreApi<ReactProductState>>;
}> = ({ settings, useProduct }) => {
  const { product } = useProduct(({ product }) => ({ product }));
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const div = document.createElement("div");

  div.innerHTML = product.description;
  const content = div.textContent;
  const customTitles = settings.custom_tag_overrides.split(",").map((c) => c.trim());

  return (
    <div className="grid gap-3">
      {
        {
          plain: (
            <div
              className="prose prose-theme"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          ),
          accordion: (
            <div className="grid gap-3 border-b border-b-theme-text/50">
              <Accordion
                title="Description"
                content={product.description}
                initOpen={!!settings.uncollapse}
              />
            </div>
          ),
          accordion_style_h1: product?.description?.split("<h1")?.map((headingBlock, index) => {
            if (!headingBlock.includes("</h1>")) {
              div.innerHTML = headingBlock;
              const content = div.innerHTML;
              return (
                <div key={index} className="grid gap-3 border-b border-b-theme-text/50">
                  <Accordion
                    title="Description"
                    content={content}
                    initOpen={settings.uncollapse && index === 0}
                  />
                </div>
              );
            }
            if (headingBlock.includes("</h1>")) {
              const [rawTitle, rawContent] = headingBlock.split("</h1>");
              div.innerHTML = `<h1${rawTitle}</h1>`;
              const title = div.textContent;
              div.innerHTML = rawContent;
              const content = div.innerHTML;

              return (
                <div key={index} className="grid gap-3 border-b border-b-theme-text/50">
                  <Accordion
                    title={title}
                    content={content}
                    initOpen={settings.uncollapse && index === 0}
                  />
                </div>
              );
            }
            return null;
          }),
          tabs_style_h1: product?.description?.split("<h1")?.map((_, _index, arr) => {
            if (_index > 0) return null;

            return (
              <section key="Not-needed" data-tabs="" className="col-span-12">
                <header className="mb-6 grid auto-cols-min grid-flow-col-dense gap-3">
                  {arr.map((headingBlock, index) => {
                    if (!headingBlock.includes("</h1>")) {
                      return (
                        <button
                          key="Description"
                          type="button"
                          className={clsx(
                            "label-item ac:label--primary label--primary--outline",
                            activeTabIndex === index && "active"
                          )}
                          onClick={() => {
                            setActiveTabIndex(index);
                          }}
                        >
                          Description
                        </button>
                      );
                    }
                    if (headingBlock.includes("</h1>")) {
                      const [rawTitle, rawContent] = headingBlock.split("</h1>");
                      div.innerHTML = `<h1${rawTitle}</h1>`;
                      const title = div.textContent;

                      return (
                        <button
                          key={title}
                          type="button"
                          className={clsx(
                            "label-item ac:label--primary label--primary--outline",
                            activeTabIndex === index && "active"
                          )}
                          onClick={() => {
                            setActiveTabIndex(index);
                          }}
                        >
                          {title}
                        </button>
                      );
                    }
                    return null;
                  })}
                </header>
                <main className="relative">
                  {arr.map((headingBlock, index) => {
                    if (!headingBlock.includes("</h1>")) {
                      div.innerHTML = headingBlock;
                      const content = div.innerHTML;
                      return (
                        <section
                          key="Description_tab"
                          className={clsx(
                            "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                            activeTabIndex === index && "active"
                          )}
                        >
                          <div className="_p" dangerouslySetInnerHTML={{ __html: content }}></div>
                        </section>
                      );
                    }
                    if (headingBlock.includes("</h1>")) {
                      const [rawTitle, rawContent] = headingBlock.split("</h1>");
                      div.innerHTML = `<h1${rawTitle}</h1>`;
                      const title = div.textContent;
                      div.innerHTML = rawContent;
                      const content = div.innerHTML;

                      return (
                        <section
                          key={title}
                          className={clsx(
                            "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                            activeTabIndex === index && "active"
                          )}
                        >
                          <div className="_p " dangerouslySetInnerHTML={{ __html: content }}></div>
                        </section>
                      );
                    }
                    return null;
                  })}
                </main>
              </section>
            );
          }),
          accordion_custom_tags: product?.description
            ?.replace(/\[([^/]*)]/gi, "|--|$1|-|-|")
            ?.split("|--|")
            ?.map((string, index) => {
              const [key, content] = string.split("|-|-|");
              if (!content) {
                return (
                  <div key={index} className="grid gap-3 border-b border-b-theme-text/50">
                    <Accordion
                      title={customTitles[index] || "Description"}
                      content={key}
                      initOpen={settings.uncollapse && index === 0}
                    />
                  </div>
                );
              }

              div.innerHTML = content.split(`[/${key}]`)[0];
              const finalContent = div.innerHTML;

              return (
                <div key={index} className="grid gap-3 border-b border-b-theme-text/50">
                  <Accordion
                    title={customTitles[index] ? customTitles[index] : key}
                    content={finalContent}
                    initOpen={settings.uncollapse && index === 0}
                  />
                </div>
              );
            }),
          tabs_custom_tags: product?.description
            ?.replace(/\[([^/]*)]/gi, "|--|$1|-|-|")
            ?.split("|--|")
            ?.map((_, _index, arr) => {
              if (_index > 0) return null;

              return (
                <section key="Not-needed" data-tabs="" className="col-span-12">
                  <header className="mb-6 grid auto-cols-min grid-flow-col-dense gap-3">
                    {arr.map((string, index) => {
                      const [key, content] = string.split("|-|-|");
                      if (!content) {
                        return (
                          <button
                            key="Description"
                            type="button"
                            className={clsx(
                              "label-item ac:label--primary label--primary--outline",
                              activeTabIndex === index && "active"
                            )}
                            onClick={() => {
                              setActiveTabIndex(index);
                            }}
                          >
                            {customTitles[index] ? customTitles[index] : "Description"}
                          </button>
                        );
                      }

                      div.innerHTML = content.split(`[/${key}]`)[0];
                      return (
                        <button
                          key="Description"
                          type="button"
                          className={clsx(
                            "label-item ac:label--primary label--primary--outline",
                            activeTabIndex === index && "active"
                          )}
                          onClick={() => {
                            setActiveTabIndex(index);
                          }}
                        >
                          {customTitles[index] ? customTitles[index] : key}
                        </button>
                      );
                    })}
                  </header>
                  <main className="relative">
                    {arr.map((string, index) => {
                      const [key, content] = string.split("|-|-|");

                      if (!content) {
                        return (
                          <section
                            key="Description_tab"
                            className={clsx(
                              "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                              activeTabIndex === index && "active"
                            )}
                          >
                            <div className="_p " dangerouslySetInnerHTML={{ __html: key }}></div>
                          </section>
                        );
                      }

                      div.innerHTML = content.split(`[/${key}]`)[0];
                      const finalContent = div.innerHTML;

                      return (
                        <section
                          key={customTitles[index] ? customTitles[index] : key}
                          className={clsx(
                            "pointer-events-none absolute inset-0 h-full opacity-0 transition-all ac:pointer-events-auto ac:relative ac:opacity-100",
                            activeTabIndex === index && "active"
                          )}
                        >
                          <div
                            className="_p "
                            dangerouslySetInnerHTML={{ __html: finalContent }}
                          ></div>
                        </section>
                      );
                    })}
                  </main>
                </section>
              );
            }),
        }[settings.style]
      }
    </div>
  );
};
