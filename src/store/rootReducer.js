import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import productsReducer from "./products/reducer";
import modalReducer from "./modal/reducer";
import cartReducer from "./cart/reducer";
import filterReducer from "./filter/reducer";
import ordersReducer from "./orders/reducer";

const rootReducer = combineReducers({
	products: productsReducer,
	modal: modalReducer,
	cart: cartReducer,
	filter: filterReducer,
	form: formReducer,
	orders: ordersReducer
});

export default rootReducer;
