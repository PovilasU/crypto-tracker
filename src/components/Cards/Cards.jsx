import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import Typography from '@mui/material/Typography';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import CardComponent from './Card/Card';

const getNumber = function (num) {
  var units = ['m', 'b', 't', 'q'];
  var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  var r = unit % 3;
  var x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(2);
  return x.toFixed(2) + '' + units[Math.floor(unit / 3) - 2];
};

const Cards = ({ currency: { data, timestamp } }) => {
  // console.log('data.changePercent24Hr');
  // console.log(data.changePercent24Hr);
  if (!data) {
    return 'Loading ...';
  }
  // const cards = data ? (
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        Global
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.blue}
          cardTitle={data.name}
          value={data.priceUsd}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.red}
          cardTitle={data.name}
          value={data.priceUsd}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.green}
          cardTitle={data.name}
          value={data.priceUsd}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle="Number of active cases from COVID-19."
        />
      </Grid>
    </div>
  );
  // ) : (
  //   <p>Please wait one minute ... (api.coincap.io has limited requests)</p>
  // );
  // return <>{cards}</>;
};

export default Cards;
