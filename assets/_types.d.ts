export type _Article_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Blog_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Collection_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Page_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Product_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Variant_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type _Shop_metafields = { [T: string]: { [T: string]: _Metafield_liquid["value"] } };

export type AppsSection = {
  blocks: AppsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: text */
    sectionID?: string;
  };
  type: "apps";
};

export type AppsBlocksApp = {
  id: string;
  type: "@app";
};

export type AppsBlocks = AppsBlocksApp;

export type BenefitTabsSection = {
  blocks: BenefitTabsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: radio */
    layout: "order-2" | "-order-1";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
  };
  type: "benefit-tabs";
};

export type BenefitTabsBlocksBenefit = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "benefit";
};

export type BenefitTabsBlocks = BenefitTabsBlocksBenefit;

export type BundleSection = {
  blocks: BundleBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: radio */
    discount_target: "quantity" | "amount";
    /** Input type: radio */
    discount_type: "specific_product" | "product_percentage" | "product_amount";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    target_limit: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    scrollable_title_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    scrollable_title_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    scrollable_title_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: collection */
    target_collection_1?: _Collection_liquid | string;
    /** Input type: collection */
    target_collection_2?: _Collection_liquid | string;
    /** Input type: collection */
    target_collection_3?: _Collection_liquid | string;
    /** Input type: product_list */
    target_products_1?: _Product_liquid[];
    /** Input type: product_list */
    target_products_2?: _Product_liquid[];
    /** Input type: product_list */
    target_products_3?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "bundle";
};

export type BundleBlocksFree_shipping = {
  id: string;
  settings: {
    /** Input type: number */
    fs_target?: number;
    /** Input type: text */
    title?: string;
  };
  type: "free_shipping";
};

export type BundleBlocksDiscount_level = {
  id: string;
  settings: {
    /** Input type: collection */
    receives_collection?: _Collection_liquid | string;
    /** Input type: number */
    receives_discount?: number;
    /** Input type: product_list */
    receives_products?: _Product_liquid[];
    /** Input type: number */
    receives_quantity?: number;
    /** Input type: number */
    target?: number;
    /** Input type: text */
    title?: string;
  };
  type: "discount_level";
};

export type BundleBlocks = BundleBlocksFree_shipping | BundleBlocksDiscount_level;

export type BundleKoaSection = {
  blocks: BundleKoaBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: radio */
    discount_target: "quantity" | "amount";
    /** Input type: radio */
    discount_type: "specific_product" | "product_percentage" | "product_amount";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    target_limit: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    preheading?: string;
    /** Input type: text */
    scrollable_title_1?: string;
    /** Input type: text */
    scrollable_title_2?: string;
    /** Input type: text */
    scrollable_title_3?: string;
    /** Input type: textarea */
    subtitle?: string;
    /** Input type: collection */
    target_collection_1?: _Collection_liquid | string;
    /** Input type: collection */
    target_collection_2?: _Collection_liquid | string;
    /** Input type: collection */
    target_collection_3?: _Collection_liquid | string;
    /** Input type: product_list */
    target_products_1?: _Product_liquid[];
    /** Input type: product_list */
    target_products_2?: _Product_liquid[];
    /** Input type: product_list */
    target_products_3?: _Product_liquid[];
    /** Input type: text */
    title?: string;
  };
  type: "bundle-koa";
};

export type BundleKoaBlocksFree_shipping = {
  id: string;
  settings: {
    /** Input type: number */
    fs_target?: number;
    /** Input type: text */
    title?: string;
  };
  type: "free_shipping";
};

export type BundleKoaBlocksDiscount_level = {
  id: string;
  settings: {
    /** Input type: collection */
    receives_collection?: _Collection_liquid | string;
    /** Input type: number */
    receives_discount?: number;
    /** Input type: product_list */
    receives_products?: _Product_liquid[];
    /** Input type: number */
    receives_quantity?: number;
    /** Input type: number */
    target?: number;
    /** Input type: text */
    title?: string;
  };
  type: "discount_level";
};

export type BundleKoaBlocks = BundleKoaBlocksFree_shipping | BundleKoaBlocksDiscount_level;

export type CartDrawerSection = {
  blocks: CartDrawerBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__horizontal__footer:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    announcements__height: number;
    /** Input type: radio */
    announcements__show: "all" | "header" | "cart" | "disable";
    /** Input type: checkbox */
    cart__recommended_products__enable: boolean;
    /** Input type: checkbox */
    cart__recommended_products_hide_upsell_products: boolean;
    /** Input type: range */
    cart__recommended_products_quantity: number;
    /** Input type: radio */
    cart__recommended_products_source: "complementary" | "related";
    /** Input type: range */
    free_shipping_bar__bar_height: number;
    /** Input type: select */
    free_shipping_bar__color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    free_shipping_bar__height: number;
    /** Input type: radio */
    free_shipping_bar__show: "all" | "header" | "cart" | "disable";
    /** Input type: range */
    free_shipping_bar__starting_percentage: number;
    /** Input type: radio */
    free_shipping_bar__type: "item_count" | "total_price";
    /** Input type: product_list */
    cart__recommended_products?: _Product_liquid[];
    /** Input type: number */
    free_shipping_bar__target?: number;
    /** Input type: inline_richtext */
    message?: string;
    /** Input type: inline_richtext */
    message__success?: string;
  };
  type: "header-cart-promotions";
};

export type CartDrawerBlocksAnnouncement = {
  id: string;
  settings: {
    /** Input type: range */
    announcement_font: number;
    /** Input type: range */
    display_duration: number;
    /** Input type: select */
    position: "left" | "center" | "right";
    /** Input type: checkbox */
    scheduled: boolean;
    /** Input type: color */
    color_bg?: _Color_liquid | string;
    /** Input type: color */
    color_text?: _Color_liquid | string;
    /** Input type: text */
    end_date?: string;
    /** Input type: url */
    link?: string;
    /** Input type: richtext */
    short_text?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    start_date?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "announcement";
};

export type CartDrawerBlocksRoute_protection_product = {
  id: string;
  settings: {
    /** Input type: checkbox */
    checkout_disabled: boolean;
    /** Input type: checkbox */
    content__show: boolean;
    /** Input type: checkbox */
    empty_cart_show: boolean;
    /** Input type: checkbox */
    limit_quantity: boolean;
    /** Input type: range */
    percentage: number;
    /** Input type: checkbox */
    use_advanced_pricing: boolean;
    /** Input type: inline_richtext */
    description?: string;
    /** Input type: number */
    percentage_threshold?: number;
    /** Input type: number */
    price?: number;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: text */
    title?: string;
    /** Input type: text */
    variant_id?: string;
  };
  type: "route_protection_product";
};

export type CartDrawerBlocksFooter_text = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "footer_text";
};

export type CartDrawerBlocksFooter_accent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "footer_accent_line";
};

export type CartDrawerBlocksFooter_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "footer_buttons";
};

export type CartDrawerBlocksEmpty_text = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "empty_text";
};

export type CartDrawerBlocksEmpty_accent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "empty_accent_line";
};

export type CartDrawerBlocksEmpty_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "empty_buttons";
};

export type CartDrawerBlocksEmpty_feature_grid = {
  id: string;
  settings: {
    /** Input type: range */
    border_radius: number;
    /** Input type: range */
    featured_title_font: number;
    /** Input type: range */
    grid_gap: number;
    /** Input type: radio */
    layout: "grid-cols-1" | "grid-cols-2";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    size: number;
    /** Input type: collection_list */
    collections?: _Collection_liquid[];
    /** Input type: richtext */
    feature_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: color_background */
    overlay?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
  };
  type: "empty_feature_grid";
};

export type CartDrawerBlocks =
  | CartDrawerBlocksAnnouncement
  | CartDrawerBlocksRoute_protection_product
  | CartDrawerBlocksFooter_text
  | CartDrawerBlocksFooter_accent_line
  | CartDrawerBlocksFooter_buttons
  | CartDrawerBlocksEmpty_text
  | CartDrawerBlocksEmpty_accent_line
  | CartDrawerBlocksEmpty_buttons
  | CartDrawerBlocksEmpty_feature_grid;

export type CategoriesSection = {
  blocks: CategoriesBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
  };
  type: "categories";
};

export type CategoriesBlocksCategory = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    link_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    style: "row-span-1 pb-[75%]" | "row-span-2 pb-[calc(150%+24px)]";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: richtext */
    link?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: color_background */
    overlay?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "category";
};

export type CategoriesBlocks = CategoriesBlocksCategory;

export type CollectionGridWithFiltersSection = {
  blocks: CollectionGridWithFiltersBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    columns__desktop:
      | "lg:grid-cols-3 group-ac:lg:grid-cols-2"
      | "lg:grid-cols-4 group-ac:lg:grid-cols-3"
      | "lg:grid-cols-5 group-ac:lg:grid-cols-4";
    /** Input type: select */
    columns__mobile: "grid-cols-1" | "grid-cols-2";
    /** Input type: checkbox */
    filter__hide_unavailable: boolean;
    /** Input type: checkbox */
    filters__auto_apply: boolean;
    /** Input type: checkbox */
    filters__count: boolean;
    /** Input type: checkbox */
    filters__show: boolean;
    /** Input type: range */
    headings_font: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    pagination_size: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: checkbox */
    sort__show: boolean;
    /** Input type: richtext */
    headings?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    sectionID?: string;
  };
  type: "collection-with-filters";
};

export type CollectionGridWithFiltersBlocksFilter_style = {
  id: string;
  settings: {
    /** Input type: radio */
    style: "checkboxes" | "tags" | "color";
    /** Input type: text */
    title?: string;
  };
  type: "filter_style";
};

export type CollectionGridWithFiltersBlocks = CollectionGridWithFiltersBlocksFilter_style;

export type CollectionNavSection = {
  blocks: CollectionNavBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    aspect_ratio: "pb-[100%]" | "pb-[125%]" | "pb-[133%]" | "pb-[177%]";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    min_width_desktop: number;
    /** Input type: range */
    min_width_mobile: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    collection_image_metafield?: string;
    /** Input type: color_background */
    overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "collection-nav";
};

export type CollectionNavBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type CollectionNavBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type CollectionNavBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type CollectionNavBlocksTab_group = {
  id: string;
  settings: {
    /** Input type: collection_list */
    collection_list?: _Collection_liquid[];
    /** Input type: text */
    collection_metafield?: string;
    /** Input type: text */
    tab?: string;
  };
  type: "tab_group";
};

export type CollectionNavBlocks =
  | CollectionNavBlocksText
  | CollectionNavBlocksAccent_line
  | CollectionNavBlocksButtons
  | CollectionNavBlocksTab_group;

export type CustomLiquidSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom-liquid";
};

export type DrawerMenuSection = {
  blocks: DrawerMenuBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    floating: boolean;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: text */
    sectionID?: string;
  };
  type: "drawer-menu";
};

export type DrawerMenuBlocksMenu = {
  id: string;
  settings: {
    /** Input type: checkbox */
    border_bottom: boolean;
    /** Input type: checkbox */
    border_top: boolean;
    /** Input type: radio */
    grid_layout: "grid" | "grid grid-cols-2";
    /** Input type: radio */
    icon_style: "chevron-right" | "plus";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    spacing: number;
    /** Input type: checkbox */
    thumbnails__show: boolean;
    /** Input type: radio */
    typography_style: "megamenu-link" | "megamenu-link--large";
    /** Input type: url */
    facebook_url?: string;
    /** Input type: url */
    instagram_url?: string;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
    /** Input type: text */
    metafield?: string;
    /** Input type: text */
    override_1_handle?: string;
    /** Input type: image_picker */
    override_1_image?: _Image_liquid | string;
    /** Input type: text */
    override_2_handle?: string;
    /** Input type: image_picker */
    override_2_image?: _Image_liquid | string;
    /** Input type: text */
    override_3_handle?: string;
    /** Input type: image_picker */
    override_3_image?: _Image_liquid | string;
    /** Input type: text */
    override_4_handle?: string;
    /** Input type: image_picker */
    override_4_image?: _Image_liquid | string;
    /** Input type: text */
    override_5_handle?: string;
    /** Input type: image_picker */
    override_5_image?: _Image_liquid | string;
  };
  type: "menu";
};

export type DrawerMenuBlocksFooter_text = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "footer_text";
};

export type DrawerMenuBlocksFooter_image = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "footer_image";
};

export type DrawerMenuBlocksFooter_accent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "footer_accent_line";
};

export type DrawerMenuBlocksFooter_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "footer_buttons";
};

export type DrawerMenuBlocksFooter_features = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    content_font_1: number;
    /** Input type: range */
    content_font_2: number;
    /** Input type: range */
    content_font_3: number;
    /** Input type: range */
    content_font_4: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    spacing: number;
    /** Input type: richtext */
    content_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    icon_1?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_2?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_3?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_4?: _Image_liquid | string;
  };
  type: "footer_features";
};

export type DrawerMenuBlocksFooter_social_links = {
  id: string;
  settings: {
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  };
  type: "footer_social_links";
};

export type DrawerMenuBlocksFooter_action = {
  id: string;
  settings: {
    /** Input type: checkbox */
    border_bottom: boolean;
    /** Input type: checkbox */
    border_top: boolean;
    /** Input type: select */
    icon_list:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: inline_richtext */
    title?: string;
    /** Input type: url */
    url?: string;
  };
  type: "footer_action";
};

export type DrawerMenuBlocks =
  | DrawerMenuBlocksMenu
  | DrawerMenuBlocksFooter_text
  | DrawerMenuBlocksFooter_image
  | DrawerMenuBlocksFooter_accent_line
  | DrawerMenuBlocksFooter_buttons
  | DrawerMenuBlocksFooter_features
  | DrawerMenuBlocksFooter_social_links
  | DrawerMenuBlocksFooter_action;

export type FaqSection = {
  blocks: FaqBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: range */
    answer_font: number;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    question_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    title_font: number;
    /** Input type: select */
    width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm";
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "faq";
};

export type FaqBlocksGroup = {
  id: string;
  settings: {
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "group";
};

export type FaqBlocksFaq = {
  id: string;
  settings: {
    /** Input type: checkbox */
    open: boolean;
    /** Input type: richtext */
    answer?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: page */
    page?: _Page_liquid | string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "faq";
};

export type FaqBlocks = FaqBlocksGroup | FaqBlocksFaq;

export type FeaturedArticlesSection = {
  blocks: FeaturedArticlesBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    author__show: boolean;
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: checkbox */
    date__show: boolean;
    /** Input type: checkbox */
    description__show: boolean;
    /** Input type: range */
    limit: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    size: "4" | "3" | "2";
    /** Input type: checkbox */
    title_wrap: boolean;
    /** Input type: blog */
    blog?: _Blog_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "featured-articles";
};

export type FeaturedArticlesBlocksHeading = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "heading";
};

export type FeaturedArticlesBlocksView_all_bar = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "view_all_bar";
};

export type FeaturedArticlesBlocksArticle = {
  id: string;
  settings: {
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: article */
    article?: _Article_liquid | string;
  };
  type: "article";
};

export type FeaturedArticlesBlocks =
  | FeaturedArticlesBlocksHeading
  | FeaturedArticlesBlocksView_all_bar
  | FeaturedArticlesBlocksArticle;

export type FeaturedCollectionGridSection = {
  blocks: FeaturedCollectionGridBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: collection */
    collection?: _Collection_liquid | string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: text */
    sectionID?: string;
  };
  type: "featured-collection-grid";
};

export type FeaturedCollectionGridBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
  };
  type: "image";
};

export type FeaturedCollectionGridBlocksContent = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "content";
};

export type FeaturedCollectionGridBlocks =
  | FeaturedCollectionGridBlocksImage
  | FeaturedCollectionGridBlocksContent;

export type FeaturedObjectsSection = {
  blocks: FeaturedObjectsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    card_style: "default" | "preview_card";
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: radio */
    desktop_style: "scrollable" | "slider" | "grid";
    /** Input type: range */
    grid_collapse_at_desktop: number;
    /** Input type: range */
    grid_collapse_at_mobile: number;
    /** Input type: range */
    grid_columns_desktop: number;
    /** Input type: range */
    grid_columns_mobile: number;
    /** Input type: range */
    grid_mobile_limit: number;
    /** Input type: checkbox */
    hide_button: boolean;
    /** Input type: range */
    limit: number;
    /** Input type: radio */
    mobile_style: "scrollable" | "slider" | "grid";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: checkbox */
    slider__auto_rotate: boolean;
    /** Input type: range */
    slider__desktop_cols: number;
    /** Input type: range */
    slider__mobile_cols: number;
    /** Input type: checkbox */
    slider__show_buttons: boolean;
    /** Input type: checkbox */
    slider__show_dots: boolean;
    /** Input type: range */
    slider__speed: number;
    /** Input type: color */
    card__background_color?: _Color_liquid | string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "featured-objects";
};

export type FeaturedObjectsBlocksHeading = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "heading";
};

export type FeaturedObjectsBlocksFooter = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "footer";
};

export type FeaturedObjectsBlocksTab_group = {
  id: string;
  settings: {
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: radio */
    desktop_style: "scrollable" | "slider" | "grid";
    /** Input type: range */
    grid_collapse_at_desktop: number;
    /** Input type: range */
    grid_collapse_at_mobile: number;
    /** Input type: range */
    grid_columns_desktop: number;
    /** Input type: range */
    grid_columns_mobile: number;
    /** Input type: range */
    grid_mobile_limit: number;
    /** Input type: checkbox */
    hide_button: boolean;
    /** Input type: range */
    limit: number;
    /** Input type: radio */
    mobile_style: "scrollable" | "slider" | "grid";
    /** Input type: checkbox */
    slider__auto_rotate: boolean;
    /** Input type: range */
    slider__desktop_cols: number;
    /** Input type: range */
    slider__mobile_cols: number;
    /** Input type: checkbox */
    slider__show_dots: boolean;
    /** Input type: range */
    slider__speed: number;
    /** Input type: checkbox */
    use_group_settings: boolean;
    /** Input type: color */
    card__background_color?: _Color_liquid | string;
    /** Input type: text */
    title?: string;
  };
  type: "tab_group";
};

export type FeaturedObjectsBlocksSource_products = {
  id: string;
  settings: {
    /** Input type: product_list */
    source?: _Product_liquid[];
  };
  type: "source_products";
};

export type FeaturedObjectsBlocksSource_collection = {
  id: string;
  settings: {
    /** Input type: collection */
    source?: _Collection_liquid | string;
  };
  type: "source_collection";
};

export type FeaturedObjectsBlocksSource_collections = {
  id: string;
  settings: {
    /** Input type: collection_list */
    source?: _Collection_liquid[];
  };
  type: "source_collections";
};

export type FeaturedObjectsBlocksSource_articles = {
  id: string;
  settings: {
    /** Input type: blog */
    source?: _Blog_liquid | string;
  };
  type: "source_articles";
};

export type FeaturedObjectsBlocksSource_metafield = {
  id: string;
  settings: {
    /** Input type: text */
    source?: string;
  };
  type: "source_metafield";
};

export type FeaturedObjectsBlocksSource_custom_item = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    opacity: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "source_custom_item";
};

export type FeaturedObjectsBlocks =
  | FeaturedObjectsBlocksHeading
  | FeaturedObjectsBlocksFooter
  | FeaturedObjectsBlocksTab_group
  | FeaturedObjectsBlocksSource_products
  | FeaturedObjectsBlocksSource_collection
  | FeaturedObjectsBlocksSource_collections
  | FeaturedObjectsBlocksSource_articles
  | FeaturedObjectsBlocksSource_metafield
  | FeaturedObjectsBlocksSource_custom_item;

export type FeaturedProductSection = {
  blocks: FeaturedProductBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    gallery__aspect_ratio: "auto" | "9 / 16" | "2 / 3" | "3 / 4" | "1" | "4 / 3" | "16 / 9";
    /** Input type: checkbox */
    gallery__first_image_full: boolean;
    /** Input type: radio */
    gallery__layout: "horizontal" | "vertical" | "grid";
    /** Input type: checkbox */
    gallery__loop_videos: boolean;
    /** Input type: radio */
    gallery__show_thumbnails: "responsive" | "md:hidden" | "max-md:hidden" | "hidden";
    /** Input type: radio */
    gallery__size: "small" | "medium" | "large" | "xl";
    /** Input type: checkbox */
    gallery__zoom: boolean;
    /** Input type: range */
    gallery__zoom_scale: number;
    /** Input type: checkbox */
    hide_not_selected_variant_images: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: checkbox */
    sticky: boolean;
    /** Input type: radio */
    variants_multi_images: "disabled" | "via_metafield" | "via_image_order";
    /** Input type: product */
    product?: _Product_liquid | string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    variants_image_metafield?: string;
  };
  type: "featured-product";
};

export type FeaturedProductBlocksApp = {
  id: string;
  type: "@app";
};

export type FeaturedProductBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    text_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type FeaturedProductBlocksTitle = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type FeaturedProductBlocksVendor = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "vendor";
};

export type FeaturedProductBlocksPrice = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "price";
};

export type FeaturedProductBlocksVariant_selector = {
  id: string;
  settings: {
    /** Input type: checkbox */
    color_selector: boolean;
    /** Input type: radio */
    color_selector__source:
      | "via_option"
      | "via_option_then_image"
      | "via_image"
      | "via_metafield"
      | "via_image_then_metafield"
      | "via_metafield_then_image";
    /** Input type: range */
    color_selector_radius: number;
    /** Input type: range */
    color_selector_size: number;
    /** Input type: radio */
    default_type: "radio" | "select";
    /** Input type: checkbox */
    disable_unavailable: boolean;
    /** Input type: checkbox */
    image_selector: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: textarea */
    color_list?: string;
    /** Input type: text */
    custom_css?: string;
  };
  type: "variant_selector";
};

