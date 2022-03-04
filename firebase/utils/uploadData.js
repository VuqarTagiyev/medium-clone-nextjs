import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { storage, db } from "../index";

import { set, ref as dbRef } from "@firebase/database";

export const uploadData = async (data) => {
  uploadImage(data);
};

// upload image to storage

const uploadImage = async (article) => {
  if (!article.image) return;
  const storageRef = ref(storage, `images/${article.image.name}`);
  const uploadTask = uploadBytesResumable(storageRef, article.image);

  uploadTask.on(
    "state_changed",
    (snapshot) => {},
    (error) => console.log(err),
    async () => {
      getDownloadURL(uploadTask.snapshot.ref).then((imageUrl) => {
        // sending Creator image -----------------------
        // ------------------------------------------------
        // ------------------------------------------------
        if (!article.creatorImage) return;
        const storageRef = ref(storage, `images/${article.creatorImage.name}`);
        const uploadTask = uploadBytesResumable(
          storageRef,
          article.creatorImage
        );

        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => console.log(err),
          async () => {
            await getDownloadURL(uploadTask.snapshot.ref).then(
              (creatorImageUrl) => {
                uploadArticle(article, imageUrl, creatorImageUrl);
              }
            );
          }
        );
        // ------------------------------------------------
        // ------------------------------------------------
        // ------------------------------------------------
      });
    }
  );
};

// upload article to database

const uploadArticle = (article, imageUrl, creatorImageUrl) => {
  const time = new Date().getTime();
  const generatedId = generateId();
  const data = {
    _id: generatedId,
    title: article.title,
    creator: article.creator,
    article: article.article,
    created_at: time,
    image: imageUrl,
    creatorImage: creatorImageUrl,
  };
  set(dbRef(db, "articles/" + data._id), data).then(() =>
    console.log("success")
  );
};

// id generator
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};
