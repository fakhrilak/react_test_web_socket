import React,{useState,useEffect} from 'react'
import {Data} from "./Data"
import "./Kontak.css"
import pict from "../../img/1.jpg"
import socketIOClient from "socket.io-client";

const Kontak = ({setSecoundUser,getChat,triger}) => {
    const ENDPOINT = "ws://localhost:5000/";
    const socket = socketIOClient(ENDPOINT);
    const [Chat,setChat]=useState([])
    useEffect(() => {
        socket.emit("getChat_rooms",parseInt(getChat))
    },[getChat,triger])
    useEffect(() =>{
        socket.on("Give_Chat",data=>{
                setChat(data)
            })
    },[triger])
    
    const clean=(data)=>{
        for (var i = 0; i < data.length;i++){
            if(data[i] !== getChat){
                return data[i]
            }
        }
    }
    const filter =(data)=>{
        var A = clean(data)
        var B = Data.filter(e => e.userId === A);
        return B[0].NamaUser
    }
    return (
        <div className="Container-Kontak">
                <div>
                    <h1 className="Kontak">Kontak</h1>
                </div>
                {Data.map((data)=>
                    <div className="Container-Chat" key={data.userId}
                    onClick={()=>setSecoundUser(data.userId)}
                    >
                        <div style={{paddingTop:10}}>
                            <img src={pict} style={{width:50,borderRadius:"50%"}} />
                        </div>
                        <div>
                            <h4 style={{color:"white"}}>{data.NamaUser}</h4>
                        </div>
                    </div>
                
            )}
                <div>
                    <h1 className="Kontak">CHAT</h1>
                </div>
                {Chat.map((data)=>
                    <div className="Container-Chat" key={data._id}
                    onClick={()=>setSecoundUser(
                        {
                        secoundUser_id:data.userId,
                        secoundUser_name:data.NamaUser
                        })}
                    >
                        <div style={{paddingTop:10}}>
                            <img src={pict} style={{width:50,borderRadius:"50%"}} />
                        </div>
                        <div>
                            <h4 style={{color:"white"}}>{filter(data.Users)}</h4>
                            <p style={{color:"white"}}>{data.last_Message}</p>
                        </div>
                    </div>
                
            )} 
            
        </div>
    )
}

export default Kontak
