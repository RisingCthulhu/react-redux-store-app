import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import PropTypes from "prop-types";

import configureStore from "../store/configureStore";

const history = createBrowserHistory();

export const store = configureStore({
	history
});

const AppWrapper = ({ children }) => (
	<Provider store={store}>
		<Router history={history}>{children}</Router>
	</Provider>
);

AppWrapper.propTypes = {
	children: PropTypes.arrayOf(PropTypes.node)
};

export default AppWrapper;
