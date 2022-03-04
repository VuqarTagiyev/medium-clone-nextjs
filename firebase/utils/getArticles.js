import { ref, get, child } from "@firebase/database";
import { db } from "../index";

// action
import { actions } from "../../context/actions/articles";

export const getArticles = (articlesDispatch) => {
  const dbRef = ref(db);
  const data = {};
  get(child(dbRef, "articles/")).then((res) => {
    if (res.exists()) {
      const data = res.val();
      const keys = Object.keys(data);
      const values = Object.values(data);
      articlesDispatch(actions.getAllArticles(values));
    }
  });
};
