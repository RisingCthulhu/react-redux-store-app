import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";

import AppWrapper from "./containers/AppWrapper";
import "./App.css";
import Header from "./containers/Header";
import ProductsPage from "./components/products/ProductsPage";
import DetailProduct from "./containers/products/DetailProduct";
import Cart from "./containers/cart/Cart";
import MyProducts from "./components/products/MyProducts";
import OrdersList from "./containers/orders/OrdersList";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/products/:productId" component={DetailProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/myProducts" component={MyProducts} />
        <Route exact path="/orders" component={OrdersList} />
        <Route path="*">
          <Redirect to="/products" />
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
