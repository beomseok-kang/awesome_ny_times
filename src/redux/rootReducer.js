import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import article, { articleSaga } from "./article";
import favorite, { addFavoriteSaga, removeFavoriteSaga } from "./favorite";

const rootReducer = combineReducers({
  article,
  favorite,
});

export function* rootSaga() {
  yield all([articleSaga(), addFavoriteSaga(), removeFavoriteSaga()]);
}

export default rootReducer;
