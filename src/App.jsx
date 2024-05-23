import logo from './logo.svg';
import InputsPage from "./pages/InputsPage.jsx";
import MapsSection from "./pages/MapsSection.jsx";
import ChatSection from "./pages/ChatSection.jsx";
import HomePage from "./pages/HomePage.jsx";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <InputsPage />
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <MapsSection />
        </div>
        <div className="col-span-1">
          <ChatSection />
        </div>
      </div>
      
      {/* <BottomBar /> */}
    </div>
  );
}
