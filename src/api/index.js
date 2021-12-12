import axios from 'axios';
import { historicaldata } from './dailydata';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const url = 'https://api.coincap.io/v2';

export const fetchData = async () => {
  try {
    const symbol = 'BTC';

    const fetchedData2 = [
      {
        time_open: '2016-01-01T00:00:00.0000000Z',
        rate_open: 395.84356746236574,
      },
      {
        time_open: '2016-01-01T00:01:00.0000000Z',
        rate_open: 396.6670099999999,
      },
    ];
    //const { data } = await axios({
    const { data } = axios({
      method: 'GET',
      // url: 'https://rest.coinapi.io/v1/assets',
      //url: 'https://rest.coinapi.io/v1/symbols',
      //url: 'https://rest.coinapi.io/v1/exchanges',
      //  url: `https://rest.coinapi.io/v1/exchangerate/${symbol}/EUR/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00`,
      headers: {
        'X-CoinAPI-Key': process.env.REACT_APP_API_KEY,
      },
      // params: {
      //   filter_asset_id: 'ADA,DOGE',
      // },
    });

    // const coins = data.map((coinApiData) => ({
    //   symbol: symbol,
    //   time_open: coinApiData.time_open,
    //   rate_open: coinApiData.rate_open,
    // }));

    // return coins;
    // return data;
    return fetchedData2;
  } catch (error) {}
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
