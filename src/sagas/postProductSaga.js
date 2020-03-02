import { put, call, select, getContext } from "redux-saga/effects";
import { toast } from "react-toastify";

import {
	postProductRequest,
	postProductSuccess,
	postProductFail,
	getProductsRequest
} from "../store/products/actions";
import { selectValuesToSend } from "../store/products/selectors";
import { postProduct } from "../api/productFormApi";
import { toggleProductModal } from "../store/modal/actions";

const errorEnhancer = message => {
	return message.indexOf("code 400") !== -1
		? "Product with such name is already exists"
		: message;
};

export default function* postProductSaga(values) {
	yield put(postProductRequest(values));

	const valuesToSend = yield select(selectValuesToSend);

	const history = yield getContext("history");

	try {
		yield call(postProduct, valuesToSend);
		yield put(postProductSuccess());
		toast.success("Product added successfuly");
	} catch (e) {
		yield put(postProductFail(e.message));
		toast.error(`Error while submitting. ${errorEnhancer(e.message)}.`);
	} finally {
		yield put(getProductsRequest());
		yield call(history.push, {
			pathname: "/myProducts",
			search: history.location.search
		});
		yield put(toggleProductModal());
	}
}
