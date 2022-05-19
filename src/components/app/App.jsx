import { Link } from "react-router-dom";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Logo from "../../assets/images/logo.png";
import { useGlobalContext } from "../../utils/context/Context";
import OutletContainer from "../outlet-container/OutletContainer";
import "./App.css";

function App() {
  const { progress, setProgress } = useGlobalContext();
  return (
    <div className="app-main">
      <Link
        to="/"
        onClick={() => {
          setProgress(17);
        }}
      >
        <header className="app-header">
          <img src={Logo} alt="" />
          <h1>Eden</h1>
        </header>
      </Link>
      <div className="stepbar-container">
        <ProgressBar percent={progress}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      <OutletContainer />
    </div>
  );
}

export default App;
