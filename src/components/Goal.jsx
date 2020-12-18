import React,{useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';



import {useMorph} from 'react-morph';

import './clicked.css'
function Goal() {
    const [toggle, setToggle] = useState(true);
    const [clickedDays, setClickedDays] = useState([])
    const morph = useMorph();
    const addDate = (value) =>{
        const myDate = String(value)
       console.log('date',myDate)
       if(!clickedDays.includes(myDate)){
       setClickedDays([...clickedDays, myDate])
        } else {
           const nextArr = [...clickedDays];
           const idx = clickedDays.indexOf(myDate);
           nextArr.splice(idx, 1)
           setClickedDays([...nextArr])
        }
    }
    const applyClass = ({ activeStartDate, date, view }) => {
        
        if(clickedDays.includes(String(date))){
            return 'clicked'
        }
    }
    return (
        <div>
             <button onClick={() => setToggle(!toggle)}>Let's morph!</button>
                <br />
                {toggle ? (
                        <div {...morph} >
                            <Calendar 
                                tileClassName={applyClass}
                                onClickDay={addDate} 
                            />
                        </div>
                    ) : (
                        <h1 {...morph}  >Michael Matos</h1>
                    )}
            
        </div>
    )
}

export default Goal
