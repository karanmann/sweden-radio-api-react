import { NewsTime } from "./NewsTime";

import defaultImage from "../../assets/sr01-700x217.jpeg";

export const NewsCard = (props) => {
  let { news } = props;

  let { url, urlToImage, name, title, description, source, publishedAt } = news;

  return (
    <div className="news-card">
      <a href={url} target="default">
        <img
          className="news-card-image"
          src={urlToImage === undefined ? defaultImage : urlToImage}
          alt={name}
        />
        <div className="news-details">
          <h4>{title}</h4>
          <p className="news-description">{description}</p>
          <div className="news-source-time">
            <p>
              <b>Source:</b>
              {source.name}
            </p>
            <NewsTime publishedAt={publishedAt} />
          </div>
        </div>
      </a>
    </div>
  );
};
