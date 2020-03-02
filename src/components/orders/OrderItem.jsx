import React from "react";
import PropTypes from "prop-types";

const OrderItem = ({ img, name, price, count }) => {
	return (
		<div className="row-container order-columns">
			<div className="row-item">
				<img src={img} alt="product" />
			</div>
			<div className="row-item">{name}</div>
			<div className="row-item">{price}$</div>
			<div className="row-item">{count}</div>
			<div className="row-item">{price * count}$</div>
		</div>
	);
};

OrderItem.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.number,
	count: PropTypes.number
};

export default OrderItem;
