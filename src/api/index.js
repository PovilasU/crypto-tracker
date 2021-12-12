import axios from 'axios';
import { historicaldata } from './dailydata';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const url = 'https://api.coincap.io/v2';

export const fetchData = async (currency) => {
  let changableUrl = url;
  if (currency) {
    changableUrl = `${url}/assets/${currency}`;
  }
  try {
    console.log('changableUrl 1');
    // console.log(data);
    //const res = await fetch(`${url}/assets/bitcoin`);
    const res = await fetch(changableUrl);
    const coinData = await res.json();

    console.log('coinData');
    console.log(coinData);
    //   return data.map((data) => {});

    return coinData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyDataOld = async () => {
  try {
    console.log('historicaldata');
    console.log(historicaldata);
    const symbol = 'BTC';
    // const { data } = await axios({
    //   method: 'GET',
    //   // url: 'https://rest.coinapi.io/v1/assets',
    //   //url: 'https://rest.coinapi.io/v1/symbols',
    //   //url: 'https://rest.coinapi.io/v1/exchanges',
    //   url: `https://rest.coinapi.io/v1/exchangerate/${symbol}/EUR/history?period_id=1MIN&time_start=2021-01-01T00:00:00&time_end=2021-02-01T00:00:00`,
    //   headers: {
    //     'X-CoinAPI-Key': process.env.REACT_APP_API_KEY,
    //   },
    //   // params: {
    //   //   filter_asset_id: 'ADA,DOGE',
    //   // },
    // });
    // return data;
    const modifiedData = historicaldata.map((dailyData) => ({
      date: dailyData.time_open,
      rate: dailyData.rate_open,
    }));
    // console.log('modifiedData');
    // console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};
export const fetchDailyData = async () => {
  try {
    const res = await fetch(
      // 'https://api.coincap.io/v2/assets/bitcoin/history?interval=d1'
      `${url}/assets/bitcoin/history?interval=d1`
    );
    const { data } = await res.json();

    // console.log('data');
    // console.log(data);
    // return modifiedData;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrencies = async () => {
  try {
    const res = await fetch(`${url}/assets`);
    const { data } = await res.json();

    return data.map((currency) => currency.id);
  } catch (error) {
    console.log(error);
  }
};
