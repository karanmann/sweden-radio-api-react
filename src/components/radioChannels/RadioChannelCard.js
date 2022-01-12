import { Player } from '../universal/Player'

export const RadioChannelCard = ({index, channel}) => {
  return (
    <div className="radio-card" key={index}>
      <img className="radio-card-image" src={channel.image} alt="channel"></img>
      <div className="radio-details">
        <p>{channel.tagline}</p>
        <Player liveaudio={channel.liveaudio.url} />
      </div>
    </div>
  );
};
