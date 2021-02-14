import React,{useState} from 'react'
import "./Chat.css"
import socketIOClient from "socket.io-client";

const Chat = ({secoundUser,setGetChat,setTriger,triger}) => {
    const [message,setMessage] = useState("")
    const [id,setUserId] = useState(1)
    const [name,setUserName] = useState("Zilog")
    const ENDPOINT = "ws://localhost:5000/";
    const socket = socketIOClient(ENDPOINT);
    var tanggal = new Date()
    setGetChat(id)
    const send_private=()=>{
        setTriger(!triger)
        console.log(secoundUser,"target chat")
        var data = {
            type : "private",
            roomId: 2,
            Users : [parseInt(id),parseInt(secoundUser)],
            last_Message:message,
            created_time: tanggal,
            message : [
                {
                    log_Id: 1,
                    sender_Id: parseInt(id),
                    chanel_Id: 3,
                    created_Time_Chat: tanggal,
                    message: message,
                }

            ]
        }
        socket.emit("message",data)
    }
    const send_grup=()=>{
        var data = {
            _id:5,
            type : "grup",
            grup_name : "stt_123",
            created_time: tanggal,
            last_Message:"",
            admin : [

            ],
            message : [
                {
                    log_Id: 1,
                    sender_Id: 2,
                    chanel_Id: 3,
                    created_Time_Chat: tanggal,
                    message: message,
                }

            ]
            
        }
        socket.emit("message",data)
    }
    const Delet = ()=>{
        socket.emit("delet")
    }
    return (
        <div className="Container-chet">
            <h1>Chat App</h1>
            <input
            value={name}
            placeholder="Name User"
            onChange={(e)=>setUserName(e.target.value)}
            />
            <input
            value={id}
            placeholder="Id User"
            onChange={(e)=>setUserId(e.target.value)}
            />
            {secoundUser !== "" &&<div className="footer">
                <input
                value = {message}
                placeholder="Write a message"
                onChange = {(e)=>setMessage(e.target.value)}
                />
                <button onClick={()=>send_private()}>KIRIM Personal Chat</button>
                <button onClick={()=>send_grup()}>KIRIM Grup</button>
                <button onClick={()=>Delet()}>Delet</button>
            </div>}
            
        </div>
    )
}

export default Chat
