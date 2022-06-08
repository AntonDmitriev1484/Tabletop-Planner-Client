import React, {FC} from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import {login} from '../../api/user_api';
import AuthObj from '../../types/AuthObj';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function Login(props: any): JSX.Element {

    const [info, setInfo] = useState<AuthObj>({} as AuthObj); //Makes useState work with an object of type AuthObj
    const redirect = useNavigate(); //This is also a react hook

    const username_field_change = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo({...info, username: event.target.value}); //Copies the rest of info, except for username
    }

    const password_field_change = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo({...info, password:event.target.value});
    }

    const on_login_press = ():void => {
        const user:string = info.username;
                               
        const on_success = (a: any) => {
            console.log("In login success");
            console.log(user);
            document.cookie = "username= "+user+";"; //Because we still have access to this scope's info 
            console.log('redirecting');
            redirect("/dash/"); //Change this redirect to only work on successful entry, maybe pass it to the api-user function
        }
       
        login(info, on_success);
    }

    return (
        <Card 
            color = "secondary"
            variant = "outlined"
            square = {true}>
            <Box m={7}>
            <Grid 
                container 
                spacing = {2}
                direction="column"
                justifyContent="center"
                alignItems="center">

                    <Grid item>
                        <Typography variant="h3">Login</Typography>
                    </Grid>

                    <Grid item>
                        <TextField  label="Username" id="login-username" variant= "outlined"
                            onChange = { username_field_change}/>
                    </Grid>

                    <Grid item>
                        <TextField label="Password" id="login-password" variant= "outlined"
                            onChange = { password_field_change }/>
                    </Grid>

                    <Grid item>
                        <Button 
                            color="secondary" variant="contained"
                            onClick= { on_login_press} >Enter</Button>
                    </Grid>


                </Grid>

            </Box>
        </Card>
    )
}

export default Login;