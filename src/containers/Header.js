import { connect } from "react-redux";

import Header from "../components/Header.jsx";
import { selectCartTotal } from "../store/cart/selectors";
import { toggleProductModal } from "../store/modal/actions";
import { getOriginsRequest } from "../store/products/actions";

const mapStateToProps = state => ({
	total: selectCartTotal(state),
	isProductModalOpen: state.modal.isProductModalOpen,
	isCartModalOpen: state.modal.isCartModalOpen,
	currentEditableProductId: state.products.currentEditableProductId
});

const mapDispatchToProps = {
	toggleProductModal,
	getOriginsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
