import React from "react";
import styled from "styled-components";
import {InoculationNavi,ChartHeader} from "chartpages/index";

const Inoculationpage =() => {
    return(
        <>
        <LayoutDiv>
            <ChartHeader/>
            <InoculationNavi/>
        </LayoutDiv>
        </>
        );
}
export default Inoculationpage

const LayoutDiv = styled.div`
  width: 100%;
  `