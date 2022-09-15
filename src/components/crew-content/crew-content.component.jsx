import "./crew-content.styles.scss";

const BackgroundC = {
  backgroundColor: "white",
};

const CrewContent = ({ crewDetails, setCrewCount, crewNumber, crew }) => {
  const { name, role, bio } = crewDetails;
  return (
    <div className="crew-content-container">
      <div className="crew-details-container">
        <div>{role}</div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <div className="crew-options">
        {crew.map((data, idx) => (
          <div
            key={idx}
            onClick={() => setCrewCount(idx)}
            className={crewNumber === idx ? "backgroundC" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default CrewContent;
