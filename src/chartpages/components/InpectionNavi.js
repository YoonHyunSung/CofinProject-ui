import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const InpectionNavi = () =>{
    return(
    <>
    <Navidiv>
        <Naviul>
            <Navili>개요</Navili>
            <Navili><Link to="cofin-chart">백신효과</Link></Navili>
            <Navili><Link to="Local-chart">국내 현황</Link></Navili>
            <Navili><Link to="world-status">세계 현황</Link></Navili>
            <Navili>내지역 거리두기 단계</Navili>
        </Naviul>
    </Navidiv>
    </>
    )
}
export default InpectionNavi
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
