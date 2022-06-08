import React from 'react';
import { useState } from 'react';


import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

import AuthObj from '../../types/AuthObj';

import {create_user} from '../../api/user_api'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

function Register(props: any) {

    const [info, setInfo] = useState<AuthObj>({} as AuthObj);

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
                            onChange = { //Each time this text field is changed, onChange is called , and an event object is passed to the function
                                (event)=>{
                                    setInfo({
                                        username: info.username, 
                                        password: info.password,
                                        email: event.target.value
                                    });
                                }
                            }/>

                    </Grid>

                    <Grid item>
                        <TextField  label="Username" id="register-username" variant= "outlined"
                            onChange = { //Each time this text field is changed, onChange is called , and an event object is passed to the function
                                (event)=>{
                                    setInfo({
                                        username: event.target.value, 
                                        password: info.password,
                                        email: info.email
                                    });
                                }
                            }/>

                    </Grid>

                    <Grid item>
                        <TextField label="Password" id="register-password" variant= "outlined"
                            onChange = { //Constantly causing state to re-render, but thats fine for now
                                (event)=>{
                                    setInfo({
                                        username: info.username, 
                                        password: event.target.value,
                                        email: info.email
                                    });
                                }
                                
                            }/>
                    </Grid>

                    <Grid item>
                        <Button 
                            color="secondary" variant="contained"
                            onClick= { () => {

                                const on_success = (a:any) => {
                                    console.log("User creation success");
                                }
                                
                                //console.log('before create user');
                                create_user(info,on_success); //Order in which these print ultimatley doesn't matter, 
                                //because the functionality which we need to be blocking, is synchronous
                                //console.log('after create user');
                            }
                            } >Submit</Button>
                    </Grid>



                </Grid>
                
            </Box>

         </Card>
    )
}

export default Register;