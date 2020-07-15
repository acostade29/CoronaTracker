import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';



const Cards =({data: {confirmed, recovered, deaths,  lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className="container">
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                <CardContent>  
                    <Typography color="textSeconday" gutterBottom>Infected</Typography>
                    <Typography caraint="h5"> 
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=","
                    />
                     </Typography>
                    <Typography color="textSecondaty">{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card}>
                <CardContent>  
                    <Typography color="textSeconday" gutterBottom>Recovered</Typography>
                    <Typography caraint="h5"> 
                    <CountUp start={0} end={recovered.value} duration={2.5} separator=","
                    />
                     </Typography>
                     <Typography color="textSecondaty">{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number Recoveries from COVID-19</Typography>
                </CardContent>
                </Grid>
                <Grid item component={Card}>
                <CardContent>  
                    <Typography color="textSeconday" gutterBottom>Deaths</Typography>
                    <Typography caraint="h5"> 
                    <CountUp start={0} end={deaths.value} duration={2.5} separator=","
                    />
                     </Typography>
                     <Typography color="textSecondaty">{new Date(lastUpdate).toDateString()} </Typography>
                    <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                </CardContent>
                </Grid>
                
                

            </Grid>
        </div>

        
    )
}

export default Cards