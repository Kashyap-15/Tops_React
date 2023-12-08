import React, { useState } from 'react'
import { Button, Table } from 'reactstrap'


export default function New_SingleInput() {
    let [phoneNo, setPhoneNo] = useState("");
    let [inputData, setInputData] = useState([]);
    let [index, setIndex] = useState(null);
    const [action, setaction] = useState(true)

    function addData() {
        if (phoneNo !== "") {
            setInputData([...inputData, phoneNo])
            setPhoneNo("")
        }
    }

    function delHandler(index) {

        // let newdata = inputData.filter((e,i)=>{
        //     return i!== index;
        // })
        // setInputData(newdata);

        if (confirm("are you really wanna Delete this?")) {
            setInputData(() => {
                return inputData.filter((e, i) => {
                    return i !== index;
                })
            })
        }
    }

    function updateData(i) {
        setPhoneNo(inputData[i]);
        setaction(false);
        setIndex(i);
    }

    function swipeData() {
        setInputData(() => {
            inputData.splice(index, 1, phoneNo);
            return [...inputData]
        })
        setaction(true);
        setPhoneNo("");
    }
    return (
        <>
            <h1>{phoneNo}</h1>
            <div className='d-flex gap-3'>
                <label htmlFor="" className='fs-2'>Phone Number :    </label>
                <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e?.target?.value)} />
                {
                    action ?
                        <Button className='btn btn-info' onClick={() => addData()}>Add</Button> :
                        <Button className='btn btn-info' onClick={() => swipeData()}>Update</Button>
                }
            </div>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            Sr. No
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inputData.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row" >
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e}
                                    </td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateData(i)} >Update</button>
                                        <button className='btn btn-danger' onClick={() => delHandler(i)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
