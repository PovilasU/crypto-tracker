import React from 'react';
import { Cards, Chart, CurrencyPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CurrencyPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
