// src/context/TravelContext.js
import React, { createContext, useState } from 'react';

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    startDate: "",
    endDate: "",
    attractions: {
      museums: false,
      food: false,
      shopping: false,
      views: false,
    },
    partySize: "",
    userInput: "",
  });

  return (
    <TravelContext.Provider value={{ formData, setFormData }}>
      {children}
    </TravelContext.Provider>
  );
};
