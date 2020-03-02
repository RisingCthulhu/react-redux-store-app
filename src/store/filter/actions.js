import {
	SET_MIN,
	SET_MAX,
	SET_FILTER_BY_ORIGIN,
	RESET_FILTERS,
	SET_FILTER_PARAMS
} from "./actionTypes";

export const setMin = value => ({
	type: SET_MIN,
	value
});

export const setMax = value => ({
	type: SET_MAX,
	value
});

export const setFilterByOrigin = origin => ({
	type: SET_FILTER_BY_ORIGIN,
	payload: origin
});

export const resetFilters = () => ({
	type: RESET_FILTERS
});

export const setFilterParams = params => ({
	type: SET_FILTER_PARAMS,
	payload: params
});
