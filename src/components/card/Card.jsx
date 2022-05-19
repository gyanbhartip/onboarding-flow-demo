import "./Card.css";
import { MyselfIcon, TeamIcon } from "../../utils/Icons";

const Card = ({ header, desc }) => {
  return (
    <div className="card-container">
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
