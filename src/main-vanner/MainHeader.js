import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
const MainHeader = () =>
   {
       return(
        <Wrapperdiv>
        <Backdiv>
          <ul>
            <Vli1><Link to="chart-pages">차트보기</Link></Vli1>
            <Vli2><Link to="check-up">백신안전확인</Link></Vli2>
          </ul>
        </Backdiv>
    </Wrapperdiv>
       )
   };
export default MainHeader
const Backdiv = styled.div`
  background-color: #2e374c;
`
const Vli1 = styled.li`
  float: left;
  width: 70%;
  height: 50px;
  background-color: transparent;
`
const Vli2 = styled.li`
  float: left;
  width: 100%;
  height: 42px;
`
const Wrapperdiv = styled.div`
  border: 1px solid;
  border-radius : 6px;
`