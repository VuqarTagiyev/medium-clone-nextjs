import { ref, get, child } from "@firebase/database";
import { db } from "../index";

export const getArticles = () => {
  const dbRef = ref(db);
  return new Promise((resolve) => {
    get(child(dbRef, "articles/")).then((res) => {
      if (res.exists()) {
        const data = res.val();
        const values = Object.values(data);
        resolve(values);
      }
    });
  });
};
