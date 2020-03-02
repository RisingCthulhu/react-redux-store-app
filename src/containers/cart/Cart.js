import { connect } from "react-redux";
import { uniq } from "lodash";

import Cart from "../../components/cart/Cart.jsx";
import {
	removeProductFromCart,
	updateCartProduct
} from "../../store/cart/actions";
import { toggleCartModal } from "../../store/modal/actions";
import { postOrderRequest } from "../../store/orders/actions";

const mapStateToProps = ({ cart, modal, orders }) => ({
	cartIds: uniq(cart.allIds),
	quantityById: cart.quantityById,
	nameById: cart.nameById,
	priceById: cart.priceById,
	isCartModalOpen: modal.isCartModalOpen,
	isLoading: orders.isLoading
});

const mapDispatchToProps = {
	removeProductFromCart,
	updateCartProduct,
	toggleCartModal,
	postOrderRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
