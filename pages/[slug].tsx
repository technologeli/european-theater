import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { marked } from "marked";
import Navbar from "../components/navbar";
import Link from "next/link";

interface Data {
  title: string;
  description: string;
}

interface BattleParams {
  htmlString: string;
  data: Data;
}

const Battle = ({ htmlString, data }: BattleParams) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <main>
        <Navbar />
        <div className="mx-auto max-w-6xl bg-gray-50 p-4 rounded-xl shadow-xl flex flex-col items-center space-y-4">
          <div
            id="md"
            className="flex flex-col space-y-4"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          />
          <Link href="/">
            <button className="text-gray-300 border bg-gray-800 hover:bg-gray-700 transition p-2 rounded-xl">
              Back to Map
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("battles");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface Params {
  slug: string;
}

interface FunctionParams {
  params: Params;
}

export const getStaticProps = async ({ params: { slug } }: FunctionParams) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("battles", slug + ".md"))
    .toString();

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  };
};

export default Battle;
