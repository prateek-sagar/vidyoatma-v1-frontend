import { createContext, useContext, useState } from "react";

const FeatureContext = createContext();
const initialFeature = [];

export const FeatureProvider = ({ children }) => {
  const [feature, setFeature] = useState(initialFeature);

  const addFeature = (featureArray) => {
    console.log(featureArray);
    try {
      setFeature(featureArray);
    } catch (error) {
      alert(error);
    }
    console.log(feature);
  };

  const removeFeature = () => {
    setFeature(initialFeature);
  };
  return (
    <FeatureContext.Provider value={{ feature, addFeature, removeFeature }}>
      {children}
    </FeatureContext.Provider>
  );
};

export const useFeatureContext = () => useContext(FeatureContext);
