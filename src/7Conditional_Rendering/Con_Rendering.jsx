import React from 'react'

export default function Con_Rendering() {
    let arr = [1, 2, 3, 4, 5].length;
    return (
        <>
            {arr > 0 ? (<h1> arrays length is {arr}</h1>) : (<h1>Array is empty</h1>)}
        </>
    )
}