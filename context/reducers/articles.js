import { actionTypes } from "../actionTypes/articles";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles,
      };
    case actionTypes.GET_ARTICLE:
      return {
        ...state,
        article: action.payload,
      };
    default:
      return state;
  }
};
