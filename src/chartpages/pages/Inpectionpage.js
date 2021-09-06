import React from "react";
import styled from "styled-components";
import {InpectionNavi} from "chartpages/index";

const Inpectionpage =() => {
    return(
        <>
        <LayoutDiv>
            <InpectionNavi/>
        </LayoutDiv>
        </>
        );
}
export default Inpectionpage

const LayoutDiv = styled.div`
  width: 100%;
`