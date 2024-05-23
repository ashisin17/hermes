import logo from './logo.svg';
import InputsPage from "./pages/InputsPage.jsx";
import OutputsPage from "./pages/OutputsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import BottomBar from "./pages/BottomBar.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <InputsPage />
      <OutputsPage />
      
      {/* <BottomBar /> */}
    </div>
  );
}

export default App;
