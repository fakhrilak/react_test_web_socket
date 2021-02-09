import React,{useState} from 'react'
import "./Chat.css"
import socketIOClient from "socket.io-client";

const Chat = () => {
    const [message,setMessage] = useState("")
    const ENDPOINT = "ws://localhost:5000/";
    const socket = socketIOClient(ENDPOINT);
    var tanggal = new Date()
    console.log(tanggal)
    const send_private=()=>{
        var data = {
            type : "private",
            roomId: 1,
            fisrst_UserId: 1,
            second_UserId: 2, 
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
    const send_grup=()=>{
        var data = {
            type : "grup",
            grup_name : "stt_123",
            created_time: tanggal,
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
            <div className="footer">
                <input
                value = {message}
                placeholder="Write a message"
                onChange = {(e)=>setMessage(e.target.value)}
                />
                <button onClick={()=>send_private()}>KIRIM Personal Chat</button>
                <button onClick={()=>send_grup()}>KIRIM Grup</button>
                <button onClick={()=>Delet()}>Delet</button>
            </div>
            
        </div>
    )
}

export default Chat
