import React from 'react'
import Goal from './Goal'
import ChainsAdmin from './ChainsAdmin'

import styled from 'styled-components'

function Stage() {
  
    return (
            <Wrapper>
               <ChainsAdmin/>
            </Wrapper>
    )
}

export default Stage

const Wrapper = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
  

`;
