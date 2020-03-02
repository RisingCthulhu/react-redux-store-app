import React from "react";
import PropTypes from "prop-types";

import ProductFormContainer from "../../containers/forms/ProductFormContainer.jsx";
import useProductFormInitialValues from "../../hooks/useProductFormInitialValues";

const ProductModal = ({ currentEditableProductId }) => {
	const initialValues = useProductFormInitialValues(currentEditableProductId);

	return (
		<div className="cart-modal">
			<h2>{currentEditableProductId ? "Edit" : "Add"} product form</h2>
			<ProductFormContainer initialValues={initialValues} />
		</div>
	);
};

ProductModal.propTypes = {
	currentEditableProductId: PropTypes.string
};

export default ProductModal;
