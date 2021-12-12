import React, {useState, useEffect , Component} from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar   } from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(()=> {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }    
    fetchAPI();

  }, []);
  
  const lineChart = (
    dailyData.length ?
      (
        <Line
          data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
          {
            data: dailyData.map(({ priceUsd }) => priceUsd),
            label: 'Price in USD',
            borderColor: `#3333ff`,
            fill: true,
          },
        ],
      }          
        }
        />
      ): null
  )

  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  );
 };

 export default Chart