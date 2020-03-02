import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";

import CartColumns from "../cart/CartColumns";
import Cart from "../../containers/cart/Cart";

const CartModal = ({ cartIds, isCartEmpty, toggleCartModal }) => {
	const history = useHistory();
	return (
		<div
			className="cart-modal"
			style={{ height: cartIds.length > 3 ? "75%" : "auto" }}
		>
			{!isCartEmpty && <CartColumns isModal />}
			<Cart isModal />
			{!isCartEmpty && (
				<div className="modal-buttons-container">
					<Button
						className="modal-button"
						onClick={() => toggleCartModal()}
					>
						Back To Store
					</Button>
					<Button
						className="modal-button"
						onClick={() => {
							history.push({ pathname: "/cart" });
							toggleCartModal();
						}}
					>
						Go To Cart
					</Button>
				</div>
			)}
		</div>
	);
};

CartModal.propTypes = {
	cartIds: PropTypes.arrayOf(PropTypes.string),
	isCartEmpty: PropTypes.bool,
	toggleCartModal: PropTypes.func
};

export default CartModal;