export type FeaturedProductBlocksVariant_upsell = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: text */
    option_name?: string;
    /** Input type: text */
    value_label?: string;
    /** Input type: text */
    value_name?: string;
  };
  type: "variant_upsell";
};

export type FeaturedProductBlocksSku = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "sku";
};

export type FeaturedProductBlocksQuantity_selector = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "quantity_selector";
};

export type FeaturedProductBlocksBuy_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "buy_buttons";
};

export type FeaturedProductBlocksDynamic_buy_buttons = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "dynamic_buy_buttons";
};

export type FeaturedProductBlocksPayment_terms = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "payment_terms";
};

export type FeaturedProductBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    style:
      | "plain"
      | "accordion"
      | "accordion_style_h1"
      | "tabs_style_h1"
      | "accordion_custom_tags"
      | "tabs_custom_tags";
    /** Input type: checkbox */
    uncollapse: boolean;
    /** Input type: text */
    custom_css?: string;
    /** Input type: textarea */
    custom_tag_overrides?: string;
  };
  type: "description";
};

export type FeaturedProductBlocksShare = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "share";
};

export type FeaturedProductBlocksCustom_liquid = {
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom_liquid";
};

export type FeaturedProductBlocksCollapsible_tab = {
  id: string;
  settings: {
    /** Input type: select */
    icon:
      | "none"
      | "apple"
      | "banana"
      | "bottle"
      | "box"
      | "carrot"
      | "chat_bubble"
      | "check_mark"
      | "clipboard"
      | "dairy"
      | "dairy_free"
      | "dryer"
      | "eye"
      | "fire"
      | "gluten_free"
      | "heart"
      | "iron"
      | "leaf"
      | "leather"
      | "lightning_bolt"
      | "lipstick"
      | "lock"
      | "map_pin"
      | "nut_free"
      | "pants"
      | "paw_print"
      | "pepper"
      | "perfume"
      | "plane"
      | "plant"
      | "price_tag"
      | "question_mark"
      | "recycle"
      | "return"
      | "ruler"
      | "serving_dish"
      | "shirt"
      | "shoe"
      | "silhouette"
      | "snowflake"
      | "star"
      | "stopwatch"
      | "truck"
      | "washing";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    heading?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "collapsible_tab";
};

export type FeaturedProductBlocksRating = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "rating";
};

export type FeaturedProductBlocksIcon_with_text = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: select */
    icon_1:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_2:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_3:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_4:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    item_layout: "flex-row" | "flex-col";
    /** Input type: select */
    layout: "flex-row" | "flex-col";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    size: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    heading_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: image_picker */
    image_4?: _Image_liquid | string;
  };
  type: "icon_with_text";
};

export type FeaturedProductBlocksInventory = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    threshold: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "inventory";
};

export type FeaturedProductBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    grid_row_span:
      | "row-span-1"
      | "row-span-2"
      | "row-span-3"
      | "row-span-4"
      | "row-span-5"
      | "row-span-6";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: checkbox */
    image__drop_shadow: boolean;
    /** Input type: select */
    image__ratio: "pb-[125%]" | "pb-[100%]";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: color_background */
    image__background?: string;
  };
  type: "image";
};

export type FeaturedProductBlocksPre_order = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    preorder_date: "estimate" | "precise" | "none";
    /** Input type: text */
    custom_css?: string;
  };
  type: "pre_order";
};

export type FeaturedProductBlocksPopup = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: radio */
    label__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline"
      | "plain-link text-left";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
    /** Input type: richtext */
    popup_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    title?: string;
  };
  type: "popup";
};

export type FeaturedProductBlocks =
  | FeaturedProductBlocksApp
  | FeaturedProductBlocksText
  | FeaturedProductBlocksTitle
  | FeaturedProductBlocksVendor
  | FeaturedProductBlocksPrice
  | FeaturedProductBlocksVariant_selector
  | FeaturedProductBlocksVariant_upsell
  | FeaturedProductBlocksSku
  | FeaturedProductBlocksQuantity_selector
  | FeaturedProductBlocksBuy_buttons
  | FeaturedProductBlocksDynamic_buy_buttons
  | FeaturedProductBlocksPayment_terms
  | FeaturedProductBlocksDescription
  | FeaturedProductBlocksShare
  | FeaturedProductBlocksCustom_liquid
  | FeaturedProductBlocksCollapsible_tab
  | FeaturedProductBlocksRating
  | FeaturedProductBlocksIcon_with_text
  | FeaturedProductBlocksInventory
  | FeaturedProductBlocksImage
  | FeaturedProductBlocksPre_order
  | FeaturedProductBlocksPopup;

export type FeaturedReviewsSection = {
  blocks: FeaturedReviewsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: range */
    author_font: number;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: radio */
    image__order: "-order-1" | "-order-1 lg:order-2";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    review_font: number;
    /** Input type: radio */
    style: "slider" | "stack";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "featured-reviews";
};

export type FeaturedReviewsBlocksReview = {
  id: string;
  settings: {
    /** Input type: range */
    rating: number;
    /** Input type: richtext */
    author?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    review?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "review";
};

export type FeaturedReviewsBlocks = FeaturedReviewsBlocksReview;

export type FeaturesSection = {
  blocks: FeaturesBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: radio */
    feature__align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    feature_content_font: number;
    /** Input type: range */
    feature_title_font: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: select */
    layout:
      | "icon-image"
      | "icon-minimal"
      | "icon-flat"
      | "icon-cards"
      | "image-flat"
      | "image-column"
      | "story";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "features";
};

export type FeaturesBlocksFeature = {
  id: string;
  settings: {
    /** Input type: select */
    icon_list:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: richtext */
    link_text?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: textarea */
    svg?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "feature";
};

export type FeaturesBlocks = FeaturesBlocksFeature;

export type FeaturesSliderSection = {
  blocks: FeaturesSliderBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: checkbox */
    auto_rotate: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: radio */
    feature__align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    feature_content_font: number;
    /** Input type: range */
    feature_title_font: number;
    /** Input type: range */
    features_per_slide_desktop: number;
    /** Input type: range */
    features_per_slide_mobile: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    slide_speed: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "features-slider";
};

export type FeaturesSliderBlocksFeature = {
  id: string;
  settings: {
    /** Input type: select */
    icon_list:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: richtext */
    link_text?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: textarea */
    svg?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "feature";
};

export type FeaturesSliderBlocks = FeaturesSliderBlocksFeature;

export type FooterSection = {
  blocks: FooterBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    address_show: boolean;
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    country_selector_show: boolean;
    /** Input type: checkbox */
    email_show: boolean;
    /** Input type: checkbox */
    language_selector_show: boolean;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: range */
    logo_height: number;
    /** Input type: checkbox */
    newsletter_checkbox_show: boolean;
    /** Input type: checkbox */
    newsletter_show: boolean;
    /** Input type: checkbox */
    payment_types_show: boolean;
    /** Input type: checkbox */
    policy_links_show: boolean;
    /** Input type: radio */
    social_content_layout: "left" | "right";
    /** Input type: checkbox */
    social_icons_show: boolean;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: text */
    newsletter_checkbox_label?: string;
    /** Input type: text */
    newsletter_checkbox_value?: string;
    /** Input type: richtext */
    newsletter_footer_content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    newsletter_heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: liquid */
    newsletter_liquid_replace?: string;
    /** Input type: richtext */
    newsletter_subheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    powered_by_text?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    typography_footer_link_font_family?: string;
    /** Input type: text */
    typography_footer_link_size_weight_height?: string;
    /** Input type: text */
    typography_footer_link_spacing_transform_style?: string;
    /** Input type: text */
    typography_footer_title_font_family?: string;
    /** Input type: text */
    typography_footer_title_size_weight_height?: string;
    /** Input type: text */
    typography_footer_title_spacing_transform_style?: string;
  };
  type: "footer";
};

export type FooterBlocksMenu = {
  id: string;
  settings: {
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-2 lg:col-span-3";
    /** Input type: richtext */
    heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
  };
  type: "menu";
};

export type FooterBlocksText = {
  id: string;
  settings: {
    /** Input type: radio */
    color_grayscale_style: "normal" | "inverted";
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-3";
    /** Input type: richtext */
    heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtext?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type FooterBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-3";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type FooterBlocks = FooterBlocksMenu | FooterBlocksText | FooterBlocksImage;

export type FormsSection = {
  blocks: FormsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    fullwidth: boolean;
    /** Input type: checkbox */
    hide_if_account: boolean;
    /** Input type: select */
    redirect:
      | "off"
      | "/"
      | "/account"
      | "/account/login"
      | "/account/login#recover"
      | "/account/register"
      | "/account/logout"
      | "/account/addresses"
      | "/cart";
    /** Input type: checkbox */
    show_only_on_target: boolean;
    /** Input type: select */
    type:
      | "customer"
      | "customer_login"
      | "create_customer"
      | "customer_address"
      | "contact"
      | "reset_customer_password"
      | "recover_customer_password"
      | "activate_customer_password";
    /** Input type: select */
    width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    success_message?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    target_id?: string;
  };
  type: "forms";
};

export type FormsBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type FormsBlocksSeparator = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
  };
  type: "separator";
};

export type FormsBlocksPassword = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: text */
    confirm_pw__title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "password";
};

export type FormsBlocksEmail = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: text */
    placeholder?: string;
    /** Input type: text */
    title?: string;
  };
  type: "email";
};

export type FormsBlocksInput = {
  id: string;
  settings: {
    /** Input type: select */
    autocomplete:
      | "off"
      | "name"
      | "honorific-prefix"
      | "given-name"
      | "additional-name"
      | "family-name"
      | "honorific-suffix"
      | "nickname"
      | "email"
      | "username"
      | "new-password"
      | "current-password"
      | "one-time-code"
      | "organization-title"
      | "organization"
      | "street-address"
      | "address-line1"
      | "address-line2"
      | "address-line3"
      | "address-level4"
      | "address-level3"
      | "address-level2"
      | "address-level1"
      | "country"
      | "country-name"
      | "postal-code"
      | "cc-name"
      | "cc-given-name"
      | "cc-additional-name"
      | "cc-family-name"
      | "cc-number"
      | "cc-exp"
      | "cc-exp-month"
      | "cc-exp-year"
      | "cc-csc"
      | "cc-type"
      | "transaction-currency"
      | "transaction-amount"
      | "language"
      | "bday"
      | "bday-day"
      | "bday-month"
      | "bday-year"
      | "sex"
      | "tel"
      | "tel-country-code"
      | "tel-national"
      | "tel-area-code"
      | "tel-local"
      | "tel-extension"
      | "impp"
      | "url"
      | "photo";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: checkbox */
    required: boolean;
    /** Input type: radio */
    type: "text" | "tel" | "number" | "email" | "date" | "url" | "checkbox" | "hidden";
    /** Input type: text */
    name?: string;
    /** Input type: text */
    placeholder?: string;
    /** Input type: text */
    title?: string;
  };
  type: "input";
};

export type FormsBlocksHidden = {
  id: string;
  settings: {
    /** Input type: text */
    name?: string;
    /** Input type: text */
    value?: string;
  };
  type: "hidden";
};

export type FormsBlocksSelect = {
  id: string;
  settings: {
    /** Input type: checkbox */
    all_countries: boolean;
    /** Input type: text */
    name?: string;
    /** Input type: text */
    title?: string;
  };
  type: "select";
};

export type FormsBlocksInput_group = {
  id: string;
  settings: {
    /** Input type: radio */
    type: "radio" | "checkbox";
    /** Input type: text */
    name?: string;
    /** Input type: text */
    title?: string;
  };
  type: "Input_group";
};

export type FormsBlocksTextarea = {
  id: string;
  settings: {
    /** Input type: checkbox */
    required: boolean;
    /** Input type: range */
    rows: number;
    /** Input type: text */
    name?: string;
    /** Input type: text */
    placeholder?: string;
    /** Input type: text */
    title?: string;
  };
  type: "textarea";
};

export type FormsBlocksButtons = {
  id: string;
  settings: {
    /** Input type: checkbox */
    fullwidth: boolean;
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: checkbox */
    reset__show: boolean;
    /** Input type: text */
    reset__title?: string;
    /** Input type: text */
    title?: string;
  };
  type: "buttons";
};

export type FormsBlocks =
  | FormsBlocksText
  | FormsBlocksSeparator
  | FormsBlocksPassword
  | FormsBlocksEmail
  | FormsBlocksInput
  | FormsBlocksHidden
  | FormsBlocksSelect
  | FormsBlocksInput_group
  | FormsBlocksTextarea
  | FormsBlocksButtons;

export type GiftWithPurchaseSection = {
  blocks: GiftWithPurchaseBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: text */
    title?: string;
  };
  type: "gift-with-purchase";
};

export type GiftWithPurchaseBlocksGift = {
  id: string;
  settings: {
    /** Input type: range */
    receives_discount_percentage: number;
    /** Input type: radio */
    type: "quantity" | "price";
    /** Input type: collection */
    receives_collection?: _Collection_liquid | string;
    /** Input type: product_list */
    receives_products?: _Product_liquid[];
    /** Input type: number */
    receives_quantity?: number;
    /** Input type: number */
    target?: number;
    /** Input type: collection */
    target_collection?: _Collection_liquid | string;
    /** Input type: product_list */
    target_products?: _Product_liquid[];
  };
  type: "gift";
};

export type GiftWithPurchaseBlocks = GiftWithPurchaseBlocksGift;

export type HeaderSection = {
  blocks: HeaderBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    accounts__show: boolean;
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: checkbox */
    center_logo: boolean;
    /** Input type: checkbox */
    center_logo__desktop: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    flat_mobile_menu: boolean;
    /** Input type: checkbox */
    floating: boolean;
    /** Input type: checkbox */
    force_hamburger_menu: boolean;
    /** Input type: range */
    height: number;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: range */
    logo_height: number;
    /** Input type: radio */
    position: "sticky" | "relative";
    /** Input type: checkbox */
    search__show: boolean;
    /** Input type: checkbox */
    show_button_mobile: boolean;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    typography_megamenu_image_caption_font_family?: string;
    /** Input type: text */
    typography_megamenu_image_caption_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_image_caption_spacing_transform_style?: string;
    /** Input type: text */
    typography_megamenu_link_font_family?: string;
    /** Input type: text */
    typography_megamenu_link_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_link_spacing_transform_style?: string;
    /** Input type: text */
    typography_megamenu_title_font_family?: string;
    /** Input type: text */
    typography_megamenu_title_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_title_spacing_transform_style?: string;
    /** Input type: text */
    typography_nav_link_font_family?: string;
    /** Input type: text */
    typography_nav_link_size_weight_height?: string;
    /** Input type: text */
    typography_nav_link_spacing_transform_style?: string;
  };
  type: "header";
};

export type HeaderBlocksMegamenu = {
  id: string;
  settings: {
    /** Input type: range */
    font_scale: number;
    /** Input type: radio */
    rows: "1" | "2";
    /** Input type: checkbox */
    show_caption: boolean;
    /** Input type: checkbox */
    show_images: boolean;
    /** Input type: text */
    handle?: string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: color */
    image_caption_color?: _Color_liquid | string;
    /** Input type: text */
    override_1_handle?: string;
    /** Input type: image_picker */
    override_1_image?: _Image_liquid | string;
    /** Input type: text */
    override_2_handle?: string;
    /** Input type: image_picker */
    override_2_image?: _Image_liquid | string;
    /** Input type: text */
    override_3_handle?: string;
    /** Input type: image_picker */
    override_3_image?: _Image_liquid | string;
    /** Input type: text */
    override_4_handle?: string;
    /** Input type: image_picker */
    override_4_image?: _Image_liquid | string;
    /** Input type: text */
    override_5_handle?: string;
    /** Input type: image_picker */
    override_5_image?: _Image_liquid | string;
  };
  type: "megamenu";
};

export type HeaderBlocks = HeaderBlocksMegamenu;

export type HeaderKoaSection = {
  blocks: HeaderKoaBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    accounts__show: boolean;
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: checkbox */
    center_logo: boolean;
    /** Input type: checkbox */
    center_logo__desktop: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    flat_mobile_menu: boolean;
    /** Input type: checkbox */
    floating: boolean;
    /** Input type: checkbox */
    force_hamburger_menu: boolean;
    /** Input type: range */
    height: number;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: range */
    logo_height: number;
    /** Input type: radio */
    position: "sticky" | "relative";
    /** Input type: checkbox */
    search__show: boolean;
    /** Input type: checkbox */
    show_button_desktop: boolean;
    /** Input type: checkbox */
    show_button_mobile: boolean;
    /** Input type: checkbox */
    whole_line_logo: boolean;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: textarea */
    logo_svg?: string;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    typography_megamenu_image_caption_font_family?: string;
    /** Input type: text */
    typography_megamenu_image_caption_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_image_caption_spacing_transform_style?: string;
    /** Input type: text */
    typography_megamenu_link_font_family?: string;
    /** Input type: text */
    typography_megamenu_link_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_link_spacing_transform_style?: string;
    /** Input type: text */
    typography_megamenu_title_font_family?: string;
    /** Input type: text */
    typography_megamenu_title_size_weight_height?: string;
    /** Input type: text */
    typography_megamenu_title_spacing_transform_style?: string;
    /** Input type: text */
    typography_nav_link_font_family?: string;
    /** Input type: text */
    typography_nav_link_size_weight_height?: string;
    /** Input type: text */
    typography_nav_link_spacing_transform_style?: string;
  };
  type: "header-koa";
};

export type HeaderKoaBlocksMegamenu = {
  id: string;
  settings: {
    /** Input type: range */
    font_scale: number;
    /** Input type: radio */
    rows: "1" | "2";
    /** Input type: checkbox */
    show_caption: boolean;
    /** Input type: checkbox */
    show_images: boolean;
    /** Input type: text */
    handle?: string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: color */
    image_caption_color?: _Color_liquid | string;
    /** Input type: text */
    override_1_handle?: string;
    /** Input type: image_picker */
    override_1_image?: _Image_liquid | string;
    /** Input type: text */
    override_2_handle?: string;
    /** Input type: image_picker */
    override_2_image?: _Image_liquid | string;
    /** Input type: text */
    override_3_handle?: string;
    /** Input type: image_picker */
    override_3_image?: _Image_liquid | string;
    /** Input type: text */
    override_4_handle?: string;
    /** Input type: image_picker */
    override_4_image?: _Image_liquid | string;
    /** Input type: text */
    override_5_handle?: string;
    /** Input type: image_picker */
    override_5_image?: _Image_liquid | string;
  };
  type: "megamenu";
};

export type HeaderKoaBlocks = HeaderKoaBlocksMegamenu;

export type HighlightsSection = {
  blocks: HighlightsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
  };
  type: "highlights";
};

export type HighlightsBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type HighlightsBlocksImage = {
  id: string;
  settings: {
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type HighlightsBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type HighlightsBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type HighlightsBlocksFeatures = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    content_font_1: number;
    /** Input type: range */
    content_font_2: number;
    /** Input type: range */
    content_font_3: number;
    /** Input type: range */
    content_font_4: number;
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    icon_size: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    spacing: number;
    /** Input type: richtext */
    content_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    icon_1?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_2?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_3?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_4?: _Image_liquid | string;
  };
  type: "features";
};

export type HighlightsBlocksPage = {
  id: string;
  settings: {
    /** Input type: radio */
    content_position: "top" | "bottom";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "page";
};

export type HighlightsBlocksFeature = {
  id: string;
  settings: {
    /** Input type: radio */
    flex_position: "items-start" | "items-end";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "feature";
};

export type HighlightsBlocks =
  | HighlightsBlocksText
  | HighlightsBlocksImage
  | HighlightsBlocksAccent_line
  | HighlightsBlocksButtons
  | HighlightsBlocksFeatures
  | HighlightsBlocksPage
  | HighlightsBlocksFeature;

export type ImageBannerSection = {
  blocks: ImageBannerBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal_no_text: "items-start" | "items-center" | "items-end";
    /** Input type: radio */
    align__text: "text-left" | "text-center" | "text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    height: number;
    /** Input type: range */
    height_mobile: number;
    /** Input type: radio */
    image__object_fit: "object-cover" | "object-contain";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    source: "image" | "video" | "video_url";
    /** Input type: video */
    videoundefined;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: liquid */
    section_liquid?: string;
    /** Input type: url */
    url?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "image-banner";
};

export type ImageBannerBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ImageBannerBlocksLabels = {
  id: string;
  settings: {
    /** Input type: radio */
    label__style:
      | "bg-primary-bg text-primary-text"
      | "bg-primary-text text-primary-bg"
      | "bg-secondary-bg text-secondary-text";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: textarea */
    labels?: string;
  };
  type: "labels";
};

export type ImageBannerBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type ImageBannerBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type ImageBannerBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type ImageBannerBlocks =
  | ImageBannerBlocksText
  | ImageBannerBlocksLabels
  | ImageBannerBlocksImage
  | ImageBannerBlocksAccent_line
  | ImageBannerBlocksButtons;

export type ImageFeedSection = {
  blocks: ImageFeedBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    image__aspect_ratio: "pb-[75%]" | "pb-[100%]" | "pb-[125%]";
    /** Input type: range */
    min_width: number;
    /** Input type: radio */
    mobile_style: "stack" | "scroll";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: range */
    spacing: number;
    /** Input type: text */
    sectionID?: string;
  };
  type: "image-feed";
};

export type ImageFeedBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    border_width: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    subtitle_richtext?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "image";
};

export type ImageFeedBlocks = ImageFeedBlocksImage;

