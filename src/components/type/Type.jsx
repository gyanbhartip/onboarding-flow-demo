import { motion } from "framer-motion";
import { cardContents } from "../../utils/CardContents";
import { useGlobalContext } from "../../utils/context/Context";
import Card from "../card/Card";
import "./Type.css";

const Type = () => {
  const { selectedType, navigate } = useGlobalContext();

  return (
    <motion.div
      initial={{ width: 0, display: "none" }}
      animate={{ width: "100%", display: "contents" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
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
        onClick={() => navigate("/finish")}
        // disabled={selectedType === "" ? "disabled" : false}
      >
        Create Workspace
      </button>
    </motion.div>
  );
};

export default Type;
