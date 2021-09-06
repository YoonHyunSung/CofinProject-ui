import React from "react";
import styled from "styled-components";
import {InpectionNavi, ChartHeader} from "chartpages/index";

const Inpectionpage =() => {
    return(
        <>
        <LayoutDiv>
            <ChartHeader/>
            <InpectionNavi/>
        </LayoutDiv>
        </>
        );
}
export default Inpectionpage

const LayoutDiv = styled.div`
  width: 100%;
`