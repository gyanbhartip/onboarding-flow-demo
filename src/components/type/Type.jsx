import React from "react";
import { useNavigate } from "react-router-dom";
import { cardContents } from "../../utils/CardContents";
import { useGlobalContext } from "../../utils/context/Context";
import Card from "../card/Card";
import "./Type.css";

const Type = () => {
  const { setProgress, selectedType } = useGlobalContext();
  const navigate = useNavigate();

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
      <button
        className="btn"
        onClick={() => {
          setProgress(100);
          navigate("/finish");
        }}
        disabled={selectedType === "" ? "disabled" : false}
      >
        Create Workspace
      </button>
    </>
  );
};

export default Type;
