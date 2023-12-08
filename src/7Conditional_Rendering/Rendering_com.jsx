import React, { useState } from 'react'

export default function Rendering_com() {
    let [color, setcolor] = useState("#FFFFFF")
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    function changecolor() {
        let Hexnum = "#";
        for (let i = 0; i < 6; i++) {
            Hexnum += hex[getRandomNum()];
        }
        setcolor(Hexnum);
    }
    function getRandomNum() {
        return Math.floor(Math.random()*hex.length);
    }
    return (
        <div style={{backgroundColor :color}}>
            <h1>The background color is : {color}</h1>
            <button className='btn btn-primary' onClick={() => changecolor()}>Click here to Chnage background</button>
        </div>
    )
}