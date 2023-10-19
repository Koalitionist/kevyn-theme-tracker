import { JSONParse, toKebabCase } from "utils";

export const initColorSwatches = async () => {
  const colors: { [T: string]: string } =
    JSONParse(document.querySelector<HTMLScriptElement>("[data-color-swatches]")?.innerHTML) ?? {};
  const swatchStyles = document.createElement("style");
  document.head.append(swatchStyles);

  if (typeof colors === "object" && colors !== null) {
    swatchStyles.innerHTML = `
  :root {
  ${Object.entries(colors)
    .map(([key, value]) => {
      const variable = toKebabCase(key);
      if (/\./gi.test(value) && !/^url\(/gi.test(value)) {
        value = `url(${value})`;
      }
      const color = value.replace(/.([^?.]+)\)$/gi, ".$1?width=32&height=32&crop=center)");
      return `  --color-swatch--${variable}: ${color};`;
    })
    .join("\n")}
  }`;
  }

  fetch(`${window.routes.asset_url}swatches.json?v=${new Date().setHours(0, 0, 0, 0)}`)
    .then((data) => data.text())
    .then((data) => {
      const oldColors = JSONParse(data) ?? {};

      if (
        oldColors &&
        typeof oldColors === "object" &&
        "colors" in oldColors &&
        Array.isArray(oldColors.colors)
      ) {
        oldColors.colors.forEach((color) => {
          if (typeof color === "object" && color !== null) {
            Object.entries(color).forEach(([key, value]) => {
              if (typeof value === "string") {
                colors[key] = value;
              }
            });
          }
        });
      }

      if (typeof colors === "object" && colors !== null) {
        swatchStyles.innerHTML = `
:root {
${Object.entries(colors)
  .map(([key, value]) => {
    const variable = toKebabCase(key);
    if (/\./gi.test(value) && !/^url\(/gi.test(value)) {
      if (!/[/\\]/gi.test(value)) {
        value = window.routes.file_url + value;
      }
      value = `url(${value})`;
    }
    const color = value.replace(/.([^?.]+)\)$/gi, ".$1?width=32&height=32&crop=center)");
    return `  --color-swatch--${variable}: ${color};`;
  })
  .join("\n")}
}`;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
