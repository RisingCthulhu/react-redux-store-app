import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

import OrderItem from "./OrderItem";
import OrderColumns from "./OrderColumns";
import useOrderTotalById from "../../hooks/useOrderTotalById";

const Order = ({ id, pieces, createdAt }) => {
	const [isHidden, setIsHidden] = useState(true);

	const total = useOrderTotalById(id);

	const options = {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "numeric"
	};

	const createdAtDate = new Date(createdAt);
	const displayCreatedAt = new Intl.DateTimeFormat(undefined, options).format(
		createdAtDate
	);

	return (
		<div className="order">
			<div className="order-header">
				<div>
					<h3 className="order-id">{`Order ID: ${id}`}</h3>
					<h5 className="order-created-at">{`Created at ${displayCreatedAt}`}</h5>
				</div>
				<div className="order-header-right-column">
					<h3>Total: {total}$</h3>
					<Button
						className="order-header-button"
						onClick={() => setIsHidden(!isHidden)}
					>
						{isHidden ? "Details" : "Hide"}
					</Button>
				</div>
			</div>
			<div className={isHidden ? "order-details-hidden" : ""}>
				<OrderColumns />
				{pieces.map(piece => (
					<OrderItem
						key={piece.id}
						img="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"
						name={piece.product.name}
						price={piece.product.price}
						count={piece.count}
					/>
				))}
			</div>
		</div>
	);
};

Order.propTypes = {
	id: PropTypes.string,
	pieces: PropTypes.array,
	createdAt: PropTypes.string
};

export default Order;
