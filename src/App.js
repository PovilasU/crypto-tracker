import React from 'react';
import { Cards, Chart, CurrencyPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import { fetchDailyData } from './api';
import LineDemo from './LineDemo';
//import { Chart } from './components/Chart.js';
import LineDemo2 from './LineDemo2';
import { Line } from 'react-chartjs-2';
import { bitcoindata } from './api/bitcoindata.js';
import { bitcoindata2 } from './api/bitcoinDummyData';
// const fetchedDataDummy = {
//   data: {
//     id: 'bitcoin',
//     rank: '1',
//     symbol: 'BTC',
//     name: 'Bitcoin',
//     supply: '18899056.0000000000000000',
//     maxSupply: '21000000.0000000000000000',
//     marketCapUsd: '957147621021.5708437175117360',
//     volumeUsd24Hr: '12580846552.7650603187647585',
//     priceUsd: '50645.2608543818719685',
//     changePercent24Hr: '3.6802692944503915',
//     vwap24Hr: '49408.6501943061983328',
//     explorer: 'https://blockchain.info/',
//   },
//   timestamp: 1639334596796,
// };

// console.log('fetchedDataDummy');
// console.log(fetchedDataDummy);
console.log('bitcoindata2');
console.log(bitcoindata2);
class App extends React.Component {
  state = {
    data: {},
    historicalData: {},
    currencyId: 'bitcoin',
    errorMsg: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log('componentDidMount');
    console.log('componentDidMount');

    if (fetchedData) {
      console.log('fetched REAL DATA ');
      this.setState({
        data: fetchedData.coindata,
        historicalData: fetchedData.historicaldata,
      });
      // this.setState({ data: fetchedData.coindata });
    } else {
      console.log('++++++++++++++++ fetched dummy data');
      this.setState({ data: bitcoindata2 });
    }
  }

  handleCurrencyChange = async (currencyId) => {
    const fetchedData = await fetchData(currencyId);
    //const fetchedDailyData = await fetchDailyData(currencyId);
    // if (fetchedData && fetchedDailyData) {
    if (fetchedData) {
      console.log('@@@@@123fetchedData');
      console.log(fetchedData);
      console.log('@@@@@123fetchedData END');
      const { coinData, data, currencyId } = fetchedData;
      // console.log(`currency ${currencyId} `);
      this.setState({
        data: coinData,
        historicalData: data,
        currencyId: currencyId,
      });
    } else {
      console.log('You have reach limit of API request, please wait 1 minute');
      this.setState({
        data: bitcoindata2,
        currencyId: currencyId,
        errorMsg:
          '!!You have reach limit of API request, please wait 1 minute and refresh page',
      });
    }
  };

  render() {
    const { data, historicalData, errorMsg, currencyId } = this.state;
    console.log('XXXXXXXX');
    console.log(historicalData);
    console.log('XXXXXXXX ends');
    return (
      <div className={styles.container}>
        {errorMsg ? <p>{errorMsg}</p> : null}
        <Cards currency={data} />
        <CurrencyPicker handleCurrencyChange={this.handleCurrencyChange} />
        <p>Country:{currencyId} </p>
        <Chart historicaldata={historicalData} currencyid={currencyId} />
      </div>
    );
  }
}

export default App;
