import React, { useEffect } from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import PropTypes from "prop-types";

import Order from "./Order";
import { useInjectSaga } from "../../hooks/useInjectSaga";
import getOrdersHistoryWatcher from "../../sagas/getOrdersHistorySaga";
import Error from "../Error";

const OrdersList = ({
	ordersById,
	ordersIds,
	isLoading,
	getOrdersRequest,
	errorMessage
}) => {
	useInjectSaga("getOrdersHistorySaga", getOrdersHistoryWatcher);

	useEffect(() => {
		getOrdersRequest();
	}, [getOrdersRequest]);

	if (errorMessage.length !== 0)
		return (
			<Error
				text="Error while fetching orders"
				errorMessage={errorMessage}
				action={getOrdersRequest}
				isLoading={isLoading}
			/>
		);

	return (
		<div className="order-list">
			<Dimmer active={isLoading}>
				<Loader active={isLoading} size="massive">
					Loading
				</Loader>
			</Dimmer>
			<h1 className="order-page-header">Orders History</h1>
			{ordersIds.reverse().map(orderId => (
				<Order
					key={orderId}
					id={ordersById[orderId].id}
					pieces={ordersById[orderId].pieces}
					createdAt={ordersById[orderId].createdAt}
				/>
			))}
		</div>
	);
};

OrdersList.propTypes = {
	ordersById: PropTypes.objectOf(PropTypes.object),
	orderIds: PropTypes.arrayOf(PropTypes.string),
	isLoading: PropTypes.bool,
	postOrderRequest: PropTypes.func,
	errorMessage: PropTypes.string
};

export default OrdersList;
