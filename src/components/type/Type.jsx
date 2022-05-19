import React from "react";
import { Link } from "react-router-dom";
import { cardContents } from "../../utils/CardContents";
import { useGlobalContext } from "../../utils/context/Context";
import Card from "../card/Card";
import "./Type.css";

const Type = () => {
  const { setProgress } = useGlobalContext();
  return (
    <>
      <p className="text-primary">How are you planning to use Eden?</p>
      <p className="text-secondary">
        We'll streamline your setup experience accordingly.
      </p>
      <div className="cards-container">
        {cardContents.map((cardContent) => (
          <Card key={cardContent.id} {...cardContent} />
        ))}
      </div>
      <Link to="/finish">
        <div className="btn" onClick={() => setProgress(100)}>
          Create Workspace
        </div>
      </Link>
    </>
  );
};

export default Type;