export type ImageWithTextSection = {
  blocks: ImageWithTextBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    content_ratio:
      | "md:grid-cols-[1fr_66%]"
      | "md:grid-cols-[44%_1fr]"
      | "md:grid-cols-2"
      | "md:grid-cols-[1fr_44%]"
      | "md:grid-cols-[66%_1fr]";
    /** Input type: select */
    image__aspect_ratio: "pb-[75%]" | "pb-[85%]" | "pb-[100%]" | "pb-[125%]";
    /** Input type: checkbox */
    image__mobile_padding: boolean;
    /** Input type: radio */
    image__object_fit: "object-cover" | "object-contain";
    /** Input type: radio */
    image__order: "-order-1" | "order-2";
    /** Input type: radio */
    image__order__mobile: "max-md:-order-1" | "max-md:order-2";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: radio */
    source: "image" | "video" | "video_url" | "metafield";
    /** Input type: video */
    videoundefined;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    metafield?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: liquid */
    section_liquid?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "image-with-text";
};

export type ImageWithTextBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ImageWithTextBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type ImageWithTextBlocksFeatures = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    content_font_1: number;
    /** Input type: range */
    content_font_2: number;
    /** Input type: range */
    content_font_3: number;
    /** Input type: range */
    content_font_4: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    spacing: number;
    /** Input type: richtext */
    content_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    icon_1?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_2?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_3?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_4?: _Image_liquid | string;
  };
  type: "features";
};

export type ImageWithTextBlocks =
  | ImageWithTextBlocksText
  | ImageWithTextBlocksButtons
  | ImageWithTextBlocksFeatures;

export type ImageWithTextKoaSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    image__aspect_ratio: "pb-[75%]" | "pb-[100%]" | "pb-[125%]";
    /** Input type: radio */
    image__order: "-order-1" | "order-2";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: radio */
    source: "image" | "video" | "video_url";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: video */
    videoundefined;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    preheading?: string;
    /** Input type: textarea */
    subtitle?: string;
    /** Input type: text */
    title?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "image-with-text-koa";
};

export type MainAccountSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: text */
    sectionID?: string;
  };
  type: "account";
};

export type MainAddressesSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: text */
    sectionID?: string;
  };
  type: "addresses";
};

export type MainArticleSection = {
  blocks: MainArticleBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    author__show: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    comments__show: boolean;
    /** Input type: checkbox */
    date__show: boolean;
    /** Input type: checkbox */
    image__show: boolean;
    /** Input type: checkbox */
    nav__show: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: checkbox */
    share_buttons__show: boolean;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "blog-post";
};

export type MainArticleBlocksApp = {
  id: string;
  type: "@app";
};

export type MainArticleBlocksRelated_products = {
  id: string;
  settings: {
    /** Input type: range */
    limit: number;
    /** Input type: text */
    metafield?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
  };
  type: "related_products";
};

export type MainArticleBlocksRelated_articles = {
  id: string;
  settings: {
    /** Input type: blog */
    blog?: _Blog_liquid | string;
  };
  type: "related_articles";
};

export type MainArticleBlocks =
  | MainArticleBlocksApp
  | MainArticleBlocksRelated_products
  | MainArticleBlocksRelated_articles;

export type MainBlogSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    author__show: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    date__show: boolean;
    /** Input type: select */
    image__ratio: "pb-[125%]" | "pb-[100%]";
    /** Input type: checkbox */
    image__show: boolean;
    /** Input type: color_background */
    image__background?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "blog-posts";
};

export type MainCartSection = {
  blocks: MainCartBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: text */
    sectionID?: string;
  };
  type: "main-cart";
};

export type MainCartBlocksEmpty = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    min_height: number;
    /** Input type: range */
    no_display_title_font: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    no_display_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "empty";
};

export type MainCartBlocks = MainCartBlocksEmpty;

export type MainCollectionBannerSection = {
  blocks: MainCollectionBannerBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    height_desktop: number;
    /** Input type: range */
    height_mobile: number;
    /** Input type: checkbox */
    image__show: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "collection-banner";
};

export type MainCollectionBannerBlocksTitle = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type MainCollectionBannerBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "description";
};

export type MainCollectionBannerBlocksProduct_count = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "product_count";
};

export type MainCollectionBannerBlocks =
  | MainCollectionBannerBlocksTitle
  | MainCollectionBannerBlocksDescription
  | MainCollectionBannerBlocksProduct_count;

export type MainCollectionFilterSortBarSection = {
  blocks: MainCollectionFilterSortBarBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    filters__count: boolean;
    /** Input type: checkbox */
    filters__show: boolean;
    /** Input type: select */
    filters__type: "megamenu" | "cards";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: checkbox */
    sort__show: boolean;
    /** Input type: text */
    sectionID?: string;
  };
  type: "filter-sort-bar";
};

export type MainCollectionFilterSortBarBlocksFilter_style = {
  id: string;
  settings: {
    /** Input type: radio */
    style: "checkboxes" | "tags" | "color";
    /** Input type: text */
    title?: string;
  };
  type: "filter_style";
};

export type MainCollectionFilterSortBarBlocks = MainCollectionFilterSortBarBlocksFilter_style;

export type MainCollectionProductGridSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    card_style: "default" | "preview_card";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    columns__desktop:
      | "lg:grid-cols-1"
      | "lg:grid-cols-2"
      | "lg:grid-cols-3"
      | "lg:grid-cols-4"
      | "lg:grid-cols-5";
    /** Input type: select */
    columns__mobile: "grid-cols-1" | "grid-cols-2";
    /** Input type: range */
    pagination_size: number;
    /** Input type: text */
    sectionID?: string;
  };
  type: "product-grid";
};

export type MainCollectionsListSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    columns__desktop:
      | "lg:grid-cols-1"
      | "lg:grid-cols-2"
      | "lg:grid-cols-3"
      | "lg:grid-cols-4"
      | "lg:grid-cols-5";
    /** Input type: select */
    columns__mobile: "grid-cols-1" | "grid-cols-2";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    pagination_size: number;
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: text */
    sectionID?: string;
  };
  type: "main-collections-list";
};

export type MainOrderSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: text */
    sectionID?: string;
  };
  type: "order";
};

export type MainPageSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: select */
    width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm";
    /** Input type: text */
    sectionID?: string;
  };
  type: "page";
};

export type MainSearchFiltersSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    filters__count: boolean;
    /** Input type: checkbox */
    filters__show: boolean;
    /** Input type: select */
    filters__type: "megamenu" | "cards";
    /** Input type: checkbox */
    sort__show: boolean;
    /** Input type: text */
    sectionID?: string;
  };
  type: "search-filter-sort-bar";
};

export type MainSearchGridSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    article_show_author: boolean;
    /** Input type: checkbox */
    article_show_date: boolean;
    /** Input type: select */
    columns__desktop:
      | "lg:grid-cols-1"
      | "lg:grid-cols-2"
      | "lg:grid-cols-3"
      | "lg:grid-cols-4"
      | "lg:grid-cols-5";
    /** Input type: select */
    columns__mobile: "grid-cols-1" | "grid-cols-2";
    /** Input type: checkbox */
    image__drop_shadow: boolean;
    /** Input type: select */
    image__ratio: "pb-[125%]" | "pb-[100%]";
    /** Input type: checkbox */
    image__show_secondary: boolean;
    /** Input type: radio */
    labels__discount: "sale" | "percentage" | "value";
    /** Input type: checkbox */
    labels__show: boolean;
    /** Input type: range */
    pagination_size: number;
    /** Input type: checkbox */
    rating__show: boolean;
    /** Input type: checkbox */
    vendor__show: boolean;
    /** Input type: color_background */
    image__background?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "search-results";
};

export type MainSearchInputSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    type_selector__show: boolean;
  };
  type: "search-bar-input";
};

export type Main404Section = {
  blocks: Main404Blocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    min_height: number;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "main-404";
};

export type Main404BlocksText = {
  id: string;
  settings: {
    /** Input type: radio */
    style: "h1" | "h2" | "h3" | "h4" | "preheading" | "richtext";
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type Main404BlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type Main404BlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type Main404Blocks = Main404BlocksText | Main404BlocksImage | Main404BlocksButtons;

export type MarqueeBarSection = {
  blocks: MarqueeBarBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    auto_pause: boolean;
    /** Input type: checkbox */
    center_items: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    duration: number;
    /** Input type: range */
    height_desktop: number;
    /** Input type: range */
    height_mobile: number;
    /** Input type: checkbox */
    highlight: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    spacing: number;
    /** Input type: range */
    spacing_mobile: number;
    /** Input type: text */
    sectionID?: string;
  };
  type: "marquee-bar";
};

export type MarqueeBarBlocksText = {
  id: string;
  settings: {
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    title?: string;
    /** Input type: url */
    url?: string;
  };
  type: "text";
};

export type MarqueeBarBlocksImage = {
  id: string;
  settings: {
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: text */
    title?: string;
    /** Input type: url */
    url?: string;
  };
  type: "image";
};

export type MarqueeBarBlocksSvg = {
  id: string;
  settings: {
    /** Input type: textarea */
    svg?: string;
    /** Input type: text */
    title?: string;
    /** Input type: url */
    url?: string;
  };
  type: "svg";
};

export type MarqueeBarBlocksImage_with_text = {
  id: string;
  settings: {
    /** Input type: richtext */
    content_above?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_below?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: text */
    title?: string;
    /** Input type: url */
    url?: string;
  };
  type: "image_with_text";
};

export type MarqueeBarBlocks =
  | MarqueeBarBlocksText
  | MarqueeBarBlocksImage
  | MarqueeBarBlocksSvg
  | MarqueeBarBlocksImage_with_text;

export type MegamenuSection = {
  blocks: MegamenuBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    grid_gap: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    handle?: string;
  };
  type: "megamenu";
};

export type MegamenuBlocksContent = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: range */
    grid_columns: number;
    /** Input type: range */
    grid_rows: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    section_visibility: "responsive" | "md:hidden" | "hidden @xl:block";
  };
  type: "content";
};

export type MegamenuBlocksFeature_grid = {
  id: string;
  settings: {
    /** Input type: range */
    border_radius: number;
    /** Input type: range */
    columns: number;
    /** Input type: range */
    featured_title_font: number;
    /** Input type: range */
    grid_gap: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    rows: number;
    /** Input type: range */
    size: number;
    /** Input type: select */
    text_position: "right" | "bottom" | "left" | "top";
    /** Input type: range */
    title_font: number;
    /** Input type: blog */
    blog?: _Blog_liquid | string;
    /** Input type: collection_list */
    collections?: _Collection_liquid[];
    /** Input type: richtext */
    feature_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: color_background */
    overlay?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "feature_grid";
};

export type MegamenuBlocksMenu = {
  id: string;
  settings: {
    /** Input type: range */
    link_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    spacing: number;
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    link_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "menu";
};

export type MegamenuBlocksHighlight_items = {
  id: string;
  settings: {
    /** Input type: range */
    gap: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    size: number;
    /** Input type: range */
    text_1_font: number;
    /** Input type: range */
    text_2_font: number;
    /** Input type: range */
    text_3_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: textarea */
    labels_1?: string;
    /** Input type: textarea */
    labels_2?: string;
    /** Input type: textarea */
    labels_3?: string;
    /** Input type: color_background */
    overlay_1?: string;
    /** Input type: color_background */
    overlay_2?: string;
    /** Input type: color_background */
    overlay_3?: string;
    /** Input type: richtext */
    text_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    text_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    text_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url_1?: string;
    /** Input type: url */
    url_2?: string;
    /** Input type: url */
    url_3?: string;
  };
  type: "highlight_items";
};

export type MegamenuBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type MegamenuBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type MegamenuBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type MegamenuBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type MegamenuBlocksFeatures = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    content_font_1: number;
    /** Input type: range */
    content_font_2: number;
    /** Input type: range */
    content_font_3: number;
    /** Input type: range */
    content_font_4: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    spacing: number;
    /** Input type: richtext */
    content_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    icon_1?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_2?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_3?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_4?: _Image_liquid | string;
  };
  type: "features";
};

export type MegamenuBlocks =
  | MegamenuBlocksContent
  | MegamenuBlocksFeature_grid
  | MegamenuBlocksMenu
  | MegamenuBlocksHighlight_items
  | MegamenuBlocksText
  | MegamenuBlocksImage
  | MegamenuBlocksAccent_line
  | MegamenuBlocksButtons
  | MegamenuBlocksFeatures;

export type NewsletterSection = {
  blocks: NewsletterBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    min_height: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
  };
  type: "email-signup";
};

export type NewsletterBlocksEmail = {
  id: string;
  settings: {
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: text */
    placeholder_text?: string;
    /** Input type: text */
    tag?: string;
  };
  type: "email";
};

export type NewsletterBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type NewsletterBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type NewsletterBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type NewsletterBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type NewsletterBlocks =
  | NewsletterBlocksEmail
  | NewsletterBlocksText
  | NewsletterBlocksImage
  | NewsletterBlocksAccent_line
  | NewsletterBlocksButtons;

export type ObjectOverImageSection = {
  blocks: ObjectOverImageBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    spacing: number;
    /** Input type: text */
    sectionID?: string;
  };
  type: "object-over-image";
};

export type ObjectOverImageBlocksObj_placement = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
  };
  type: "obj_placement";
};

export type ObjectOverImageBlocksObject = {
  id: string;
  settings: {
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "object";
};

export type ObjectOverImageBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ObjectOverImageBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type ObjectOverImageBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type ObjectOverImageBlocks =
  | ObjectOverImageBlocksObj_placement
  | ObjectOverImageBlocksObject
  | ObjectOverImageBlocksText
  | ObjectOverImageBlocksAccent_line
  | ObjectOverImageBlocksButtons;

export type PasswordFooterSection = {
  blocks: PasswordFooterBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    address_show: boolean;
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    country_selector_show: boolean;
    /** Input type: checkbox */
    email_show: boolean;
    /** Input type: checkbox */
    language_selector_show: boolean;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: range */
    logo_height: number;
    /** Input type: checkbox */
    newsletter_checkbox_show: boolean;
    /** Input type: checkbox */
    newsletter_show: boolean;
    /** Input type: checkbox */
    payment_types_show: boolean;
    /** Input type: checkbox */
    policy_links_show: boolean;
    /** Input type: radio */
    social_content_layout: "left" | "right";
    /** Input type: checkbox */
    social_icons_show: boolean;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: text */
    newsletter_checkbox_label?: string;
    /** Input type: text */
    newsletter_checkbox_value?: string;
    /** Input type: richtext */
    newsletter_footer_content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    newsletter_heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: liquid */
    newsletter_liquid_replace?: string;
    /** Input type: richtext */
    newsletter_subheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    powered_by_text?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    typography_footer_link_font_family?: string;
    /** Input type: text */
    typography_footer_link_size_weight_height?: string;
    /** Input type: text */
    typography_footer_link_spacing_transform_style?: string;
    /** Input type: text */
    typography_footer_title_font_family?: string;
    /** Input type: text */
    typography_footer_title_size_weight_height?: string;
    /** Input type: text */
    typography_footer_title_spacing_transform_style?: string;
  };
  type: "password-footer";
};

export type PasswordFooterBlocksMenu = {
  id: string;
  settings: {
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-2 lg:col-span-3";
    /** Input type: richtext */
    heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
  };
  type: "menu";
};

export type PasswordFooterBlocksText = {
  id: string;
  settings: {
    /** Input type: radio */
    color_grayscale_style: "normal" | "inverted";
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-3";
    /** Input type: richtext */
    heading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtext?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type PasswordFooterBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    columns: "col-span-1" | "col-span-2" | "col-span-3";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type PasswordFooterBlocks =
  | PasswordFooterBlocksMenu
  | PasswordFooterBlocksText
  | PasswordFooterBlocksImage;

export type PasswordHeaderSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    center_logo: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    height: number;
    /** Input type: select */
    logo:
      | "branding_logo_dark_on_light"
      | "branding_logo_light_on_dark"
      | "branding_logo_secondary_dark_on_light"
      | "branding_logo_secondary_light_on_dark"
      | "branding_logo_none";
    /** Input type: range */
    logo_height: number;
    /** Input type: link_list */
    menu?: _Linklist_liquid;
  };
  type: "password-header";
};

export type PredictiveSearchSection = {
  global: boolean;
  id: string;
  type: "predictive-search";
};

export type ProductSection = {
  blocks: ProductBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    breadcrumbs__show: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    gallery__aspect_ratio: "auto" | "9 / 16" | "2 / 3" | "3 / 4" | "1" | "4 / 3" | "16 / 9";
    /** Input type: checkbox */
    gallery__first_image_full: boolean;
    /** Input type: radio */
    gallery__layout: "horizontal" | "standard" | "vertical" | "grid";
    /** Input type: checkbox */
    gallery__loop_videos: boolean;
    /** Input type: radio */
    gallery__show_thumbnails: "responsive" | "md:hidden" | "max-md:hidden" | "hidden";
    /** Input type: radio */
    gallery__size: "small" | "medium" | "large" | "xl";
    /** Input type: checkbox */
    gallery__use_variant_thumbnail_images: boolean;
    /** Input type: checkbox */
    gallery__zoom: boolean;
    /** Input type: range */
    gallery__zoom_scale: number;
    /** Input type: range */
    grid_gap: number;
    /** Input type: checkbox */
    hide_not_selected_variant_images: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: checkbox */
    sticky: boolean;
    /** Input type: radio */
    variants_multi_images: "disabled" | "via_metafield" | "via_image_order";
    /** Input type: text */
    sectionID?: string;
    /** Input type: text */
    variants_image_metafield?: string;
  };
  type: "product";
};

export type ProductBlocksApp = {
  id: string;
  type: "@app";
};

export type ProductBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    text_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ProductBlocksTitle = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type ProductBlocksVendor = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "vendor";
};

export type ProductBlocksPrice = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "price";
};

export type ProductBlocksVariant_selector = {
  id: string;
  settings: {
    /** Input type: checkbox */
    color_selector: boolean;
    /** Input type: radio */
    color_selector__source:
      | "via_option"
      | "via_option_then_image"
      | "via_image"
      | "via_metafield"
      | "via_image_then_metafield"
      | "via_metafield_then_image";
    /** Input type: range */
    color_selector_radius: number;
    /** Input type: range */
    color_selector_size: number;
    /** Input type: radio */
    default_type: "radio" | "select";
    /** Input type: checkbox */
    disable_unavailable: boolean;
    /** Input type: checkbox */
    image_selector: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: textarea */
    color_list?: string;
    /** Input type: text */
    custom_css?: string;
  };
  type: "variant_selector";
};

export type ProductBlocksVariant_upsell = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: text */
    option_name?: string;
    /** Input type: text */
    value_label?: string;
    /** Input type: text */
    value_name?: string;
  };
  type: "variant_upsell";
};

export type ProductBlocksSku = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "sku";
};

export type ProductBlocksQuantity_selector = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "quantity_selector";
};

export type ProductBlocksBuy_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "buy_buttons";
};

export type ProductBlocksDynamic_buy_buttons = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "dynamic_buy_buttons";
};

export type ProductBlocksPayment_terms = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "payment_terms";
};

export type ProductBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    style:
      | "plain"
      | "accordion"
      | "accordion_style_h1"
      | "tabs_style_h1"
      | "accordion_custom_tags"
      | "tabs_custom_tags";
    /** Input type: checkbox */
    uncollapse: boolean;
    /** Input type: text */
    custom_css?: string;
    /** Input type: textarea */
    custom_tag_overrides?: string;
  };
  type: "description";
};

export type ProductBlocksShare = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "share";
};

export type ProductBlocksCustom_liquid = {
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom_liquid";
};

export type ProductBlocksCollapsible_tab = {
  id: string;
  settings: {
    /** Input type: select */
    icon:
      | "none"
      | "apple"
      | "banana"
      | "bottle"
      | "box"
      | "carrot"
      | "chat_bubble"
      | "check_mark"
      | "clipboard"
      | "dairy"
      | "dairy_free"
      | "dryer"
      | "eye"
      | "fire"
      | "gluten_free"
      | "heart"
      | "iron"
      | "leaf"
      | "leather"
      | "lightning_bolt"
      | "lipstick"
      | "lock"
      | "map_pin"
      | "nut_free"
      | "pants"
      | "paw_print"
      | "pepper"
      | "perfume"
      | "plane"
      | "plant"
      | "price_tag"
      | "question_mark"
      | "recycle"
      | "return"
      | "ruler"
      | "serving_dish"
      | "shirt"
      | "shoe"
      | "silhouette"
      | "snowflake"
      | "star"
      | "stopwatch"
      | "truck"
      | "washing";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    heading?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "collapsible_tab";
};

export type ProductBlocksRating = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "rating";
};

export type ProductBlocksComplementary = {
  id: string;
  settings: {
    /** Input type: checkbox */
    hide_upsell_products: boolean;
    /** Input type: checkbox */
    image__show_secondary: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    source: "complementary" | "related";
    /** Input type: radio */
    style: "small" | "large";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "complementary";
};

export type ProductBlocksIcon_with_text = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: select */
    icon_1:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_2:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_3:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_4:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    item_layout: "flex-row" | "flex-col";
    /** Input type: select */
    layout: "flex-row" | "flex-col";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    size: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    heading_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: image_picker */
    image_4?: _Image_liquid | string;
  };
  type: "icon_with_text";
};

export type ProductBlocksInventory = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    threshold: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "inventory";
};

export type ProductBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    grid_row_span:
      | "row-span-1"
      | "row-span-2"
      | "row-span-3"
      | "row-span-4"
      | "row-span-5"
      | "row-span-6";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: checkbox */
    image__drop_shadow: boolean;
    /** Input type: select */
    image__ratio: "pb-[125%]" | "pb-[100%]";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: color_background */
    image__background?: string;
  };
  type: "image";
};

export type ProductBlocksPre_order = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    preorder_date: "estimate" | "precise" | "none";
    /** Input type: text */
    custom_css?: string;
  };
  type: "pre_order";
};

export type ProductBlocksProduct_sibling = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    selector: "image" | "color" | "radio" | "select";
    /** Input type: text */
    custom_css?: string;
  };
  type: "product_sibling";
};

