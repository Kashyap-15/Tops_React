import React, { useRef } from 'react'

export default function UseRefCom() {
    let headRef = useRef(null);
    let inputRef = useRef(null);

    function fun() {
        inputRef.current.focus();
        headRef.current.textContent = "KP";
    }
  return (
    <>
    <h1 ref={headRef}>Kashyap</h1>
    <input type="text" ref={inputRef} />
    <button className='btn btn-outline-primary' onClick={()=>fun()}>
        click Here
    </button>
    </>
  )
}
