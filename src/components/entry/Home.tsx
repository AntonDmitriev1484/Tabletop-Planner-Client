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
    
    return (
        
        // <Paper style = {{
        //     backgroundImage: `url('https://img.freepik.com/free-photo/liquid-marbling-paint-texture-background-fluid-painting-abstract-texture-intensive-color-mix-wallpaper_1258-82827.jpg?w=1800&t=st=1654724332~exp=1654724932~hmac=8bff19a35cf1b0fe12bb8697c148b7781bc08ab109002aa9691c7fa6168bf9cf')`,
        //     backgroundSize: "cover",
        //     height: "100vh",
        //     color: "#f5f5f5"
        // }} >
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
        // </Paper>
        
    )

}