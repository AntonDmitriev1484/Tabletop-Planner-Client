import React from 'react';
import { useState } from 'react';


import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import AuthObj from '../../types/AuthObj';

import {create_user} from '../../api/user_api'
import Box from '@mui/material/Box';
import { Alert, AlertTitle, Collapse, Grid, IconButton } from '@mui/material';

function Register(props: any) {

    const [info, setInfo] = useState<AuthObj>({} as AuthObj);

    const [display_alert, setDisplayAlert] = useState<boolean>(false);

    const username_field_change = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo({...info, username: event.target.value}); //Copies the rest of info, except for username
    }

    const password_field_change = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo({...info, password:event.target.value});
    }

    const email_field_change = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInfo({...info, email:event.target.value});
    }

    const on_register_press = (): void => {
        const on_success = (a:any) => {
            //We want this to display a success message on the screen
            console.log("User creation success");
            setDisplayAlert(true);
        }
        create_user(info,on_success); //Order in which these print ultimatley doesn't matter, 
        //because the functionality which we need to be blocking, is synchronous

        //Might want to think about passing in an on_failure function to these too. This way we could display errors as pop ups as well
    }

    return (
        <Card 
            color = "secondary" 
            variant = "outlined"
            square = {true}>
            <Box m ={7}>
                <Grid
                    container
                    spacing = {2}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                
                    <Grid item>
                        <Typography variant="h3">Register</Typography>
                    </Grid>

                    <Grid item>
                        <TextField  label="Email" id="register-email" variant= "outlined"
                            onChange = { email_field_change}/>

                    </Grid>

                    <Grid item>
                        <TextField  label="Username" id="register-username" variant= "outlined"
                            onChange = { username_field_change}/>

                    </Grid>

                    <Grid item>
                        <TextField label="Password" id="register-password" variant= "outlined"
                            onChange = { password_field_change}/>
                    </Grid>

                    <Grid item>
                        <Button 
                            color="secondary" variant="contained"
                            onClick= { on_register_press} >Register</Button>
                    </Grid>



                </Grid>
                
            </Box>


            {/* This box displays an alert when account creation is successful */}
            <Box sx={{ width: '100%' }}>
                <Collapse in={display_alert}>
                <Alert 
                severity="success"
                action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setDisplayAlert(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  >
                    <AlertTitle>Success</AlertTitle>
                    Account created successfully! You can now log in!
                </Alert>
                </Collapse>
            </Box>

            

         </Card>
    )
}

export default Register;