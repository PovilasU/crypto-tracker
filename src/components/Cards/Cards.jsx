import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
// import Typography from '@mui/material/Typography';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames';

const Cards = ({data:{asset_id_base, asset_id_quote,rate, time}}) => {
//    console.log(props)
//    const {data} = props
    return (
        <div className={styles.contaier}> 
       
             <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx (styles.card, styles.blue)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {asset_id_base==='BTC'&& 'BitCoin'}  ({asset_id_base})
                    </Typography>
                        <Typography varaint="h5">Price  {asset_id_quote}
                            <CountUp
                            start={0}
                            end={rate}
                            duration={.5}
                            separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(time).toDateString()} </Typography>
                    {/* <Typography variant="body2">Thsi is testt text </Typography> */}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx (styles.card, styles.green)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {asset_id_base==='BTC'&& 'BitCoin'}  ({asset_id_base})
                    </Typography>
                        <Typography varaint="h5">Price  {asset_id_quote }   <CountUp
                            start={0}
                            end={rate}
                            duration={.5}
                            separator=","
                        /> </Typography>                      
                        <Typography color="textSecondary">{new Date(time).toDateString()} </Typography>
                    {/* <Typography variant="body2">Date: {time} </Typography> */}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx (styles.card, styles.red)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {asset_id_base==='BTC'&& 'BitCoin'}  ({asset_id_base})
                    </Typography>
                        <Typography varaint="h5">Price  {asset_id_quote }   <CountUp
                            start={0}
                            end={rate}
                            duration={.5}
                            separator=","
                        /> </Typography>                      
                        <Typography color="textSecondary">{new Date(time).toDateString()} </Typography>
                    {/* <Typography variant="body2">Date: {time} </Typography> */}
                    </CardContent>
                </Grid>
               
               

            </Grid> 
            
        </div>
    )
}

export default Cards;