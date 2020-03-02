import {
	POST_ORDER_REQUEST,
	POST_ORDER_SUCCESS,
	POST_ORDER_FAIL,
	GET_ORDERS_REQUEST,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_FAIL
} from "./actionTypes";

const initialState = {
	byId: {},
	allIds: [],
	valuesToPost: null,
	isLoading: false,
	errorMessage: ""
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case POST_ORDER_REQUEST:
			return {
				...state,
				isLoading: true,
				valuesToPost: {
					order: {
						pieces: action.payload.cartIds.map(id => ({
							productId: id,
							count: action.payload.quantityById[id]
						}))
					}
				},
				errorMessage: ""
			};
		case POST_ORDER_SUCCESS:
			return {
				...state,
				isLoading: false,
				valuesToPost: null
			};
		case POST_ORDER_FAIL:
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload,
				valuesToPost: null
			};
		case GET_ORDERS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case GET_ORDERS_SUCCESS:
			return {
				...state,
				byId: action.payload.byId,
				allIds: action.payload.allIds,
				isLoading: false
			};
		case GET_ORDERS_FAIL:
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false
			};
		default:
			return state;
	}
};

export default ordersReducer;
