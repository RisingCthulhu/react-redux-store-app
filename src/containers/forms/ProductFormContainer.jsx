import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";
import PropTypes from "prop-types";

import { formValidator } from "./validators";
import ProductForm from "../../components/forms/ProductForm.jsx";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import {
	clearCurrentEditableProductId,
	patchProductRequest,
	postProductRequest
} from "../../store/products/actions";
import { toggleProductModal } from "../../store/modal/actions";
import postProductSaga from "../../sagas/postProductSaga";
import patchProductSaga from "../../sagas/patchProductSaga";
import { useRunSaga } from "../../hooks/useRunSaga";

const ProductFormContainer = ({
	handleSubmit,
	productId,
	postProductRequest,
	patchProductRequest,
	submitting,
	errorMessage,
	...props
}) => {
	const postProduct = useRunSaga(postProductSaga, false);
	const patchProduct = useRunSaga(patchProductSaga, false);

	const onSubmitFn = productId ? patchProduct : postProduct;

	return (
		<>
			<form onSubmit={handleSubmit(onSubmitFn)}>
				<Dimmer active={submitting}>
					<Loader active={submitting} size="massive">
						Submitting
					</Loader>
				</Dimmer>
				<ProductForm {...props} />
			</form>
		</>
	);
};

const mapStateToProps = ({ products }) => ({
	productId: products.currentEditableProductId,
	origins: products.origins,
	errorMessage: products.errorMessage
});

const mapDispatchToProps = {
	clearCurrentEditableProductId,
	toggleProductModal,
	postProductRequest,
	patchProductRequest
};

export default reduxForm({
	form: "product",
	validate: formValidator
})(connect(mapStateToProps, mapDispatchToProps)(ProductFormContainer));

ProductFormContainer.propTypes = {
	handleSubmit: PropTypes.func,
	productId: PropTypes.string,
	postProductRequest: PropTypes.func,
	patchProductRequest: PropTypes.func,
	submitting: PropTypes.bool,
	errorMessage: PropTypes.string,
	props: PropTypes.object
};
