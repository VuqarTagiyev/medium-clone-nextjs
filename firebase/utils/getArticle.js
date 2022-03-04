import { ref, get, child } from "@firebase/database";
import { db } from "../index";

// action
import { actions } from "../../context/actions/articles";

export const getArticle = (articlesDispatch, id) => {
  const dbRef = ref(db);
  const data = {};
  get(child(dbRef, "articles/")).then((res) => {
    if (res.exists()) {
      const data = res.val();
      articlesDispatch(actions.getArticle(data[id]));
    }
  });
};
