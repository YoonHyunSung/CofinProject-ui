import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import styled from 'styled-components'
const VaccineChart = () =>{
    const data = {
        labels:["안전","불안전"],
        datasets: [{
            data: [40, 60],      // 섭취량, 총급여량 - 섭취량
            backgroundColor: [
              '#9DCEFF',
              '#F2F3F6'
            ],
            cutoutPercentage:0,
            borderWidth: 0,
            scaleBeginAtZero: true,
            
          }
        ]
    
    }
    return(
        <Vdiv>
            <Doughnut data = {data}/>
        </Vdiv>
    )

}
export default VaccineChart
const Vdiv = styled.div`
    height: 500px;
    width: 500px;
    margin-left: 95px;
    height: 30px;
    position: relative;
    align="left"
`