import React, { useState } from 'react'

export default function State_Task() {
    let [x,setx]=useState(0);
    let [y,sety]=useState(10);
    function increase() {
        setx(++x);
    }
    function decrease() {
        sety(--y);
    }
  return (
    <div className='d-flex gap-5'>
        <div>
        <h1>Increment for X : {x}</h1>
        <button className='btn btn-success' onClick={()=>increase()}>Increment</button>
        </div>
        <div>
        <h1>Decrement for Y : {y}</h1>
        <button className='btn btn-danger' onClick={()=>decrease()}>Decrement</button>
        </div>
    </div>
  )
}
