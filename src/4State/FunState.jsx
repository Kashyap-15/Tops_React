import React, { useState } from 'react'

export default function FunState() {
    let [about,setabout]=useState(0)
    let x=11;
    function incree(params) {
      setabout(++about);
      x++;
    }
  return (
    <>
    <h1>Value of x is {x}</h1>
    <h1>Value of about is {about}</h1>
    <button className='btn btn-primary' onClick={()=>incree()}>Increment</button>
    </>
  )
}
