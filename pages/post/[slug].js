import Header from "./../../components/Header";
import { server } from "../../config";
import { convertSlug } from "../../components/Utils/convertSlug";
const Post = ({ article }) => {
  return (
    <main>
      <Header />
      <img className="h-40 w-full object-cover" src={article?.image} alt="" />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{article?.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {article?.article.slice(0, 30)}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={article?.creatorImage}
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by{" "}
            <span className="text-green-600">{article?.creator}</span> -
            Published at {new Date(article?.created_at).toDateString()}
          </p>
        </div>
        <img
          src={article?.image}
          alt="article image"
          className="w-full object-cover shadow mt-4 rounded-xl"
        />
        <div className="mt-10">{article?.article}</div>
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

export const getStaticPaths = async () => {
  const articles = await fetch(`${server}/api/articles`).then((res) =>
    res.json()
  );

  const paths = articles.map((article) => ({
    params: { slug: convertSlug(article.title + "-" + article._id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const article = await fetch(
    `${server}/api/articles/${params.slug.split("-").reverse()[0]}`
  ).then((res) => res.json());

  return {
    props: {
      article,
    },
    revalidate: 60,
  };
};

export default Post;
