import React from "react";
import NewsCard from "../../components/News/NewsCard";
import "./news.css";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="container news-page">
      <div className="news-page-header">
        <h1>News</h1>
        {/* <Link to="/news/add">Add News</Link> */}
      </div>
      <div className="news-display-grid">
        <NewsCard />
      </div>
    </div>
  );
};

export default News;
