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

  if (!fetchComplete) return <p>Loading...</p>;
  return (
    <>
      <Link to="/">
        <button>BACK HOME</button>
      </Link>
      <p>Radio Channels</p>
      {fetchedRadioData.channels.map((channel, index) => {

        return (
          <div key={index} className="radio-card">
            <img className="card-image" src={channel.image} alt="channel"></img>
            <div className="card-content">
              <p className="card-discription">{channel.tagline}</p>
              <Player liveaudio={channel.liveaudio.url}/>
            </div>
          </div>
        );
      })}
    </>
  );
};
