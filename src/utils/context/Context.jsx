import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  progress: 17,
};

const AppProvider = ({ children }) => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [state, dispatch] = useReducer(reducer, initialState);

  const setProgress = (progress) => {
    dispatch({ type: "SET_PROGRESS", progress });
  };
  const updateProgress = () => {
    const addr = window.location.href;
    if (addr.includes("/workspace")) {
      setProgress(50);
    } else if (addr.includes("/type")) {
      setProgress(83);
    } else if (addr.includes("/finish")) {
      setProgress(100);
    } else {
      setProgress(17);
      setTimeout(() => forceUpdate(), 0);
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setProgress,
        forceUpdate,
        updateProgress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
