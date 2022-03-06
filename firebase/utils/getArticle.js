import { ref, get, child } from "@firebase/database";
import { db } from "../index";

export const getArticle = (slug) => {
  const dbRef = ref(db);

  return new Promise((resolve) => {
    get(child(dbRef, "articles/")).then((res) => {
      if (res.exists()) {
        const data = res.val();
        resolve(data[slug]);
      }
    });
  });
};
