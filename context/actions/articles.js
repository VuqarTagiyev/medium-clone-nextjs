import { actionTypes } from "../actionTypes/articles";

const getAllArticles = (articles) => {
  return {
    type: actionTypes.GET_ALL_ARTICLES,
    payload: {
      articles,
    },
  };
};

const getArticle = (article) => {
  return {
    type: actionTypes.GET_ARTICLE,
    payload: {
      article,
    },
  };
};

export const actions = {
  getAllArticles,
  getArticle,
};
