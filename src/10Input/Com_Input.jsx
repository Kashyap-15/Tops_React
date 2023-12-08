import React, { useState } from 'react'
import { Button, Table } from 'reactstrap'

export default function Com_Input() {
    let [name, setName] = useState("");
    let [data, setData] = useState([]);
    let [action, setAction] = useState(true)
    let [index, setindex] = useState(null)

    function dataEntry() {
        if(name !== ""){
            let xdata = [...data,name];
            setData(xdata);
            setName("");
        }
    }
    
    function deleteData(i) {
        if(confirm("Are you really want to delete this?")){
            setData(()=>{
                return data.filter((e,index)=>{
                    return index!==i;
                });
            })
        }
    }

    function updateData(i) {
        setName(data[i]);
        setAction(false);
        setindex(i);
    }

    function swipeData() {
        setData(()=>{
            data.splice(index,1,name);
            return [...data];
        })
        setAction(true);
        setName("");
    }

    return (
        <>
            <div className='d-grid gap-3 mt-5'>
            <h1>{name}</h1>
            <label htmlFor="">Name </label>
            <input type="text" value={name} onChange={(e) => { setName(e?.target?.value) }} />
            {
                action ? <Button className='btn btn-primary' onClick={(e)=>dataEntry(e)}>
                Click Here
            </Button> : <Button className='btn btn-primary' onClick={()=>swipeData()}>Update</Button>
            }
            </div>

            <Table striped>
                <thead>
                    <tr>
                        <th>
                            Sr. No
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                   {
                    data.map((e,i)=>{
                        return(
                            <tr key={i}>
                            <th scope="row" >
                                {i+1}
                            </th>
                            <td>
                                {e}
                            </td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateData(i)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>deleteData(i)}>Delete</button>
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
