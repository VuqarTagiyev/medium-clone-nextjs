import { createContext, useReducer, useState } from "react";
import { reducer as articlesReducer } from "./reducers/articles";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialArticles = {
    articles: [],
    article: {},
  };

  const [articlesState, articlesDispatch] = useReducer(
    articlesReducer,
    initialArticles
  );

  return (
    <Context.Provider value={{ ...articlesState, articlesDispatch }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
