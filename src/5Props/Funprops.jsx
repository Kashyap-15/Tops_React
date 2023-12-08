import React from 'react'

export default function Funprops(props) {
function fun() {
    props.sname="Patel";
}
  return (
    <div>
        <h1>{props.sname}</h1>
        <h2>{props.age}</h2>
        <button className='btn btn-outline-dark' onClick={()=>fun()}>Change</button>
        <h3>We can not change the props</h3>
    </div>
  )
}
