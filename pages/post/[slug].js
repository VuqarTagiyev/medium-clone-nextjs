import Header from './../../components/Header'

const Post = ({ post }) => {
  console.log(post)
  return (
    <main>
      <Header />
      <img
        className="h-40 w-full object-cover"
        src="https://images.unsplash.com/photo-1607207685777-0986a1eede0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt=""
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">Post title</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <p className="text-sm font-extralight">
            Blog post by <span className="text-green-600">Vugar Taghiyev</span>{' '}
            - Published at 21.02.2022 19:50:00
          </p>
        </div>
        <div className="mt-10">
          PortableText Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum, quisquam.
        </div>
      </article>

      <hr className="my-5 mx-auto max-w-lg border border-yellow-500" />

      <form className="mx-auto mb-10 flex max-w-2xl flex-col p-5">
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

      {/* Comments */}
      <div className="my-10 mx-auto flex max-w-2xl flex-col space-y-2 p-10 shadow shadow-yellow-500">
        <h3 className="text-4xl">Comments</h3>
        <hr />

        <div>
          <p>
            <span className="text-yellow-500">Comment owner</span> Comment text
            1
          </p>
        </div>
        <div>
          <p>
            <span className="text-yellow-500">Comment owner</span> Comment text
            1
          </p>
        </div>
      </div>
    </main>
  )
}

export default Post
