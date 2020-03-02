import { createSelector } from "reselect";

export const selectFilter = state => state.filter;

export const selectMinPrice = createSelector(
	selectFilter,
	filter => filter.price.min
);

export const selectMaxPrice = createSelector(
	selectFilter,
	filter => filter.price.max
);

export const selectSelectedOrigins = createSelector(selectFilter, filter => [
	...filter.origins
]);
