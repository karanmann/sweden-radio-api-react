export const NewsTime = (props) => {
  
  let d = new Date(props.publishedAt);
  let hours = d.getUTCHours(); // Hours
  let minutes = d.getUTCMinutes();

  return (
    <p>
      <b>Published:</b>
      {hours}:{minutes}
    </p>
  );
};
