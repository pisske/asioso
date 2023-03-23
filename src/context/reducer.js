import {
  // GET_NEWS_BEGIN,
  // GET_NEWS_SUCCESS,
  // GET_NEWS_ERROR,
  HANDLE_SEARCH,
  DELETE_SINGLE_NEWS,
  DELETE_ALL_NEWS,
  GET_ALL_NEWS,
  SET_CURRENT_NEWS_OBJECT,
  FILTER_BY_SOURCE,
} from "../context/actions.js";

const reducer = (state, action) => {
  if (action.type === GET_ALL_NEWS) {
    return {
      ...state,
      isLoading: false,
      news: action.payload,
    };
  }

  if (action.type === HANDLE_SEARCH) {
    return { ...state, text: action.payload };
  }

  if (action.type === SET_CURRENT_NEWS_OBJECT) {
    return { ...state, currentNewsObject: action.payload };
  }

  if (action.type === DELETE_SINGLE_NEWS) {
    return {
      ...state,
      news: state.news.filter((item) => item !== action.payload),
    };
  }

  if (action.type === FILTER_BY_SOURCE) {
    return {
      ...state,
      news: state.news.filter((item) => item.source.name === action.payload),
    };
  }

  if (action.type === DELETE_ALL_NEWS) {
    return { ...state, news: [] };
  }

  throw new Error(`no such action ${action.type}`);
};

export default reducer;
