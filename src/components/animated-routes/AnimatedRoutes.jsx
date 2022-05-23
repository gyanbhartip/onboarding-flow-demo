import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../app/App";
import User from "../user/User";

const FinishComponent = lazy(() => import("../finish/Finish"));
const TypeComponent = lazy(() => import("../type/Type"));
const WorkspaceComponent = lazy(() => import("../workspace/Workspace"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<User />} />
          <Route path="/workspace" element={<WorkspaceComponent />} />
          <Route path="/type" element={<TypeComponent />} />
          <Route path="/finish" element={<FinishComponent />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
