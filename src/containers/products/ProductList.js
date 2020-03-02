import { connect } from "react-redux";

import ProductList from "../../components/products/ProductList.jsx";
import {
	getProductsRequest,
	setIsEditable,
	queryParamsChanged
} from "../../store/products/actions";
import { addProductToCart, updateCartProduct } from "../../store/cart/actions";
import { toggleCartModal } from "../../store/modal/actions";
import { selectGetParams } from "../../store/products/selectors";

const mapStateToProps = state => ({
	productsIds: state.products.allIds,
	cart: state.cart.allIds,
	isCartModalOpen: state.modal.isCartModalOpen,
	getParams: selectGetParams(state),
	productsPerPage: state.products.productsPerPage,
	isLoading: state.products.isLoading,
	isWaitingTillSelectionEnd: state.products.isWaitingTillSelectionEnd,
	errorMessage: state.products.errorMessage
});

const mapDispatchToProps = {
	addProductToCart,
	updateCartProduct,
	toggleCartModal,
	getProductsRequest,
	setIsEditable,
	queryParamsChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
