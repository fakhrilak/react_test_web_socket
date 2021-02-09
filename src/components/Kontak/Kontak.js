import React from 'react'
import {Data} from "./Data"
import "./Kontak.css"
import pict from "../../img/1.jpg"


const Kontak = () => {
    return (
        <div className="Container-Kontak">
                <div>
                    <h1 className="Kontak">Kontak</h1>
                </div>
                {Data.map((data)=>
                    <div className="Container-Chat">
                        <div style={{paddingTop:10}}>
                            <img src={pict} style={{width:50,borderRadius:"50%"}} />
                        </div>
                        <div>
                            <h4 style={{color:"white"}}>{data.NamaUser}</h4>
                        </div>
                    </div>
            )}
            
        </div>
    )
}

export default Kontak
