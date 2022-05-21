import { motion } from "framer-motion";
import { TickIcon } from "../../utils/Icons";
import "./Finish.css";

const Finish = () => {
  return (
    <motion.div
      initial={{ width: 0, display: "none" }}
      animate={{ width: "100%", display: "contents" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
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
    </motion.div>
  );
};

export default Finish;
