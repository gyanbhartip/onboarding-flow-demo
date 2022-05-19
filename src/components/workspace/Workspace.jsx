import { Link } from "react-router-dom";
import { useGlobalContext } from "../../utils/context/Context";
import "./Workspace.css";

const Workspace = () => {
  const { setProgress } = useGlobalContext();
  return (
    <>
      <p className="text-primary">Let's set up a home for all of your work</p>
      <p className="text-secondary">
        You can always create another workspace later.
      </p>
      <form action="">
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
            <input
              type="text"
              name=""
              id=""
              disabled
              placeholder="www.eden.com/"
            />
            <input type="url" id="wurl" placeholder="Example" />
          </div>
        </div>
        <Link to="/type">
          <div className="btn" onClick={() => setProgress(83)}>
            Create Workspace
          </div>
        </Link>
      </form>
    </>
  );
};

export default Workspace;
