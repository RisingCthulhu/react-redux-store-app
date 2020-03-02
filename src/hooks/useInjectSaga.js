import { useEffect } from "react";

import { store } from "../containers/AppWrapper";

export const useInjectSaga = (key, saga, ...args) => {
	useEffect(() => {
		store.injectSaga(key, saga, ...args);

		return () => {
			store.ejectSaga(key);
		};
	}, [key, saga]);
};
