import { keyBy } from "lodash";

const normalize = data => {
	const dataById = keyBy(data, ({ id }) => id);
	const allIds = Object.keys(dataById);

	return {
		byId: dataById,
		allIds
	};
};

export default normalize;
