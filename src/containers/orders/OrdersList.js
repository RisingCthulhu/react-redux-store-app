import { connect } from "react-redux";

import OrdersList from "../../components/orders/OrdersList.jsx";
import { postOrderRequest, getOrdersRequest } from "../../store/orders/actions";

const mapStateToProps = ({ orders, products }) => ({
	ordersById: orders.byId,
	ordersIds: orders.allIds,
	isLoading: orders.isLoading,
	errorMessage: orders.errorMessage
});

const mapDispatchToProps = {
	postOrderRequest,
	getOrdersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersList);
