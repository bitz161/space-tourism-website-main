import { Fragment } from "react";
import "./technology-content.styles.scss";

const TechnologyContent = ({ technologyData }) => {
  const { name, description } = technologyData;
  return (
    <Fragment>
      <p>The Terminology...</p>
      <div>{name}</div>
      <div>{description}</div>
    </Fragment>
  );
};

export default TechnologyContent;
