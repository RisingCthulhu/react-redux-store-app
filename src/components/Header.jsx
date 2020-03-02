import React, { useEffect } from "react";
import { Menu } from "semantic-ui-react";
import { Link, useRouteMatch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

import CartModal from "../containers/modal/CartModal";
import ProductModal from "./modal/ProductModal.jsx";
import Modal from "./modal/Modal";
import getOriginsSaga from "../sagas/getOriginsSaga";
import { useInjectSaga } from "../hooks/useInjectSaga";

const Header = ({
  total,
  isCartModalOpen,
  isProductModalOpen,
  toggleProductModal,
  currentEditableProductId,
  getOriginsRequest
}) => {
  useInjectSaga("getOriginsSaga", getOriginsSaga);

  useEffect(() => {
    getOriginsRequest();
  }, [getOriginsRequest]);

  const matchCart = useRouteMatch("/cart");
  const matchProducts = useRouteMatch("/products");
  const matchMyProducts = useRouteMatch("/myProducts");

  return (
    <>
      <Menu className="menu">
        <Link to="/products">
          <Menu.Item name="home" active={Boolean(matchProducts)} />
        </Link>
        <Link to="/myProducts">
          <Menu.Item name="my products" active={Boolean(matchMyProducts)} />
        </Link>
        <Menu.Item name="add product" onClick={() => toggleProductModal()} />
        <Menu.Menu position="right">
          <Menu.Item className="header-total">{`Total: ${total}$`}</Menu.Item>
          <Link to="/cart">
            <Menu.Item name="cart" active={Boolean(matchCart)} />
          </Link>
        </Menu.Menu>
      </Menu>
      <Modal isAnyModalOpen={isProductModalOpen || isCartModalOpen}>
        {isProductModalOpen && (
          <ProductModal currentEditableProductId={currentEditableProductId} />
        )}
        {isCartModalOpen && <CartModal />}
      </Modal>
      <ToastContainer className="toast-container" />
    </>
  );
};

Header.propTypes = {
  total: PropTypes.number,
  isCartModalOpen: PropTypes.bool,
  isProductModalOpen: PropTypes.bool,
  toggleProductModal: PropTypes.func,
  currentEditableProductId: PropTypes.string,
  getOriginsRequest: PropTypes.func
};

export default Header;
