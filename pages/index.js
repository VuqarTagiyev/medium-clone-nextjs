import Head from "next/head";
import Header from "../components/Header";
import { useEffect, useContext, useState } from "react";
import Context from "../context";
import { getArticles } from "./../firebase/utils/getArticles";
import Articles from "../components/Articles";

const Home = () => {
  const { articles, articlesDispatch } = useContext(Context);

  useEffect(() => {
    getArticles(articlesDispatch);
  }, []);

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
            </span>{" "}
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

      {/* Articles */}

      <Articles articles={articles} />
    </div>
  );
};

export default Home;
