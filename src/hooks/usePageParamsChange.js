import { useCallback } from "react";
import { useDispatch } from "react-redux";

import {
	queryParamsChanged,
	setProductsPerPage,
	setCurrentPage
} from "../store/products/actions";

const usePageParamsChange = () => {
	const dispatch = useDispatch();

	return useCallback(
		(page, perPage) => {
			dispatch(setCurrentPage(page));
			dispatch(setProductsPerPage(perPage));
			dispatch(queryParamsChanged());
		},
		[dispatch]
	);
};

export default usePageParamsChange;
