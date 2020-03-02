import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { setFilterByOrigin } from "../store/filter/actions";
import { queryParamsChanged } from "../store/products/actions";

const useOriginFilterChange = () => {
	const dispatch = useDispatch();

	return useCallback(
		value => {
			dispatch(setFilterByOrigin(value));
			dispatch(queryParamsChanged());
		},
		[dispatch]
	);
};

export default useOriginFilterChange;
