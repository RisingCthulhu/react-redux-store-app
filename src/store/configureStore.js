import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";

const configureStore = ({ history, rootSaga }) => {
	const sagaMiddleware = createSagaMiddleware({
		context: {
			history
		}
	});

	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(sagaMiddleware))
	);

	Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));

	return store;
};

const createSagaInjector = (runSaga, rootSaga) => {
	const injectedSagas = new Map();

	const isInjected = key => injectedSagas.has(key);

	const injectSaga = (key, saga, ...args) => {
		if (isInjected(key)) return;

		const task = runSaga(saga, ...args);
		injectedSagas.set(key, task);
	};

	const ejectSaga = key => {
		const task = injectedSagas.get(key);

		if (task && task.isRunning()) task.cancel();

		injectedSagas.delete(key);
	};

	if (rootSaga) {
		injectSaga("root", rootSaga, injectedSagas);
	}

	return { injectSaga, ejectSaga, runSaga };
};

export default configureStore;
