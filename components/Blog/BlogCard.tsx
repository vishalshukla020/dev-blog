/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { ArticleType } from "interfaces";

interface Props {
  post: ArticleType;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`blog/${post.slug}`}>
      <div className="overflow-hidden cursor-pointer hover:scale-[0.98] transition-all group bg-lightestNavy p-5 my-5 rounded-lg">
        <div className="py-4">
          <div className="font-medium text-4xl mb-4 text-white group-hover:text-green underline">
            {post.title}
          </div>
          <p className="text-foreground text-xl text-slate">
            {post.description || post.excerpt}
          </p>
        </div>
        <div className="flex flex-column align-center py-2">
          <p className="text-slate">
            {post.timeReading.text} | {post.date}
          </p>
        </div>
        <div className="pt-4 pb-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block border-2 border-green text-white rounded-lg px-3 py-1 text-lg mr-2 mb-2"
            >
              - {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
