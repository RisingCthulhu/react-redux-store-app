import { connect } from "react-redux";

import DetailProduct from "../../components/products/DetailProduct.jsx";
import {
	setCurrentDetailProductId,
	clearCurrentDetailProductId,
	getDetailsRequest
} from "../../store/products/actions";

const mapStateToProps = ({ products }) => ({
	selectedProduct: products.byId[products.currentDetailProductId],
	isLoading: products.isLoading,
	allIds: products.allIds
});

const mapDispatchToProps = {
	setCurrentDetailProductId,
	clearCurrentDetailProductId,
	getDetailsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
