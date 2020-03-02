import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useSelectProductById from "../../hooks/useSelectProductById";
import ProductFooter from "../../containers/products/ProductFooter";

const Product = ({ productId }) => {
	const { id, name, price, origin, isEditable } = useSelectProductById(
		productId
	);

	if (!id) return null;

	return (
		<Card>
			<Link to={`products/${id}`}>
				<Image
					src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
					wrapped
					ui={false}
				/>
			</Link>
			<Card.Content>
				<Card.Header>
					<Link
						to={`products/${id}`}
						className="card-header"
						data-testid="product-card-header"
					>
						{name}
					</Link>
				</Card.Header>
				<Card.Meta>
					<span>{`Origin: ${origin}`}</span>
				</Card.Meta>
			</Card.Content>
			<Card.Content extra>
				<ProductFooter
					id={id}
					price={price}
					name={name}
					isEditable={isEditable}
				/>
			</Card.Content>
		</Card>
	);
};

Product.propTypes = {
	productId: PropTypes.string
};

export default Product;
