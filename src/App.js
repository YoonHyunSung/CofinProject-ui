import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import {VaccineHR,
        Navi,
        CofinChart} from 'projects/index';
import {Header} from 'mainVanner/index'
import VaccineResult from 'projects/VaccineResult';
const App = () => (
  <>
  <Layout>
    <Header/>
    <Navi/>
  </Layout>

  <Switch>
        <Route exact path='/cofin-chart' component={CofinChart}/>
        <Route exact path='/vaccineHR' component={VaccineHR}/>
        <Route exact path='/vaccine-result' component={VaccineResult}/>
  </Switch>
  </>
  );
export default App;
const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
 `