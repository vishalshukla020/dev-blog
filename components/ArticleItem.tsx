/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { ArticleType } from "interfaces";

interface Props {
  post: ArticleType;
}

const Articles: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`blog/${post.slug}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 cursor-pointer flex-none">
        <div className="max-h-[200px] w-full overflow-hidden">
          <img
            className="w-full object-cover"
            src={post.coverImage}
            alt="Sunset in the mountains"
            loading="lazy"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.description}</p>
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

export default Articles;
