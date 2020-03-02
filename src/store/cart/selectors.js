import { createSelector } from "reselect";

export const selectCart = state => state.cart;

export const selectCartProductsIds = createSelector(
	selectCart,
	cart => cart.allIds
);

export const makeSelectCartProductById = productId =>
	createSelector(selectCartProductsIds, allIds =>
		allIds.find(id => productId === id)
	);

export const selectCartProductsQuantities = createSelector(
	selectCart,
	cart => cart.quantityById
);

export const selectCartProductsPrices = createSelector(
	selectCart,
	cart => cart.priceById
);

export const selectCartTotal = createSelector(
	[selectCartProductsQuantities, selectCartProductsPrices],
	(quantities, prices) => {
		const keys = Object.keys(quantities);
		return keys.reduce(
			(acc, curId) => (acc += quantities[curId] * prices[curId]),
			0
		);
	}
);
