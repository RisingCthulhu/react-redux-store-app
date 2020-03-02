import React from "react";
import { Button, Loader } from "semantic-ui-react";
import PropTypes from "prop-types";

const Error = ({
	text,
	errorMessage,
	action,
	isLoading,
	isInProductList = false
}) => {
	return (
		<div
			className={`error-component ${
				isInProductList ? "product-list-error" : ""
			}`}
		>
			<Loader
				className="error-component-loader"
				active={isLoading}
				size="massive"
			/>
			<h3>{text}</h3>
			<h4>{errorMessage}</h4>
			<Button onClick={() => action()}>Retry</Button>
		</div>
	);
};

Error.propTypes = {
	text: PropTypes.string,
	errorMessage: PropTypes.string,
	action: PropTypes.func,
	isLoading: PropTypes.bool,
	isInProductList: PropTypes.bool
};

export default Error;
