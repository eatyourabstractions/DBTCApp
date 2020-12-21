import React,{useState, useContext} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components'
import './clicked.css'
import {GlobalContext} from './GlobalContext'
import {useMorph} from 'react-morph';
import ChainsAdmin from './ChainsAdmin'

type TileClass = {
    activeStartDate: Date,
    date: Date,
    view: string
}

type Row = {
    id: number, color: string,  clickedDays: string[], name:string
}


const Goal:React.FC = () => {
    const {rows, setRows} = useContext(GlobalContext)
    const [toggle, setToggle] = useState<boolean>(true);
    const [clickedDays, setClickedDays] = useState<string[]>([])
    const [current, setCurrent] = useState<number>(0)
    const morph = useMorph();
    const addDate = (value:Date) =>{
        const myDate = String(value)
       
       if(!clickedDays.includes(myDate)){
       setClickedDays([...clickedDays, myDate])
        } else {
           const nextArr = [...clickedDays];
           const idx = clickedDays.indexOf(myDate);
           nextArr.splice(idx, 1)
           setClickedDays([...nextArr])
        }
    }



    const addGlobalDate = (dateObj: Date) =>{
        const myDate = String(dateObj)
        if(rows && setRows){
            const {id, color, clickedDays, name} = rows[current]
            const newClickedDays = [...clickedDays, myDate]
            const idx = rows.findIndex(r => r.id === current)
            const nextArr:Row[] = [...rows];
            const newRow:Row = {id, color, clickedDays: newClickedDays, name}
            nextArr.splice(idx, 1, newRow)
            setRows(nextArr)

        }
    }

    const setCurrentHabit = (_id: number) => {
        if(rows){
            setCurrent(_id)
        }

    }
   
    const applyClass = ({ activeStartDate, date, view }: TileClass) => {
       
        if(rows && rows[current].clickedDays.includes(String(date))){
            return ['tileSize',rows[current].color]
        }
        return 'tileSize'
    }

    const habitList = rows?.map((habit) =>
        <Habit key={habit.id} onClick={() => setCurrentHabit(habit.id)} color={habit.color}>
            {habit.name}
        </Habit>
        );
    return (
        <div>
             <button onClick={() => setToggle(!toggle)}>Let's morph!</button>
                <br />
                {toggle ? (
                        <Wrapper {...morph} >
                            <Tomato>{habitList}</Tomato>
                            <Calendar 
                                className={'totalSize'}
                                tileClassName={applyClass}
                                onClickDay={addGlobalDate} 
                            />
                        </Wrapper>
                    ) : (
                        // <h1 {...morph}  >Michael Matos</h1>
                        <span {...morph}><ChainsAdmin /></span>
                    )}
            
        </div>
    )
}

export default Goal

const Wrapper = styled.div`
    display:flex;
`;

const Tomato = styled.div`
    background-color:tomato;
    width: 100px;
    margin-right: 50px;
`;

const Habit = styled.div`
    background-color:${props => props.color};
    margin-bottom:5px;
`;
