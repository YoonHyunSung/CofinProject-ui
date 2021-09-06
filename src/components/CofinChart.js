import React from 'react'
import {Line} from 'react-chartjs-2'
import { isElement } from 'react-dom/test-utils';
import styled from 'styled-components';
const CofinChart = () => {
    const data = {
        labels: ['4월', '5월', '6월', '7월'],
        datasets: [
          {
            label: '백신 접종 환자',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [18938,17902,16109,41401]
          },{
            label: '코로나 확진환자',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [18938,17902,16109,41401]
          } , {
            label: '코로나 사망 환자',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [3, 5, 6, 7, 8, 9, 0],
          }
        ],
        oprions: {
          responsive: true
        }
      };
      
    
    return (
    <form>
      <Wrapperdiv>
        <Backdiv>
          <ul>
            <Vli1>국내 코로나</Vli1>
            <Vli2>백신 접종현황</Vli2>
          </ul>
        </Backdiv>
      {/* <Div2>
        <fieldset>
        <h2>Line Chart</h2>
        <Line data ={data}/>
        </fieldset>
      </Div2> */}
    </Wrapperdiv>

    <Navidiv>
      <Naviul>
        <Navili>개요</Navili>
        <Navili>국내 현황</Navili>
        <Navili>세계 현황</Navili>
        <Navili>내지역 거리두기 단계</Navili>
      </Naviul>
    </Navidiv>

    <Div1>
        <fieldset>
        <h2>백신 접종에 따른 효과</h2>
        <Line data ={data}/>
        </fieldset>
      </Div1>
    </form>
    
    )
}
export default CofinChart
const Backdiv = styled.div`
  background-color: #2e374c;
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
const Div1 = styled.div`
display: center;
width: auto;
height: auto;
`
const Div2 = styled.div`
display: inline-block;
height: 200%;
position: absolute;
left: 200px; right: 0;
font-size: 12pt;
word-spacing: 1pt;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
const Wrapperdiv = styled.div`
  border: 1px solid;
  border-radius : 6px;
`
const Navidiv = styled.div`
font-size: 0;
line-height: 0;
text-align: center;
`
const Naviul = styled.ul`
  list-style-type : none;
`
const Navili = styled.li`
  display: inline-block;
  padding: 0 35px;
  vertical-align: top;
  font-size: 1.3rem;
  line-height: 2rem;
`