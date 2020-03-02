import React, { useEffect } from "react";
import { Card, Loader, Dimmer } from "semantic-ui-react";
import PropTypes from "prop-types";

import Product from "./Product.jsx";
import NothingFound from "../../containers/products/NothingFound";
import fetchProductsWatcher from "../../sagas/productListSaga";
import queryParamsWatcher from "../../sagas/queryParamsSaga";
import { useInjectSaga } from "../../hooks/useInjectSaga";
import Error from "../Error";

const ProductList = ({
	productsIds,
	isLoading,
	getProductsRequest,
	queryParamsChanged,
	isEditable = false,
	setIsEditable,
	isWaitingTillSelectionEnd,
	errorMessage
}) => {
	useInjectSaga("productsListSaga", fetchProductsWatcher);
	useInjectSaga("queryParamsSaga", queryParamsWatcher);

	useEffect(() => {
		isEditable ? setIsEditable(true) : setIsEditable(false);
		queryParamsChanged();
	}, [isEditable, setIsEditable, queryParamsChanged]);

	if (errorMessage.length !== 0)
		return (
			<Error
				text="Error while fetching products"
				errorMessage={errorMessage}
				action={getProductsRequest}
				isLoading={isLoading}
				isInProductList={true}
			/>
		);

	if (!isLoading && productsIds.length === 0) return <NothingFound />;

	return (
		<>
			<Dimmer active={isLoading} className="product-list-dimmer" />
			<Loader
				className="product-list-loader"
				active={isWaitingTillSelectionEnd || isLoading}
				size="massive"
				inverted
			>
				Loading
			</Loader>
			<Card.Group itemsPerRow={4} className="product-list">
				{productsIds.map(productId => (
					<Product key={productId} productId={productId} />
				))}
			</Card.Group>
		</>
	);
};

ProductList.propTypes = {
	productsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
	isLoading: PropTypes.bool.isRequired,
	isEditable: PropTypes.bool,
	setIsEditable: PropTypes.func,
	getProductsRequest: PropTypes.func,
	isWaitingTillSelectionEnd: PropTypes.bool,
	errorMessage: PropTypes.string
};

export default ProductList;