export type ProductBlocksPopup = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: radio */
    label__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline"
      | "plain-link text-left";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
    /** Input type: richtext */
    popup_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    title?: string;
  };
  type: "popup";
};

export type ProductBlocks =
  | ProductBlocksApp
  | ProductBlocksText
  | ProductBlocksTitle
  | ProductBlocksVendor
  | ProductBlocksPrice
  | ProductBlocksVariant_selector
  | ProductBlocksVariant_upsell
  | ProductBlocksSku
  | ProductBlocksQuantity_selector
  | ProductBlocksBuy_buttons
  | ProductBlocksDynamic_buy_buttons
  | ProductBlocksPayment_terms
  | ProductBlocksDescription
  | ProductBlocksShare
  | ProductBlocksCustom_liquid
  | ProductBlocksCollapsible_tab
  | ProductBlocksRating
  | ProductBlocksComplementary
  | ProductBlocksIcon_with_text
  | ProductBlocksInventory
  | ProductBlocksImage
  | ProductBlocksPre_order
  | ProductBlocksProduct_sibling
  | ProductBlocksPopup;

export type ProductAddToCartBarSection = {
  blocks: ProductAddToCartBarBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
    /** Input type: product */
    upsell_product?: _Product_liquid | string;
  };
  type: "add-to-cart-bar";
};

export type ProductAddToCartBarBlocksLink = {
  id: string;
  settings: {
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "link";
};

export type ProductAddToCartBarBlocks = ProductAddToCartBarBlocksLink;

export type ProductDataSection = {
  global: boolean;
  id: string;
  type: "product-data";
};

export type ProductDrawerSection = {
  blocks: ProductDrawerBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    active: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    grid_gap: number;
  };
  type: "product-drawer";
};

export type ProductDrawerBlocksImage = {
  id: string;
  settings: {
    /** Input type: select */
    grid_row_span:
      | "row-span-1"
      | "row-span-2"
      | "row-span-3"
      | "row-span-4"
      | "row-span-5"
      | "row-span-6";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: checkbox */
    image__drop_shadow: boolean;
    /** Input type: select */
    image__ratio: "pb-[125%]" | "pb-[100%]";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: color_background */
    image__background?: string;
  };
  type: "image";
};

export type ProductDrawerBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    text_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ProductDrawerBlocksTitle = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type ProductDrawerBlocksVendor = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "vendor";
};

export type ProductDrawerBlocksPrice = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "price";
};

export type ProductDrawerBlocksPre_order = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    preorder_date: "estimate" | "precise" | "none";
    /** Input type: text */
    custom_css?: string;
  };
  type: "pre_order";
};

export type ProductDrawerBlocksVariant_selector = {
  id: string;
  settings: {
    /** Input type: checkbox */
    color_selector: boolean;
    /** Input type: radio */
    color_selector__source:
      | "via_option"
      | "via_option_then_image"
      | "via_image"
      | "via_metafield"
      | "via_image_then_metafield"
      | "via_metafield_then_image";
    /** Input type: range */
    color_selector_radius: number;
    /** Input type: range */
    color_selector_size: number;
    /** Input type: radio */
    default_type: "radio" | "select";
    /** Input type: checkbox */
    disable_unavailable: boolean;
    /** Input type: checkbox */
    image_selector: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: textarea */
    color_list?: string;
    /** Input type: text */
    custom_css?: string;
  };
  type: "variant_selector";
};

export type ProductDrawerBlocksSku = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "sku";
};

export type ProductDrawerBlocksQuantity_selector = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "quantity_selector";
};

export type ProductDrawerBlocksBuy_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "buy_buttons";
};

export type ProductDrawerBlocksDynamic_buy_buttons = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "dynamic_buy_buttons";
};

export type ProductDrawerBlocksPayment_terms = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "payment_terms";
};

export type ProductDrawerBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    style:
      | "plain"
      | "accordion"
      | "accordion_style_h1"
      | "tabs_style_h1"
      | "accordion_custom_tags"
      | "tabs_custom_tags";
    /** Input type: checkbox */
    uncollapse: boolean;
    /** Input type: text */
    custom_css?: string;
    /** Input type: textarea */
    custom_tag_overrides?: string;
  };
  type: "description";
};

export type ProductDrawerBlocksShare = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "share";
};

export type ProductDrawerBlocksCustom_liquid = {
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom_liquid";
};

export type ProductDrawerBlocksCollapsible_tab = {
  id: string;
  settings: {
    /** Input type: select */
    icon:
      | "none"
      | "apple"
      | "banana"
      | "bottle"
      | "box"
      | "carrot"
      | "chat_bubble"
      | "check_mark"
      | "clipboard"
      | "dairy"
      | "dairy_free"
      | "dryer"
      | "eye"
      | "fire"
      | "gluten_free"
      | "heart"
      | "iron"
      | "leaf"
      | "leather"
      | "lightning_bolt"
      | "lipstick"
      | "lock"
      | "map_pin"
      | "nut_free"
      | "pants"
      | "paw_print"
      | "pepper"
      | "perfume"
      | "plane"
      | "plant"
      | "price_tag"
      | "question_mark"
      | "recycle"
      | "return"
      | "ruler"
      | "serving_dish"
      | "shirt"
      | "shoe"
      | "silhouette"
      | "snowflake"
      | "star"
      | "stopwatch"
      | "truck"
      | "washing";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    heading?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "collapsible_tab";
};

export type ProductDrawerBlocksRating = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "rating";
};

export type ProductDrawerBlocksComplementary = {
  id: string;
  settings: {
    /** Input type: checkbox */
    hide_upsell_products: boolean;
    /** Input type: checkbox */
    image__show_secondary: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    source: "complementary" | "related";
    /** Input type: radio */
    style: "small" | "large";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "complementary";
};

export type ProductDrawerBlocksIcon_with_text = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: select */
    icon_1:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_2:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_3:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_4:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    item_layout: "flex-row" | "flex-col";
    /** Input type: select */
    layout: "flex-row" | "flex-col";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    size: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    heading_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: image_picker */
    image_4?: _Image_liquid | string;
  };
  type: "icon_with_text";
};

export type ProductDrawerBlocksInventory = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    threshold: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "inventory";
};

export type ProductDrawerBlocks =
  | ProductDrawerBlocksImage
  | ProductDrawerBlocksText
  | ProductDrawerBlocksTitle
  | ProductDrawerBlocksVendor
  | ProductDrawerBlocksPrice
  | ProductDrawerBlocksPre_order
  | ProductDrawerBlocksVariant_selector
  | ProductDrawerBlocksSku
  | ProductDrawerBlocksQuantity_selector
  | ProductDrawerBlocksBuy_buttons
  | ProductDrawerBlocksDynamic_buy_buttons
  | ProductDrawerBlocksPayment_terms
  | ProductDrawerBlocksDescription
  | ProductDrawerBlocksShare
  | ProductDrawerBlocksCustom_liquid
  | ProductDrawerBlocksCollapsible_tab
  | ProductDrawerBlocksRating
  | ProductDrawerBlocksComplementary
  | ProductDrawerBlocksIcon_with_text
  | ProductDrawerBlocksInventory;

export type ProductQuickViewSection = {
  blocks: ProductQuickViewBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    active: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    grid_gap: number;
    /** Input type: product */
    preview_product?: _Product_liquid | string;
  };
  type: "product-quick-view";
};

export type ProductQuickViewBlocksImage_gallery = {
  id: string;
  settings: {
    /** Input type: checkbox */
    gallery__loop_videos: boolean;
    /** Input type: checkbox */
    gallery__zoom: boolean;
    /** Input type: range */
    gallery__zoom_scale: number;
    /** Input type: checkbox */
    hide_not_selected_variant_images: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    variants_multi_images: "disabled" | "via_metafield" | "via_image_order";
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    variants_image_metafield?: string;
  };
  type: "image_gallery";
};

export type ProductQuickViewBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    text_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ProductQuickViewBlocksTitle = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type ProductQuickViewBlocksVendor = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "vendor";
};

export type ProductQuickViewBlocksPrice = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "price";
};

export type ProductQuickViewBlocksPre_order = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    preorder_date: "estimate" | "precise" | "none";
    /** Input type: text */
    custom_css?: string;
  };
  type: "pre_order";
};

export type ProductQuickViewBlocksVariant_selector = {
  id: string;
  settings: {
    /** Input type: checkbox */
    color_selector: boolean;
    /** Input type: radio */
    color_selector__source:
      | "via_option"
      | "via_option_then_image"
      | "via_image"
      | "via_metafield"
      | "via_image_then_metafield"
      | "via_metafield_then_image";
    /** Input type: range */
    color_selector_radius: number;
    /** Input type: range */
    color_selector_size: number;
    /** Input type: radio */
    default_type: "radio" | "select";
    /** Input type: checkbox */
    disable_unavailable: boolean;
    /** Input type: checkbox */
    image_selector: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: textarea */
    color_list?: string;
    /** Input type: text */
    custom_css?: string;
  };
  type: "variant_selector";
};

export type ProductQuickViewBlocksSku = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "sku";
};

export type ProductQuickViewBlocksQuantity_selector = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "quantity_selector";
};

export type ProductQuickViewBlocksBuy_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "buy_buttons";
};

export type ProductQuickViewBlocksDynamic_buy_buttons = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "dynamic_buy_buttons";
};

export type ProductQuickViewBlocksPayment_terms = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "payment_terms";
};

export type ProductQuickViewBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    style:
      | "plain"
      | "accordion"
      | "accordion_style_h1"
      | "tabs_style_h1"
      | "accordion_custom_tags"
      | "tabs_custom_tags";
    /** Input type: checkbox */
    uncollapse: boolean;
    /** Input type: text */
    custom_css?: string;
    /** Input type: textarea */
    custom_tag_overrides?: string;
  };
  type: "description";
};

export type ProductQuickViewBlocksShare = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "share";
};

export type ProductQuickViewBlocksCustom_liquid = {
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom_liquid";
};

export type ProductQuickViewBlocksCollapsible_tab = {
  id: string;
  settings: {
    /** Input type: select */
    icon:
      | "none"
      | "apple"
      | "banana"
      | "bottle"
      | "box"
      | "carrot"
      | "chat_bubble"
      | "check_mark"
      | "clipboard"
      | "dairy"
      | "dairy_free"
      | "dryer"
      | "eye"
      | "fire"
      | "gluten_free"
      | "heart"
      | "iron"
      | "leaf"
      | "leather"
      | "lightning_bolt"
      | "lipstick"
      | "lock"
      | "map_pin"
      | "nut_free"
      | "pants"
      | "paw_print"
      | "pepper"
      | "perfume"
      | "plane"
      | "plant"
      | "price_tag"
      | "question_mark"
      | "recycle"
      | "return"
      | "ruler"
      | "serving_dish"
      | "shirt"
      | "shoe"
      | "silhouette"
      | "snowflake"
      | "star"
      | "stopwatch"
      | "truck"
      | "washing";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    heading?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "collapsible_tab";
};

export type ProductQuickViewBlocksRating = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "rating";
};

export type ProductQuickViewBlocksComplementary = {
  id: string;
  settings: {
    /** Input type: checkbox */
    hide_upsell_products: boolean;
    /** Input type: checkbox */
    image__show_secondary: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    source: "complementary" | "related";
    /** Input type: radio */
    style: "small" | "large";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "complementary";
};

export type ProductQuickViewBlocksIcon_with_text = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: select */
    icon_1:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_2:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_3:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_4:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    item_layout: "flex-row" | "flex-col";
    /** Input type: select */
    layout: "flex-row" | "flex-col";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    size: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    heading_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: image_picker */
    image_4?: _Image_liquid | string;
  };
  type: "icon_with_text";
};

export type ProductQuickViewBlocksInventory = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    threshold: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "inventory";
};

export type ProductQuickViewBlocks =
  | ProductQuickViewBlocksImage_gallery
  | ProductQuickViewBlocksText
  | ProductQuickViewBlocksTitle
  | ProductQuickViewBlocksVendor
  | ProductQuickViewBlocksPrice
  | ProductQuickViewBlocksPre_order
  | ProductQuickViewBlocksVariant_selector
  | ProductQuickViewBlocksSku
  | ProductQuickViewBlocksQuantity_selector
  | ProductQuickViewBlocksBuy_buttons
  | ProductQuickViewBlocksDynamic_buy_buttons
  | ProductQuickViewBlocksPayment_terms
  | ProductQuickViewBlocksDescription
  | ProductQuickViewBlocksShare
  | ProductQuickViewBlocksCustom_liquid
  | ProductQuickViewBlocksCollapsible_tab
  | ProductQuickViewBlocksRating
  | ProductQuickViewBlocksComplementary
  | ProductQuickViewBlocksIcon_with_text
  | ProductQuickViewBlocksInventory;

export type ProductQuickViewKoaSection = {
  blocks: ProductQuickViewKoaBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    active: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: product */
    preview_product?: _Product_liquid | string;
  };
  type: "product-quick-view-koa";
};

export type ProductQuickViewKoaBlocksImage_gallery = {
  id: string;
  settings: {
    /** Input type: checkbox */
    gallery__loop_videos: boolean;
    /** Input type: checkbox */
    gallery__zoom: boolean;
    /** Input type: range */
    gallery__zoom_scale: number;
    /** Input type: checkbox */
    hide_not_selected_variant_images: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    variants_multi_images: "disabled" | "via_metafield" | "via_image_order";
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    variants_image_metafield?: string;
  };
  type: "image_gallery";
};

export type ProductQuickViewKoaBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    text_align: "text-left" | "text-center" | "text-right";
    /** Input type: range */
    text_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ProductQuickViewKoaBlocksTitle = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "title";
};

export type ProductQuickViewKoaBlocksVendor = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "vendor";
};

export type ProductQuickViewKoaBlocksPrice = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "price";
};

export type ProductQuickViewKoaBlocksPre_order = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    preorder_date: "estimate" | "precise" | "none";
    /** Input type: text */
    custom_css?: string;
  };
  type: "pre_order";
};

export type ProductQuickViewKoaBlocksVariant_selector = {
  id: string;
  settings: {
    /** Input type: checkbox */
    color_selector: boolean;
    /** Input type: radio */
    color_selector__source:
      | "via_option"
      | "via_option_then_image"
      | "via_image"
      | "via_metafield"
      | "via_image_then_metafield"
      | "via_metafield_then_image";
    /** Input type: range */
    color_selector_radius: number;
    /** Input type: range */
    color_selector_size: number;
    /** Input type: radio */
    default_type: "radio" | "select";
    /** Input type: checkbox */
    disable_unavailable: boolean;
    /** Input type: checkbox */
    image_selector: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: textarea */
    color_list?: string;
    /** Input type: text */
    custom_css?: string;
  };
  type: "variant_selector";
};

export type ProductQuickViewKoaBlocksSku = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "sku";
};

export type ProductQuickViewKoaBlocksQuantity_selector = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "quantity_selector";
};

export type ProductQuickViewKoaBlocksBuy_buttons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "buy_buttons";
};

export type ProductQuickViewKoaBlocksDynamic_buy_buttons = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "dynamic_buy_buttons";
};

export type ProductQuickViewKoaBlocksPayment_terms = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "payment_terms";
};

export type ProductQuickViewKoaBlocksDescription = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    style:
      | "plain"
      | "accordion"
      | "accordion_style_h1"
      | "tabs_style_h1"
      | "accordion_custom_tags"
      | "tabs_custom_tags";
    /** Input type: checkbox */
    uncollapse: boolean;
    /** Input type: text */
    custom_css?: string;
    /** Input type: textarea */
    custom_tag_overrides?: string;
  };
  type: "description";
};

export type ProductQuickViewKoaBlocksShare = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "share";
};

export type ProductQuickViewKoaBlocksCustom_liquid = {
  id: string;
  settings: {
    /** Input type: liquid */
    custom_liquid?: string;
  };
  type: "custom_liquid";
};

export type ProductQuickViewKoaBlocksCollapsible_tab = {
  id: string;
  settings: {
    /** Input type: select */
    icon:
      | "none"
      | "apple"
      | "banana"
      | "bottle"
      | "box"
      | "carrot"
      | "chat_bubble"
      | "check_mark"
      | "clipboard"
      | "dairy"
      | "dairy_free"
      | "dryer"
      | "eye"
      | "fire"
      | "gluten_free"
      | "heart"
      | "iron"
      | "leaf"
      | "leather"
      | "lightning_bolt"
      | "lipstick"
      | "lock"
      | "map_pin"
      | "nut_free"
      | "pants"
      | "paw_print"
      | "pepper"
      | "perfume"
      | "plane"
      | "plant"
      | "price_tag"
      | "question_mark"
      | "recycle"
      | "return"
      | "ruler"
      | "serving_dish"
      | "shirt"
      | "shoe"
      | "silhouette"
      | "snowflake"
      | "star"
      | "stopwatch"
      | "truck"
      | "washing";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    custom_css?: string;
    /** Input type: text */
    heading?: string;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "collapsible_tab";
};

export type ProductQuickViewKoaBlocksRating = {
  id: string;
  settings: {
    /** Input type: select */
    grid_span:
      | "col-span-3"
      | "col-span-4"
      | "col-span-6"
      | "col-span-8"
      | "col-span-9"
      | "col-span-12"
      | "flex_group";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "rating";
};

export type ProductQuickViewKoaBlocksComplementary = {
  id: string;
  settings: {
    /** Input type: checkbox */
    hide_upsell_products: boolean;
    /** Input type: checkbox */
    image__show_secondary: boolean;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    source: "complementary" | "related";
    /** Input type: radio */
    style: "small" | "large";
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "complementary";
};

export type ProductQuickViewKoaBlocksIcon_with_text = {
  id: string;
  settings: {
    /** Input type: range */
    content_font: number;
    /** Input type: select */
    icon_1:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_2:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_3:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    icon_4:
      | "none"
      | "activity"
      | "alert-circle"
      | "announcement"
      | "arrow-narrow-left"
      | "arrow-narrow-right"
      | "at-sign"
      | "bookmark-add"
      | "bookmark-check"
      | "building-large"
      | "building"
      | "calendar"
      | "check-circle-broken"
      | "check-circle"
      | "check-heart"
      | "check-square-broken"
      | "check-square"
      | "check"
      | "chevron-down"
      | "chevron-left"
      | "chevron-right"
      | "chevron-selector-vertical"
      | "chevron-up"
      | "clock"
      | "cloud-blank"
      | "credit-card"
      | "currency-dollar-circle"
      | "face-happy"
      | "face-neutral"
      | "face-sad"
      | "face-smile"
      | "globe"
      | "heart-hand"
      | "heart"
      | "help-circle"
      | "home"
      | "image"
      | "info-circle"
      | "lock"
      | "marker-pin"
      | "menu"
      | "minus-circle"
      | "minus-square"
      | "minus"
      | "percent-circle"
      | "percent"
      | "pin"
      | "plane"
      | "plus-circle"
      | "plus-square"
      | "plus"
      | "puzzle-piece"
      | "rocket"
      | "search"
      | "share"
      | "shopping-bag"
      | "shopping-cart"
      | "star"
      | "tag"
      | "thumbs-up"
      | "tool"
      | "truck"
      | "user"
      | "x-circle"
      | "x-close"
      | "zap";
    /** Input type: select */
    item_layout: "flex-row" | "flex-col";
    /** Input type: select */
    layout: "flex-row" | "flex-col";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    size: number;
    /** Input type: text */
    custom_css?: string;
    /** Input type: richtext */
    heading_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    heading_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image_1?: _Image_liquid | string;
    /** Input type: image_picker */
    image_2?: _Image_liquid | string;
    /** Input type: image_picker */
    image_3?: _Image_liquid | string;
    /** Input type: image_picker */
    image_4?: _Image_liquid | string;
  };
  type: "icon_with_text";
};

export type ProductQuickViewKoaBlocksInventory = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    threshold: number;
    /** Input type: text */
    custom_css?: string;
  };
  type: "inventory";
};

export type ProductQuickViewKoaBlocks =
  | ProductQuickViewKoaBlocksImage_gallery
  | ProductQuickViewKoaBlocksText
  | ProductQuickViewKoaBlocksTitle
  | ProductQuickViewKoaBlocksVendor
  | ProductQuickViewKoaBlocksPrice
  | ProductQuickViewKoaBlocksPre_order
  | ProductQuickViewKoaBlocksVariant_selector
  | ProductQuickViewKoaBlocksSku
  | ProductQuickViewKoaBlocksQuantity_selector
  | ProductQuickViewKoaBlocksBuy_buttons
  | ProductQuickViewKoaBlocksDynamic_buy_buttons
  | ProductQuickViewKoaBlocksPayment_terms
  | ProductQuickViewKoaBlocksDescription
  | ProductQuickViewKoaBlocksShare
  | ProductQuickViewKoaBlocksCustom_liquid
  | ProductQuickViewKoaBlocksCollapsible_tab
  | ProductQuickViewKoaBlocksRating
  | ProductQuickViewKoaBlocksComplementary
  | ProductQuickViewKoaBlocksIcon_with_text
  | ProductQuickViewKoaBlocksInventory;

export type ProductRecommendationsSection = {
  global: boolean;
  id: string;
  type: "product-recommendations";
};

export type ProductSiblingsSection = {
  blocks: ProductSiblingsBlocks[];
  global: boolean;
  id: string;
  type: "product-sibling-groups";
};

export type ProductSiblingsBlocksSiblings = {
  id: string;
  settings: {
    /** Input type: radio */
    title_type: "list" | "metafield";
    /** Input type: textarea */
    options?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: text */
    title?: string;
  };
  type: "siblings";
};

export type ProductSiblingsBlocks = ProductSiblingsBlocksSiblings;

export type ProductsScrollableSection = {
  blocks: ProductsScrollableBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: checkbox */
    hide_if_empty: boolean;
    /** Input type: checkbox */
    hide_out_of_stock: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    product_limit: number;
    /** Input type: select */
    product_source: "blocks" | "recently_viewed_products" | "related" | "complementary";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
  };
  type: "products-scrollable";
};

