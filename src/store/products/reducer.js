import {
	GET_PRODUCTS_REQUEST,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAIL,
	GET_DETAILS_REQUEST,
	GET_DETAILS_SUCCESS,
	GET_DETAILS_FAIL,
	SET_TOTAL_PRODUCTS,
	SET_CURRENT_PAGE,
	SET_PRODUCTS_PER_PAGE,
	SET_CURRENT_EDITABLE_PRODUCT,
	CLEAR_CURRENT_EDITABLE_PRODUCT,
	SET_CURRENT_DETAIL_PRODUCT,
	CLEAR_CURRENT_DETAIL_PRODUCT,
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAIL,
	SET_IS_EDITABLE,
	POST_PRODUCT_REQUEST,
	POST_PRODUCT_SUCCESS,
	POST_PRODUCT_FAIL,
	PATCH_PRODUCT_REQUEST,
	PATCH_PRODUCT_SUCCESS,
	PATCH_PRODUCT_FAIL,
	QUERY_PARAMS_CHANGED,
	SET_PRODUCTS_LIST_PARAMS
} from "./actionTypes";

const initialState = {
	isLoading: false,
	isWaitingTillSelectionEnd: false,
	byId: {},
	allIds: [],
	totalProducts: 0,
	currentPage: 1,
	productsPerPage: 8,
	currentDetailProductId: null,
	currentEditableProductId: null,
	origins: [],
	errorMessage: "",
	isEditable: false,
	isSubmitting: false,
	valuesToSend: null
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_REQUEST:
			return {
				...state,
				isLoading: true,
				errorMessage: ""
			};
		case GET_PRODUCTS_SUCCESS:
			return {
				...state,
				byId: action.payload.byId,
				allIds: action.payload.allIds,
				isLoading: false,
				isWaitingTillSelectionEnd: false
			};
		case GET_PRODUCTS_FAIL:
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false,
				isWaitingTillSelectionEnd: false
			};
		case SET_TOTAL_PRODUCTS:
			return {
				...state,
				totalProducts: action.totalProducts
			};
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			};
		case SET_PRODUCTS_PER_PAGE:
			return {
				...state,
				productsPerPage: action.productsPerPage
			};
		case SET_IS_EDITABLE:
			return {
				...state,
				isEditable: action.payload
			};
		case GET_DETAILS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case GET_DETAILS_SUCCESS:
			const nextAllIds = state.allIds.includes(action.payload.id)
				? state.allIds
				: [...state.allIds, action.payload.id];
			return {
				...state,
				byId: {
					...state.byId,
					[action.payload.id]: action.payload
				},
				allIds: nextAllIds,
				isLoading: false
			};
		case GET_DETAILS_FAIL:
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false
			};
		case SET_CURRENT_EDITABLE_PRODUCT:
			return {
				...state,
				currentEditableProductId: action.productId
			};
		case CLEAR_CURRENT_EDITABLE_PRODUCT:
			return {
				...state,
				currentEditableProductId: null
			};
		case SET_CURRENT_DETAIL_PRODUCT:
			return {
				...state,
				currentDetailProductId: action.productId
			};
		case CLEAR_CURRENT_DETAIL_PRODUCT:
			return {
				...state,
				currentDetailProductId: null
			};
		case GET_ORIGINS_SUCCESS:
			return {
				...state,
				origins: action.payload
			};
		case GET_ORIGINS_FAIL:
			return {
				...state,
				errorMessage: action.payload
			};
		case POST_PRODUCT_REQUEST:
			const valuesToPost = Object.assign(
				{},
				{
					product: {
						...action.payload,
						price: +action.payload.price,
						origin: action.payload.origin.value
					}
				}
			);
			return {
				...state,
				isSubmitting: true,
				valuesToSend: valuesToPost
			};
		case POST_PRODUCT_SUCCESS:
			return {
				...state,
				valuesToSend: null,
				isSubmitting: false
			};
		case POST_PRODUCT_FAIL:
			return {
				...state,
				valuesToSend: null,
				errorMessage: action.payload,
				isSubmitting: false
			};
		case PATCH_PRODUCT_REQUEST:
			const valuesToPatch = Object.assign(
				{},
				{
					product: {
						...action.payload,
						price: +action.payload.price,
						origin: action.payload.origin.value
							? action.payload.origin.value
							: action.payload.origin
					}
				}
			);
			return {
				...state,
				isSubmitting: true,
				valuesToSend: valuesToPatch
			};
		case PATCH_PRODUCT_SUCCESS:
			return {
				...state,
				valuesToSend: null,
				isSubmitting: false
			};
		case PATCH_PRODUCT_FAIL:
			return {
				...state,
				valuesToSend: null,
				errorMessage: action.payload,
				isSubmitting: false
			};
		case QUERY_PARAMS_CHANGED:
			return {
				...state,
				isWaitingTillSelectionEnd: true
			};
		case SET_PRODUCTS_LIST_PARAMS:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
};

export default productsReducer;
