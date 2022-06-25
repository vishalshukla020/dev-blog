import React from "react";

interface Props {
  content: React.ReactNode;
}

const Content = ({ content }: Props) => (
  <div className="flex flex-col items-center justify-center">{content}</div>
);

export default Content;
