import { useState, useEffect } from "react";
import { CustomButton } from "./universal/CustomButton";
import { ProgramCard } from "./programs/ProgramCard";

const URL = "https://api.sr.se/api/v2/programs/index?format=json";

export const Programs = () => {
  const [fetchComplete, setFetchComplete] = useState(false);
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((programData) => {
        setFetchedData(programData);
        setFetchComplete(true);
      })
      .catch((error) => {
        console.log(error, "There has been an error");
      });
  }, []);

  if (!fetchComplete)
    return (
      <div className="loader-position">
        <span className="loader"></span>
      </div>
    );

  return (
    <div className="program-page">
      <CustomButton />
      <h3>Programs</h3>
      <div className="program-card-container">
        {fetchedData.programs.map((program, index) => {
          return <ProgramCard index={index} program={program} />;
        })}
      </div>
      <CustomButton />
    </div>
  );
};
