import { NewsTime } from "./NewsTime";

import { CardDescription, NewsCards, NewsCardsImage } from "../../styles/latestNews";

import defaultImage from '../../assets/sr01-700x217.jpeg'
export const NewsCard = (props) => {
  let { news } = props;

  let { url, urlToImage, name, title, description, source, publishedAt } = news;

  return (
    <NewsCards>
      <a href={url} target="default">
        <NewsCardsImage
          src={
            urlToImage === undefined
              ? defaultImage
              : urlToImage
          }
          alt={name}
        />
        <CardDescription>
          <h4>{title}</h4>
          <p>{description}</p>
          <div>
            <p>
              <b>Source:</b>
              {source.name}
            </p>
            <NewsTime publishedAt={publishedAt} />
          </div>
        </CardDescription>
      </a>
    </NewsCards>
  );
};
