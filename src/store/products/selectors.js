import { createSelector } from "reselect";
import {
	selectMinPrice,
	selectMaxPrice,
	selectSelectedOrigins
} from "../filter/selectors";

export const selectProducts = state => state.products;

export const selectProductsEntities = createSelector(
	selectProducts,
	products => products.byId
);

export const selectProductsIds = createSelector(
	selectProducts,
	products => products.allIds
);

export const selectProductsList = createSelector(
	[selectProductsEntities, selectProductsIds],
	(productsEntities, allIds = []) => allIds.map(id => productsEntities[id])
);

export const selectProductsPrices = createSelector(
	selectProductsList,
	productsList => productsList.map(product => product.price)
);

export const makeSelectProductById = id =>
	createSelector(selectProductsEntities, byId => byId[id]);

export const selectProductsOrigins = createSelector(
	selectProducts,
	products => products.origins
);

export const selectProductsMinAndMaxPrice = createSelector(
	selectProductsPrices,
	productsList => ({
		min: Math.min(...productsList),
		max: Math.max(...productsList)
	})
);

export const selectTotalProducts = createSelector(
	selectProducts,
	products => products.totalProducts
);

export const selectProductsPerPage = createSelector(
	selectProducts,
	products => products.productsPerPage
);

export const selectCurrentPage = createSelector(
	selectProducts,
	products => products.currentPage
);

export const selectIsEditable = createSelector(
	selectProducts,
	products => products.isEditable
);

export const selectCurrentDetailProductId = createSelector(
	selectProducts,
	products => products.currentDetailProductId
);

export const selectCurrentEditableProductId = createSelector(
	selectProducts,
	products => products.currentEditableProductId
);

export const selectValuesToSend = createSelector(
	selectProducts,
	products => products.valuesToSend
);

export const selectTotalPages = createSelector(
	[selectTotalProducts, selectProductsPerPage],
	(totalProducts, productsPerPage) =>
		Math.ceil(totalProducts / productsPerPage)
);

export const selectFilterParams = createSelector(
	[selectMinPrice, selectMaxPrice, selectSelectedOrigins],
	(minPrice, maxPrice, origins) => {
		const result = { minPrice, maxPrice };
		origins.length > 0 && Object.assign(result, { origins });
		return result;
	}
);

export const selectProductsParams = createSelector(
	[selectProductsPerPage, selectCurrentPage, selectIsEditable],
	(perPage, currentPage, isEditable) => {
		const result = {
			perPage,
			page: currentPage
		};
		isEditable && Object.assign(result, { editable: isEditable });
		return result;
	}
);

export const selectGetParams = createSelector(
	[selectFilterParams, selectProductsParams],
	(filterParams, productParams) => ({
		...filterParams,
		...productParams
	})
);
