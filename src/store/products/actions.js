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
	SET_ORIGINS,
	SET_CURRENT_DETAIL_PRODUCT,
	CLEAR_CURRENT_DETAIL_PRODUCT,
	QUERY_PARAMS_CHANGED,
	GET_ORIGINS_REQUEST,
	GET_ORIGINS_SUCCESS,
	GET_ORIGINS_FAIL,
	SET_IS_EDITABLE,
	POST_PRODUCT_REQUEST,
	POST_PRODUCT_SUCCESS,
	POST_PRODUCT_FAIL,
	PATCH_PRODUCT_REQUEST,
	PATCH_PRODUCT_SUCCESS,
	PATCH_PRODUCT_FAIL,
	SET_PRODUCTS_LIST_PARAMS
} from "./actionTypes";

export const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });

export const getProductsSuccess = products => ({
	type: GET_PRODUCTS_SUCCESS,
	payload: products
});

export const getProductsFail = errorMessage => ({
	type: GET_PRODUCTS_FAIL,
	payload: errorMessage
});

export const setTotalProducts = totalProducts => {
	return {
		type: SET_TOTAL_PRODUCTS,
		totalProducts
	};
};

export const queryParamsChanged = () => ({
	type: QUERY_PARAMS_CHANGED
});

export const getOriginsRequest = () => ({
	type: GET_ORIGINS_REQUEST
});

export const getOriginsSuccess = origins => ({
	type: GET_ORIGINS_SUCCESS,
	payload: origins
});

export const getOriginsFail = errorMessage => ({
	type: GET_ORIGINS_FAIL,
	payload: errorMessage
});

export const setCurrentPage = currentPage => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	};
};

export const setProductsPerPage = productsPerPage => {
	return {
		type: SET_PRODUCTS_PER_PAGE,
		productsPerPage
	};
};

export const setIsEditable = isEditableBool => ({
	type: SET_IS_EDITABLE,
	payload: isEditableBool
});

export const setOrigins = origins => {
	return {
		type: SET_ORIGINS,
		payload: origins
	};
};

export const getDetailsRequest = () => ({
	type: GET_DETAILS_REQUEST
});

export const getDetailsSuccess = product => ({
	type: GET_DETAILS_SUCCESS,
	payload: product
});

export const getDetailsFail = errorMessage => ({
	type: GET_DETAILS_FAIL,
	payload: errorMessage
});

export const setCurrentEditableProductId = productId => {
	return {
		type: SET_CURRENT_EDITABLE_PRODUCT,
		productId
	};
};

export const clearCurrentEditableProductId = () => {
	return {
		type: CLEAR_CURRENT_EDITABLE_PRODUCT
	};
};

export const setCurrentDetailProductId = productId => {
	return {
		type: SET_CURRENT_DETAIL_PRODUCT,
		productId
	};
};

export const clearCurrentDetailProductId = () => {
	return {
		type: CLEAR_CURRENT_DETAIL_PRODUCT
	};
};

export const postProductRequest = values => ({
	type: POST_PRODUCT_REQUEST,
	payload: values
});

export const postProductSuccess = () => ({
	type: POST_PRODUCT_SUCCESS
});

export const postProductFail = errorMessage => ({
	type: POST_PRODUCT_FAIL,
	payload: errorMessage
});

export const patchProductRequest = values => ({
	type: PATCH_PRODUCT_REQUEST,
	payload: values
});

export const patchProductSuccess = () => ({
	type: PATCH_PRODUCT_SUCCESS
});

export const patchProductFail = errorMessage => ({
	type: PATCH_PRODUCT_FAIL,
	payload: errorMessage
});

export const setProductsListParams = params => ({
	type: SET_PRODUCTS_LIST_PARAMS,
	payload: params
});
