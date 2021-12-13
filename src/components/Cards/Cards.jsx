import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// import Typography from '@mui/material/Typography';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import CardComponent from './Card/Card';

const Cards = ({ currency: { data, timestamp } }) => {
  if (!data) {
    return 'Loading ...';
  }
  // const cards = data ? (
  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        {data.name} {data.symbol}
        {',  '}
        {new Date(timestamp).toDateString()}
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.blue}
          cardTitle={data.name}
          value={data.priceUsd}
          marketval={''}
          volume={''}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle=""
        />

        <CardComponent
          className={styles.red}
          cardTitle={data.name}
          value={''}
          marketval={data.marketCapUsd}
          volume={''}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle=""
        />
        <CardComponent
          className={styles.green}
          cardTitle={data.name}
          value={data.priceUsd}
          marketval={''}
          volume={data.volumeUsd24Hr}
          lastUpdate={new Date(timestamp).toDateString()}
          cardSubtitle=""
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
