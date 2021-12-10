import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
// import Typography from '@mui/material/Typography';
import styles from './Cards.module.css'

const Cards = (props) => {
    console.log(props)
    return (
        <div className={styles.contaier}>
            <Grid container spacing={3} justify="center">Cards</Grid>
            <Grid item component={Card}>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Currency
                </Typography>
                <Typography variant="h5">Reacl Data </Typography>
                <Typography color="textSecondary">REAL DATE </Typography>
                <Typography variant="body2">Price when market oppened </Typography>
                </CardContent>
            </Grid>
        </div>
    )
}

export default Cards;