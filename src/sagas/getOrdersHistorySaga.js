import { takeEvery, put, call } from "redux-saga/effects";

import { GET_ORDERS_REQUEST } from "../store/orders/actionTypes";
import { getOrdersSuccess, getOrdersFail } from "../store/orders/actions";
import { getOrdersHistory } from "../api/ordersApi";

export default function* getOrdersHistoryWatcher() {
	yield takeEvery(GET_ORDERS_REQUEST, getOrdersHistoryWorker);
}

function* getOrdersHistoryWorker() {
	try {
		const data = yield call(getOrdersHistory);
		yield put(getOrdersSuccess(data));
	} catch (e) {
		yield put(getOrdersFail(e.message));
	}
}
