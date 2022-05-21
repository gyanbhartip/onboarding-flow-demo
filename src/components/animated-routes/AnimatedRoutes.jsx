import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../app/App";
import Finish from "../finish/Finish";
import Type from "../type/Type";
import User from "../user/User";
import Workspace from "../workspace/Workspace";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<User />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/type" element={<Type />} />
          <Route path="/finish" element={<Finish />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
