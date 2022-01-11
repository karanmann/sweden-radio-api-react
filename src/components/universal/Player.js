export const Player = (props) => {
  let { liveaudio } = props;
  return (
    <audio controls className="audio-player">
      <source src={liveaudio} type="audio/mpeg"></source>
    </audio>
  );
};
