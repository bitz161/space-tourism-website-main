import "./crew-content.styles.scss";

const CrewContent = ({ crewDetails, setCrewCount }) => {
  const { name, role, bio } = crewDetails;
  return (
    <div className="crew-content-container">
      <div className="crew-details-container">
        <div>{role}</div>
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <div className="crew-options">
        <div onClick={() => setCrewCount(0)}></div>
        <div onClick={() => setCrewCount(1)}></div>
        <div onClick={() => setCrewCount(2)}></div>
        <div onClick={() => setCrewCount(3)}></div>
      </div>
    </div>
  );
};

export default CrewContent;
