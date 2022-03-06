import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { uploadData } from "../../firebase/utils/uploadData";

const Create = () => {
  const [creator, setCreator] = useState("");
  const [creatorImage, setCreatorImage] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [article, setArticle] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !creatorImage) {
      setIsEmpty(true);
    } else {
      const newArticle = {
        creator,
        creatorImage,
        title,
        image,
        article,
      };
      uploadData(newArticle);
      setIsUploading(true);
    }
  };

  useEffect(() => {
    if (isUploading) {
      setTimeout(() => {
        setIsUploading(false);
        setIsSuccess(true);
      }, 5000);
    }
  }, [isUploading]);

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-2xl p-5">
        <h4 className="text-3xl font-bold">Share article</h4>
        <hr className="mt-2 py-3" />
      </div>
      {!isSuccess ? (
        <form
          className="relative mx-auto mb-10 flex max-w-2xl flex-col p-5"
          onSubmit={handleSubmit}
        >
          <label className="mb-5 block ">
            <span className="text-gray-700">Creator</span>
            <input
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Creator"
              type="text"
              required
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            />
          </label>
          <div className="flex items-center">
            {creatorImage && (
              <img
                className="mb-4 h-20 w-20 object-cover shadow-lg rounded-full"
                src={URL.createObjectURL(creatorImage)}
                alt=""
              />
            )}

            {creator && <p className="text-2xl mb-4 pl-3 ">{creator}</p>}
          </div>
          <label className="form-input mb-5 mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring">
            Upload Creator Image
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => setCreatorImage(e.target.files[0])}
            />
          </label>
          <label className="mb-5 block ">
            <span className="text-gray-700">Title</span>
            <input
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          {image && (
            <img
              className="mb-4 w-full object-cover shadow-lg"
              src={URL.createObjectURL(image)}
              alt=""
            />
          )}
          <label className="form-input mb-5 mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring">
            Upload Post Image
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <label className="mb-5 block ">
            <span className="text-gray-700">Article text</span>
            <textarea
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Article text"
              rows={8}
              required
              value={article}
              onChange={(e) => setArticle(e.target.value)}
            />
          </label>
          {isEmpty && (
            <div className="p-5 text-red-500">
              {!creatorImage && <p>Please upload Creator image</p>}
              {!image && <p>Please upload article image</p>}
            </div>
          )}

          {!isUploading ? (
            <button
              type="submit"
              className="flex items-center justify-center focus:shadow-outline cursor-pointer rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-400 focus:outline-none"
            >
              Share
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center justify-center focus:shadow-outline cursor-pointer rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-400 focus:outline-none"
            >
              <svg
                role="status"
                className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-white fill-yellow-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Loading...
            </button>
          )}
        </form>
      ) : (
        <div
          id="alert-border-4"
          class="max-w-2xl m-auto flex p-4 mb-4 bg-green-100 border-t-4 border-green-500 dark:bg-green-200"
          role="alert"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-green-700"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="ml-3 text-sm font-medium text-green-700">
            It will be shared in 60 seconds{" "}
            <Link href="/">
              <a href="#" class="font-semibold underline hover:text-green-800">
                Main page
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;
