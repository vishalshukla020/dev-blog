import React from "react";
import Header from "./Header";
import Content from "./Content";

interface Props {
  readingTime: {
    text: string;
  };
  title: string;
  description: string;
  date: string;
  ogImage: {
    url: string;
  };
  content: React.ReactNode;
  slug: string;
}

const Article = ({
  readingTime,
  title,
  description,
  date,
  ogImage,
  content,
}: Props) => (
  <div className="flex justify-center items-center flex-col">
    <Header
      readingTime={readingTime}
      title={title}
      description={description}
      date={date}
      ogImage={ogImage}
    />
    <Content content={content} />
    <hr />
  </div>
);

export default Article;
