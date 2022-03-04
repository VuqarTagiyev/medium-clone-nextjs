import Header from "./../../components/Header";
import { useContext, useEffect } from "react";

import Context from "../../context";
import { getArticle } from "../../firebase/utils/getArticle";

const Post = ({ slug }) => {
  const { article, articlesDispatch } = useContext(Context);

  useEffect(() => {
    getArticle(articlesDispatch, slug.split("-").reverse()[0]);
  }, []);

  if (Object.keys(article).length === 0)
    return (
      <div>
        <Header />
        <div className="w-full h-96 grid place-content-center">
          <svg
            role="status"
            className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-green-600"
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
        </div>
      </div>
    );
  else
    return (
      <main>
        <Header />
        <img
          className="h-40 w-full object-cover"
          src={article?.article.image}
          alt=""
        />

        <article className="mx-auto max-w-3xl p-5">
          <h1 className="mt-10 mb-3 text-3xl">{article?.article.title}</h1>
          <h2 className="mb-2 text-xl font-light text-gray-500">
            {article?.article.article.slice(0, 30)}
          </h2>
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={article?.article.creatorImage}
              alt=""
            />
            <p className="text-sm font-extralight">
              Blog post by{" "}
              <span className="text-green-600">{article?.article.creator}</span>{" "}
              - Published at{" "}
              {new Date(article?.article.created_at).toDateString()}
            </p>
          </div>
          <img
            src={article?.article.image}
            alt="article image"
            className="w-full object-cover shadow mt-4 rounded-xl"
          />
          <div className="mt-10">{article?.article.article}</div>
        </article>

        <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />

        {/* <form className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Enjoyed this article?</h4>
          <hr className="mt-2 py-3" />
          <label className="mb-5 block ">
            <span className="text-gray-700">Name</span>
            <input
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Your name"
              type="text"
            />
          </label>
          <label className="mb-5 block ">
            <span className="text-gray-700">Email</span>
            <input
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Your Email"
              type="text"
            />
          </label>
          <label className="mb-5 block ">
            <span className="text-gray-700">Commend</span>
            <textarea
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Your Commend"
              rows={8}
            />
          </label>
          <div className="p-5 text-red-500">
            There was a problem with your submission.
          </div>

          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-400 focus:outline-none"
          />
        </form>

        <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
          <h3 className="text-4xl">Comments</h3>
          <hr />

          <div>
            <p>
              <span className="text-yellow-500">Comment owner</span> Comment
              text 1
            </p>
          </div>
          <div>
            <p>
              <span className="text-yellow-500">Comment owner</span> Comment
              text 1
            </p>
          </div>
        </div> */}
      </main>
    );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      slug: params.slug,
    },
  };
};

export default Post;
