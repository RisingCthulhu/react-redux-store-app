import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectProductsMinAndMaxPrice } from "../store/products/selectors";
import { setMin, setMax } from "../store/filter/actions";

const useSetTotalItemsMinAndMax = () => {
	const price = useSelector(selectProductsMinAndMaxPrice);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMin(price.min));
		dispatch(setMax(price.max));
	}, [price]);
};

export default useSetTotalItemsMinAndMax;
