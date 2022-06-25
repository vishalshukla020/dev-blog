import { Meta } from "interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

import { api } from "utils/lib";
import Header from "components/Article/Header";

interface MDXPost {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: Meta;
  };
}

const PostPage: NextPage<MDXPost> = ({ post: { source, meta } }) => {
  return (
    <div className="max-w-[50rem] mx-auto">
      <Header
        title={meta.title}
        description={meta.description}
        date={meta.date}
      />
      <div className="mt-12 prose md:prose-xl">
        <MDXRemote {...source} />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, data } = api.getRawArticleBySlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta: data } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = api.getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
