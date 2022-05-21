import "./Card.css";
import { MyselfIcon, TeamIcon } from "../../utils/Icons";
import { useGlobalContext } from "../../utils/context/Context";

const Card = ({ id, desc, header }) => {
  const { selectedType, setSelectedType } = useGlobalContext();
  return (
    <div
      className={`card-container ${selectedType === id ? "card-selected" : ""}`}
      onClick={() => setSelectedType(id)}
    >
      <div className="card-inner-container">
        <div className="logo-wrapper">
          {header === "For myself" ? <MyselfIcon /> : <TeamIcon />}
        </div>
        <p className="card-header">{header}</p>
        <p className="card-desc">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
