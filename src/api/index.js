import axios from 'axios';
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const url = 'rest.coinapi.io';

// const fetchData1 = async () => {
//   try {
//     const response = await axios.get(url);
//     console.log(response);
//     return response;
//   } catch (error) {}
// };

export const fetchData = async () => {
  try {
    const symbol = 'BTC';
    const { data } = await axios({
      method: 'GET',
      // url: 'https://rest.coinapi.io/v1/assets',
      //url: 'https://rest.coinapi.io/v1/symbols',
      //url: 'https://rest.coinapi.io/v1/exchanges',
      url: `https://rest.coinapi.io/v1/exchangerate/${symbol}/EUR/history?period_id=1MIN&time_start=2016-01-01T00:00:00&time_end=2016-02-01T00:00:00`,
      headers: {
        'X-CoinAPI-Key': process.env.REACT_APP_API_KEY,
      },
      // params: {
      //   filter_asset_id: 'ADA,DOGE',
      // },z
    });

    const coins = data.map((coinApiData) => ({
      symbol: symbol,
      time_open: coinApiData.time_open,
      rate_open: coinApiData.rate_open,
    }));

    // return coins;
    return data;
  } catch (error) {}
};
