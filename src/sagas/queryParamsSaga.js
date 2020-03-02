import { takeLatest, put, select, getContext, delay } from "redux-saga/effects";
import { parse, stringify } from "qs";

import { selectGetParams } from "../store/products/selectors";
import { QUERY_PARAMS_CHANGED } from "../store/products/actionTypes";
import { setFilterParams } from "../store/filter/actions";
import {
	setProductsListParams,
	getProductsRequest
} from "../store/products/actions";

export default function* queryParamsWatcher() {
	yield takeLatest(QUERY_PARAMS_CHANGED, queryParamsWorker);
}

let initialCall = true;

function* queryParamsWorker() {
	const history = yield getContext("history");
	const paramsFromUrl = history.location.search.substr(1);
	const paramsFromUrlToObj = parse(paramsFromUrl);
	let paramsFromState = yield select(selectGetParams);

	const isPageParamsChanged =
		+paramsFromUrlToObj.page !== paramsFromState.page ||
		+paramsFromUrlToObj.perPage !== paramsFromState.perPage;

	const delayTime = isPageParamsChanged || initialCall ? 0 : 1500;

	if (initialCall) {
		const nextFilterParams = {
			price: {
				min: paramsFromUrlToObj.minPrice
					? +paramsFromUrlToObj.minPrice
					: paramsFromState.minPrice,
				max: paramsFromUrlToObj.maxPrice
					? +paramsFromUrlToObj.maxPrice
					: paramsFromState.maxPrice
			},
			origins: paramsFromUrlToObj.origins
				? paramsFromUrlToObj.origins.split(",")
				: []
		};
		const nextListParams = {
			productsPerPage: paramsFromUrlToObj.perPage
				? +paramsFromUrlToObj.perPage
				: paramsFromState.perPage,
			currentPage: paramsFromUrlToObj.page
				? +paramsFromUrlToObj.page
				: paramsFromState.page
		};
		yield put(setFilterParams(nextFilterParams));
		yield put(setProductsListParams(nextListParams));

		paramsFromState = yield select(selectGetParams);
		initialCall = false;
	}

	history.push({
		search: stringify(paramsFromState, {
			arrayFormat: "comma",
			encode: false
		})
	});

	yield delay(delayTime);
	yield put(getProductsRequest());
}
