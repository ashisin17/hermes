// src/App.js
import React from 'react';
import InputsPage from "./pages/InputsPage.jsx";
import MapsPage from "./pages/MapsSection.jsx";
import ChatSection from "./pages/ChatSection.jsx";
import { TravelProvider } from './context/TravelContext.jsx';
import './App.css';

export default function App() {
  return (
    <TravelProvider>
      <div className="App">
        <InputsPage />
        <div className="grid grid-cols-2 gap-4 mb-[5rem]">
          <div className="col-span-1">
            <MapsPage />
          </div>
          <div className="col-span-1">
            <ChatSection />
          </div>
        </div>
      </div>
    </TravelProvider>
  );
}
