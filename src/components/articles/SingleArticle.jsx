import React from "react";
import { Link } from "react-router-dom";

export default function SingleArticle({ article }) {
  const {
    title,
    topic,
    author,
    body,
    article_img_url,
    comment_count,
    created_at,
    votes,
    article_id,
  } = article;

  const articleDate = new Date(created_at).toLocaleDateString("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <li className="article--single">
      <h1>{title}</h1>
      <h3>by: {author}</h3>

      <div className="hover:scale-105 transition-transform ease-in duration-150">
        <Link to={`/articles/${article_id}`}>
          <img
            src={article_img_url}
            alt={title}
            className="w-full px-20 my-8"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn">
          <Link to={`/articles/${article_id}`}>Go to Article</Link>
        </button>
      </div>
      <h4>{articleDate}</h4>
      <div className="my-2">
        <Link to={`?topic=${topic}`} className="topic">
          {topic}
        </Link>
      </div>
      {/* <p>{topic}</p> */}
      <p>{body}</p>
      <p className="mt-4">Comments: {comment_count}</p>
      <p>Votes: {votes}</p>
    </li>
  );
}
