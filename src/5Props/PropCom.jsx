import React, { useState } from 'react'
import Funprops from './Funprops'


export default function PropCom() {
    let [name,setname]=useState("Kashyap")
  return (
    <div>
        <Funprops 
        sname={name}
        age = {10}
        />
    </div>
  )
}
