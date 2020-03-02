import React from "react";
import PropTypes from "prop-types";
import { Loader, Dimmer } from "semantic-ui-react";

import CartColumns from "./CartColumns.jsx";
import CartItem from "./CartItem.jsx";
import EmptyCart from "./EmptyCart.jsx";

const Cart = ({
    cartIds,
    quantityById,
    nameById,
    priceById,
    removeProductFromCart,
    updateCartProduct,
    isModal = false,
    isCartModalOpen,
    toggleCartModal,
    postOrderRequest,
    isLoading,
    ...props
}) => {
    return (
        <>
            <Dimmer active={isLoading}>
                <Loader
                    active={isLoading}
                    className="cart-loader"
                    size="massive"
                >
                    Processing
                </Loader>
            </Dimmer>
            {cartIds.length < 1 && (
                <EmptyCart
                    toggleCartModal={toggleCartModal}
                    isCartModalOpen={isCartModalOpen}
                />
            )}
            {!isModal && (
                <div className={cartIds.length < 1 ? "hide-cart-columns" : ""}>
                    <CartColumns
                        cartIds={cartIds}
                        quantityById={quantityById}
                        postOrderRequest={postOrderRequest}
                    />
                </div>
            )}
            <div
                className="cart-item-list"
                style={{
                    height: isModal && cartIds.length > 3 ? "75%" : "auto"
                }}
            >
                {cartIds.map(productId => (
                    <CartItem
                        key={productId}
                        productId={productId}
                        img="http://dummyimage.com/800x600/4d494d/686a82.gif&text=placeholder+image"
                        quantity={quantityById[productId]}
                        name={nameById[productId]}
                        price={priceById[productId]}
                        removeProductFromCart={removeProductFromCart}
                        updateCartProduct={updateCartProduct}
                    />
                ))}
            </div>
        </>
    );
};

Cart.propTypes = {
    cartIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    quantityById: PropTypes.objectOf(PropTypes.number),
    nameById: PropTypes.objectOf(PropTypes.string),
    removeProductFromCart: PropTypes.func.isRequired,
    updateCartProduct: PropTypes.func.isRequired,
    isModal: PropTypes.bool,
    isCartModalOpen: PropTypes.bool.isRequired,
    toggleCartModal: PropTypes.func.isRequired,
    postOrderRequest: PropTypes.func,
    isLoading: PropTypes.bool
};

export default Cart;
