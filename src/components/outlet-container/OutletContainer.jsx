import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../utils/context/Context";
import "./OutletContainer.css";

const OutletContainer = () => {
  const { updateProgress } = useGlobalContext();

  useEffect(() => {
    updateProgress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bottom-container">
      <Outlet />
    </div>
  );
};

export default OutletContainer;
