import { useState, useEffect } from "react";

import { NewsCard } from "./latestNews/NewsCard";

const key = "88804fd27daf4133b20f9cd7037177bf";
const newsURL = `https://newsapi.org/v2/top-headlines?country=se&apiKey=${key}`;

export const LatestNews = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedNews, setFetchedNews] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // fetch(newsURL)
      //   .then((res) => res.json())
      //   .then((newsData) => {
      //     setFetchedNews(newsData.articles);
      //     setFetchComplete(true);
      //   })
      //   .catch((error) => {
      //     console.log(error, "There has been an error");
      //   });
      const data = await fetch(newsURL);
      const json = await data.json();
      console.log(json)
      setFetchedNews(json.articles);
      setFetchComplete(true);
    };

    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  if (!fetchComplete)
    return (
      <div className="loader-position">
        <span className="loader"></span>
      </div>
    );

  // fetchedNews.slice(4,16).map((news) => {

  return (
    <div className="latest-news-page">
      <h3>LatestNews</h3>
      <div className="news-card-container">
        {fetchedNews.map((news, index) => {
          return <NewsCard key={index} news={news} />;
        })}
      </div>
    </div>
  );
};
