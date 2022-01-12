export const ProgramCard = ({index, program}) => {
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
          {program.broadcastinfo === undefined ? "-" : program.broadcastinfo}
        </p>
      </div>
    </a>
  );
};
