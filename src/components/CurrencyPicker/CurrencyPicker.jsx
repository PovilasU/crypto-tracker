import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@mui/material';
import styles from './CurrencyPicker.module.css';
import { fetchCurrencies } from '../../api';

const CurrencyPicker = () => {
  const [fetchedCurrencies, setFetchedCurrencies] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCurrencies(await fetchCurrencies());
    };
    fetchAPI();
  }, [setFetchedCurrencies]);

  console.log('fetchedCurrencies');
  console.log(fetchedCurrencies);

  return (
    <FormControl className={styles.formControl}>
      <h1>CurrencyPicker</h1>
      <NativeSelect>
        <option value="global">Global</option>
        {fetchedCurrencies.map((currency, i) => (
          <option key={i} value={currency}>
            {currency}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CurrencyPicker;
