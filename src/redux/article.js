import { call, put, takeLatest } from "@redux-saga/core/effects";
import { fetchArticles } from "../api/articleApi";

const initialState = {
  docs: [],
  numPage: 0,
  query: "",
  loading: false,
  error: null,
};

const GET_ARTICLES = "article/GET_ARTICLES";
const GET_ARTICLES_LOADING = "article/GET_ARTICLES_LOADING";
const GET_ARTICLES_SUCCESS = "article/GET_ARTICLES_SUCCESS";
const GET_ARTICLES_ERROR = "article/GET_ARTICLES_ERROR";
const RESET_ARTICLES = "article/RESET_ARTICLES";

export const getArticles = (query, page) => ({
  type: GET_ARTICLES,
  payload: { query, page },
});

export const resetArticles = () => ({
  type: RESET_ARTICLES,
});

export function* articleSaga() {
  yield takeLatest(GET_ARTICLES, function* (action) {
    // payload will be { query: string, page: number }
    const { query, page } = action.payload;
    try {
      yield put({
        type: GET_ARTICLES_LOADING,
      });
      const articles = yield call(fetchArticles, query, page);
      yield put({
        type: GET_ARTICLES_SUCCESS,
        payload: articles,
      });
    } catch (e) {
      yield put({
        type: GET_ARTICLES_ERROR,
        payload: e,
      });
    }
  });
}

function article(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, query: action.payload.query };
    case GET_ARTICLES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ARTICLES_SUCCESS:
      // payload will be an array of docs
      return {
        query: state.query,
        loading: false,
        docs: [...state.docs, action.payload],
        numPage: state.numPage + 1,
        error: null,
      };
    case GET_ARTICLES_ERROR:
      // payload will be the error object
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_ARTICLES:
      return initialState;
    default:
      return state;
  }
}

export default article;
