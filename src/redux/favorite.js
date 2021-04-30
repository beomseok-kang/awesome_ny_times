import { put, takeEvery } from "@redux-saga/core/effects";
import { select } from "redux-saga/effects";

const initialState = {
  docs: [],
  numPage: 0,
  numDoc: 0,
};

const ADD_FAVORITE = "favorite/ADD_FAVORITE";
const ADD_FAVORITE_COMPLETE = "favorite/ADD_FAVORITE_COMPLETE";
const REMOVE_FAVORITE = "favorite/REMOVE_FAVORITE";
const REMOVE_FAVORITE_COMPLETE = "favorite/REMOVE_FAVORITE_COMPLETE";
const ADD_PAGE = "favorite/ADD_PAGE";
const REMOVE_PAGE = "favorite/REMOVE_PAGE";

export const addFavorite = (doc) => ({
  type: ADD_FAVORITE,
  payload: doc,
});

// The bottom id is the _id prop in document object.
export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});

export function* addFavoriteSaga() {
  yield takeEvery(ADD_FAVORITE, function* (action) {
    const favorite = yield select((state) => state.favorite);
    if (
      !favorite.docs.length ||
      favorite.docs[favorite.numPage - 1].length === 10
    ) {
      yield put({
        type: ADD_PAGE,
      });
    }
    yield put({
      type: ADD_FAVORITE_COMPLETE,
      payload: action.payload,
    });
  });
}

export function* removeFavoriteSaga() {
  yield takeEvery(REMOVE_FAVORITE, function* (action) {
    const favorite = yield select((state) => state.favorite);
    yield put({
      type: REMOVE_FAVORITE_COMPLETE,
      payload: action.payload,
    });
    if (favorite.docs[favorite.numPage - 1].length === 1) {
      yield put({
        type: REMOVE_PAGE,
      });
    }
  });
}

function favorite(state = initialState, action) {
  const { docs, numDoc, numPage } = state;
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
    case ADD_FAVORITE_COMPLETE:
      return {
        ...state,
        numDoc: numDoc + 1,
        docs: docs
          .slice(0, -1)
          .concat([docs[numPage - 1].concat(action.payload)]),
      };
    case REMOVE_FAVORITE:
      return state;
    case REMOVE_FAVORITE_COMPLETE:
      return {
        ...state,
        numDoc: numDoc - 1,
        docs: docs.map((page) =>
          page.filter((doc) => doc._id !== action.payload)
        ),
      };
    case ADD_PAGE:
      return {
        ...state,
        numPage: state.numPage + 1,
        docs: state.docs.concat([[]]),
      };
    case REMOVE_PAGE:
      return {
        ...state,
        numPage: state.numPage - 1,
        docs: state.docs.slice(0, -1),
      };
    default:
      return state;
  }
}

export default favorite;
