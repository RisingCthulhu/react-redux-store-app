import { connect } from "react-redux";

import ProductFooter from "../../components/products/ProductFooter.jsx";
import { addProductToCart, updateCartProduct } from "../../store/cart/actions";
import { toggleCartModal, toggleProductModal } from "../../store/modal/actions";
import { setCurrentEditableProductId } from "../../store/products/actions";

const mapDispatchToProps = {
	addProductToCart,
	updateCartProduct,
	toggleCartModal,
	toggleProductModal,
	setCurrentEditableProductId
};

export default connect(null, mapDispatchToProps)(ProductFooter);
