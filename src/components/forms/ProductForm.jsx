import React from "react";
import { Field } from "redux-form";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import Input from "./Input";
import OriginSelect from "./OriginSelect";
import {
	isGreaterThan,
	isLowerThan,
	isConsistOfSpaces
} from "../../containers/forms/validators";

const isGreaterThan0 = isGreaterThan(0);
const isLowerThan1000 = isLowerThan(1000);

const ProductForm = ({
	pristine,
	reset,
	initialValues,
	toggleProductModal,
	onCloseForm,
	origins,
	clearCurrentEditableProductId,
	isSubmitting
}) => {
	const originOptions = origins.map(origin => ({
		label: origin.displayName,
		value: origin.value
	}));

	return (
		<>
			<div className="form-container">
				<div className="form-input">
					<label htmlFor="productName"></label>
					<Field
						name="name"
						component={Input}
						placeholder="Enter product name"
						type="text"
						label="Product Name"
						validate={isConsistOfSpaces}
						disabled={isSubmitting}
					/>
				</div>
				<div className="form-input">
					<Field
						name="price"
						component={Input}
						placeholder="Enter product price"
						type="number"
						label="Price"
						validate={[isGreaterThan0, isLowerThan1000]}
						disabled={isSubmitting}
					/>
				</div>
				<div className="form-select">
					<Field
						name="origin"
						label="Origin"
						component={OriginSelect}
						options={originOptions}
						placeholder="Select Origin"
						isSubmitting={isSubmitting}
						initialValue={initialValues.origin}
					/>
				</div>
				<Button
					type="button"
					disabled={pristine || isSubmitting}
					onClick={reset}
				>
					Reset
				</Button>
				<Button type="submit" disabled={isSubmitting}>
					Apply
				</Button>
			</div>
			<Button
				disabled={isSubmitting}
				onClick={() => {
					clearCurrentEditableProductId();
					toggleProductModal();
				}}
			>
				Close
			</Button>
		</>
	);
};

ProductForm.propTypes = {
	pristine: PropTypes.bool,
	reset: PropTypes.func,
	initialValues: PropTypes.object,
	toggleProductModal: PropTypes.func,
	onCloseForm: PropTypes.func,
	origins: PropTypes.arrayOf(PropTypes.object),
	clearCurrentEditableProductId: PropTypes.func,
	isSubmitting: PropTypes.bool
};

export default ProductForm;
