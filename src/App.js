import React from 'react';
import { Cards, Chart, CurrencyPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import LineDemo from './LineDemo';
//import { Chart } from './components/Chart.js';
import LineDemo2 from './LineDemo2';
import { Line } from 'react-chartjs-2';
import { bitcoindata } from './api/bitcoindata.js';

class App extends React.Component {
  state = {
    data: {},
    currency: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    // const fetchedData1 = {
    //   time: '2017-08-09T14:31:18.3150000Z',
    //   asset_id_base: 'BTC',
    //   asset_id_quote: 'USD',
    //   rate: 3260.3514321215056208129867667,
    // };

    const fetchedDataDummy = {
      data: {
        id: 'bitcoin',
        rank: '1',
        symbol: 'BTC',
        name: 'Bitcoin',
        supply: '18899056.0000000000000000',
        maxSupply: '21000000.0000000000000000',
        marketCapUsd: '957147621021.5708437175117360',
        volumeUsd24Hr: '12580846552.7650603187647585',
        priceUsd: '50645.2608543818719685',
        changePercent24Hr: '3.6802692944503915',
        vwap24Hr: '49408.6501943061983328',
        explorer: 'https://blockchain.info/',
      },
      timestamp: 1639334596796,
    };
    // console.log('fetchedData');
    // console.log(fetchedData);
    //console.log(data);

    if (fetchedData) {
      console.log('fetched REAL DATA ');
      this.setState({ data: fetchedData });
    } else {
      console.log(' fetched dummy data');
      this.setState({ data: fetchedDataDummy });
    }
  }

  handleCurrencyChange = async (currency) => {
    const fetchedData = await fetchData(currency);
    if (fetchedData) {
      console.log('fetchedData');
      console.log(fetchedData);
      console.log('currency');
      console.log(currency);
    } else {
      console.log('You have reach limit of API request, please wait 1 minute');
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        {/* <Cards currency={data} /> */}
        <CurrencyPicker handleCurrencyChange={this.handleCurrencyChange} />
        {/* <Chart /> */}
      </div>
    );
  }
}

export default App;
