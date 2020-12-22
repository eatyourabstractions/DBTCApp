import React from 'react'
import styled from 'styled-components'

import MyTable from './MyTable'


function ChainsAdmin() {
    return (
        <Wrapper>
            <h1>Manage my chains</h1>
            <MyTable />
        </Wrapper>
    )
}

export default ChainsAdmin

const Wrapper = styled.div`
    margin-top:100px;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;
