import { useEffect, useState } from 'react';
import { Chart } from './components/Chart.js';
import LineDemo2 from './LineDemo2';
import { Line } from 'react-chartjs-2';
import { bitcoindata } from './api/bitcoindata.js';
import './styles.css';

console.log('bitcoindata');
console.log(bitcoindata.data);
const LineChart = bitcoindata.data ? (
  <Line
    data={{
      labels: bitcoindata.data.map(({ date }) => date),
      // datasets: [{
      //   data:bitcoindata.data.map(({priceUsd})=>priceUsd),
      //   label: 'Price USD',
      //   borderColor: `#3333ff`,
      //   fill: true,
      // }]
      datasets: [
        {
          label: 'My First dataset',
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
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ],
    }}
  />
) : null;

const data2 = {
  labels: bitcoindata.data.map(({ date }) => date),
  datasets: [
    {
      data: bitcoindata.data.map(({ priceUsd }) => priceUsd),
      label: 'Price in USD',
      borderColor: `#3333ff`,
      fill: true,
    },
  ],
};

export default function App() {
  useEffect(() => {
    const fetchPrices = async () => {
      const res = await fetch(
        'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1'
      );
      const data = await res.json();
      setChartData({
        labels: data.data.map((crypto) => crypto.name),
        datasets: [
          {
            label: 'Price in USD',
            data: data.data.map((crypto) => crypto.priceUsd),
            backgroundColor: [
              '#ffbb11',
              '#C0C0C0',
              '#50AF95',
              '#f3ba2f',
              '#2a71d0',
            ],
          },
        ],
      });
    };
    fetchPrices();
  }, []);

  const [chartData, setChartData] = useState({});

  return (
    <div className="App">
      <Chart chartData={chartData} />
      {/* <LineDemo2 /> */}
      {/* <Line data={data1} /> */}
      <Line data={data2} />
      {/* <LineChart /> */}
    </div>
  );
}
