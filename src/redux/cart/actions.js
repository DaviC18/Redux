import CartActiopTypes from "./action-type";

export const addProductToCart = (payload) => ({
  type: CartActiopTypes.ADD_PRODUCT,
  payload,
});

export const removeProductFromCart = (payload) => ({
  type: CartActiopTypes.REMOVE_PRODUCT,
  payload,
});

export const increaseProductQuantity = (payload) => ({
  type: CartActiopTypes.INCREASE_PRODUCT_QUANTITY,
  payload,
});

export const decreasePorductQuantity = (payload) => ({
  type: CartActiopTypes.DECREASE_PRODUCT_QUANTITY,
  payload,
});
