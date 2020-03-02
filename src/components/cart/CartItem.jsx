import React from "react";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

import calcTotal from "../../utils/calcTotal";

const CartItem = ({
    productId,
    quantity,
    name,
    price,
    img,
    updateCartProduct,
    removeProductFromCart
}) => {
    return (
        <div className="row-container">
            <div className="row-item">
                <img src={img} alt="product" />
            </div>
            <div className="row-item">{name}</div>
            <div className="row-item">{price}$</div>
            <div className="row-item">
                <Button
                    onClick={() => updateCartProduct(productId, quantity - 1)}
                >
                    -
                </Button>
                <div className="quantity" disabled>
                    {quantity}
                </div>
                <Button
                    onClick={() => updateCartProduct(productId, quantity + 1)}
                >
                    +
                </Button>
            </div>
            <div className="row-item">{calcTotal(quantity, price)}$</div>
            <div className="row-item">
                <Button
                    className="remove-button"
                    onClick={() => removeProductFromCart(productId)}
                >
                    Remove
                </Button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    productId: PropTypes.string,
    quantity: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    updateCartProduct: PropTypes.func,
    removeProductFromCart: PropTypes.func
};

export default CartItem;
