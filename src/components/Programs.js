import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <div className="btn btn7">
          <h4>BACK</h4>
        </div>
      </Link>
      <h3>Programs</h3>
      <div className="program-card-container">
        {fetchedData.programs.map((program, index) => {
          return (
            <a
              className="program-card"
              key={index}
              href={program.programurl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="program-card-image"
                src={program.programimage}
                alt={program.name}
              />
              <div className="program-details">
                <h5>{program.name}</h5>
                <p>{program.description}</p>
                <p>
                  {program.broadcastinfo === undefined
                    ? "-"
                    : program.broadcastinfo}
                </p>
              </div>
            </a>
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
