import "./destination-content.styles.scss";

const DestinationContent = ({ destinationName }) => {
  const { name, description, distance, travel } = destinationName;
  return (
    <div className="destination-content-container">
      <div className="destination-name">{name}</div>
      <div className="destination-description">{description}</div>
      <div className="travel-container">
        <div>
          <p>AVG. DISTANCE</p>
          <p>{distance}</p>
        </div>
        <div>
          <p>EST. TRAVEL TIME</p>
          <p>{travel}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
