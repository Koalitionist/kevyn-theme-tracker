import { cart } from "cart";
import { _Cart_fetch_api, _Cart_fetch_api_Items } from "types";
import { JSONParse } from "utils";
import localForage from "localforage";
import { CartDrawerBlocksRoute_protection_product } from "_types";
import { SettingsSchema } from "_types";
import { _Product_liquid, _Variant_liquid } from "_types";
import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";
import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

export const globalSettings = createStore<SettingsSchema>((set, get) => {
  /*Initial State*/
  return {
    ...window.theme_settings,
  };
});
export const useGlobalSettings = create(globalSettings);

type GlobalProductsState = {
  hydrated?: boolean;
  recentlyViewed: string[];
  currentProductHandle: string | null;
  products: { [T: string]: _Product_liquid & { timestamp?: number; hidden?: boolean } };
  getAsyncProduct: (
    handle: string
  ) => Promise<_Product_liquid & { timestamp?: number; hidden?: boolean }>;
  getUntransformedAsyncProduct: (
    handle: string
  ) => Promise<_Product_liquid & { timestamp?: number; hidden?: boolean }>;
  getProduct: (handle: string) => _Product_liquid & { timestamp?: number; hidden?: boolean };
  getUntransformedProduct: (
    handle: string
  ) => _Product_liquid & { timestamp?: number; hidden?: boolean };
  setProduct: (product: _Product_liquid) => void;
  setProducts: (products: _Product_liquid[]) => void;
};

const fetching = {
  current: {},
};

