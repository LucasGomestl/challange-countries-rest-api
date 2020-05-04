import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import App from "./App";
import reducer from "./store/rootReducer";
import rootSaga from "./store/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(sagaMiddleware)(createStore)(reducer, devTools);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
