import {
	ADD_PRODUCT_TO_CART,
	REMOVE_PRODUCT_FROM_CART,
	UPDATE_CART_PRODUCT,
	CLEAR_CART
} from "./actionTypes";

const initialState = {
	allIds: [],
	quantityById: {},
	priceById: {},
	nameById: {}
};

const removeProductFromCart = (allIds, payloadedId) =>
	allIds.filter(productId => productId !== payloadedId);

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_TO_CART:
			return {
				...state,
				allIds: [...state.allIds, action.payload.productId],
				quantityById: {
					...state.quantityById,
					[action.payload.productId]: 1
				},
				priceById: {
					...state.priceById,
					[action.payload.productId]: action.payload.price
				},
				nameById: {
					...state.nameById,
					[action.payload.productId]: action.payload.name
				}
			};
		case REMOVE_PRODUCT_FROM_CART:
			return {
				...state,
				allIds: removeProductFromCart(state.allIds, action.payloadedId),
				quantityById: { ...state.quantityById, [action.payloadedId]: 0 }
			};
		case UPDATE_CART_PRODUCT:
			if (action.payload.quantity === 0) return state;

			return {
				...state,
				quantityById: {
					...state.quantityById,
					[action.payload.productId]: action.payload.quantity
				}
			};
		case CLEAR_CART:
			return initialState;
		default:
			return state;
	}
};

export default cartReducer;
