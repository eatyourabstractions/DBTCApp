import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import {GlobalContext} from './GlobalContext'


type Row = {
    id: number, color: string,  clickedDays: string[], name:string
}


const MyTable:React.FC = () => {
    const colors = ['salmon','fuchsia', 'lightblue', 'green','tomato', 'purple','blue'];
    const {rows, setRows} = useContext(GlobalContext)
    


    
    const handleColor = (id: number, value: string) =>{
        if(rows && setRows){
            const idx = rows.findIndex(r => r.id  === id)
            const newElem = {...rows[idx], color: value}
            const nextRowsArr:Row[] = [...rows]
            nextRowsArr.splice(idx, 1, newElem)
            setRows(nextRowsArr)
        }
    }
    const addRow = () =>{
       if(rows && setRows) {
        const newRow = {id: rows.length, color: 'salmon', clickedDays:[], name:''}
        const nextArr:Row[] = [...rows];
        nextArr.push(newRow)
        setRows(nextArr)}
    }

    const genColors = (id: number) =>{

    const ColorBtns = colors.map((color) => {
        
        return <Color key={uuidv4()} color={color} onClick={() => handleColor(id, color)}/>
    })
        return ColorBtns
    }
    const deleteRow = (id: number) =>{
        if(rows && setRows){
        const idx = rows.findIndex(r => r.id === id)
        const nextArr:Row[] = [...rows];
        nextArr.splice(idx, 1)
        setRows(nextArr)}
    } 
    const handleInputOnChange = (id: number, content: string) =>{
        if(rows && setRows){
        const idx = rows.findIndex(r => r.id === id)
        const nextArr:Row[] = [...rows];
        const tempItem = rows[id];
        const newItem = {...tempItem, name:content}
        nextArr.splice(idx, 1, newItem)
        setRows(nextArr)
        // handleInputOnChange(rowData.id, ev)
        //value={`${rowData.name}`}
        }
    }   

    const rowList = rows?.map((rowData) => {
     
        return (
            <tr key={rowData.id}>
                <td >
                    <Input 
                        type="text" 
                        color={ `${rowData.color}`}
                        value={rowData.name}
                        placeholder={'please enter goal'}
                        onChange={(ev) => handleInputOnChange(rowData.id, ev.target.value)}/>
                </td>
                <td>{genColors(rowData.id)}</td>
                <td><button 
                    style={{height:'40px', width:'40px', marginLeft:'5px', border:'none'}}
                    onClick={() => deleteRow(rowData.id)}>X</button></td>
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

const shadow = 'box-shadow: 10px 10px 0px 0px rgba(0,0,0,1);-webkit-box-shadow: 10px 10px 0px 0px rgba(0,0,0,1);-moz-box-shadow: 10px 10px 0px 0px rgba(0,0,0,1);'


const AddBtn = styled.button`
    margin-bottom: 40px;
    width: 100px;
    height: 30px;
    font-size: 15px;
    border: none;
    &:hover{
        box-shadow: ${shadow}
    }

`;

const Input = styled.input`
    background-color: ${props => props.color};
    height: 40px;
    width: 200px;
    border: none;
    border-radius: 3px;
    font-size: 25px;
`;



const Color = styled.button<{color:string}>`
    background-color: ${props => props.color};
    width:40px;
    height:40px;
    border:none;
    margin-right: 5px;
    border-radius: 3px;
    margin-left: 5px;
    &:hover{
        box-shadow: ${shadow}
    }
`;

