import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ProgressBar from './progress_bar/ProgressBar';
import NotesIcon from '@mui/icons-material/Notes';
import Box from '@mui/material/Box';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import MoreVertIcon from '@mui/icons-material/MoreVert';


{/* <Grid
container 
spacing = {5}
direction="column"
justifyContent="center"
alignItems="center"> */}


export default function PlanGridRow (props:any):JSX.Element {

    console.log('in plan grid row');

    return (
        <div>

            <Grid
            container
            direction = "row"
            spacing = {1}>

                <Grid item>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>One</Button>
                        <Button>Two</Button>
                    </ButtonGroup>
                </Grid>

                <Grid item>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                        />
                </Grid>

                <Grid item>
                    <Button variant = "contained">06/15/2022</Button>
                </Grid>

                <Grid item>
                        
                    <ProgressBar/>
                </Grid>

                <Grid item>
                    <Checkbox/>
                </Grid>

                {/* Add note option later */}

                <Grid item>
                    <ButtonGroup
                        >
                            <Button> 
                                <ArrowDropUpIcon/> 
                            </Button>
                            <Button> 
                                <ArrowDropDownIcon/>
                            </Button>
                            <Button>
                                <MoreVertIcon/>
                            </Button>

                    </ButtonGroup>
                </Grid>

            </Grid>

        </div>
    )
}