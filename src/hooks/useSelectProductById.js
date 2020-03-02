import { useMemo } from "react";
import { useSelector } from "react-redux";

import { makeSelectProductById } from "../store/products/selectors";

const useSelectProductById = id => {
	const productByIdSelector = makeSelectProductById(id);

	const product = useSelector(productByIdSelector);

	return useMemo(
		() => ({
			...product
		}),
		[product]
	);
};

export default useSelectProductById;
