import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Next=()=>{
    return(<>
        <VButton><Link to = "vaccine-result">결과보기</Link></VButton>
    </>)
}
export default Next
const VButton = styled.button`
`