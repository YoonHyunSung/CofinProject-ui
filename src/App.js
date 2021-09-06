import styled from 'styled-components';
import {Route, Switch } from 'react-router-dom';
import { ChartPage, CofinChart, LocalChart, Inpectionpage, Inoculationpage, InoculationNavi} from 'chartpages/index';
import MainHeader from 'main-vanner/MainHeader';
import { CheckUp, VaccineResult } from 'vaccinepages/index';
const App = () => {
  return(
 <>
  <Layout>
    <MainHeader/>
  </Layout>
  
  <Switch>
        <Route exact path='/MainHeader' component={MainHeader}/>
        {/* <Route exact path='/inpectionpage' component = {Inpectionpage}/> */}
        {/* <Route exact path='/inoculationpage' component = {Inoculationpage}/> */}
        <Route exact path='/check-up' component={CheckUp}/>
        <Route exact path='/chart-pages' component={ChartPage}/>
        
        <Route exact path='/cofin-chart' component = {CofinChart}/>
        <Route exact path='/local-chart' component = {LocalChart}/>

        <Route exact path='/inpectionpage' component = {Inpectionpage}/>
        <Route exact path='/inoculationpage' component = {Inoculationpage}/>

        <Route exact path='/vaccine-result' component = {VaccineResult}/>



  </Switch>

  </>
  )
};
export default App;
const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
 `