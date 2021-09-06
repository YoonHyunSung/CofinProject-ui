import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const InoculationNavi = () =>{
    return(
    <>
    <Navidiv>
        <Naviul>
            <Navili>개요</Navili>
            <Navili><Link to="cofin-chart">국내 접종현황</Link></Navili>
            <Navili><Link to="world-status">세계 접종현황</Link></Navili>
            <Navili><Link to="world-status">백신 정보</Link></Navili>
        </Naviul>
    </Navidiv>
    </>
    )
}
export default InoculationNavi
const Navidiv = styled.div`
font-size: 0;
line-height: 0;
text-align: center;
`
const Naviul = styled.ul`
  list-style-type : none;
`
const Navili = styled.li`
  display: inline-block;
  padding: 0 35px;
  vertical-align: top;
  font-size: 1.3rem;
  line-height: 2rem;
`