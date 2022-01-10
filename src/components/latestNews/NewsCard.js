import { NewsTime } from "./NewsTime";

export const NewsCard = (props) => {
  let { news } = props;

  let { url, urlToImage, name, title, description, source, publishedAt } = news;

  return (
    <a href={url} target="default">
      <img
        src={
          urlToImage === undefined ? "../assets/sr01-700x217.jpeg" : urlToImage
        }
        alt={name}
      />
      <div>
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
