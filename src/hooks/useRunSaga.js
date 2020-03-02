import { useEffect, useRef, useCallback } from "react";

import { store } from "../containers/AppWrapper";

export const useRunSaga = (saga, cancelOnUnmount, ...args) => {
	const taskRef = useRef(null);

	useEffect(() => {
		return () => {
			if (cancelOnUnmount) taskRef.current.cancel();
		};
	}, [cancelOnUnmount]);

	return useCallback(
		(...args) => {
			if (taskRef.current && taskRef.current.isRunning())
				taskRef.current.cancel();

			taskRef.current = store.runSaga(saga, ...args);

			return taskRef.current.toPromise();
		},
		[saga]
	);
};