export type ProductsScrollableBlocksHeading = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "heading";
};

export type ProductsScrollableBlocksView_all_bar = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    title_font: number;
    /** Input type: range */
    view_all_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
    /** Input type: richtext */
    view_all_text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "view_all_bar";
};

export type ProductsScrollableBlocksSource_products = {
  id: string;
  settings: {
    /** Input type: product_list */
    source?: _Product_liquid[];
  };
  type: "source_products";
};

export type ProductsScrollableBlocksSource_collection = {
  id: string;
  settings: {
    /** Input type: collection */
    source?: _Collection_liquid | string;
  };
  type: "source_collection";
};

export type ProductsScrollableBlocksSource_metafield = {
  id: string;
  settings: {
    /** Input type: radio */
    metafield: "smart.related_products" | "shopify_complementary" | "shopify_related";
  };
  type: "source_metafield";
};

export type ProductsScrollableBlocks =
  | ProductsScrollableBlocksHeading
  | ProductsScrollableBlocksView_all_bar
  | ProductsScrollableBlocksSource_products
  | ProductsScrollableBlocksSource_collection
  | ProductsScrollableBlocksSource_metafield;

export type ProductsScrollableKoaSection = {
  blocks: ProductsScrollableKoaBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    center_products: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: checkbox */
    hide_if_empty: boolean;
    /** Input type: checkbox */
    hide_out_of_stock: boolean;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    product_limit: number;
    /** Input type: select */
    product_source: "blocks" | "recently_viewed_products" | "related" | "complementary";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: text */
    sectionID?: string;
  };
  type: "products-scrollable-koa";
};

export type ProductsScrollableKoaBlocksHeading = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "heading";
};

export type ProductsScrollableKoaBlocksView_all_bar = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    title_font: number;
    /** Input type: range */
    view_all_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
    /** Input type: richtext */
    view_all_text?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "view_all_bar";
};

export type ProductsScrollableKoaBlocksSource_products = {
  id: string;
  settings: {
    /** Input type: product_list */
    source?: _Product_liquid[];
  };
  type: "source_products";
};

export type ProductsScrollableKoaBlocksSource_collection = {
  id: string;
  settings: {
    /** Input type: collection */
    source?: _Collection_liquid | string;
  };
  type: "source_collection";
};

export type ProductsScrollableKoaBlocksSource_metafield = {
  id: string;
  settings: {
    /** Input type: radio */
    metafield: "smart.related_products" | "shopify_complementary" | "shopify_related";
  };
  type: "source_metafield";
};

export type ProductsScrollableKoaBlocks =
  | ProductsScrollableKoaBlocksHeading
  | ProductsScrollableKoaBlocksView_all_bar
  | ProductsScrollableKoaBlocksSource_products
  | ProductsScrollableKoaBlocksSource_collection
  | ProductsScrollableKoaBlocksSource_metafield;

export type RichtextSection = {
  blocks: RichtextBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm";
    /** Input type: text */
    sectionID?: string;
  };
  type: "richtext";
};

export type RichtextBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type RichtextBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type RichtextBlocksLabels = {
  id: string;
  settings: {
    /** Input type: radio */
    label__style:
      | "bg-primary-bg text-primary-text"
      | "bg-primary-text text-primary-bg"
      | "bg-secondary-bg text-secondary-text";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: textarea */
    labels?: string;
  };
  type: "labels";
};

export type RichtextBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type RichtextBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type RichtextBlocksFeatures = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: range */
    content_font_1: number;
    /** Input type: range */
    content_font_2: number;
    /** Input type: range */
    content_font_3: number;
    /** Input type: range */
    content_font_4: number;
    /** Input type: range */
    icon_size: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    spacing: number;
    /** Input type: richtext */
    content_1?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_2?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_3?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    content_4?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    icon_1?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_2?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_3?: _Image_liquid | string;
    /** Input type: image_picker */
    icon_4?: _Image_liquid | string;
  };
  type: "features";
};

export type RichtextBlocksPage = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: page */
    page?: _Page_liquid | string;
  };
  type: "page";
};

export type RichtextBlocks =
  | RichtextBlocksText
  | RichtextBlocksImage
  | RichtextBlocksLabels
  | RichtextBlocksAccent_line
  | RichtextBlocksButtons
  | RichtextBlocksFeatures
  | RichtextBlocksPage;

export type ScrollableImagesSection = {
  blocks: ScrollableImagesBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: range */
    caption_font: number;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: checkbox */
    container_overflow: boolean;
    /** Input type: range */
    min_width_desktop: number;
    /** Input type: range */
    min_width_mobile: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: richtext */
    caption?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: collection_list */
    collections?: _Collection_liquid[];
    /** Input type: color_background */
    overlay?: string;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: text */
    sectionID?: string;
  };
  type: "scrollable-images";
};

export type ScrollableImagesBlocksScrollbar_position = {
  id: string;
  settings: {
    /** Input type: range */
    margin_bottom: number;
  };
  type: "scrollbar_position";
};

export type ScrollableImagesBlocksScrollable_image = {
  id: string;
  settings: {
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "scrollable_image";
};

export type ScrollableImagesBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type ScrollableImagesBlocksButtons = {
  id: string;
  settings: {
    /** Input type: radio */
    button__desktop_layout: "flex" | "flex md:!flex-col md:w-full";
    /** Input type: radio */
    button__mobile_layout: "flex" | "flex max-md:flex-col max-md:w-full";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
  };
  type: "buttons";
};

export type ScrollableImagesBlocksAccent_line = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    width: number;
    /** Input type: color */
    color?: _Color_liquid | string;
  };
  type: "accent_line";
};

export type ScrollableImagesBlocks =
  | ScrollableImagesBlocksScrollbar_position
  | ScrollableImagesBlocksScrollable_image
  | ScrollableImagesBlocksText
  | ScrollableImagesBlocksButtons
  | ScrollableImagesBlocksAccent_line;

export type SearchSection = {
  blocks: SearchBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    search_articles: boolean;
    /** Input type: checkbox */
    search_pages: boolean;
    /** Input type: checkbox */
    search_products: boolean;
    /** Input type: range */
    search_results_empty_font: number;
    /** Input type: range */
    search_results_title_font: number;
    /** Input type: text */
    placeholder?: string;
    /** Input type: richtext */
    search_results_empty?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    search_results_title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "search";
};

export type SearchBlocksTrending_products = {
  id: string;
  settings: {
    /** Input type: range */
    title_font: number;
    /** Input type: product_list */
    products?: _Product_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "trending_products";
};

export type SearchBlocksTrending_collections = {
  id: string;
  settings: {
    /** Input type: range */
    title_font: number;
    /** Input type: collection_list */
    collections?: _Collection_liquid[];
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
  };
  type: "trending_collections";
};

export type SearchBlocks = SearchBlocksTrending_products | SearchBlocksTrending_collections;

export type SearchGridWithFiltersSection = {
  blocks: SearchGridWithFiltersBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    columns__desktop:
      | "lg:grid-cols-3 group-ac:lg:grid-cols-2"
      | "lg:grid-cols-4 group-ac:lg:grid-cols-3"
      | "lg:grid-cols-5 group-ac:lg:grid-cols-4";
    /** Input type: select */
    columns__mobile: "grid-cols-1" | "grid-cols-2";
    /** Input type: checkbox */
    filters__auto_apply: boolean;
    /** Input type: checkbox */
    filters__count: boolean;
    /** Input type: checkbox */
    filters__show: boolean;
    /** Input type: range */
    headings_font: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: range */
    pagination_size: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: checkbox */
    sort__show: boolean;
    /** Input type: richtext */
    headings?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    sectionID?: string;
  };
  type: "search-grid-with-filters";
};

export type SearchGridWithFiltersBlocksFilter_style = {
  id: string;
  settings: {
    /** Input type: radio */
    style: "checkboxes" | "tags" | "color";
    /** Input type: text */
    title?: string;
  };
  type: "filter_style";
};

export type SearchGridWithFiltersBlocks = SearchGridWithFiltersBlocksFilter_style;

export type SlideshowSection = {
  blocks: SlideshowBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    auto_rotate: boolean;
    /** Input type: checkbox */
    fullscreen: boolean;
    /** Input type: range */
    min_height: number;
    /** Input type: range */
    min_height_mobile: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    slide_speed: number;
    /** Input type: text */
    sectionID?: string;
  };
  type: "slideshow";
};

export type SlideshowBlocksSlide = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    content_gap: number;
    /** Input type: range */
    content_image__height: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: checkbox */
    slide: boolean;
    /** Input type: range */
    slide_speed: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    content_image?: _Image_liquid | string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "slide";
};

export type SlideshowBlocksVideoSlide = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: checkbox */
    autoplay: boolean;
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    content_font: number;
    /** Input type: range */
    content_gap: number;
    /** Input type: range */
    height: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: checkbox */
    slide: boolean;
    /** Input type: range */
    slide_speed: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: video */
    videoundefined;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: richtext */
    preheading?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    preview_image?: _Image_liquid | string;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: url */
    url?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "video-slide";
};

export type SlideshowBlocks = SlideshowBlocksSlide | SlideshowBlocksVideoSlide;

export type SlideshowKoaSection = {
  blocks: SlideshowKoaBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: checkbox */
    auto_rotate: boolean;
    /** Input type: checkbox */
    fullscreen: boolean;
    /** Input type: range */
    height: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    slide_speed: number;
  };
  type: "slideshow-koa";
};

export type SlideshowKoaBlocksSlideKoa = {
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: radio */
    button_primary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: radio */
    button_secondary__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    end_day: number;
    /** Input type: range */
    end_hours: number;
    /** Input type: range */
    end_minute: number;
    /** Input type: range */
    end_month: number;
    /** Input type: range */
    end_year: number;
    /** Input type: range */
    preheading_font: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: checkbox */
    scheduledBanner: boolean;
    /** Input type: checkbox */
    slide: boolean;
    /** Input type: range */
    slide_speed: number;
    /** Input type: range */
    start_day: number;
    /** Input type: range */
    start_hours: number;
    /** Input type: range */
    start_minute: number;
    /** Input type: range */
    start_month: number;
    /** Input type: range */
    start_year: number;
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    button_primary__text?: string;
    /** Input type: url */
    button_primary__url?: string;
    /** Input type: text */
    button_secondary__text?: string;
    /** Input type: url */
    button_secondary__url?: string;
    /** Input type: richtext */
    content?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    preheading?: string;
    /** Input type: textarea */
    subtitle?: string;
    /** Input type: text */
    title?: string;
  };
  type: "slide-koa";
};

export type SlideshowKoaBlocks = SlideshowKoaBlocksSlideKoa;

export type StoreLocatorSection = {
  global: boolean;
  id: string;
  settings: {
    /** Input type: select */
    background_image_position:
      | "top left"
      | "top center"
      | "top right"
      | "center left"
      | "center center"
      | "center right"
      | "bottom left"
      | "bottom center"
      | "bottom right";
    /** Input type: checkbox */
    show_button: boolean;
    /** Input type: richtext */
    address?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: text */
    api_key?: string;
    /** Input type: image_picker */
    background_image?: _Image_liquid | string;
    /** Input type: text */
    map_address?: string;
    /** Input type: text */
    section_title?: string;
  };
  type: "store-locator";
};

export type TaggedProductImagesSection = {
  blocks: TaggedProductImagesBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: select */
    product_grid_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    subtitle_font: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    subtitle?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "tagged-product-images";
};

export type TaggedProductImagesBlocksProduct = {
  id: string;
  settings: {
    /** Input type: radio */
    action__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline"
      | "plain-link text-center";
    /** Input type: range */
    action_font: number;
    /** Input type: range */
    description_font: number;
    /** Input type: richtext */
    action?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    description?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: product */
    product?: _Product_liquid | string;
    /** Input type: text */
    tag?: string;
  };
  type: "product";
};

export type TaggedProductImagesBlocks = TaggedProductImagesBlocksProduct;

export type TemplateSectionSection = {
  global: boolean;
  id: string;
  type: "template-section";
};

export type TestimonialsSection = {
  blocks: TestimonialsBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: range */
    author_font: number;
    /** Input type: checkbox */
    auto_rotate: boolean;
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    min_height: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: range */
    review_font: number;
    /** Input type: range */
    slide_speed: number;
    /** Input type: range */
    title_font: number;
    /** Input type: text */
    sectionID?: string;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "testimonials";
};

