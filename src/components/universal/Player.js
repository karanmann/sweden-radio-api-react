export const Player = (props) => {
  let { liveaudio } = props;
  return (
    <audio controls>
      <source src={liveaudio} type="audio/mpeg"></source>
    </audio>
  );
};
