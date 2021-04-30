import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function Store({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Store;
