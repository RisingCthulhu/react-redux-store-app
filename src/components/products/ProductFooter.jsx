import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import useCheckIsItemInCart from "../../hooks/useCheckIsItemInCart";

const ProductFooter = ({
	id,
	price,
	name,
	addProductToCart,
	toggleCartModal,
	toggleProductModal,
	isEditable,
	setCurrentEditableProductId
}) => {
	const checkMark = "\u2713";
	const isItemInCart = useCheckIsItemInCart(id);

	return (
		<div className="product-footer">
			<h4 className="product-footer-price">{`Price: ${price}$`}</h4>
			{isItemInCart ? (
				<Button
					className="in-cart-button"
					onClick={() => {
						toggleCartModal();
					}}
				>
					{`${checkMark}`}In Cart
				</Button>
			) : isEditable ? (
				<Button
					className="product-edit-button"
					onClick={() => {
						toggleProductModal();
						setCurrentEditableProductId(id);
					}}
					data-testid="product-edit-button"
				>
					Edit Product
				</Button>
			) : (
				<Button
					onClick={() => {
						addProductToCart(id, price, name);
						toggleCartModal();
					}}
					data-testid="add-product-button"
				>
					Add To Cart
				</Button>
			)}
		</div>
	);
};

ProductFooter.propTypes = {
	id: PropTypes.string,
	price: PropTypes.number,
	name: PropTypes.string,
	addProductToCart: PropTypes.func,
	toggleCartModal: PropTypes.func,
	toggleProductModal: PropTypes.func,
	isEditable: PropTypes.bool,
	setCurrentEditableProduct: PropTypes.func
};

export default ProductFooter;
