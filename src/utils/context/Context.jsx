import React, { useContext, useReducer } from "react";
import reducer from "./Reducer";

const AppContext = React.createContext();

const initialState = {
  progress: 17,
  selectedType: "",
};

const AppProvider = ({ children }) => {
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
    }
  };

  const setSelectedType = (selectedType) => {
    dispatch({ type: "SET_SELECTED_TYPE", selectedType });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setProgress,
        updateProgress,
        setSelectedType,
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
