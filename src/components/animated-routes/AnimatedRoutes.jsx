import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import App from "../app/App";
import Spinner from "../spinner/Spinner";
import User from "../user/User";
const Finish = lazy(() => import("../finish/Finish"));
const Type = lazy(() => import("../type/Type"));
const Workspace = lazy(() => import("../workspace/Workspace"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}>
          <Route index element={<User />} />
          <Route
            path="/workspace"
            element={
              <Suspense fallback={<Spinner />}>
                <Workspace />
              </Suspense>
            }
          />
          <Route
            path="/type"
            element={
              <Suspense fallback={<Spinner />}>
                <Type />
              </Suspense>
            }
          />
          <Route
            path="/finish"
            element={
              <Suspense fallback={<Spinner />}>
                <Finish />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
