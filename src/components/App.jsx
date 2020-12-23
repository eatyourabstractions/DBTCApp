import React,{useContext} from 'react'
import Main from './Main.tsx'
import ChainsAdmin from './ChainsAdmin'

import {StateProvider} from './GlobalContext'

import styled from 'styled-components'

function Stage() {
  
    return (
            <StateProvider>
                <Wrapper>
                   <Main/>
                </Wrapper>
            </StateProvider>
    )
}

export default Stage

const Wrapper = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
  

`;