export const globalProducts = createStore(
  persist(
    immer<GlobalProductsState>((set, get) => {
      return {
        hydrated: false,
        products: {},
        recentlyViewed: [],
        currentProductHandle:
          document.querySelector<HTMLElement>("[data-product-handle]")?.dataset?.productHandle ??
          null,
        setProduct: (product) => {
          set((state) => {
            state.products = {
              ...state.products,
              [product.handle]: {
                ...product,
                timestamp: Date.now(),
              },
            };
          });
        },
        setProducts: (products) => {
          set((state) => {
            const timestamp = Date.now();
            products.forEach((product) => {
              state.products[product.handle] = {
                ...product,
                timestamp,
              };
            });
          });
        },
        getAsyncProduct: async (handle) => {
          const timestamp = Date.now();
          const product = get().products[handle];

          if (product && product?.timestamp && timestamp - product?.timestamp < 1000 * 60 * 15) {
            return window.transformProducts(product);
          }

          const localProduct: _Product_liquid = JSONParse(
            document.querySelector(`[data-product-json="${handle}"]`)?.innerHTML
          );

          if (localProduct) {
            set((state) => {
              state.products = {
                ...state.products,
                [localProduct.handle]: {
                  ...localProduct,
                  timestamp: timestamp,
                },
              };
            });
            return {
              ...window.transformProducts(localProduct),
              timestamp: timestamp,
            };
          }

          if (!(handle in fetching.current)) {
            fetching.current[handle] = fetch(
              `${window.Shopify.routes.root}products/${handle
                .replace(/\/products\//gi, "")
                .replace(/^\//gi, "")}?sections=product-data`
            ).then((data) => data.json());
          }

          try {
            const content = { ...(await fetching.current[handle]) };
            delete fetching.current[handle];
            const dataElement = document.createElement("div");
            dataElement.innerHTML = content["product-data"];
            const productData = JSONParse<_Product_liquid>(
              dataElement.querySelector("script")?.innerHTML
            );

            set((state) => {
              if (productData) {
                state.products = {
                  ...state.products,
                  [productData.handle]: {
                    ...productData,
                    timestamp,
                  },
                };
              }
              if (!productData) {
                delete state.products[handle];
              }
            });
            return {
              ...window.transformProducts(productData),
              timestamp,
            };
          } catch (err) {
            delete fetching.current[handle];
            return null;
          }
        },
        getUntransformedAsyncProduct: async (handle) => {
          const timestamp = Date.now();
          const product = get().products[handle];

          if (product && product?.timestamp && timestamp - product?.timestamp < 1000 * 60 * 15) {
            return product;
          }

          const localProduct: _Product_liquid = JSONParse(
            document.querySelector(`[data-product-json="${handle}"]`)?.innerHTML
          );

          if (localProduct) {
            set((state) => {
              state.products = {
                ...state.products,
                [localProduct.handle]: {
                  ...localProduct,
                  timestamp: timestamp,
                },
              };
            });
            return {
              ...localProduct,
              timestamp: timestamp,
            };
          }

          if (!(handle in fetching.current)) {
            fetching.current[handle] = fetch(
              `${window.Shopify.routes.root}products/${handle
                .replace(/\/products\//gi, "")
                .replace(/^\//gi, "")}?sections=product-data`
            ).then((data) => data.json());
          }

          try {
            const content = { ...(await fetching.current[handle]) };
            delete fetching.current[handle];
            const dataElement = document.createElement("div");
            dataElement.innerHTML = content["product-data"];
            const productData = JSONParse<_Product_liquid>(
              dataElement.querySelector("script")?.innerHTML
            );

            set((state) => {
              if (productData) {
                state.products = {
                  ...state.products,
                  [productData.handle]: {
                    ...productData,
                    timestamp,
                  },
                };
              }
              if (!productData) {
                delete state.products[handle];
              }
            });
            return {
              ...productData,
              timestamp,
            };
          } catch (err) {
            delete fetching.current[handle];
            return null;
          }
        },
        getProduct: (handle) => {
          const timestamp = Date.now();
          const localProduct: _Product_liquid = JSONParse(
            document.querySelector(`[data-product-json="${handle}"]`)?.innerHTML
          );

          if (localProduct) {
            set((state) => {
              state.products = {
                ...state.products,
                [localProduct.handle]: {
                  ...localProduct,
                  timestamp: Date.now(),
                },
              };
            });
            return {
              ...window.transformProducts(localProduct),
              timestamp: timestamp,
            };
          }

          const product = get().products[handle];

          if (product) {
            if (product && product?.timestamp && timestamp - product?.timestamp > 1000 * 60 * 15) {
              /* State While Revalidate */
              get().getAsyncProduct(handle);
            }
            return window.transformProducts(product);
          }

          return null;
        },
        getUntransformedProduct: (handle) => {
          const localProduct: _Product_liquid = JSONParse(
            document.querySelector(`[data-product-json="${handle}"]`)?.innerHTML
          );

          if (localProduct) {
            set((state) => {
              state.products = {
                ...state.products,
                [localProduct.handle]: {
                  ...localProduct,
                  timestamp: Date.now(),
                },
              };
            });
            return {
              ...localProduct,
              timestamp: Date.now(),
            };
          }

          const product = get().products[handle];

          if (product) {
            return product;
          }

          return null;
        },
      };
    }),
    {
      name: `${window.Shopify.shop}-accelerate-products`,
      version: 5,
      storage: createJSONStorage(() => localForage as unknown as StateStorage),
      onRehydrateStorage: (state) => {
        return (state2, error) => {
          if (error) {
            console.log(error);
          } else {
            const handle = window.location.pathname
              .split("?")[0]
              .replace(/.*\/products\/([^?]*)/gi, "$1")
              .toLowerCase();
            if (handle) {
              const product = Object.values(state2.products).find((p) => p.handle === handle);
              if (product) {
                const recentlyViewed = [
                  ...new Set([product.handle, ...state2.recentlyViewed]),
                ].slice(0, 50);

                globalProducts.setState({
                  recentlyViewed: recentlyViewed,
                });
              }
            }
            globalProducts.setState({
              hydrated: true,
              currentProductHandle:
                document.querySelector<HTMLElement>("[data-product-handle]")?.dataset
                  ?.productHandle ?? null,
            });
          }
        };
      },
      // getStorage: () => customStorage as unknown as StateStorage,
    }
  )
);

export type GiftItemType = {
  content: string;
  type: "quantity" | "price";
  target: number;
  target_collection: string;
  target_products: string[];
  receives_quantity: number;
  receives_discount_percentage: number;
  receives_products: string[];
};
export const useGlobalProducts = create(globalProducts);

