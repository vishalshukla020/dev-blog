import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { api } from "utils/lib";
import BlogCard from "components/Blog/BlogCard";
import Transition from "components/Transition";

interface Props {
  posts: any;
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Transition id="blog">
      <div>
        <Head>
          <title>vishaaxl | web dev</title>
          <meta
            name="description"
            content="Portfolio website | vishal shukla"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="center flex-wrap flex-col">
          {posts.map((post: any, index: string) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </Transition>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const articles = api.getAllArticles([
    "slug",
    "title",
    "description",
    "date",
    "coverImage",
    "excerpt",
    "timeReading",
    "cover",
    "tags",
  ]);
  return { props: { posts: articles } };
};
export default Blog;
