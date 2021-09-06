import React from 'react'
import { Bar } from 'react-chartjs-2'

const LocalChart = () =>{
    const data = {
        labels: ['4월', '5월', '6월', '7월'],
        datasets: [
          {
            label: '국내 코로나 확진환자',
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
          }]
        }
    return(<>
        <div>
        <Bar data={data}></Bar>
        </div>
    </>)
}
export default LocalChart
