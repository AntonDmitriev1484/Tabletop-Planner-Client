import React from 'react';
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Login from './Login'

import Register from './Register'

//We can create a type in here that specifies how we want our receiving props object to be structured

export default function Home(props: any) {

    const [register, setRegister] = useState<boolean>(false);

    let component:JSX.Element; //Type of react components is React Functional Component
    let buttonText:string;

    if (register) {
        component = <Register/>;
        buttonText = "Back";
    }
    else {
        component = <Login/>;
        buttonText = "Register";
    }

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

            <Grid item justifyContent = "center">

                    {component}
                        
            </Grid>

            <Grid item>
                <Card 
                color = "secondary"
                variant = "outlined"
                square = {true}>
                    <Button
                        color = "primary"
                        onClick = {
                            () => {
                                setRegister(!register);
                            }
                        }>
                        {buttonText}

                    </Button>   
                </Card>
            </Grid>
        </Grid>
    )

}