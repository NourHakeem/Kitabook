import React from 'react'
import { useState } from 'react';
import {storage} from "../firebase";
import { ref ,uploadBytes} from "firebase/storage";
import{v4} from 'uuid';
const Uploadfile = () => {
const [voiceupload,setvoiceupload]=useState(null)
const uploadvoice= ()=>{
if (voiceupload==null) return
const voiceref = ref(storage,`voices/${voiceupload.name + v4()}`)
uploadBytes(voiceref,voiceupload).then(()=>{

alert("voice uploaded")


})


};

  return (
    <div><input type='file' onChange={(e)=>{setvoiceupload(e.target.files[0])}}/>
    <button onClick={uploadvoice}>Upload File</button>
    </div>
  )
}

export default Uploadfile