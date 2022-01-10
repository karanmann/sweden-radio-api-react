export const NewsTime = (props) => {
  let { publishedAt } = props

  let d = new Date(publishedAt);
    let hours = d.getUTCHours(); // Hours
    let minutes = d.getUTCMinutes();

  return (
    <p><b>Published:</b> {hours}:{minutes}</p>
  )
}