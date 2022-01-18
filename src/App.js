import React from 'react';
import { Cards, Chart, CurrencyPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import { bitcoindata2 } from './api/bitcoinDummyData';
import logo from './images/logo.jpg';

class App extends React.Component {
  state = {
    data: {},
    historicalData: {},
    currencyId: 'bitcoin',
    errorMsg: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    if (fetchedData) {
      this.setState({
        data: fetchedData.coindata,
        historicalData: fetchedData.historicaldata,
      });
    } else {
      this.setState({ data: bitcoindata2 });
    }
  }

  handleCurrencyChange = async (currencyId) => {
    const fetchedData = await fetchData(currencyId);

    if (fetchedData) {
      const { coinData, data, currencyId } = fetchedData;

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

    return (
      <div className={styles.container}>
        <a
          href="https://github.com/PovilasU/crypto-tracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Git Repo{' '}
        </a>
        {errorMsg ? <p>{errorMsg}</p> : null}
        <img className={styles.image} alt="crypto currency logo" src={logo} />
        <Cards currency={data} />
        <CurrencyPicker handleCurrencyChange={this.handleCurrencyChange} />
        <p>Currency:{currencyId} </p>
        {historicalData ? (
          <Chart historicaldata={historicalData} currencyid={currencyId} />
        ) : null}
      </div>
    );
  }
}

export default App;