export type CartDrawerState = {
  loading: boolean;
  cartData: _Cart_fetch_api | null;
  initCart: () => Promise<void>;
  addItem: (variant: Pick<_Variant_liquid, "id" | "image">, quantity: number) => Promise<void>;
  adjustItem: (lineItem: _Cart_fetch_api_Items, quantity: number, index: number) => void;
  routeProtectionProducts: CartDrawerBlocksRoute_protection_product["settings"][];
  updates: { [T: string | number]: number } | number[] | null;
  fetchUpdates: () => Promise<void>;
};

export const cartDrawer = createStore<CartDrawerState>((set, get) => {
  /*Initial State*/
  const cartData = window.cartData;
  const routeProtectionProducts = [];
  document.querySelectorAll<HTMLElement>("[data-route-protection]").forEach((element) => {
    const settings = JSONParse<CartDrawerBlocksRoute_protection_product["settings"]>(
      element.dataset.routeProtectionSettings
    );
    routeProtectionProducts.push(settings);
  });

  return {
    loading: true,
    cartData: cartData,
    routeProtectionProducts: routeProtectionProducts,
    updates: null,
    initCart: async () => {
      set({ loading: true });
      set({ cartData: await cart.get(), loading: false });
    },
    adjustItem: (lineItem, quantity, index) => {
      const newQuantity = Math.max(0, lineItem.quantity + quantity);

      set(({ cartData, updates }) => {
        const newItemCount = cartData?.item_count - lineItem.quantity + newQuantity;
        const newFinalLinePrice = lineItem.final_price * newQuantity;
        const newOriginalLinePrice = lineItem.original_price * newQuantity;

        return {
          loading: true,
          cartData: {
            ...cartData,
            item_count: newItemCount,
            total_price: cartData?.total_price - lineItem.final_line_price + newFinalLinePrice,
            items: cartData?.items?.map((line_item, i) => {
              if (lineItem.key !== line_item.key || index !== i) {
                return line_item;
              }

              return {
                ...line_item,
                quantity: newQuantity,
                final_line_price: newFinalLinePrice,
                original_line_price: newOriginalLinePrice,
              };
            }),
          },
          updates: cartData?.items?.map((item, i) => {
            if (index === i) {
              return newQuantity;
            }
            return item.quantity;
          }),
        };
      });
    },
    fetchUpdates: async () => {
      const data = await cart.update({
        updates: get().updates,
      });
      set({ cartData: data, loading: false, updates: null });
    },
    addItem: async (variant, quantity) => {},
  };
});
export const useCartDrawer = create(cartDrawer);

/*
type GlobalCartMessageState = {
  hydrated?: boolean;
  isGift?: boolean;
  cartToken?: string;
  cartMessage?: string;
  setHasHydrated: (token?: string) => void;
};

export const cartMessage = createStore(
  persist(
    immer<GlobalCartMessageState>((set, get) => {
      return {
        hydrated: false,
        setHasHydrated: (token) => {
          set({
            hydrated: true,
            cartToken: token,
          });
        },
      };
    }),
    {
      name: `${window.Shopify.shop}-platter-cart-message`,
      version: 1,
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: (state) => {
        return (state2, error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(state2);
            console.log(window.cartData);
            if (window.cartData?.token && state2?.cartToken === window.cartData?.token) {
              document
                .querySelectorAll<HTMLInputElement>("[data-cart-gift-checkbox]")
                .forEach((checkbox) => {
                  if (state2.isGift) {
                    checkbox.checked = true;
                  }
                });

              document
                .querySelectorAll<HTMLTextAreaElement>("[data-cart-note-textarea]")
                .forEach((textarea) => {
                  if (state2.cartMessage) {
                    textarea.value = state2.cartMessage;
                  }
                });
            }
            console.log("asdasdasd", window.cartData?.token);
            if (window.cartData?.token) {
              state2.setHasHydrated(window.cartData?.token);
              return;
            }

            state2.setHasHydrated();
          }
        };
      },
      // getStorage: () => customStorage as unknown as StateStorage,
    }
  )
);

export const useCartMessage = create(cartMessage);
*/
