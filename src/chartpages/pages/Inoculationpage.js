import React from "react";
import styled from "styled-components";
import {InoculationNavi} from "chartpages/index";
import { Switch,Route } from 'react-router-dom';
import ChartPage from "./ChartPage";

const Inoculationpage =() => {
    return(
        <>
        <LayoutDiv>
            <InoculationNavi/>
        </LayoutDiv>
        </>
        );
}
export default Inoculationpage

const LayoutDiv = styled.div`
  width: 100%;
  `