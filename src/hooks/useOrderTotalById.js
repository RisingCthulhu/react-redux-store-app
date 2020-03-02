import { useMemo } from "react";
import { useSelector } from "react-redux";

import { makeOrderTotalByIdSelector } from "../store/orders/selectors";

const useOrderTotalById = id => {
	const totalByIdSelector = makeOrderTotalByIdSelector(id);

	const total = useSelector(totalByIdSelector);

	return useMemo(() => total, [total]);
};

export default useOrderTotalById;
