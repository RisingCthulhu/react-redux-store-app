import { put, call, select, getContext } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
	patchProductRequest,
	patchProductSuccess,
	patchProductFail
} from "../store/products/actions";
import {
	selectValuesToSend,
	selectCurrentEditableProductId
} from "../store/products/selectors";
import { patchProduct } from "../api/productFormApi";
import { toggleProductModal } from "../store/modal/actions";
import {
	getDetailsRequest,
	clearCurrentEditableProductId
} from "../store/products/actions";

export default function* patchProductSaga(values) {
	yield put(patchProductRequest(values));

	const productId = yield select(selectCurrentEditableProductId);
	const valuesToSend = yield select(selectValuesToSend);

	const history = yield getContext("history");

	try {
		yield call(patchProduct, productId, valuesToSend);
		yield put(patchProductSuccess());
	} catch (e) {
		yield put(patchProductFail(e.message));
		toast.error(`Error while updating. ${e.message}.`);
	} finally {
		history.push({
			pathname: `/products/${productId}`
		});
		yield put(getDetailsRequest());
		yield put(clearCurrentEditableProductId());
		yield put(toggleProductModal());
	}
}
