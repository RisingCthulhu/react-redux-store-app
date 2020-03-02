import { useMemo } from "react";
import { get } from "lodash";

import useSelectProductById from "./useSelectProductById";
const useProductFormInitialValues = id => {
	const productData = useSelectProductById(id);

	return useMemo(
		() => ({
			name: get(productData, "name", ""),
			price: get(productData, "price", undefined),
			origin: get(productData, "origin", "")
		}),
		[productData]
	);
};

export default useProductFormInitialValues;
