import { takeEvery, call, put, select } from "redux-saga/effects";

import { fetchProductDetails } from "../api/productsApi";
import { selectProductsEntities } from "../store/products/selectors";
import { getDetailsSuccess, getDetailsFail } from "../store/products/actions";
import { GET_DETAILS_REQUEST } from "../store/products/actionTypes";

export default function* fetchDetailsWatcher(id) {
	yield takeEvery(GET_DETAILS_REQUEST, fetchDetailsWorker, id);
}

function* fetchDetailsWorker(id) {
	const product = yield select(selectProductsEntities)[id];

	if (product) return;

	try {
		const fetchedProduct = yield call(fetchProductDetails, id);
		yield put(getDetailsSuccess(fetchedProduct));
	} catch (e) {
		yield put(getDetailsFail(e.message));
	}
}
