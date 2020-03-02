import React from "react";
import PropTypes from "prop-types";

import OrderButton from "./OrderButton";

const CartColumns = ({ isModal, cartIds, quantityById, postOrderRequest }) => {
    return (
        <div className="row-container cart-columns">
            <div className="row-item">Image</div>
            <div className="row-item">Name</div>
            <div className="row-item">Price</div>
            <div className="row-item">Quantity</div>
            <div className="row-item">Total</div>
            <div className="row-item">
                {!isModal && (
                    <OrderButton
                        cartIds={cartIds}
                        quantityById={quantityById}
                        postOrderRequest={postOrderRequest}
                    />
                )}
            </div>
        </div>
    );
};

CartColumns.propTypes = {
    isModal: PropTypes.bool,
    cartIds: PropTypes.arrayOf(PropTypes.string),
    quantityById: PropTypes.objectOf(PropTypes.number),
    postOrderRequest: PropTypes.func
};

export default CartColumns;
