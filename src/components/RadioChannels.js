import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Player } from "./universal/Player";

const URL = "https://api.sr.se/api/v2/channels?format=json";

export const RadioChannels = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedRadioData, setFetchedRadioData] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((channelData) => {
        setFetchedRadioData(channelData);
        setFetchComplete(true);
      })
      .catch((error) => {
        console.log(error, "There has been an error");
      });
  }, []);

  if (!fetchComplete) return <div className="loader-position"><span className="loader"></span></div>;
  return (
    <div className="radio-channel-page">
      <Link to="/">
        <div className="btn btn7">
          <h4>BACK</h4>
        </div>
      </Link>
      <h3>Radio Channels</h3>
      <div className="radio-card-container">
        {fetchedRadioData.channels.map((channel, index) => {
          return (
            <div className="radio-card" key={index}>
              <img
                className="radio-card-image"
                src={channel.image}
                alt="channel"
              ></img>
              <div className="radio-details">
                <p>{channel.tagline}</p>
                <Player liveaudio={channel.liveaudio.url} />
              </div>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <div className="btn btn7">
          <h4>BACK</h4>
        </div>
      </Link>
    </div>
  );
};
