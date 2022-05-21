import { motion } from "framer-motion";
import { useGlobalContext } from "../../utils/context/Context";
import { TickIcon } from "../../utils/Icons";
import "./Finish.css";


const Finish = () => {
  const {navigate} = useGlobalContext();
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
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
      <button onClick={()=>{navigate("/workspace")}}>back to workspace component</button>
    </motion.div >
  );
};

export default Finish;
