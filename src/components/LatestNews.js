import { useState, useEffect } from "react";

import { NewsCard } from "./latestNews/NewsCard";

const key = "88804fd27daf4133b20f9cd7037177bf";
const newsURL = `https://newsapi.org/v2/top-headlines?country=se&apiKey=${key}`;

export const LatestNews = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedNews, setFetchedNews] = useState("");

  useEffect(() => {
    fetch(newsURL)
      .then((res) => res.json())
      .then((newsData) => {
        setFetchedNews(newsData.articles);
        setFetchComplete(true);
      })
      .catch((error) => {
        console.log(error, "There has been an error");
      });
  }, []);

  if (!fetchComplete) return <p>Loading...</p>;
  console.log(fetchedNews);

  // fetchedNews.slice(4,16).map((news) => {

  return (
    <>
      {/* <Link to="/">
        <StyledButton>BACK HOME</StyledButton>
      </Link> */}
      <p>LatestNews</p>
      {fetchedNews.map((news, index) => {
        return (
          <NewsCard news={news}/>
        );
      })}
    </>
  );
};
