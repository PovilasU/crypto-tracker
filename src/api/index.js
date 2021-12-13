import axios from 'axios';
import { historicaldata } from './dailydata';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const url = 'https://api.coincap.io/v2';

export const fetchData = async (currencyId) => {
  console.log('#####!!!!!IM HERE');
  let changableUrl = url;
  let changableUrl2 = url;
  if (currencyId) {
    changableUrl = `${url}/assets/${currencyId}`;
    changableUrl2 = `${url}/assets/${currencyId}/history?interval=d1`;
  }

  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    // const res = await fetch(changableUrl);
    // const coinData = await res.json();
    const res2 = await fetch(changableUrl2, requestOptions);
    const { data } = await res2.json();
    console.log('changableUrl');
    console.log(changableUrl);
    const res = await fetch(changableUrl, requestOptions);
    const coinData = await res.json();

    const allData = {
      coinData,
      data,
      currencyId,
    };

    // console.log('#####!!!!!wjat is coinData');
    console.log('----#####!!!!!wjat is data');
    console.log('AAAAAAAAAAAAAAAA data2');
    console.log(allData);
    console.log('###!!!!!wjat is coinData ends ');
    //return coinData;
    return allData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  let changableUrl = `${url}/assets/bitcoin/history?interval=d1`;
  try {
    const res = await fetch(changableUrl, requestOptions);
    const { data } = await res.json();
    console.log('****** fetchDailyDatadata');
    console.log(data);

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
