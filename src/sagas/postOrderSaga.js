import { take, call, put, select, getContext } from "redux-saga/effects";

import { POST_ORDER_REQUEST } from "../store/orders/actionTypes";
import { postOrderSuccess, postOrderFail } from "../store/orders/actions";
import { clearCart } from "../store/cart/actions";
import { selectValuesToPost } from "../store/orders/selectors";
import { postOrder } from "../api/ordersApi";

export default function* postOrderSaga() {
	yield take(POST_ORDER_REQUEST);

	const valuesToPost = yield select(selectValuesToPost);

	const history = yield getContext("history");

	try {
		yield call(postOrder, valuesToPost);
		yield put(postOrderSuccess());
		yield put(clearCart());
		yield call(history.push, { pathname: "/orders" }); //https://github.com/redux-saga/redux-saga/issues/703#issuecomment-511198653
	} catch (e) {
		yield put(postOrderFail(e.message));
	}
}
