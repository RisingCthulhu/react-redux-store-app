import { connect } from "react-redux";

import Pagination from "../../components/products/Pagination.jsx";
import {
	setCurrentPage,
	setProductsPerPage,
	queryParamsChanged
} from "../../store/products/actions";
import { selectTotalPages } from "../../store/products/selectors";

const mapStateToProps = store => ({
	totalProducts: store.products.totalProducts,
	currentPage: store.products.currentPage,
	totalPages: selectTotalPages(store),
	productsPerPage: store.products.productsPerPage
});

const mapDispatchToProps = {
	setCurrentPage,
	setProductsPerPage,
	queryParamsChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
