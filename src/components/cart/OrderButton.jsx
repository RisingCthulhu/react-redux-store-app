import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import { useInjectSaga } from "../../hooks/useInjectSaga";
import postOrderSaga from "../../sagas/postOrderSaga";

const OrderButton = ({ cartIds, quantityById, postOrderRequest }) => {
	useInjectSaga("postOrderSaga", postOrderSaga);
	return (
		<Button
			className="order-button"
			onClick={() => postOrderRequest(cartIds, quantityById)}
		>
			Order
		</Button>
	);
};

OrderButton.propTypes = {
	cartIds: PropTypes.arrayOf(PropTypes.string),
	quantityById: PropTypes.objectOf(PropTypes.number),
	postOrderRequest: PropTypes.func
};

export default OrderButton;
