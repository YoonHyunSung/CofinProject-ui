import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ChartHeader = () => {
    return(<>
        <Wrapperdiv>
          <Backdiv>
            <fieldset>
              <Vli1><Link to="inpectionpage">코로나 감염 현황</Link></Vli1>
              <Vli2><Link to="inoculationpage">백신 접종 현황</Link></Vli2>
            </fieldset>
          </Backdiv>
      </Wrapperdiv>
    </>)
}
export default ChartHeader

const Backdiv = styled.div`
  background-color: white;
`
const Vli1 = styled.li`
  float: left;
  width: 50%;
  height: 42px;
  background-color: transparent;
`
const Vli2 = styled.li`
  float: left;
  width: 50%;
  height: 42px;
`
const Wrapperdiv = styled.div`
  border: 1px solid;
  border-radius : 6px;
`