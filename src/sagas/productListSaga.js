import { call, put, takeEvery, select } from "redux-saga/effects";

import { GET_PRODUCTS_REQUEST } from "../store/products/actionTypes";
import {
	getProductsSuccess,
	getProductsFail,
	setTotalProducts
} from "../store/products/actions";
import { selectGetParams } from "../store/products/selectors";
import { fetchProducts } from "../api/productsApi";

export default function* fetchProductsWatcher() {
	yield takeEvery([GET_PRODUCTS_REQUEST], fetchProductsWorker);
}

function* fetchProductsWorker() {
	const params = yield select(selectGetParams);

	try {
		const data = yield call(fetchProducts, params);
		yield put(getProductsSuccess(data.items));
		yield put(setTotalProducts(data.totalItems));
	} catch (e) {
		yield put(getProductsFail(e.message));
	}
}
