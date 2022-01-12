import { useState, useEffect } from "react";

import { RadioChannelCard } from './radioChannels/RadioChannelCard'
import { CustomButton } from "./universal/CustomButton";

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
      <CustomButton />
      <h3>Radio Channels</h3>
      <div className="radio-card-container">
        {fetchedRadioData.channels.map((channel, index) => {
          return (
            <RadioChannelCard channel={channel} index={index}/>
          );
        })}
      </div>
      <CustomButton />
    </div>
  );
};
