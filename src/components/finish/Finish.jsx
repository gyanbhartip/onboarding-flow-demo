import "./Finish.css";
import { TickIcon } from "../../utils/Icons";

const Finish = () => {
  return (
    <section>
      <div className="tickmark">
        <TickIcon />
      </div>
      <div className="finish-container">
        <h2>Congratulations, Eren!</h2>
        <p className="text-secondary">
          You have completed onboarding, you can start using the Eden!
        </p>
      </div>
      <button className="btn">Launch Eden</button>
    </section>
  );
};

export default Finish;
