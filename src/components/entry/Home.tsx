import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import Login from './Login'
import Grid from '@mui/material/Grid';
//import Register from './Register'

//We can create a type in here that specifies how we want our receiving props object to be structured

export default function Home(props: any) {


    return (
        <Grid
            container 
            spacing = {5}
            direction="column"
            justifyContent="center"
            alignItems="center">

            <Grid item >
                <Typography variant="h1">Home</Typography>
            </Grid>

            <Grid 
            container 
            spacing = {4} 
            direction = "row"
            justifyContent = "center"
            alignItems = "center">

                <Grid item>
                    <Login/>
                </Grid>
                <Grid item  >
                    <Login/>
                </Grid>

            </Grid>
        </Grid>
    )

}