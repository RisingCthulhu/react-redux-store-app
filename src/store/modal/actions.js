import { TOGGLE_CART_MODAL, TOGGLE_PRODUCT_MODAL } from "./actionTypes";

export const toggleCartModal = () => {
	return {
		type: TOGGLE_CART_MODAL
	};
};

export const toggleProductModal = () => {
	return {
		type: TOGGLE_PRODUCT_MODAL
	};
};

