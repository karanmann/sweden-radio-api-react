import { NewsTime } from "./NewsTime";

export const NewsCard = (props) => {
  let { news } = props;

  let { url, urlToImage, name, title, description, source, publishedAt } = news;

  return (
    <a className="news-card" href={url} target="default">
      <img
        className="news-image"
        src={
          urlToImage === undefined ? "../assets/sr01-700x217.jpeg" : urlToImage
        }
        alt={name}
      />
      <div className="news-card-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <p>
            <b>Source:</b>
            {source.name}
          </p>
          <NewsTime publishedAt={publishedAt}/>
        </div>
      </div>
    </a>
  );
};
