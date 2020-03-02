import { createSelector } from "reselect";

export const selectOrders = state => state.orders;

export const selectOrderEntities = createSelector(
	selectOrders,
	orders => orders.byId
);

export const selectOrdersPiecesById = createSelector(
	selectOrderEntities,
	ordersById =>
		Object.keys(ordersById).reduce(
			(acc, curId) => ({ ...acc, [curId]: ordersById[curId].pieces }),
			{}
		)
);

export const makeOrderTotalByIdSelector = id =>
	createSelector(selectOrdersPiecesById, pieces =>
		pieces[id].reduce(
			(acc, curPiece) => (acc += curPiece.count * curPiece.product.price),
			0
		)
	);

export const selectValuesToPost = createSelector(
	selectOrders,
	orders => orders.valuesToPost
);
