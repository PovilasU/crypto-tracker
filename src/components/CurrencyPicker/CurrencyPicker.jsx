import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@mui/material';
import styles from './CurrencyPicker.module.css';
import { fetchCurrencies } from '../../api';

const CurrencyPicker = ({ handleCurrencyChange }) => {
  const [fetchedCurrencies, setFetchedCurrencies] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCurrencies(await fetchCurrencies());
    };
    fetchAPI();
  }, [setFetchedCurrencies]);

  // console.log('fetchedCurrencies');
  // console.log(fetchedCurrencies);
  const currencySelector = fetchedCurrencies ? (
    <NativeSelect
      defaultValue=""
      onChange={(e) => handleCurrencyChange(e.target.value)}
    >
      <option value="bitcoin">bitcoin</option>
      {fetchedCurrencies.map((currency, i) => (
        <option key={i} value={currency}>
          {currency}
        </option>
      ))}
    </NativeSelect>
  ) : (
    <p>
      You have reach limit of API request, please wait 1 minute and refresh page{' '}
    </p>
  );

  return (
    <FormControl className={styles.formControl}>
      <h1>CurrencyPicker</h1>
      {currencySelector}
    </FormControl>
  );
};

export default CurrencyPicker;
