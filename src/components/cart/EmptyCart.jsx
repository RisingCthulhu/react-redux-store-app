import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const EmptyCart = ({ toggleCartModal, isCartModalOpen }) => {
  return (
    <React.Fragment>
      <h1 className="empty-cart-header">Cart is currently empty.</h1>
      <Link to="/products">
        <Button
          className="empty-cart-button"
          onClick={() => isCartModalOpen && toggleCartModal()}
        >
          Go To Store
        </Button>
      </Link>
    </React.Fragment>
  );
};

EmptyCart.defaultProps = {
  toggleCartModal: () => {}
};

EmptyCart.propTypes = {
  toggleCartModal: PropTypes.func,
  isCartModalOpen: PropTypes.bool
};

export default EmptyCart;
