import { take, call, put } from "redux-saga/effects";

import { GET_ORIGINS_REQUEST } from "../store/products/actionTypes";
import { getOriginsSuccess, getOriginsFail } from "../store/products/actions";
import { fetchOrigins } from "../api/productsApi";

export default function* fetchOriginsSaga() {
	yield take(GET_ORIGINS_REQUEST);
	try {
		const origins = yield call(fetchOrigins);
		yield put(getOriginsSuccess(origins));
	} catch (e) {
		yield put(getOriginsFail(e.message));
	}
}
