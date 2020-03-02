import {
	SET_MIN,
	SET_MAX,
	SET_FILTER_BY_ORIGIN,
	RESET_FILTERS,
	SET_FILTER_PARAMS
} from "./actionTypes";

const initialState = {
	price: {
		min: 0,
		max: 1000
	},
	origins: []
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MIN:
			return {
				...state,
				price: { ...state.price, min: action.value }
			};
		case SET_MAX:
			return {
				...state,
				price: { ...state.price, max: action.value }
			};
		case SET_FILTER_BY_ORIGIN:
			const isOriginChecked = state.origins.includes(action.payload);
			const nextOrigins = isOriginChecked
				? [...state.origins].filter(origin => origin !== action.payload)
				: [...state.origins, action.payload];
			return {
				...state,
				origins: nextOrigins
			};
		case RESET_FILTERS:
			return initialState;
		case SET_FILTER_PARAMS:
			return {
				...action.payload
			};
		default:
			return state;
	}
};

export default filterReducer;
