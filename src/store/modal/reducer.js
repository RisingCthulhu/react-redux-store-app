import { TOGGLE_CART_MODAL, TOGGLE_PRODUCT_MODAL } from "./actionTypes";

const initialState = {
	isCartModalOpen: false,
	isProductModalOpen: false
};

const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CART_MODAL:
			return {
				...state,
				isCartModalOpen: !state.isCartModalOpen
			};
		case TOGGLE_PRODUCT_MODAL:
			return {
				...state,
				isProductModalOpen: !state.isProductModalOpen
			};
		default:
			return state;
	}
};

export default modalReducer;
