import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2'
import styled from 'styled-components'

const VaccineResult = ()=>{
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
    
    return (
        <form>
            <Vdiv>
            <Doughnut data = {data}/>
            <fieldset>
                <legend>결과보기</legend>
                <table>
                    <tr>
                    <th>백신</th>
                    <th>85</th>
                    </tr>
                    <tr>
                    <th>백신</th>
                    <th>75%</th>
                    </tr>
                    <tr>
                    <th>백신</th>
                    <th>75%</th>
                    </tr>
                </table>
            </fieldset>
            </Vdiv>
            
        </form>
        
        )

}
export default VaccineResult

const Vdiv = styled.div`
    height: 500px;
    width: 500px;
    margin-left: 95px;
    height: 30px;
    position: relative;
`