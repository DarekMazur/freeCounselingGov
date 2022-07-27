import React, { useState } from "react";

export const ContentContext = React.createContext({
  globalCount: 0,
  globalValue: 0,
  popupStatus: false,
  getPopupStatus: () => {},
  getGlobalCount: () => {},
  getGlobalValue: () => {},
  reset: () => {},
});

const ContentPovider = ({ children }) => {
  const [popupStatus, setPopupStatus] = useState(window.localStorage.isPopDisp);
  const [globalCount, setGlobalCount] = useState(0);
  const [globalValue, setGlobalValue] = useState(0);

  const getGlobalCount = (add) => {
    if (add) {
      setGlobalCount(globalCount + 1);
    } else {
      setGlobalCount(globalCount - 1);
    }
  };

  const getPopupStatus = (value) => {
    setPopupStatus(value);
    window.localStorage.setItem("isPopDisp", value);
  };

  const getGlobalValue = (value, add) => {
    if (add) {
      setGlobalValue(globalValue + value);
    } else {
      if (globalValue - value > 0) {
        setGlobalValue(globalValue - value);
      } else {
        setGlobalValue(0);
      }
    }
  };

  const reset = () => {
    setGlobalCount(0);
    setGlobalValue(0);
  };

  return (
    <ContentContext.Provider
      value={{
        globalCount,
        globalValue,
        popupStatus,
        getPopupStatus,
        getGlobalCount,
        getGlobalValue,
        reset,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentPovider;
