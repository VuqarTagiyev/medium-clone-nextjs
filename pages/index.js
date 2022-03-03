import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Link from 'next/link'

const Home = ({ posts }) => {
  console.log(posts)
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to write, read, and connect
          </h1>
          <h2 className="">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt=""
        />
      </div>

      {/* Posts */}

      <div className="grap-3 md:grap-6 grid grid-cols-1 p-2 sm:grid-cols-2 md:p-6 lg:grid-cols-3">
        <Link href="/post/1">
          <div className="group cursor-pointer overflow-hidden rounded-lg border">
            <img
              className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              src="https://images.unsplash.com/photo-1607207685777-0986a1eede0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              alt=""
            />
            <div className="flex justify-between bg-white p-5">
              <div>
                <p className="text-lg font-bold">Title</p>
                <p className="text-xs">
                  Description by <span>Author</span>
                </p>
              </div>

              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await fetch(
    'https://medium-clone-gg88tbqfc-vuqartagiyev.vercel.app/api/posts'
  ).then((res) => res.json())
  return {
    props: {
      posts,
    },
  }
}

// https://medium-clone-gg88tbqfc-vuqartagiyev.vercel.app/api/posts

export default Home
