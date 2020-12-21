import React,{useState, createContext} from 'react'


type Children = {
    children: React.FC
}

type Row = {
    id: number, color: string,  clickedDays: string[], name:string
}

type State = {
    rows: Row[],
    setRows: React.Dispatch<React.SetStateAction<Row[]>>
} 

const GlobalContext = createContext<Partial<State>>({})

const StateProvider = ({children}:Children) =>{
    const initialState:Row[] =[{id:0, color:'salmon', clickedDays: [], name:'Duolingo'}]
    const [rows, setRows] = useState<Row[]>(initialState)
    return(
        <GlobalContext.Provider
         value={{rows: rows, setRows
        
        }}>{children}</GlobalContext.Provider>
    )
}

export {
    GlobalContext,
    StateProvider
}