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
      <div className="overflow-hidden my-2 cursor-pointer text-foreground border-b-2 border-foreground pb-4 hover:scale-105 transition-all group">
        <div className="px-6 py-4">
          <div className="font-bold text-5xl mb-2 text-cyan group-hover:text-accent underline">
            {post.title}
          </div>
          <p className="text-foreground text-base opacity-90">
            {post.description || post.excerpt}
          </p>
        </div>
        <div className="flex flex-column align-center px-6 py-4">
          <p className="text-[#6F6F6F]">
            {post.timeReading.text} • {post.date}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
