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

  if (!fetchComplete) return <p>Loading...</p>;

  return (
    <>
      <Link to="/">
        <button>BACK HOME</button>
      </Link>
      <p>Programs</p>
      {fetchedData.programs.map((program, index) => {
        return (
          <a
            key={index}
            href={program.programurl}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <img
                src={program.programimage}
                alt={program.name}
              />
              <div>
                <h5>{program.name}</h5>
                <p>{program.description}</p>
                <p>
                  {program.broadcastinfo === undefined
                    ? "-"
                    : program.broadcastinfo}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};
