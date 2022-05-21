import { motion } from "framer-motion";
import { useGlobalContext } from "../../utils/context/Context";

const User = () => {
  const { navigate } = useGlobalContext();
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      <p className="text-primary">Welcome! First things first...</p>
      <p className="text-secondary">You can always change them later.</p>
      <form>
        <div className="form-group">
          <label htmlFor="fname">Full Name</label>
          <input type="text" id="fname" placeholder="Steve Jobs" />
        </div>
        <div className="form-group">
          <label htmlFor="dname">Display Name</label>
          <input type="text" id="dname" placeholder="Steve" />
        </div>
        <button
          className="btn"
          onClick={() => navigate("/workspace")}
        >
          Create Workspace
        </button>
      </form>
    </motion.div>
  );
};

export default User;
