import { Meta } from "interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import { api } from "utils/lib";
import Transition from "components/Transition";
import BlogHeader from "components/Blog/BlogHeader";

interface MDXPost {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: Meta;
  };
}

const PostPage: NextPage<MDXPost> = ({ post: { source, meta } }) => {
  return (
    <Transition id="blog-page">
      <div className="max-w-[50rem] mx-auto">
        <BlogHeader meta={meta} />
        <div className="prose max-w-prose prose-xl md:prose-2xl text-lightestSlate prose-a:text-white prose-code:text-green py-5">
          <MDXRemote {...source} />
        </div>
      </div>
    </Transition>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, data } = api.getRawArticleBySlug(slug);
  const timeReading: any = readingTime(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: { post: { source: mdxSource, meta: { ...data, timeReading } } },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = api.getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
