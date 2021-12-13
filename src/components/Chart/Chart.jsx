import React, { useState, useEffect, Component } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ historicaldata, currencyid = 'bitcoint' }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  console.log('&&&&&Chart JSX historicaldata');
  console.log(historicaldata);
  console.log('historicaldata');

  const lineHistoricalChart = historicaldata[0] ? (
    <Line
      data={{
        labels: historicaldata.map(({ date }) => date),
        datasets: [
          {
            data: historicaldata.map(({ priceUsd }) => priceUsd),
            label: `${currencyid} Price in USD`,
            borderColor: `#3333ff`,
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const lineChart = dailyData ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ priceUsd }) => priceUsd),
            label: `${currencyid} Price in USD`,
            borderColor: `#3333ff`,
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {/* {currencyid ? lineChart : <p>no currency is selected </p>} */}
      {historicaldata[0] ? 'historicaldata' : 'lineChart'}
      {historicaldata[0] ? lineHistoricalChart : lineChart}
    </div>
  );
};

export default Chart;
