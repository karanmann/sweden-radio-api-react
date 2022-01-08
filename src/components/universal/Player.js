export const Player = (props) => {
  let { liveaudio } = props;
  return (
    <audio className="card-player" controls>
      <source src={liveaudio} type="audio/mpeg"></source>
    </audio>
  );
};
