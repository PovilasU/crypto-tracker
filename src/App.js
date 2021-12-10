import React from 'react';
import { Cards, Chart, CurrencyPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

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

    const fetchedData1 = {
      time: '2017-08-09T14:31:18.3150000Z',
      asset_id_base: 'BTC',
      asset_id_quote: 'USD',
      rate: 3260.3514321215056208129867667,
    };

    //  console.log(fetchedData);
    //console.log(data);

    this.setState({ data: fetchedData1 });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CurrencyPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
