import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
// import Typography from '@mui/material/Typography';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ currency: { data, timestamp } }) => {
  const cards = data ? (
    <Grid container spacing={3} justify="center">
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={cx(styles.card, styles.blue)}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {data.name} {data.symbol}
          </Typography>
          <Typography varaint="h5">
            Price USD {` `}
            <CountUp
              start={0}
              end={data.priceUsd}
              duration={0.5}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(timestamp).toDateString()}{' '}
          </Typography>
          {/* <Typography variant="body2">Thsi is testt text </Typography> */}
        </CardContent>
      </Grid>
    </Grid>
  ) : (
    <p>Please wait one minute ... (api.coincap.io has limited requests)</p>
  );
  return <div className={styles.contaier}>{cards}</div>;
};

export default Cards;