export type TestimonialsBlocksReview = {
  id: string;
  settings: {
    /** Input type: range */
    rating: number;
    /** Input type: checkbox */
    slide: boolean;
    /** Input type: range */
    slide_speed: number;
    /** Input type: richtext */
    author?: `<${_BlockTag}${string}</${_BlockTag}>`;
    /** Input type: richtext */
    review?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "review";
};

export type TestimonialsBlocks = TestimonialsBlocksReview;

export type VideoBannerSection = {
  blocks: VideoBannerBlocks[];
  global: boolean;
  id: string;
  settings: {
    /** Input type: radio */
    align__horizontal:
      | "items-start text-left"
      | "items-center text-center"
      | "items-end text-right";
    /** Input type: radio */
    align__vertical: "justify-start" | "justify-center" | "justify-end";
    /** Input type: checkbox */
    autoplay: boolean;
    /** Input type: radio */
    button__style:
      | "button-primary"
      | "button-primary--outline"
      | "button-secondary"
      | "button-secondary--outline";
    /** Input type: select */
    color_scheme:
      | "bg-theme-bg text-theme-text color-inherit"
      | "bg-theme-bg text-theme-text color-group-1"
      | "bg-theme-bg text-theme-text color-group-2"
      | "bg-theme-bg text-theme-text color-group-3"
      | "bg-theme-bg text-theme-text color-group-4"
      | "bg-theme-bg text-theme-text color-group-5";
    /** Input type: range */
    height: number;
    /** Input type: select */
    padding_bottom: "pb-0" | "pb-sm" | "pb-md" | "pb-lg";
    /** Input type: select */
    padding_top: "pt-0" | "pt-sm" | "pt-md" | "pt-lg";
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: radio */
    section_layout: "container-bg-full" | "fullwidth";
    /** Input type: video */
    videoundefined;
    /** Input type: text */
    button__text?: string;
    /** Input type: image_picker */
    image?: _Image_liquid | string;
    /** Input type: color_background */
    image__overlay?: string;
    /** Input type: text */
    sectionID?: string;
    /** Input type: url */
    url?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "video-banner";
};

export type VideoBannerBlocksPreview_video = {
  id: string;
  settings: {
    /** Input type: video */
    videoundefined;
    /** Input type: url */
    url?: string;
    /** Input type: video_url */
    video_url?: `${string}youtube${string}` | `${string}vimeo${string}`;
  };
  type: "preview_video";
};

export type VideoBannerBlocksText = {
  id: string;
  settings: {
    /** Input type: select */
    alignment_desktop: "[text-align:inherit]" | "text-left" | "text-center" | "text-right";
    /** Input type: select */
    alignment_mobile:
      | "max-md:[text-align:inherit]"
      | "max-md:text-left"
      | "max-md:text-center"
      | "max-md:text-right";
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: range */
    opacity: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: select */
    section_max_width:
      | "max-w-full"
      | "max-w-[var(--layout-page-width)]"
      | "max-w-6xl"
      | "max-w-5xl"
      | "max-w-4xl"
      | "max-w-3xl"
      | "max-w-2xl"
      | "max-w-xl"
      | "max-w-lg"
      | "max-w-md"
      | "max-w-sm"
      | "max-w-xs";
    /** Input type: range */
    title_font: number;
    /** Input type: richtext */
    title?: `<${_BlockTag}${string}</${_BlockTag}>`;
  };
  type: "text";
};

export type VideoBannerBlocksImage = {
  id: string;
  settings: {
    /** Input type: range */
    height: number;
    /** Input type: range */
    margin_bottom: number;
    /** Input type: range */
    margin_top: number;
    /** Input type: radio */
    responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
    /** Input type: image_picker */
    image?: _Image_liquid | string;
  };
  type: "image";
};

export type VideoBannerBlocks =
  | VideoBannerBlocksPreview_video
  | VideoBannerBlocksText
  | VideoBannerBlocksImage;

export type Sections =
  | AppsSection
  | BenefitTabsSection
  | BundleSection
  | BundleKoaSection
  | CartDrawerSection
  | CategoriesSection
  | CollectionGridWithFiltersSection
  | CollectionNavSection
  | CustomLiquidSection
  | DrawerMenuSection
  | FaqSection
  | FeaturedArticlesSection
  | FeaturedCollectionGridSection
  | FeaturedObjectsSection
  | FeaturedProductSection
  | FeaturedReviewsSection
  | FeaturesSection
  | FeaturesSliderSection
  | FooterSection
  | FormsSection
  | GiftWithPurchaseSection
  | HeaderSection
  | HeaderKoaSection
  | HighlightsSection
  | ImageBannerSection
  | ImageFeedSection
  | ImageWithTextSection
  | ImageWithTextKoaSection
  | MainAccountSection
  | MainAddressesSection
  | MainArticleSection
  | MainBlogSection
  | MainCartSection
  | MainCollectionBannerSection
  | MainCollectionFilterSortBarSection
  | MainCollectionProductGridSection
  | MainCollectionsListSection
  | MainOrderSection
  | MainPageSection
  | MainSearchFiltersSection
  | MainSearchGridSection
  | MainSearchInputSection
  | Main404Section
  | MarqueeBarSection
  | MegamenuSection
  | NewsletterSection
  | ObjectOverImageSection
  | PasswordFooterSection
  | PasswordHeaderSection
  | PredictiveSearchSection
  | ProductSection
  | ProductAddToCartBarSection
  | ProductDataSection
  | ProductDrawerSection
  | ProductQuickViewSection
  | ProductQuickViewKoaSection
  | ProductRecommendationsSection
  | ProductSiblingsSection
  | ProductsScrollableSection
  | ProductsScrollableKoaSection
  | RichtextSection
  | ScrollableImagesSection
  | SearchSection
  | SearchGridWithFiltersSection
  | SlideshowSection
  | SlideshowKoaSection
  | StoreLocatorSection
  | TaggedProductImagesSection
  | TemplateSectionSection
  | TestimonialsSection
  | VideoBannerSection;

export type SettingsSchema = {
  /** Input type: range */
  article_card__description__margin_bottom: number;
  /** Input type: range */
  article_card__link__margin_bottom: number;
  /** Input type: range */
  article_card__specs__margin_bottom: number;
  /** Input type: range */
  article_card__title__margin_bottom: number;
  /** Input type: checkbox */
  beta_features__show: boolean;
  /** Input type: range */
  button_border_radius: number;
  /** Input type: range */
  button_border_width: number;
  /** Input type: range */
  button_horizontal_padding: number;
  /** Input type: range */
  button_hover_border_radius: number;
  /** Input type: range */
  button_hover_scale: number;
  /** Input type: range */
  button_hover_shadow: number;
  /** Input type: range */
  button_shadow: number;
  /** Input type: select */
  button_text_transform: "none" | "uppercase" | "lowercase" | "capitalize";
  /** Input type: range */
  button_vertical_padding: number;
  /** Input type: select */
  cart_color_scheme:
    | "bg-theme-bg text-theme-text color-inherit"
    | "bg-theme-bg text-theme-text color-group-1"
    | "bg-theme-bg text-theme-text color-group-2"
    | "bg-theme-bg text-theme-text color-group-3"
    | "bg-theme-bg text-theme-text color-group-4"
    | "bg-theme-bg text-theme-text color-group-5";
  /** Input type: checkbox */
  cart_gift_checkbox: boolean;
  /** Input type: checkbox */
  cart_note: boolean;
  /** Input type: select */
  cart_type: "drawer" | "page";
  /** Input type: checkbox */
  collection__filter_variant_select: boolean;
  /** Input type: select */
  color_grayscale: "slate" | "gray" | "zinc" | "neutral" | "stone";
  /** Input type: radio */
  color_grayscale_style: "normal" | "inverted";
  /** Input type: select */
  color_scheme:
    | "bg-theme-bg text-theme-text color-group-1"
    | "bg-theme-bg text-theme-text color-group-2"
    | "bg-theme-bg text-theme-text color-group-3"
    | "bg-theme-bg text-theme-text color-group-4"
    | "bg-theme-bg text-theme-text color-group-5";
  /** Input type: radio */
  design_border_radius: "soft" | "medium" | "bold";
  /** Input type: radio */
  design_pagination_style: "compact" | "floating";
  /** Input type: checkbox */
  design_tooltips_show: boolean;
  /** Input type: font_picker */
  font_button: _Font_liquid | _Font_options;
  /** Input type: range */
  font_button_letter_spacing: number;
  /** Input type: range */
  font_button_mobile_size: number;
  /** Input type: range */
  font_button_size: number;
  /** Input type: range */
  font_button_weight: number;
  /** Input type: font_picker */
  font_family_1: _Font_liquid | _Font_options;
  /** Input type: font_picker */
  font_family_2: _Font_liquid | _Font_options;
  /** Input type: font_picker */
  font_family_3: _Font_liquid | _Font_options;
  /** Input type: font_picker */
  font_family_4: _Font_liquid | _Font_options;
  /** Input type: font_picker */
  font_family_5: _Font_liquid | _Font_options;
  /** Input type: range */
  industry_discount: number;
  /** Input type: checkbox */
  layout_is_fullwidth: boolean;
  /** Input type: range */
  layout_page_width: number;
  /** Input type: range */
  layout_section_padding_lg: number;
  /** Input type: range */
  layout_section_padding_lg__mobile: number;
  /** Input type: range */
  layout_section_padding_md: number;
  /** Input type: range */
  layout_section_padding_md__mobile: number;
  /** Input type: range */
  layout_section_padding_sm: number;
  /** Input type: range */
  layout_section_padding_sm__mobile: number;
  /** Input type: range */
  pro_discount: number;
  /** Input type: radio */
  product_card__button__style:
    | "button-primary"
    | "button-primary--outline"
    | "button-secondary"
    | "button-secondary--outline";
  /** Input type: checkbox */
  product_card__button_color_variant_add_to_cart: boolean;
  /** Input type: checkbox */
  product_card__button_single_variant_add_to_cart: boolean;
  /** Input type: radio */
  product_card__color_selector:
    | "via_option"
    | "via_option_then_image"
    | "via_image"
    | "via_metafield"
    | "via_image_then_metafield"
    | "via_metafield_then_image";
  /** Input type: range */
  product_card__color_selector_radius: number;
  /** Input type: range */
  product_card__color_selector_size: number;
  /** Input type: checkbox */
  product_card__description__show: boolean;
  /** Input type: radio */
  product_card__image__default_source: "featured_image" | "variant_image";
  /** Input type: checkbox */
  product_card__image__drop_shadow: boolean;
  /** Input type: range */
  product_card__image__margin_bottom: number;
  /** Input type: select */
  product_card__image__ratio: "pb-[75%]" | "pb-[100%]" | "pb-[125%]" | "pb-[133%]" | "pb-[177%]";
  /** Input type: radio */
  product_card__image__secondary_source: "product" | "variant" | "metafield";
  /** Input type: checkbox */
  product_card__image__show_secondary: boolean;
  /** Input type: radio */
  product_card__labels__discount: "sale" | "percentage" | "value";
  /** Input type: radio */
  product_card__labels__responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  /** Input type: checkbox */
  product_card__labels__show: boolean;
  /** Input type: range */
  product_card__price__margin_bottom: number;
  /** Input type: radio */
  product_card__price__responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  /** Input type: checkbox */
  product_card__price__show: boolean;
  /** Input type: range */
  product_card__rating__margin_bottom: number;
  /** Input type: radio */
  product_card__rating__responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  /** Input type: checkbox */
  product_card__rating__show: boolean;
  /** Input type: range */
  product_card__title__margin_bottom: number;
  /** Input type: range */
  product_card__title__type: number;
  /** Input type: radio */
  product_card__variant_count__responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  /** Input type: checkbox */
  product_card__variant_count__show: boolean;
  /** Input type: checkbox */
  product_card__variant_count__show_hover: boolean;
  /** Input type: checkbox */
  product_card__variant_selector__show: boolean;
  /** Input type: range */
  product_card__vendor__margin_bottom: number;
  /** Input type: radio */
  product_card__vendor__responsive_visibility: "responsive" | "md:hidden" | "max-md:hidden";
  /** Input type: checkbox */
  product_card__vendor__show: boolean;
  /** Input type: checkbox */
  product_data__hide_oos_variants: boolean;
  /** Input type: checkbox */
  product_data__preorder_cta: boolean;
  /** Input type: checkbox */
  product_data__show_0_reviews: boolean;
  /** Input type: checkbox */
  product_data__show_review_count: boolean;
  /** Input type: radio */
  product_data__type: "shopify" | "rating" | "reviews_rating";
  /** Input type: range */
  production_discount: number;
  /** Input type: checkbox */
  small_product_card__variant_selector__show: boolean;
  /** Input type: select */
  typography_1_h1_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_h2_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_h3_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_h4_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_h5_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_h6_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_1_p_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h1_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h2_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h3_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h4_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h5_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_h6_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_2_p_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h1_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h2_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h3_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h4_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h5_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_h6_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: select */
  typography_3_p_tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote" | "div";
  /** Input type: image_picker */
  branding_favicon?: _Image_liquid | string;
  /** Input type: image_picker */
  branding_logo_dark_on_light?: _Image_liquid | string;
  /** Input type: image_picker */
  branding_logo_light_on_dark?: _Image_liquid | string;
  /** Input type: image_picker */
  branding_logo_secondary_dark_on_light?: _Image_liquid | string;
  /** Input type: image_picker */
  branding_logo_secondary_light_on_dark?: _Image_liquid | string;
  /** Input type: text */
  collection__filter_variant_color_metafield?: string;
  /** Input type: color */
  color_1_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_1_bg_gradient?: string;
  /** Input type: color */
  color_1_overlay_text?: _Color_liquid | string;
  /** Input type: color */
  color_1_primary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_1_primary_bg_gradient?: string;
  /** Input type: color */
  color_1_primary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_1_primary_text?: _Color_liquid | string;
  /** Input type: color */
  color_1_secondary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_1_secondary_bg_gradient?: string;
  /** Input type: color */
  color_1_secondary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_1_secondary_text?: _Color_liquid | string;
  /** Input type: color */
  color_1_text?: _Color_liquid | string;
  /** Input type: text */
  color_1_title?: string;
  /** Input type: color */
  color_2_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_2_bg_gradient?: string;
  /** Input type: color */
  color_2_overlay_text?: _Color_liquid | string;
  /** Input type: color */
  color_2_primary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_2_primary_bg_gradient?: string;
  /** Input type: color */
  color_2_primary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_2_primary_text?: _Color_liquid | string;
  /** Input type: color */
  color_2_secondary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_2_secondary_bg_gradient?: string;
  /** Input type: color */
  color_2_secondary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_2_secondary_text?: _Color_liquid | string;
  /** Input type: color */
  color_2_text?: _Color_liquid | string;
  /** Input type: text */
  color_2_title?: string;
  /** Input type: color */
  color_3_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_3_bg_gradient?: string;
  /** Input type: color */
  color_3_overlay_text?: _Color_liquid | string;
  /** Input type: color */
  color_3_primary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_3_primary_bg_gradient?: string;
  /** Input type: color */
  color_3_primary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_3_primary_text?: _Color_liquid | string;
  /** Input type: color */
  color_3_secondary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_3_secondary_bg_gradient?: string;
  /** Input type: color */
  color_3_secondary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_3_secondary_text?: _Color_liquid | string;
  /** Input type: color */
  color_3_text?: _Color_liquid | string;
  /** Input type: text */
  color_3_title?: string;
  /** Input type: color */
  color_4_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_4_bg_gradient?: string;
  /** Input type: color */
  color_4_overlay_text?: _Color_liquid | string;
  /** Input type: color */
  color_4_primary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_4_primary_bg_gradient?: string;
  /** Input type: color */
  color_4_primary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_4_primary_text?: _Color_liquid | string;
  /** Input type: color */
  color_4_secondary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_4_secondary_bg_gradient?: string;
  /** Input type: color */
  color_4_secondary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_4_secondary_text?: _Color_liquid | string;
  /** Input type: color */
  color_4_text?: _Color_liquid | string;
  /** Input type: text */
  color_4_title?: string;
  /** Input type: color */
  color_5_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_5_bg_gradient?: string;
  /** Input type: color */
  color_5_overlay_text?: _Color_liquid | string;
  /** Input type: color */
  color_5_primary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_5_primary_bg_gradient?: string;
  /** Input type: color */
  color_5_primary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_5_primary_text?: _Color_liquid | string;
  /** Input type: color */
  color_5_secondary_bg?: _Color_liquid | string;
  /** Input type: color_background */
  color_5_secondary_bg_gradient?: string;
  /** Input type: color */
  color_5_secondary_outline?: _Color_liquid | string;
  /** Input type: color */
  color_5_secondary_text?: _Color_liquid | string;
  /** Input type: color */
  color_5_text?: _Color_liquid | string;
  /** Input type: text */
  color_5_title?: string;
  /** Input type: color */
  color_error?: _Color_liquid | string;
  /** Input type: color */
  color_info?: _Color_liquid | string;
  /** Input type: color */
  color_review_stars?: _Color_liquid | string;
  /** Input type: color */
  color_success?: _Color_liquid | string;
  /** Input type: color */
  color_warning?: _Color_liquid | string;
  /** Input type: liquid */
  custom_hide_condition?: string;
  /** Input type: text */
  font_button_custom?: string;
  /** Input type: text */
  font_custom_family_1?: string;
  /** Input type: text */
  font_custom_family_2?: string;
  /** Input type: text */
  font_custom_family_3?: string;
  /** Input type: text */
  font_custom_family_4?: string;
  /** Input type: text */
  font_custom_family_5?: string;
  /** Input type: html */
  font_custom_src_1?: string;
  /** Input type: html */
  font_custom_src_2?: string;
  /** Input type: html */
  font_custom_src_3?: string;
  /** Input type: html */
  font_custom_src_4?: string;
  /** Input type: html */
  font_custom_src_5?: string;
  /** Input type: text */
  font_weights_1?: string;
  /** Input type: text */
  font_weights_2?: string;
  /** Input type: text */
  font_weights_3?: string;
  /** Input type: text */
  font_weights_4?: string;
  /** Input type: text */
  font_weights_5?: string;
  /** Input type: color */
  product_card__background_color?: _Color_liquid | string;
  /** Input type: color_background */
  product_card__image__background?: string;
  /** Input type: text */
  product_card__image__secondary_source_metafield?: string;
  /** Input type: textarea */
  product_card__variant_selector__color_list?: string;
  /** Input type: text */
  product_data__metafield_rating?: string;
  /** Input type: text */
  product_data__metafield_rating_average?: string;
  /** Input type: text */
  product_data__metafield_reviews_count?: string;
  /** Input type: textarea */
  product_data__metafields_namespaces?: string;
  /** Input type: text */
  product_data__variants_color_swatches?: string;
  /** Input type: text */
  social_facebook_link?: string;
  /** Input type: text */
  social_instagram_link?: string;
  /** Input type: text */
  social_pinterest_link?: string;
  /** Input type: text */
  social_snapchat_link?: string;
  /** Input type: text */
  social_tiktok_link?: string;
  /** Input type: text */
  social_tumblr_link?: string;
  /** Input type: text */
  social_twitter_link?: string;
  /** Input type: text */
  social_vimeo_link?: string;
  /** Input type: text */
  social_youtube_link?: string;
  /** Input type: text */
  typography_1_h1_font_family?: string;
  /** Input type: text */
  typography_1_h1_size_weight_height?: string;
  /** Input type: text */
  typography_1_h1_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_h2_font_family?: string;
  /** Input type: text */
  typography_1_h2_size_weight_height?: string;
  /** Input type: text */
  typography_1_h2_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_h3_font_family?: string;
  /** Input type: text */
  typography_1_h3_size_weight_height?: string;
  /** Input type: text */
  typography_1_h3_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_h4_font_family?: string;
  /** Input type: text */
  typography_1_h4_size_weight_height?: string;
  /** Input type: text */
  typography_1_h4_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_h5_font_family?: string;
  /** Input type: text */
  typography_1_h5_size_weight_height?: string;
  /** Input type: text */
  typography_1_h5_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_h6_font_family?: string;
  /** Input type: text */
  typography_1_h6_size_weight_height?: string;
  /** Input type: text */
  typography_1_h6_spacing_transform_style?: string;
  /** Input type: text */
  typography_1_p_font_family?: string;
  /** Input type: text */
  typography_1_p_size_weight_height?: string;
  /** Input type: text */
  typography_1_p_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h1_font_family?: string;
  /** Input type: text */
  typography_2_h1_size_weight_height?: string;
  /** Input type: text */
  typography_2_h1_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h2_font_family?: string;
  /** Input type: text */
  typography_2_h2_size_weight_height?: string;
  /** Input type: text */
  typography_2_h2_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h3_font_family?: string;
  /** Input type: text */
  typography_2_h3_size_weight_height?: string;
  /** Input type: text */
  typography_2_h3_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h4_font_family?: string;
  /** Input type: text */
  typography_2_h4_size_weight_height?: string;
  /** Input type: text */
  typography_2_h4_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h5_font_family?: string;
  /** Input type: text */
  typography_2_h5_size_weight_height?: string;
  /** Input type: text */
  typography_2_h5_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_h6_font_family?: string;
  /** Input type: text */
  typography_2_h6_size_weight_height?: string;
  /** Input type: text */
  typography_2_h6_spacing_transform_style?: string;
  /** Input type: text */
  typography_2_p_font_family?: string;
  /** Input type: text */
  typography_2_p_size_weight_height?: string;
  /** Input type: text */
  typography_2_p_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h1_font_family?: string;
  /** Input type: text */
  typography_3_h1_size_weight_height?: string;
  /** Input type: text */
  typography_3_h1_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h2_font_family?: string;
  /** Input type: text */
  typography_3_h2_size_weight_height?: string;
  /** Input type: text */
  typography_3_h2_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h3_font_family?: string;
  /** Input type: text */
  typography_3_h3_size_weight_height?: string;
  /** Input type: text */
  typography_3_h3_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h4_font_family?: string;
  /** Input type: text */
  typography_3_h4_size_weight_height?: string;
  /** Input type: text */
  typography_3_h4_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h5_font_family?: string;
  /** Input type: text */
  typography_3_h5_size_weight_height?: string;
  /** Input type: text */
  typography_3_h5_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_h6_font_family?: string;
  /** Input type: text */
  typography_3_h6_size_weight_height?: string;
  /** Input type: text */
  typography_3_h6_spacing_transform_style?: string;
  /** Input type: text */
  typography_3_p_font_family?: string;
  /** Input type: text */
  typography_3_p_size_weight_height?: string;
  /** Input type: text */
  typography_3_p_spacing_transform_style?: string;
  /** Input type: text */
  typography_article_card_description_font_family?: string;
  /** Input type: text */
  typography_article_card_description_size_weight_height?: string;
  /** Input type: text */
  typography_article_card_description_spacing_transform_style?: string;
  /** Input type: text */
  typography_article_card_link_font_family?: string;
  /** Input type: text */
  typography_article_card_link_size_weight_height?: string;
  /** Input type: text */
  typography_article_card_link_spacing_transform_style?: string;
  /** Input type: text */
  typography_article_card_specs_font_family?: string;
  /** Input type: text */
  typography_article_card_specs_size_weight_height?: string;
  /** Input type: text */
  typography_article_card_specs_spacing_transform_style?: string;
  /** Input type: text */
  typography_article_card_title_font_family?: string;
  /** Input type: text */
  typography_article_card_title_size_weight_height?: string;
  /** Input type: text */
  typography_article_card_title_spacing_transform_style?: string;
  /** Input type: text */
  typography_breadcrumbs_font_family?: string;
  /** Input type: text */
  typography_breadcrumbs_size_weight_height?: string;
  /** Input type: text */
  typography_breadcrumbs_spacing_transform_style?: string;
  /** Input type: text */
  typography_cart_title_font_family?: string;
  /** Input type: text */
  typography_cart_title_size_weight_height?: string;
  /** Input type: text */
  typography_cart_title_spacing_transform_style?: string;
  /** Input type: text */
  typography_input_element_font_family?: string;
  /** Input type: text */
  typography_input_element_size_weight_height?: string;
  /** Input type: text */
  typography_input_element_spacing_transform_style?: string;
  /** Input type: text */
  typography_labels_font_family?: string;
  /** Input type: text */
  typography_labels_size_weight_height?: string;
  /** Input type: text */
  typography_labels_spacing_transform_style?: string;
  /** Input type: text */
  typography_megamenu_image_caption_font_family?: string;
  /** Input type: text */
  typography_megamenu_image_caption_size_weight_height?: string;
  /** Input type: text */
  typography_megamenu_image_caption_spacing_transform_style?: string;
  /** Input type: text */
  typography_megamenu_link_font_family?: string;
  /** Input type: text */
  typography_megamenu_link_large_font_family?: string;
  /** Input type: text */
  typography_megamenu_link_large_size_weight_height?: string;
  /** Input type: text */
  typography_megamenu_link_large_spacing_transform_style?: string;
  /** Input type: text */
  typography_megamenu_link_size_weight_height?: string;
  /** Input type: text */
  typography_megamenu_link_spacing_transform_style?: string;
  /** Input type: text */
  typography_megamenu_title_font_family?: string;
  /** Input type: text */
  typography_megamenu_title_size_weight_height?: string;
  /** Input type: text */
  typography_megamenu_title_spacing_transform_style?: string;
  /** Input type: text */
  typography_nav_link_font_family?: string;
  /** Input type: text */
  typography_nav_link_size_weight_height?: string;
  /** Input type: text */
  typography_nav_link_spacing_transform_style?: string;
  /** Input type: text */
  typography_product_card__title__font_font_family?: string;
  /** Input type: text */
  typography_product_card__title__font_size_weight_height?: string;
  /** Input type: text */
  typography_product_card__title__font_spacing_transform_style?: string;
  /** Input type: text */
  typography_product_price_font_family?: string;
  /** Input type: text */
  typography_product_price_size_weight_height?: string;
  /** Input type: text */
  typography_product_price_spacing_transform_style?: string;
  /** Input type: text */
  typography_small_product_card__title__font_font_family?: string;
  /** Input type: text */
  typography_small_product_card__title__font_size_weight_height?: string;
  /** Input type: text */
  typography_small_product_card__title__font_spacing_transform_style?: string;
};

export type ShopifyHeader = {
  content: string;
  type: "header";
  info?: string;
};
export type ShopifyParagraph = {
  content: string;
  type: "paragraph";
  info?: string;
};

export type ShopifyColorThemeGroupDefinition =
  | ShopifyColor
  | ShopifyColor_background
  | ShopifyHeader
  | ShopifyParagraph;

export type ShopifyColorThemeGroupRoles =
  | "background"
  | "text"
  | "primary_button"
  | "secondary_button"
  | "primary_button_border"
  | "secondary_button_border"
  | "on_primary_button"
  | "on_secondary_button"
  | "links"
  | "icons";

export type ShopifyColorThemeRole = Extract<
  ShopifyColorThemeGroup["definition"][number],
  { id: string }
>["id"];

export type ShopifyColorThemeOptionalGradientRole<T extends string> = T extends ReservedNames
  ? {
      solid: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
      gradient?: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
    }
  : ShopifyColorThemeRole;

type ReservedNames = "background" | "primary_button" | "secondary_button";

export type ShopifyColorThemeGroup = {
  type: "color_scheme_group";
  id: string;
  definition: ShopifyColorThemeGroupDefinition[];
  role: {
    background: {
      solid: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
      gradient?: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
    };
    primary_button: {
      solid: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
      gradient?: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
    };
    secondary_button: {
      solid: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
      gradient?: Extract<ShopifyColorThemeGroup["definition"][number], { id: string }>["id"];
    };
    text: ShopifyColorThemeRole;
    primary_button_border: ShopifyColorThemeRole;
    secondary_button_border: ShopifyColorThemeRole;
    on_primary_button: ShopifyColorThemeRole;
    on_secondary_button: ShopifyColorThemeRole;
    links: ShopifyColorThemeRole;
    icons: ShopifyColorThemeRole;
  };
};

export type ShopifyColorTheme = {
  type: "color_scheme";
  id: string;
  label: string;
  default?: string;
  info?: string;
};

export type ShopifyCheckbox = {
  id: string;
  label: string;
  type: "checkbox";
  default?: boolean;
  info?: string;
};
export type ShopifyNumber = {
  id: string;
  label: string;
  type: "number";
  default?: number;
  info?: string;
  placeholder?: string;
};
export type ShopifyRadio = {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  type: "radio";
  default?: string;
  info?: string;
};
export type ShopifyRange = {
  default: number;
  id: string;
  label: string;
  max: number;
  min: number;
  step: number;
  type: "range";
  info?: string;
  unit?: string;
};
export type ShopifySelect = {
  id: string;
  label: string;
  options: { label: string; value: string; group?: string }[];
  type: "select";
  default?: string;
  info?: string;
};
export type ShopifyText = {
  id: string;
  label: string;
  type: "text";
  default?: string;
  info?: string;
  placeholder?: string;
};
export type ShopifyTextarea = {
  id: string;
  label: string;
  type: "textarea";
  default?: string;
  info?: string;
  placeholder?: string;
};
export type ShopifyArticle = {
  id: string;
  label: string;
  type: "article";
  info?: string;
};
export type ShopifyBlog = {
  id: string;
  label: string;
  type: "blog";
  info?: string;
};
export type ShopifyCollection = {
  id: string;
  label: string;
  type: "collection";
  info?: string;
};
export type ShopifyCollection_list = {
  id: string;
  label: string;
  type: "collection_list";
  info?: string;
  limit?: number;
};
export type ShopifyColor = {
  id: string;
  label: string;
  type: "color";
  default?: string;
  info?: string;
};
export type ShopifyColor_background = {
  id: string;
  label: string;
  type: "color_background";
  default?: string;
  info?: string;
};
export type ShopifyFont_picker = {
  default: string;
  id: string;
  label: string;
  type: "font_picker";
  info?: string;
};
export type ShopifyFont = {
  id: string;
  label: string;
  type: "font";
  default?: string;
  info?: string;
};
export type ShopifyHtml = {
  id: string;
  label: string;
  type: "html";
  default?: string;
  info?: string;
  placeholder?: string;
};
export type ShopifyImage_picker = {
  id: string;
  label: string;
  type: "image_picker";
  info?: string;
};
export type ShopifyLink_list = {
  id: string;
  label: string;
  type: "link_list";
  default?: "main-menu" | "footer" | string;
  info?: string;
};
export type ShopifyLiquid = {
  id: string;
  label: string;
  type: "liquid";
  info?: string;
};
export type ShopifyPage = {
  id: string;
  label: string;
  type: "page";
  info?: string;
};
export type ShopifyProduct = {
  id: string;
  label: string;
  type: "product";
  info?: string;
};
export type ShopifyProduct_list = {
  id: string;
  label: string;
  type: "product_list";
  info?: string;
  limit?: number;
};
export type ShopifyRichtext = {
  id: string;
  label: string;
  type: "richtext";
  default?: `<${_BlockTag}${string}</${_BlockTag}>`;
  info?: string;
};
export type ShopifyInlineRichtext = {
  id: string;
  label: string;
  type: "inline_richtext";
  default?: string;
  info?: string;
};
export type ShopifyUrl = {
  id: string;
  label: string;
  type: "url";
  default?: string;
  info?: string;
};
export type ShopifyVideo_url = {
  accept: ("youtube" | "vimeo")[];
  id: string;
  label: string;
  type: "video_url";
  default?: string;
  info?: string;
  placeholder?: string;
};

export type ShopifyVideo = {
  id: string;
  label: string;
  type: "video";
  default?: string;
  info?: string;
  placeholder?: string;
};

export type ShopifySettingsInput =
  | ShopifyCheckbox
  | ShopifyNumber
  | ShopifyRadio
  | ShopifyRange
  | ShopifySelect
  | ShopifyText
  | ShopifyTextarea
  | ShopifyArticle
  | ShopifyBlog
  | ShopifyCollection
  | ShopifyCollection_list
  | ShopifyColor
  | ShopifyColor_background
  | ShopifyFont_picker
  | ShopifyFont
  | ShopifyHtml
  | ShopifyImage_picker
  | ShopifyLink_list
  | ShopifyLiquid
  | ShopifyPage
  | ShopifyProduct
  | ShopifyProduct_list
  | ShopifyRichtext
  | ShopifyInlineRichtext
  | ShopifyUrl
  | ShopifyVideo
  | ShopifyVideo_url
  | ShopifyColorTheme;

type ExtractSettings<T extends ShopifySection | ShopifySectionBlock> = Extract<
  /* @ts-ignore*/
  T["settings"][number],
  { id: string; type: string }
>;

type ExtractSetting<T extends ShopifySection | ShopifySectionBlock, ID extends string> = Extract<
  ExtractSettings<T>,
  { id: ID }
>;

type MapSettings<Section extends ShopifySection | ShopifySectionBlock> = {
  [ID in ExtractSettings<Section>["id"]]: ExtractSetting<Section, ID>["type"] extends "article"
    ? _Article_liquid
    : ExtractSetting<Section, ID>["type"] extends "checkbox"
    ? boolean
    : ExtractSetting<Section, ID>["type"] extends "number" | "range"
    ? number
    : ExtractSetting<Section, ID>["type"] extends "radio" | "select"
    ? // @ts-ignore
      ExtractSetting<Section, ID>["options"][number]["value"]
    : ExtractSetting<Section, ID>["type"] extends
        | "text"
        | "textarea"
        | "inline_richtext"
        | "color_background"
        | "html"
        | "liquid"
        | "url"
        | "font"
    ? string
    : ExtractSetting<Section, ID>["type"] extends "blog"
    ? _Blog_liquid
    : ExtractSetting<Section, ID>["type"] extends "collection"
    ? _Collection_liquid
    : ExtractSetting<Section, ID>["type"] extends "collection_list"
    ? _Collection_liquid[]
    : ExtractSetting<Section, ID>["type"] extends "color"
    ? _Color_liquid
    : ExtractSetting<Section, ID>["type"] extends "font_picker"
    ? _Font_liquid
    : ExtractSetting<Section, ID>["type"] extends "image_picker"
    ? _Image_liquid
    : ExtractSetting<Section, ID>["type"] extends "link_list"
    ? _Linklist_liquid
    : ExtractSetting<Section, ID>["type"] extends "page"
    ? _Page_liquid
    : ExtractSetting<Section, ID>["type"] extends "product"
    ? _Product_liquid
    : ExtractSetting<Section, ID>["type"] extends "product_list"
    ? _Product_liquid[]
    : ExtractSetting<Section, ID>["type"] extends "richtext"
    ? `<${_BlockTag}${string}</${_BlockTag}>`
    : ExtractSetting<Section, ID>["type"] extends "video_url"
    ? `${string}youtube${string}` | `${string}vimeo${string}`
    : never;
};

export type _BlockTag = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "ol" | "ul";

type MapSection<T> = {
  // @ts-ignore
  blocks: MapBlocks<T>[keyof MapBlocks<T>][];
  id: string;
  // @ts-ignore
  settings: MapSettings<T>;
  // @ts-ignore
  type: Lowercase<T["name"]>;
};

type MapBlocks<T extends { blocks: ShopifySectionBlock[] }> = {
  [B in Extract<T["blocks"][number], { type: string }>["type"]]: {
    id: string;
    settings: MapSettings<Extract<T["blocks"][number], { type: B }>>;
    type: B;
  };
};

type MapBlocksPreset<T extends { blocks: ShopifySectionBlock[] }> = {
  [B in Extract<T["blocks"][number], { type: string }>["type"]]: {
    type: B;
    settings?: Partial<MapSettings<Extract<T["blocks"][number], { type: B }>>>;
  };
};

type ShopifySectionDefault<T = never> = {
  blocks?: T extends { blocks: Array<any> }
    ? MapBlocksPreset<T>[keyof MapBlocksPreset<T>][] | undefined
    : never;
  settings?: T extends never
    ? { [T: string]: string | number | boolean } | undefined
    : T extends { settings: any }
    ? Partial<T["settings"]> | undefined
    : { [T: string]: string | number | boolean } | undefined;
};

type ShopifySectionPreset<T = unknown> = {
  name: string;
  blocks?: T extends { blocks: Array<any> }
    ? MapBlocksPreset<T>[keyof MapBlocksPreset<T>][]
    : never;
  settings?: T extends never
    ? { [T: string]: string | number | boolean } | undefined
    : T extends { settings: any }
    ? Partial<T["settings"]> | undefined
    : { [T: string]: string | number | boolean } | undefined;
};

export type ShopifySectionBlock =
  | {
      name: string;
      type: string;
      limit?: number;
      settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
    }
  | { type: "@app"; limit?: never; name?: never; settings?: never };

export type ShopifyTemplateTypes =
  | "404"
  | "article"
  | "blog"
  | "cart"
  | "collection"
  | "list-collections"
  | "customers/account"
  | "customers/activate_account"
  | "customers/addresses"
  | "customers/login"
  | "customers/order"
  | "customers/register"
  | "customers/reset_password"
  | "gift_card"
  | "index"
  | "page"
  | "password"
  | "product"
  | "search";
export type ShopifySection<T = never> = {
  name: string;
  blocks?: ShopifySectionBlock[];
  class?: string;
  default?: ShopifySectionDefault<T>;
  limit?: number;
  max_blocks?: number;
  presets?: ShopifySectionPreset<T>[];
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
  tag?: "article" | "aside" | "div" | "footer" | "header" | "section";
  locales?: {
    [T: string]: {
      [V: string]: string;
    };
  };
  disabled_block_files?: boolean;
  generate_block_files?: string[];
} & (
  | {
      enabled_on?: {
        templates?: ShopifyTemplateTypes[];
        groups?: string[];
      };
    }
  | {
      disabled_on?: {
        templates?: ShopifyTemplateTypes[];
        groups?: string[];
      };
    }
);

type ShopifyAppBlockDefault<T = never> = {
  settings?: T extends never
    ? { [T: string]: string | number | boolean } | undefined
    : T extends { settings: any }
    ? Partial<T["settings"]> | undefined
    : { [T: string]: string | number | boolean } | undefined;
};

export type ShopifyAppBlock<T = never> = {
  name: string;
  target: "section" | "head" | "body";
  class?: string;
  default?: ShopifyAppBlockDefault<T>;
  /* Max Settings: 25 - Max Content blocks: 6*/
  settings?: (ShopifySettingsInput | ShopifyHeader | ShopifyParagraph)[];
  tag?: "article" | "aside" | "div" | "footer" | "header" | "section";
  locales?: {
    [T: string]: {
      [V: string]: string;
    };
  };
  javascript?: string;
  stylesheet?: string;
  available_if?: `{{ app.metafields.${string}.${string} }}`;
} & (
  | {
      enabled_on?: {
        templates?: ShopifyTemplateTypes[];
        groups?: string[];
      };
    }
  | {
      disabled_on?: {
        templates?: ShopifyTemplateTypes[];
        groups?: string[];
      };
    }
);

export type ShopifySettings = (
  | ({
      name: "theme_info";
      theme_author: string;
      theme_documentation_url: string;
      theme_name: string;

      theme_version: string;
    } & (
      | {
          theme_support_email: string;
        }
      | {
          theme_support_url: string;
        }
    ))
  | {
      name: string;
      settings: (
        | ShopifySettingsInput
        | ShopifyHeader
        | ShopifyParagraph
        | ShopifyColorThemeGroup
      )[];
    }
)[];

export type _Page_liquid = {
  content: string;
  handle: string;
  id: number;
  metafields: _Page_metafields;
  published_at: string;
  template_suffix: string;
  title: string;
  url: string;
  author?: any;
};

export type _Blog_liquid = {
  all_tags: any[];
  articles: _Article_liquid[];
  articles_count: number;
  handle: string;
  id: number;
  metafields: _Blog_metafields;
  tags: any[];
  title: string;
  url: string;
  comments_enabled?: any;
  moderated?: any;
};

export type _Article_liquid = {
  author: string;
  comment_post_url: string;
  comments: any[];
  comments_count: number;
  content: string;
  created_at: string;
  excerpt: string;
  excerpt_or_content: string;
  featured_media: Omit<_Media_liquid, "media_type" | "position" | "preview_image">;
  handle: string;
  id: number;
  metafields: _Article_metafields;
  published_at: string;
  tags: any[];
  title: string;
  updated_at: string;
  url: string;
  user: {
    account_owner: boolean;
    email: string;
    first_name: string;
    last_name: string;
    bio?: any;
    homepage?: any;
    image?: any;
  };
  comments_enabled?: any;
  image?: any;
  moderated?: any;
};

export type _Variant_liquid_json = {
  available: boolean;
  barcode: string;
  id: number;
  inventory_policy: string;
  inventory_quantity: number;
  name: string;
  option1: string;
  options: string[];
  price: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  weight: number;
  compare_at_price?: any;
  featured_image?: any;
  inventory_management?: any;
  option2?: any;
  option3?: any;
  public_title?: any;
};

export type _Product_liquid_json = {
  available: boolean;
  compare_at_price_max: number;
  compare_at_price_min: number;
  compare_at_price_varies: boolean;
  content: string;
  created_at: string;
  description: string;
  handle: string;
  id: number;
  images: any[];
  options: string[];
  price: number;
  media: _Media_liquid[];
  price_max: number;
  price_min: number;
  price_varies: boolean;
  published_at: string;
  tags: any[];
  title: string;
  type: string;
  variants: _Variant_liquid_json[];
  vendor: string;
  compare_at_price?: any;
  featured_image?: any;
};

export type _Metafield_liquid_product_reference = {
  type: "product_reference";
  value?: Omit<_Product_liquid, "metafields">;
};

export type _Metafield_liquid_list_product_reference = {
  type: "list.product_reference";
  value?: Omit<_Product_liquid, "metafields">[];
};

export type _Metafield_liquid_collection_reference = {
  type: "collection_reference";
  value?: Omit<_Product_liquid, "metafields">;
};
export type _Metafield_liquid_list_collection_reference = {
  type: "list.collection_reference";
  value?: Omit<_Product_liquid, "metafields">[];
};

export type _Metafield_liquid_variant_reference = {
  type: "variant_reference";
  value?: _Variant_liquid_json;
};
export type _Metafield_liquid_list_variant_reference = {
  type: "list.variant_reference";
  value?: _Variant_liquid_json[];
};
export type _Metafield_liquid_page_reference = {
  type: "page_reference";
  value?: _Page_liquid_json;
};

export type _Metafield_liquid_file_reference_generic = {
  media_type: "generic_file";
  preview_image: {
    aspect_ratio: number;
    height: number;
    src: string;
    width: number;
  };
  url: string;
  alt?: string;
};

export type _Metafield_liquid_file_reference_image = {
  alt: string;
  aspect_ratio: number;
  height: number;
  id: number;
  media_type: "image";
  position: null;
  preview_image: {
    aspect_ratio: number;
    height: number;
    src: string;
    width: number;
  };
  src: string;
  width: number;
};

export type _Metafield_liquid_file_reference = {
  type: "file_reference";
  value?: _Metafield_liquid_file_reference_generic | _Metafield_liquid_file_reference_image;
};

export type _Metafield_liquid_list_file_reference = {
  type: "list.file_reference";
  value?: (_Metafield_liquid_file_reference_generic | _Metafield_liquid_file_reference_image)[];
};

export type _Metafield_liquid_file_reference_force_generic = {
  type: "file_reference";
  value?: _Metafield_liquid_file_reference_generic;
};
export type _Metafield_liquid_file_reference_force_image = {
  type: "file_reference";
  value?: _Metafield_liquid_file_reference_image;
};

export type _Metafield_liquid =
  | {
      type:
        | "color"
        | "date"
        | "date_time"
        | "single_line_text_field"
        | "multi_line_text_field"
        | "url";
      value?: string;
    }
  | {
      type:
        | "list.color"
        | "list.date"
        | "list.date_time"
        | "list.single_line_text_field"
        | "list.multi_line_text_field"
        | "list.page_reference";
      value?: string[];
    }
  | {
      type: "number_integer";
      value?: number;
    }
  | {
      type: "list.number_integer";
      value?: number[];
    }
  | {
      type: "number_decimal";
      value?: number | string;
    }
  | {
      type: "list.number_decimal";
      value?: (number | string)[];
    }
  | {
      type: "json";
      value?: unknown;
    }
  | {
      type: "volume" | "weight" | "dimension";
      value?: { type: string; unit: string; value: number };
    }
  | {
      type: "rating";
      value?: { rating: string; scale_max: string; scale_min: string };
    }
  | _Metafield_liquid_product_reference
  | _Metafield_liquid_list_product_reference
  | _Metafield_liquid_collection_reference
  | _Metafield_liquid_list_collection_reference
  | _Metafield_liquid_variant_reference
  | _Metafield_liquid_list_variant_reference
  | _Metafield_liquid_page_reference
  | _Metafield_liquid_list_file_reference
  | _Metafield_liquid_file_reference;

export type _Page_liquid_json = {
  content: string;
  handle: string;
  id: number;
  published_at: string;
  template_suffix: string;
  title: string;
  url: string;
  author?: string;
};

export type _Variant_liquid = {
  available: boolean;
  barcode: string;
  id: number;
  inventory_policy: string;
  inventory_quantity: number;
  metafields: _Variant_metafields;
  option1: string;
  options: string[];
  price: number;
  requires_shipping: boolean;
  sku: string;
  taxable: boolean;
  title: string;
  url: string;
  weight: number;
  compare_at_price?: any;
  featured_media?: _Media_liquid;
  image?: any;
  inventory_management?: any;
  option2?: any;
  option3?: any;
  store_availabilities?: {
    available: boolean;
    location: {
      address: {};
      id: number;
      latitude: number;
      longitude: number;
      metafields: { [T: string]: _Metafield_liquid };
      name: string;
    };
    pick_up_enabled: true;
    pick_up_time: string;
  }[];
};

export type _Product_liquid = {
  available: boolean;
  collections: {
    body_html: string;
    disjunctive: boolean;
    handle: string;
    id: number;
    published_at: string;
    published_scope: string;
    rules: {
      column: string;
      condition: string;
      relation: string;
    }[];
    sort_order: string;
    template_suffix: string;
    title: string;
    updated_at: string;
  }[];
  compare_at_price_max: number;
  compare_at_price_min: number;
  compare_at_price_varies: boolean;
  content: string;
  created_at: string;
  description: string;
  handle: string;
  id: number;
  images: any[];
  media: _Media_liquid[];
  metafields: _Product_metafields;
  options: string[];
  options_with_values: { name: string; position: 1 | 2 | 3; values: string[] }[];
  page_description: string;
  price: number;
  price_max: number;
  price_min: number;
  price_varies: boolean;
  published_at: string;
  tags: string[];
  template_suffix: string;
  title: string;
  type: string;
  url: string;
  variants: _Variant_liquid[];
  selected_or_first_available_variant: _Variant_liquid;
  requires_selling_plan?: boolean;
  selling_plan_groups?: _Product_selling_plan_groups_liquid[];
  vendor: string;
  compare_at_price?: number;
  featured_image?: string;
  featured_media?: _Media_liquid;
};

export type _Product_selling_plan_liquid = {
  id: number;
  name: string;
  options: {
    name: string;
    position: number;
    value: string;
  }[];
  recurring_deliveries: boolean;
  price_adjustments: {
    position: number;
    value_type: string;
    value: number;
  }[];
  checkout_charge: {
    value_type: string;
    value: number;
  };
};
export type _Product_selling_plan_groups_liquid = {
  id: string;
  name: string;
  options: {
    name: string;
    position: number;
    values: string[];
  }[];
  selling_plans: _Product_selling_plan_liquid[];
  app_id: string;
};

export type _Media_liquid = {
  aspect_ratio: number;
  height: number;
  id: number;
  media_type: "image" | "model" | "video" | "external_video";
  position: number;
  preview_image: {
    aspect_ratio: number;
    height: number;
    src: string;
    width: number;
  };
  src: string;
  width: number;
  alt?: string;
  external_id?: string;
  host?: "youtube" | "vimeo";
  sources?: _Media_liquid_source[];
};

export type _Media_liquid_source = {
  format: "mp4" | "mov" | "m3u8" | "glb";
  height: number;
  mime_type: string;
  url: string;
  width: number;
};

export type _Collection_liquid = {
  all_products_count: number;
  all_tags: string[];
  all_types: string[];
  all_vendors: string[];
  default_sort_by: _Collection_sort_options[number][0];
  description: string;
  filters: _Collection_filter[];
  handle: string;
  id: number;
  metafields: _Collection_metafields;
  products: _Product_liquid[];
  products_count: number;
  published_at: string;
  sort_by: _Collection_sort_options[number][0];
  sort_options: _Collection_sort_options;
  tags: string[];
  template_suffix: string;
  title: string;
  url: string;
  featured_image?: _Media_liquid;
  image?: _Media_liquid;
  product_pagination?: _Pagination_liquid;
  products_best_selling?: string[];
  products_manual?: string[];
};

export type _Collection_sort_options = [
  ["manual", string],
  ["best-selling", string],
  ["title-ascending", string],
  ["title-descending", string],
  ["price-ascending", string],
  ["price-descending", string],
  ["created-ascending", string],
  ["created-descending", string]
];

export type _Collection_filter = {
  active_values: _Collection_filter_value[];
  inactive_values: _Collection_filter_value[];
  label: string;
  max_value: _Collection_filter_value;
  min_value: _Collection_filter_value;
  param_name: string;
  type: string;
  url_to_remove: string;
  values: _Collection_filter_value[];
  false_value?: _Collection_filter_value;
  range_max?: number;
  true_value?: _Collection_filter_value;
};
export type _Collection_filter_value = {
  active: boolean;
  count: number;
  label: string;
  param_name: string;
  url_to_add: string;
  url_to_remove: string;
  value: string;
};

export type _Pagination_liquid = {
  current_offset: number;
  current_page: number;
  items: number;
  page_size: number;
  pages: number;
  parts: _Pagination_liquid_part[];
  next?: _Pagination_liquid_part;
  previous?: _Pagination_liquid_part;
};

type _Pagination_liquid_part = {
  is_link: boolean;
  title: string;
  url: string;
};

export type _Link_liquid = {
  active: boolean;
  child_active: boolean;
  child_current: boolean;
  current: boolean;
  handle: string;
  levels: number;
  links: _Link_liquid[];
  title: string;
  url: string;
} & (
  | {
      type: "product_link";
      object?: _Product_liquid;
    }
  | {
      type: "collection_link";
      object?: _Collection_liquid;
    }
  | {
      type: "article_link";
      object?: _Article_liquid;
    }
  | {
      type: "blog_link";
      object?: _Blog_liquid;
    }
  | {
      type: "page_link";
      object?: _Page_liquid;
    }
  | {
      type: "policy_link";
      object?: string;
    }
  | {
      type: "http_link";
      object?: null;
    }
  | {
      type: "frontpage_link";
      object?: null;
    }
  | {
      type: "collections_link";
      object?: null;
    }
  | {
      type: "catalog_link";
      object?: null;
    }
);

export type _Linklist_liquid = {
  handle: string;
  levels: number;
  links: _Link_liquid[];
  title: string;
};

export type _Color_liquid = {
  alpha: number;
  blue: number;
  green: number;
  hex: string;
  hue: number;
  lightness: number;
  red: number;
  rgb: string;
  saturation: number;
};

export type _Font_liquid = {
  baseline_ratio: number;
  fallback_families: string;
  family: string;
  style: string;
  variants: Omit<_Font_liquid, "variants">[];
  weight: string;
  system?: any;
};

export type _LinkLists_liquid = _Linklist_liquid[];

export type _Image_liquid = {
  alt: string;
  aspect_ratio: number;
  height: number;
  id: string;
  src: string;
  width: number;
  media_type?: any;
  preview_image?: any;
  variants?: any;
};

export type _Shop_liquid_json = {
  address: {
    address1: string;
    address2: string;
    city: string;
    company: string;
    country: string;
    country_code: string;
    name: string;
    phone: string;
    province: string;
    province_code: string;
    zip: string;
    first_name?: any;
    last_name?: any;
    latitude?: any;
    longitude?: any;
  };
  address_city: string;
  address_company: string;
  address_country: string;
  address_country_upper: string;
  address_province: string;
  address_province_code: string;
  address_street: string;
  address_summary: string;
  address_zip: string;
  "checkout.guest_login": boolean;
  collections_count: number;
  currency: string;
  customer_accounts_enabled: boolean;
  customer_accounts_optional: boolean;
  description: string;
  domain: string;
  email: string;
  enabled_payment_types: string[];
  id: number;
  metafields: _Shop_metafields;
  money_format: string;
  money_with_currency_format: string;
  name: string;
  password_message: string;
  permanent_domain: string;
  phone: string;
  policies: any[];
  products_count: number;
  published_locales: {
    shop_locale: {
      enabled: boolean;
      locale: string;
      primary: boolean;
      published: boolean;
    };
  }[];
  secure_url: string;
  types: string[];
  url: string;
  vendors: string[];
  privacy_policy?: any;
  refund_policy?: any;
  shipping_policy?: any;
  subscription_policy?: any;
  terms_of_service?: any;
};

export type _Request_liquid = {
  design_mode: boolean;
  host: string;
  locale: {
    shop_locale: {
      enabled: boolean;
      locale: string;
      primary: boolean;
      published: boolean;
    };
  };
  origin: string;
  page_type: string;
  path: string;
};

export type _Routes_liquid = {
  account_addresses_url: string;
  account_login_url: string;
  account_logout_url: string;
  account_recover_url: string;
  account_register_url: string;
  account_url: string;
  all_products_collection_url: string;
  cart_add_url: string;
  cart_change_url: string;
  cart_clear_url: string;
  cart_update_url: string;
  cart_url: string;
  collections_url: string;
  predictive_search_url: string;
  product_recommendations_url: string;
  root_url: string;
  search_url: string;
  host?: string;
};

export type _Recommendations_liquid = {
  performed: boolean;
  products: _Product_liquid[];
  products_count: number;
};

export type GlobalSettings = {
  article?: _Article_liquid;
  blog?: _Blog_liquid;
  collection?: _Collection_liquid;
  description?: string;
  handle?: string;
  linklists?: _Linklist_liquid[];
  page?: _Page_liquid_json;
  product?: _Product_liquid;
  recommendations?: _Recommendations_liquid;
  request?: _Request_liquid;
  routes?: _Routes_liquid;
  settings?: SettingsSchema;
  shop?: _Shop_liquid_json;
  template?: string;
  title?: string;
};

export type _Font_options =
  | "mono"
  | "sans-serif"
  | "serif"
  | "abel_n4"
  | "abril_fatface_n4"
  | "agmena_n4"
  | "akko_n4"
  | "alegreya_n4"
  | "alegreya_sans_n4"
  | "alfie_n4"
  | "americana_n4"
  | "amiri_n4"
  | "anonymous_pro_n4"
  | "antique_olive_n4"
  | "arapey_n4"
  | "archivo_n4"
  | "archivo_narrow_n4"
  | "arimo_n4"
  | "armata_n4"
  | "arvo_n4"
  | "asap_n4"
  | "assistant_n4"
  | "asul_n4"
  | "avenir_next_n4"
  | "avenir_next_rounded_n4"
  | "azbuka_n4"
  | "basic_commercial_n4"
  | "basic_commercial_soft_rounded_n4"
  | "baskerville_no_2_n4"
  | "bauer_bodoni_n4"
  | "beefcakes_n4"
  | "bembo_book_n4"
  | "bernhard_modern_n4"
  | "bio_rhyme_n4"
  | "bitter_n4"
  | "bodoni_poster_n9"
  | "burlingame_n4"
  | "cabin_n4"
  | "cachet_n4"
  | "cardamon_n4"
  | "cardo_n4"
  | "carter_sans_n4"
  | "caslon_bold_n4"
  | "caslon_old_face_n4"
  | "catamaran_n4"
  | "centaur_n4"
  | "century_gothic_n4"
  | "chivo_n4"
  | "chong_modern_n4"
  | "claire_news_n3"
  | "cooper_bt_n5"
  | "courier_new_n4"
  | "crimson_text_n4"
  | "din_neuzeit_grotesk_n3"
  | "din_next_n4"
  | "din_next_slab_n4"
  | "daytona_n4"
  | "domine_n4"
  | "dosis_n4"
  | "electra_n4"
  | "eurostile_next_n4"
  | "ff_meta_n4"
  | "ff_meta_serif_n4"
  | "ff_tisa_n4"
  | "ff_tisa_sans_n4"
  | "ff_unit_n4"
  | "ff_unit_rounded_n4"
  | "ff_unit_slab_n4"
  | "fette_gotisch_n4"
  | "fira_sans_n4"
  | "fjalla_one_n4"
  | "friz_quadrata_n4"
  | "frutiger_serif_n4"
  | "futura_n4"
  | "futura_black_n4"
  | "garamond_n4"
  | "geometric_415_n4"
  | "georgia_pro_n4"
  | "gill_sans_nova_n4"
  | "glegoo_n4"
  | "goudy_old_style_n4"
  | "harmonia_sans_n4"
  | "helvetica_n4"
  | "humanist_521_n4"
  | "ibm_plex_sans_n4"
  | "itc_avant_garde_gothic_n4"
  | "itc_benguiat_n4"
  | "itc_berkeley_old_style_n4"
  | "itc_bodoni_seventytwo_n4"
  | "itc_bodoni_twelve_n4"
  | "itc_caslon_no_224_n4"
  | "itc_charter_n4"
  | "itc_cheltenham_n4"
  | "itc_clearface_n4"
  | "itc_conduit_n4"
  | "itc_esprit_n4"
  | "itc_founders_caslon_n4"
  | "itc_franklin_gothic_n4"
  | "itc_galliard_n4"
  | "itc_gamma_n4"
  | "itc_goudy_sans_n4"
  | "itc_johnston_n5"
  | "itc_mendoza_roman_n4"
  | "itc_modern_no_216_n5"
  | "itc_new_baskerville_n4"
  | "itc_new_esprit_n4"
  | "itc_new_veljovic_n4"
  | "itc_novarese_n4"
  | "itc_officina_sans_n4"
  | "itc_officina_serif_n4"
  | "itc_stepp_n4"
  | "itc_stone_humanist_n5"
  | "itc_stone_informal_n4"
  | "itc_stone_sans_ii_n4"
  | "itc_stone_serif_n4"
  | "itc_tapioca_n5"
  | "inconsolata_n4"
  | "joanna_nova_n4"
  | "joanna_sans_nova_n4"
  | "josefin_sans_n4"
  | "josefin_slab_n4"
  | "kairos_n4"
  | "kalam_n4"
  | "karla_n4"
  | "kreon_n4"
  | "lato_n4"
  | "laurentian_n4"
  | "libelle_n4"
  | "libre_baskerville_n4"
  | "libre_franklin_n4"
  | "linotype_didot_n4"
  | "linotype_gianotten_n4"
  | "linotype_really_n5"
  | "linotype_syntax_serif_n4"
  | "lobster_n4"
  | "lobster_two_n4"
  | "lora_n4"
  | "lucia_n4"
  | "lucida_grande_n4"
  | "luthersche_fraktur_n4"
  | "madera_n4"
  | "malabar_n4"
  | "mariposa_sans_n4"
  | "maven_pro_n4"
  | "megrim_n4"
  | "melior_n4"
  | "memphis_n5"
  | "memphis_soft_rounded_n5"
  | "mentor_sans_n4"
  | "merriweather_sans_n4"
  | "metro_nova_n4"
  | "modern_no_20_n4"
  | "monaco_n4"
  | "monotype_baskerville_n4"
  | "monotype_bodoni_n4"
  | "monotype_century_old_style_n5"
  | "monotype_goudy_n4"
  | "monotype_goudy_modern_n4"
  | "monotype_italian_old_style_n4"
  | "monotype_new_clarendon_n5"
  | "monotype_news_gothic_n4"
  | "monotype_sabon_n4"
  | "montserrat_n4"
  | "mouse_memoirs_n4"
  | "muli_n4"
  | "mundo_sans_n4"
  | "neo_sans_n4"
  | "neue_aachen_n4"
  | "neue_frutiger_1450_n4"
  | "neue_haas_unica_n4"
  | "neue_plak_n4"
  | "neue_swift_n4"
  | "neuton_n4"
  | "neuzeit_office_n4"
  | "neuzeit_office_soft_rounded_n4"
  | "neuzeit_s_n4"
  | "new_century_schoolbook_n4"
  | "news_702_n4"
  | "news_705_n4"
  | "news_cycle_n4"
  | "news_gothic_no_2_n4"
  | "news_plantin_n4"
  | "nobile_n4"
  | "noticia_text_n4"
  | "noto_serif_n4"
  | "nunito_n4"
  | "nunito_sans_n4"
  | "old_standard_tt_n4"
  | "open_sans_n4"
  | "open_sans_condensed_n3"
  | "optima_nova_n4"
  | "oswald_n4"
  | "ovo_n4"
  | "oxygen_n4"
  | "pmn_caecilia_n4"
  | "pt_mono_n4"
  | "pt_sans_n4"
  | "pt_sans_narrow_n4"
  | "pt_serif_n4"
  | "pacifico_n4"
  | "palatino_n4"
  | "parma_n4"
  | "perpetua_n4"
  | "plantin_n4"
  | "playball_n4"
  | "playfair_display_n4"
  | "poppins_n4"
  | "prata_n4"
  | "prompt_n4"
  | "quantico_n4"
  | "quattrocento_n4"
  | "quattrocento_sans_n4"
  | "questrial_n4"
  | "quicksand_n4"
  | "quire_sans_n4"
  | "rajdhani_n4"
  | "raleway_n4"
  | "really_no_2_n4"
  | "righteous_n4"
  | "roboto_n4"
  | "roboto_condensed_n4"
  | "roboto_mono_n4"
  | "roboto_slab_n4"
  | "rockwell_n4"
  | "rubik_n4"
  | "sabon_next_n4"
  | "sackers_square_gothic_n4"
  | "sagrantino_n4"
  | "scene_n4"
  | "scherzo_n4"
  | "shadows_into_light_n4"
  | "slabo_13px_n4"
  | "slate_n4"
  | "soho_n4"
  | "soho_gothic_n4"
  | "source_code_pro_n4"
  | "source_sans_pro_n4"
  | "stempel_schneidler_n4"
  | "swiss_721_n4"
  | "swiss_721_rounded_n7"
  | "tenor_sans_n4"
  | "tiemann_n4"
  | "times_new_roman_n4"
  | "tinos_n4"
  | "titillium_web_n4"
  | "trade_gothic_n4"
  | "trade_gothic_next_n4"
  | "trebuchet_ms_n4"
  | "twentieth_century_n4"
  | "ubuntu_n4"
  | "unica_one_n4"
  | "univers_next_n4"
  | "univers_next_typewriter_n4"
  | "unna_n4"
  | "vala_n4"
  | "varela_n4"
  | "varela_round_n4"
  | "verdana_pro_n4"
  | "vidaloka_n4"
  | "volkhov_n4"
  | "vollkorn_n4"
  | "waza_n4"
  | "wola_n4"
  | "work_sans_n4"
  | "ysobel_n4"
  | "zurich_n4"
  | "zurich_extended_n4";
export type Translations = {
  bundle: {
    /*  Unlock: */
    unlock: string;
    /*  Begin adding items below to create your bundle */
    begin_adding: string;
    /*  Close */
    close: string;
    /*  Show Previous Item */
    show_previous: string;
    /*  Show Next Item */
    show_next: string;
  };
  bundle_koa: {
    /*  Unlock: */
    unlock: string;
    /*  Begin adding items below to create your bundle */
    begin_adding: string;
    /*  Close */
    close: string;
    /*  Show Previous Item */
    show_previous: string;
    /*  Show Next Item */
    show_next: string;
  };
  cart_drawer: {
    /*  Checkout */
    checkout: string;
    /*  Subtotal */
    subtotal: string;
    /*  Shipping and taxes calculated at checkout. */
    shipping_and: string;
    /*  Added: */
    added: string;
    /*  Close */
    close: string;
  };
  collection_grid_with_filters: {
    /*  Reset */
    reset: string;
    /*  Apply */
    apply: string;
    /*  Hide Filters */
    hide_filters: string;
    /*  Show Filters */
    show_filters: string;
    /*  Sort by */
    sort_by: string;
    /*  Featured */
    featured: string;
    /*  Best selling */
    best_selling: string;
    /*  Alphabetically; A-Z */
    alphabetically_a_z: string;
    /*  Alphabetically; Z-A */
    alphabetically_z_a: string;
    /*  Price; low to high */
    price_low: string;
    /*  Price; high to low */
    price_high: string;
    /*  Date; old to new */
    date_old: string;
    /*  Date; new to old */
    date_new: string;
    /*  Apply Sort */
    apply_sort: string;
    /*  clear all */
    clear_all: string;
    /*  No products Found */
    no_products: string;
    /*  Use Fewer filters */
    use_fewer: string;
    /*  Close Filters */
    close_filters: string;
  };
  drawer_menu: {
    /*  Close nav */
    close_nav: string;
  };
  footer: {
    /*  Follow Us */
    follow_us: string;
    /*  Newsletter */
    newsletter: string;
    /*  Thank you for Signing Up */
    thank_you: string;
  };
  main_article: {
    /*  Comments */
    comments: string;
    /*  No comments yet */
    no_comments: string;
    /*  comments */
    comments_2: string;
    /*  Add a Comment */
    add_a: string;
    /*  All comments are require moderation */
    all_comments: string;
    /*  Previous Article */
    previous_article: string;
    /*  Next Article */
    next_article: string;
    /*  Related Articles */
    related_articles: string;
    /*  Related Products */
    related_products: string;
  };
  main_blog: {
    /*  View All */
    view_all: string;
  };
  main_cart: {
    /*  My Cart */
    my_cart: string;
    /*  Product */
    product: string;
    /*  SKU */
    sku: string;
    /*  Quantity */
    quantity: string;
    /*  Total */
    total: string;
    /*  Shipping and taxes calculated at checkout. */
    shipping_and: string;
    /*  Checkout */
    checkout: string;
    /*  This is a gift */
    this_is: string;
    /*  Cart note */
    cart_note: string;
    /*  Your Cart is Empty */
    your_cart: string;
    /*  Have an account? */
    have_an: string;
    /*  Log in */
    log_in: string;
    /*  to check out faster. */
    to_check: string;
    /*  Continue Shopping */
    continue_shopping: string;
  };
  main_collection_filter_sort_bar: {
    /*  Featured */
    featured: string;
    /*  Best selling */
    best_selling: string;
    /*  Alphabetically; A-Z */
    alphabetically_a_z: string;
    /*  Alphabetically; Z-A */
    alphabetically_z_a: string;
    /*  Price; low to high */
    price_low: string;
    /*  Price; high to low */
    price_high: string;
    /*  Date; old to new */
    date_old: string;
    /*  Date; new to old */
    date_new: string;
    /*  Reset */
    reset: string;
    /*  Apply Filters */
    apply_filters: string;
    /*  Filters */
    filters: string;
    /*  Sort by */
    sort_by: string;
    /*  Apply Sort */
    apply_sort: string;
    /*  Sort */
    sort: string;
    /*  clear all */
    clear_all: string;
  };
  main_collection_product_grid: {
    /*  No products Found */
    no_products: string;
    /*  Use Fewer filters */
    use_fewer: string;
  };
  main_collections_list: {
    /*  No Collections Found */
    no_collections: string;
  };
  main_order: {
    /*  Account */
    account: string;
    /*  Order History */
    order_history: string;
    /*  Addresses */
    addresses: string;
    /*  Log Out */
    log_out: string;
    /*  Order */
    order: string;
    /*  Back to Orders */
    back_to: string;
    /*  Product */
    product: string;
    /*  SKU */
    sku: string;
    /*  Quantity */
    quantity: string;
    /*  Total */
    total: string;
    /*  Subtotal */
    subtotal: string;
    /*  Discount */
    discount: string;
    /*  Shipping */
    shipping: string;
    /*  Tax included */
    tax_included: string;
    /*  Tax excluded */
    tax_excluded: string;
    /*  Refunded amount */
    refunded_amount: string;
    /*  Billing Address */
    billing_address: string;
    /*  No Billing Address */
    no_billing: string;
    /*  Shipping Address */
    shipping_address: string;
    /*  No shipping address was required for this order. */
    no_shipping: string;
  };
  main_search_filters: {
    /*  Relevance */
    relevance: string;
    /*  Featured */
    featured: string;
    /*  Best selling */
    best_selling: string;
    /*  Alphabetically; A-Z */
    alphabetically_a_z: string;
    /*  Alphabetically; Z-A */
    alphabetically_z_a: string;
    /*  Price; low to high */
    price_low: string;
    /*  Price; high to low */
    price_high: string;
    /*  Date; old to new */
    date_old: string;
    /*  Date; new to old */
    date_new: string;
    /*  Reset */
    reset: string;
    /*  Apply Filters */
    apply_filters: string;
    /*  Filters */
    filters: string;
    /*  Sort by */
    sort_by: string;
    /*  Apply Sort */
    apply_sort: string;
    /*  Sort */
    sort: string;
    /*  clear all */
    clear_all: string;
  };
  main_search_input: {
    /*  Search Results */
    search_results: string;
    /*  Article */
    article: string;
    /*  Page */
    page: string;
    /*  Product */
    product: string;
    /*  Apply changes */
    apply_changes: string;
  };
  password_footer: {
    /*  Follow Us */
    follow_us: string;
    /*  Newsletter */
    newsletter: string;
    /*  Thank you for Signing Up */
    thank_you: string;
  };
  product_add_to_cart_bar: {
    /*  Add to Cart */
    add_to: string;
  };
  product_drawer: {
    /*  Close */
    close: string;
  };
  product_quick_view: {
    /*  Close */
    close: string;
  };
  product_quick_view_koa: {
    /*  Close */
    close: string;
  };
  search_grid_with_filters: {
    /*  Reset */
    reset: string;
    /*  Apply */
    apply: string;
    /*  Hide Filters */
    hide_filters: string;
    /*  Show Filters */
    show_filters: string;
    /*  Sort by */
    sort_by: string;
    /*  Relevance */
    relevance: string;
    /*  Featured */
    featured: string;
    /*  Best selling */
    best_selling: string;
    /*  Alphabetically; A-Z */
    alphabetically_a_z: string;
    /*  Alphabetically; Z-A */
    alphabetically_z_a: string;
    /*  Price; low to high */
    price_low: string;
    /*  Price; high to low */
    price_high: string;
    /*  Date; old to new */
    date_old: string;
    /*  Date; new to old */
    date_new: string;
    /*  Apply Sort */
    apply_sort: string;
    /*  clear all */
    clear_all: string;
    /*  No Items Found */
    no_items: string;
    /*  Close Filters */
    close_filters: string;
  };
  tagged_product_images: {
    /*  Select tab */
    select_tab: string;
  };
  video_banner: {
    /*  Close */
    close: string;
  };
  benefit_tabs: {
    /*  Select tab */
    select_tab: string;
  };
  featured_articles: {
    /*  View all */
    view_all: string;
  };
  header: {
    /*  Show Previous Item */
    show_previous: string;
    /*  Show Next Item */
    show_next: string;
    /*  Menu */
    menu: string;
    /*  Back */
    back: string;
    /*  Close nav */
    close_nav: string;
    /*  Account */
    account: string;
    /*  Login */
    login: string;
    /*  Search */
    search: string;
    /*  Cart */
    cart: string;
  };
  header_koa: {
    /*  Show Previous Item */
    show_previous: string;
    /*  Show Next Item */
    show_next: string;
    /*  Menu */
    menu: string;
    /*  Back */
    back: string;
    /*  Close nav */
    close_nav: string;
    /*  Account */
    account: string;
    /*  Login */
    login: string;
    /*  Search */
    search: string;
    /*  Cart */
    cart: string;
  };
  newsletter: {
    /*  Newsletter */
    newsletter: string;
    /*  Thank you for Signing Up */
    thank_you: string;
  };
  object_over_image: {
    /*  View Product */
    view_product: string;
    /*  Sold Out */
    sold_out: string;
    /*  Shop now */
    shop_now: string;
  };
  product: {
    /*  Add to Cart */
    add_to: string;
    /*  Sold Out */
    sold_out: string;
    /*  Unavailable */
    unavailable: string;
    /*  Pre-Order */
    pre_order: string;
    /*  In Stock */
    in_stock: string;
    /*  Available */
    available: string;
    /*  Last item */
    last_item: string;
    /*  items left */
    items_left: string;
    /*  Close */
    close: string;
    /*  Quantity */
    quantity: string;
    /*  No reviews */
    no_reviews: string;
    /*  Sold out */
    sold_out_2: string;
  };
  slideshow: {
    /*  Close */
    close: string;
  };
  object_card: {
    /*  Starting at */
    starting_at: string;
  };
  product_card_koa: {
    /*  Sold out */
    sold_out: string;
    /*  No reviews */
    no_reviews: string;
    /*  View Product */
    view_product: string;
    /*  Add to Cart */
    add_to: string;
    /*  Sold Out */
    sold_out_2: string;
  };
  product_card: {
    /*  Sold out */
    sold_out: string;
    /*  No reviews */
    no_reviews: string;
    /*  View Product */
    view_product: string;
    /*  Choose an option */
    choose_an: string;
    /*  Add to Cart */
    add_to: string;
    /*  Sold Out */
    sold_out_2: string;
  };
  product_preview_card: {
    /*  Sold out */
    sold_out: string;
    /*  No reviews */
    no_reviews: string;
  };
  scroll_bar_elements: {
    /*  Show Previous Item */
    show_previous: string;
    /*  Show Next Item */
    show_next: string;
  };
  collection_card: {
    /*  Starting at */
    starting_at: string;
  };
  form: {
    /*  Newsletter */
    newsletter: string;
    /*  Thank you for Signing Up */
    thank_you: string;
  };
};
declare global {
  interface Window {
    theme_content?: Translations;
  }
}
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

import "react";
import { HTMLAttributes } from "react";

declare module "react" {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    global?: boolean;
    jsx?: boolean;
  }
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }

  export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    autoComplete?: InputAutocomplete;
  }
}

/*
declare global {
  namespace React {
    interface HTMLAttributes<T> extends Omit<React.HTMLAttributes<T>, "className"> {
      className?: string;
    }
  }
}
*/

export type InputAutocomplete =
  | "off"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-extension"
  | "impp"
  | "url"
  | "photo";
