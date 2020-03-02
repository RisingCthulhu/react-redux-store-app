import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	UPDATE_CART_PRODUCT,
	CLEAR_CART
} from "./actionTypes";

export const addProductToCart = (productId, price, name) => ({
	type: ADD_PRODUCT_TO_CART,
	payload: { productId, price, name }
});

export const removeProductFromCart = productId => ({
	type: REMOVE_PRODUCT_FROM_CART,
	payloadedId: productId
});

export const updateCartProduct = (productId, quantity) => ({
	type: UPDATE_CART_PRODUCT,
	payload: { productId, quantity }
});

export const clearCart = () => ({ type: CLEAR_CART });
