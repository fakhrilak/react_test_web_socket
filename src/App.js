// import logo from './logo.svg';
import './App.css';
import Chat from "./components/Chat/Chat"
import Kontak from "./components/Kontak/Kontak"
import React,{useState,useEffect} from "react"
import socketIOClient from "socket.io-client";

function App() {
  const [secondUser,setSecoundUser] = useState("")
  const [triger,setTriger] = useState(false)
  const ENDPOINT = "ws://localhost:5000/";
  const [getChat,setGetChat] = useState()
  const socket = socketIOClient(ENDPOINT);
  // useEffect(() => {
  //     socket.emit("getChat_rooms",100)
  // },[])
  return (
    <div className="App">
      <div className="Container-LandingPages">
          <div>
            <Chat secoundUser={secondUser}
            setGetChat={setGetChat}
            setTriger={setTriger}
            triger={triger}
            />
          </div>
          <div>
            <Kontak 
            secondUser={secondUser} 
            setSecoundUser={setSecoundUser}
            getChat={getChat}
            triger={triger}
            />
          </div>
      </div>
    </div>
  );
}

export default App;
