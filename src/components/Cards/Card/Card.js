import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Card.module.css';

const getNumber = function (num) {
  var units = ['m', 'b', 't', 'q'];
  var unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  var r = unit % 3;
  var x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r)).toFixed(2);
  return x.toFixed(2) + '' + units[Math.floor(unit / 3) - 2];
};

const CardComponent = ({
  className,
  cardTitle,
  value = null,
  marketval,
  volume,
  lastUpdate,
  cardSubtitle,
}) => {
  let middleText = '';
  if (value) {
    middleText = (
      <Typography variant="h5" component="h2">
        Price $<CountUp start={0} end={value} duration={0.75} separator="," />
      </Typography>
    );
  }
  if (marketval) {
    middleText = (
      <Typography variant="h5" component="h2">
        Market Cap ${getNumber(marketval)}
        {/* <CountUp start={0} end={value} duration={2.75} separator="," /> */}
      </Typography>
    );
  }
  if (volume) {
    middleText = (
      <Typography variant="h5" component="h2">
        Volume (24Hr) $
        <CountUp start={0} end={volume} duration={0.75} separator="," />
      </Typography>
    );
  }

  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cx(styles.card, className)}
    >
      <CardContent>
        {/* <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography> */}
        <Typography variant="h5" component="h2">
          {/* marketval123 {marketval} */}
          {/* <CountUp start={0} end={value} duration={2.75} separator="," /> */}
        </Typography>

        {middleText}
        <Typography color="textSecondary">
          {/* {new Date(lastUpdate).toDateString()} */}
        </Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  );
};
export default CardComponent;
