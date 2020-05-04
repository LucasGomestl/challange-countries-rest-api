import searchSaga from "./searchSaga";
import { fork, all } from "redux-saga/effects";

function* RootSaga() {
  yield all([fork(searchSaga)]);
}

export default RootSaga;
