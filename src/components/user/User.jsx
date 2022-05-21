import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/context/Context";

const User = () => {
  const { setProgress } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <>
      <p className="text-primary">Welcome! First things first...</p>
      <p className="text-secondary">You can always change them later.</p>
      <form action="">
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
          onClick={() => {
            setProgress(50);
            navigate("/workspace");
          }}
        >
          Create Workspace
        </button>
      </form>
    </>
  );
};

export default User;
