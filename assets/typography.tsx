import { isObject } from "utils";
import clsx from "clsx";
import { useGlobalSettings } from "global-stores";
import React, { FC, HTMLAttributes, PropsWithChildren } from "react";

export type TypeOptions = 1 | 2 | 3 /*| 4*/;

export const Typography: FC<
  PropsWithChildren<
    {
      fontType: TypeOptions;
      className?: string;
      heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    } & HTMLAttributes<HTMLElement>
  >
> = ({ fontType, children, className, heading, ...props }) => {
  const settings = useGlobalSettings();

  const headingClass = `_${heading ?? "p"}`;
  const headingTag = settings[`typography_${fontType}_${heading}_tag`] ?? "";

  const processedChildren = React.Children.toArray(children).map((child, index) => {
    if (typeof child === "string" || typeof child === "number") {
      switch (headingTag) {
        case "p":
          return <p className={headingClass}>{child}</p>;
        case "h1":
          return <h1 className={headingClass}>{child}</h1>;
        case "h2":
          return <h2 className={headingClass}>{child}</h2>;
        case "h3":
          return <h3 className={headingClass}>{child}</h3>;
        case "h4":
          return <h4 className={headingClass}>{child}</h4>;
        case "h5":
          return <h5 className={headingClass}>{child}</h5>;
        case "h6":
          return <h6 className={headingClass}>{child}</h6>;
        case "blockquote":
          return <blockquote className={headingClass}>{child}</blockquote>;
        case "div":
          return <div className={headingClass}>{child}</div>;
      }

      return `${child}`
        .split("</")
        .map((item, index, arr) => {
          if (index !== 0) {
            item = `</${item}`;
          }
          return item
            .replace(/<(h1|h2|h3|h4|h5|h6|p)>/gi, (match, group, ...rest) => {
              return `<${settings[`typography_${fontType}_${group}_tag`]} class="_${group}">`;
            })
            .replace(/<\/(h1|h2|h3|h4|h5|h6|p)>/gi, (match, group, ...rest) => {
              return `</${settings[`typography_${fontType}_${group}_tag`]}>`;
            });
        })
        .join("");
    }

    // @ts-ignore
    if (isObject(child) && "type" in child && typeof child.type === "string") {
      if (["p", "h1", "h2", "h3", "h4", "h5", "h6"].includes(child.type)) {
        const headingClass = `_${heading ?? child.type}`;
        const headingTag = settings[`typography_${fontType}_${child.type}_tag`];

        switch (headingTag) {
          case "p":
            return <p className={headingClass}>{child.props.children}</p>;
          case "h1":
            return <h1 className={headingClass}>{child.props.children}</h1>;
          case "h2":
            return <h2 className={headingClass}>{child.props.children}</h2>;
          case "h3":
            return <h3 className={headingClass}>{child.props.children}</h3>;
          case "h4":
            return <h4 className={headingClass}>{child.props.children}</h4>;
          case "h5":
            return <h5 className={headingClass}>{child.props.children}</h5>;
          case "h6":
            return <h6 className={headingClass}>{child.props.children}</h6>;
          case "blockquote":
            return <blockquote className={headingClass}>{child.props.children}</blockquote>;
          case "div":
            return <div className={headingClass}>{child.props.children}</div>;
        }
      }
    }

    return null;
  });

  return processedChildren.some((child) => typeof child === "string")
    ? <div
        className={clsx(`font-group-${fontType}`, className)}
        dangerouslySetInnerHTML={{ __html: processedChildren.join("") }}
      >
        {processedChildren}
      </div>
    : <div className={clsx(`font-group-${fontType}`, className)}>{processedChildren}</div>;
  /*


  switch (fontType) {
    case 1:
      headingClass = settings.font_heading_1_tag;
      baseClass = "h1";
      break;
    case "h1":
      headingClass = settings.font_heading_1_tag;
      baseClass = "h1";
      break;
    case 2:
      headingClass = settings.font_heading_2_tag;
      baseClass = "h2";
      break;
    case "h2":
      headingClass = settings.font_heading_2_tag;
      baseClass = "h2";
      break;
    case 3:
      headingClass = settings.font_heading_3_tag;
      baseClass = "h3";
      break;
    case "h3":
      headingClass = settings.font_heading_3_tag;
      baseClass = "h3";
      break;
    case 4:
      headingClass = settings.font_heading_4_tag;
      baseClass = "h4";
      break;
    case "h4":
      headingClass = settings.font_heading_4_tag;
      baseClass = "h4";
      break;
    case 5:
      headingClass = settings.font_heading_5_tag;
      baseClass = "h5";
      break;
    case "h5":
      headingClass = settings.font_heading_5_tag;
      baseClass = "h5";
      break;
    case 6:
      headingClass = settings.font_heading_6_tag;
      baseClass = "h6";
      break;
    case "h6":
      headingClass = settings.font_heading_6_tag;
      baseClass = "h6";
      break;
    case 7:
      headingClass = settings.font_additional_1_tag;
      baseClass = "h7";
      break;
    case "h7":
      headingClass = settings.font_additional_1_tag;
      baseClass = "h7";
      break;
    case 8:
      headingClass = settings.font_additional_2_tag;
      baseClass = "h8";
      break;
    case "h8":
      headingClass = settings.font_additional_2_tag;
      baseClass = "h8";
      break;
    case 9:
      headingClass = settings.font_additional_3_tag;
      baseClass = "h9";
      break;
    case "h9":
      headingClass = settings.font_additional_3_tag;
      baseClass = "h9";
      break;
    case 10:
      headingClass = settings.font_additional_4_tag;
      baseClass = "h10";
      break;
    case "h10":
      headingClass = settings.font_additional_4_tag;
      baseClass = "h10";
      break;
    case 11:
      headingClass = settings.font_additional_5_tag;
      baseClass = "h11";
      break;
    case "h11":
      headingClass = settings.font_additional_5_tag;
      baseClass = "h11";
      break;
    case 12:
      headingClass = settings.font_additional_6_tag;
      baseClass = "h12";
      break;
    case "h12":
      headingClass = settings.font_additional_6_tag;
      baseClass = "h12";
      break;
    case 7:
      headingClass = settings.font_body_tag;
      baseClass = "p";
      break;
    case "body":
      headingClass = settings.font_body_tag;
      baseClass = "p";
      break;
    case "prose":
      headingClass = "div";
      baseClass = "prose prose-theme p";
      break;
  }

  switch (tag) {
    case "p":
      return (
        <p className={clsx(baseClass, className)} {...props}>
          {children}
        </p>
      );
    case "h1":
      return (
        <h1 className={clsx(baseClass, className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={clsx(baseClass, className)} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={clsx(baseClass, className)} {...props}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={clsx(baseClass, className)} {...props}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={clsx(baseClass, className)} {...props}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={clsx(baseClass, className)} {...props}>
          {children}
        </h6>
      );
    case "blockquote":
      return (
        <blockquote className={clsx(baseClass, className)} {...props}>
          {children}
        </blockquote>
      );
    case "div":
      return (
        <div className={clsx(baseClass, className)} {...props}>
          {children}
        </div>
      );
  }*/
};
