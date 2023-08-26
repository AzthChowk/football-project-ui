import React, { useState, useEffect } from "react";
import axios from "axios";
import "./news-card.css";

const url = "http://localhost:9090/news";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsList = await axios.get(url);
        console.log(newsList.data);
        setNews(newsList.data);
      } catch (error) {
        console.log(error.message);
        // setError(true);
      }
    };
    fetchNews();
  }, []);
  return (
    <>
      {news.map(
        ({
          _id,
          newsTitle,
          newsAuthor,
          fullNews,
          newsHighlights,
          isFeaturedNews,
          newsImgUrl,
          category,
          tags,
          timeCreated,
        }) => {
          return (
            <div key={_id} className="news-card-grid">
              <div>
                <img src={newsImgUrl} alt="" />
              </div>
              <div>
                <h3>{newsTitle}</h3>
                <h4>Author : {newsAuthor}</h4>
                <p>{timeCreated}</p>
                <br />
                <p>{newsHighlights}</p>

                {/* <p>{fullNews}</p> */}
                {/* <p>Category : {category}</p>
                <p>Tags : {tags}</p> */}
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default NewsCard;
