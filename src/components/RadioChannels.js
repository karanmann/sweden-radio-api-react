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
      <Link to="/">BACK</Link>
      <h3>Radio Channels</h3>
      {fetchedRadioData.channels.map((channel, index) => {

        return (
          <div key={index}>
            <img src={channel.image} alt="channel"></img>
            <div>
              <p>{channel.tagline}</p>
              <Player liveaudio={channel.liveaudio.url}/>
            </div>
          </div>
        );
      })}
    </>
  );
};
