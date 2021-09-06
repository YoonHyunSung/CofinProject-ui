import React from "react";
import styled from "styled-components";
import {ChartHeader, Inpectionpage, Inoculationpage } from "chartpages/index";
import { Switch, Route } from "react-router-dom";
const ChartPage =() => {
    return(
        <>
        <LayoutDiv>
            <ChartHeader/>
        </LayoutDiv>
        <Switch>
            <Route exact path='/inpectionpage' component={Inpectionpage}/>
            <Route exact path='/inoculationpage' component={Inoculationpage}/>
        </Switch>

        </>
        );
}
export default ChartPage

const LayoutDiv = styled.div`
  width: 100%;
`