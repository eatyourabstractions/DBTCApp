import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

function MyTable() {
    const colors = ['salmon','fuchsia', 'lightblue', 'green','tomato', 'purple','blue'];

    const [rows, setRow] = useState([{id:0, color:'salmon'}])
    const handleColor = (id, value) =>{
        const idx = rows.findIndex(r => r.id  === id)
        const newElem = {...rows[idx], color: value}
        const nextRowsArr = [...rows]
        nextRowsArr.splice(idx, 1, newElem)
        setRow(nextRowsArr)
    }
    const addRow = () =>{
        const newRow = {id: rows.length, color: 'salmon'}
        console.log(newRow)
        const nextArr = [...rows];
        nextArr.push(newRow)
        setRow(nextArr)
    }

    const genColors = (id) =>{

    const ColorBtns = colors.map((color) => {
        
        return <Color key={uuidv4()} color={color} onClick={() => handleColor(id, color)}/>
    })
        return ColorBtns
    }
    const deleteRow = (id) =>{
        const idx = rows.findIndex(r => r.id === id)
        const nextArr = [...rows];
        nextArr.splice(idx, 1)
        setRow(nextArr)
    }   
    const rowList = rows.map((rowData) => {
     
        return (
            <tr>
                <td style={{background:`${rowData.color}`}} contentEditable={true} key={uuidv4()}></td>
                <td>{genColors(rowData.id)}</td>
                <td><button onClick={() => deleteRow(rowData.id)}>X</button></td>
            </tr>
            
        )
    })
    
    return (
        <Wrapper>
            <div>
              
                <AddBtn onClick={() => addRow()}>Add Chain</AddBtn>
            </div>
            <table >
                <thead>
                    <tr>
                        <th>Name (click to edit)</th>
                        <th>Background Color</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {rowList}
                    
                </tbody>

            </table>
           
        </Wrapper>
    )
}

export default MyTable

const Wrapper = styled.div`
    margin-top:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const AddBtn = styled.button`

`;

const Color = styled.button`
    background-color: ${props => props.color};
    width:15px;
    height:15px;
    border:none;
    margin-right: 5px;
`;

