import React from 'react';
import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

 //import Image from '../../images/lob.webp'
 //import Image from '../../images/3d-abstract-dots-wave-pattern-background.jpg'

import Login from './Login'

import Register from './Register'
import { Paper } from '@mui/material';

import '../../styles/styles.css'

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

    // <a href='https://www.freepik.com/photos/data-network'>Data network photo created by rawpixel.com - www.freepik.com</a>

    //No idea why backgrounds are so hard to do lol

    //Consider re-doing swapping so that it looks like this guy's image:
    //https://stackoverflow.com/questions/49969662/responsive-frosted-glass-effect-on-card-background

    // const background_style = {
    //     background-image: "url(../images/3d-abstract-dots-wave-pattern-background.jpg)",

    //     /* Full height */
    //     height: 100%,

    //     /* Center and scale the image nicely */
    //     background-position: center,
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     border-color: red;
    //     border-radius: 10px;
    // }
    
    return (
        // <Paper style = {{
        //     backgroundSize: "cover",
        //     height: "100vh",
        //     backgroundColor: "#270554"
        // }} >
        <div className = "background">
        <Grid
            container 
            spacing = {5}
            direction="column"
            justifyContent="center"
            alignItems="center">

            <Grid item >
                <Typography variant = "h1" color = "secondary">Home</Typography>
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
        </div>
        
        // </Paper>
        
    )

}