import {
	POST_ORDER_REQUEST,
	POST_ORDER_SUCCESS,
	POST_ORDER_FAIL,
	GET_ORDERS_REQUEST,
	GET_ORDERS_SUCCESS,
	GET_ORDERS_FAIL
} from "./actionTypes";

export const postOrderRequest = (cartIds, quantityById) => ({
	type: POST_ORDER_REQUEST,
	payload: { cartIds, quantityById }
});

export const postOrderSuccess = () => ({
	type: POST_ORDER_SUCCESS
});

export const postOrderFail = errorMessage => ({
	type: POST_ORDER_FAIL,
	payload: errorMessage
});

export const getOrdersRequest = () => ({
	type: GET_ORDERS_REQUEST
});

export const getOrdersSuccess = data => ({
	type: GET_ORDERS_SUCCESS,
	payload: data
});

export const getOrdersFail = errorMessage => ({
	type: GET_ORDERS_FAIL,
	payload: errorMessage
});
