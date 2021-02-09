// import logo from './logo.svg';
import './App.css';
import Chat from "./components/Chat/Chat"
import Kontak from "./components/Kontak/Kontak"

function App() {
  return (
    <div className="App">
      <div className="Container-LandingPages">
          <div>
            <Chat />
          </div>
          <div>
            <Kontak />
          </div>
      </div>
    </div>
  );
}

export default App;
