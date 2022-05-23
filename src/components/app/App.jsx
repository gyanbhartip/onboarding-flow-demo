import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import Logo from "../../assets/images/logo.png";
import { useGlobalContext } from "../../utils/context/Context";
import OutletContainer from "../outlet-container/OutletContainer";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { progress, setNavigate } = useGlobalContext();

  useEffect(() => {
    setNavigate(navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-main">
      <Link to="/">
        <header className="app-header">
          <img src={Logo} alt="logo" className="logo-img" />
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
