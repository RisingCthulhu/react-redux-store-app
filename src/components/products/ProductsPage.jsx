import React from "react";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar.jsx";
import Pagination from "../../containers/products/Pagination";
import ProductList from "../../containers/products/ProductList";

const ProductsPage = ({ isEditable = false }) => {
	return (
		<>
			<Pagination />
			<div className="product-list-container">
				<Sidebar />
				<ProductList isEditable={isEditable} />
			</div>
			<Pagination isBelowProdList />
		</>
	);
};

ProductsPage.propTypes = {
	isEditable: PropTypes.bool
};

export default ProductsPage;
