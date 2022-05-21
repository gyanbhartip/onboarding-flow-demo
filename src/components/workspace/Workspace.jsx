import { motion } from "framer-motion";
import { useGlobalContext } from "../../utils/context/Context";
import "./Workspace.css";

const Workspace = () => {
  const { navigate } = useGlobalContext();

  return (
    <motion.div
      initial={{ width: 0, display: "none" }}
      animate={{ width: "100%", display: "contents" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <p className="text-primary">Let's set up a home for all of your work</p>
      <p className="text-secondary">
        You can always create another workspace later.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="wname">Workspace Name</label>
          <input type="text" id="wname" placeholder="Eden" />
        </div>
        <div className="form-group">
          <label htmlFor="wurl">
            Workspace URL
            <span className="text-other"> (optional)</span>
          </label>
          <div className="url-container">
            <input type="text" disabled placeholder="www.eden.com/" />
            <input type="url" id="wurl" placeholder="Example" />
          </div>
        </div>
        <button className="btn" onClick={() => navigate("/type")}>
          Create Workspace
        </button>
      </form>
    </motion.div>
  );
};

export default Workspace;
