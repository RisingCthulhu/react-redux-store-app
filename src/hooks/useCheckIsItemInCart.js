import { useMemo } from "react";
import { useSelector } from "react-redux";

import { makeSelectCartProductById } from "../store/cart/selectors";

const useCheckIsItemInCart = productId => {
	const isProductInCart = !!useSelector(makeSelectCartProductById(productId));

	return useMemo(() => isProductInCart, [isProductInCart]);
};

export default useCheckIsItemInCart;
