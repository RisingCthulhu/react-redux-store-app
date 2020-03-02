import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setMin, setMax } from "../store/filter/actions";
import { queryParamsChanged } from "../store/products/actions";

const usePriceFilterChange = () => {
	const dispatch = useDispatch();

	return useCallback(
		(minPrice, maxPrice) => {
			console.log(minPrice, maxPrice);
			dispatch(setMin(minPrice));
			dispatch(setMax(maxPrice));
			dispatch(queryParamsChanged());
		},
		[dispatch]
	);
};

export default usePriceFilterChange;
