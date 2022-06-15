import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import ProgressBar from './progress_bar/ProgressBar';
import NotesIcon from '@mui/icons-material/Notes';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import { AccordionDetails } from '@mui/material';


{/* <Grid
container 
spacing = {5}
direction="column"
justifyContent="center"
alignItems="center"> */}


export default function PlanGridRow (props:any):JSX.Element {


    return (
        <div>
                <Grid item>

                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >

                        <Grid
                            container
                            direction = "row"
                            spacing = {3}>
                                
                        <Grid item>
                            <ButtonGroup  aria-label="button group">
                                <Button>CSE 503S</Button>
                                <Button>6 - 15 - 22</Button>
                            </ButtonGroup>
                        </Grid>

                        <Grid item>
                            <TextField
                                fullWidth
                                hiddenLabel
                                id="filled-hidden-label-small full-width-text-field"
                                defaultValue=""
                                size="small"
                                // margin = "none"
                                sx = {{
                                    width: "200px",
                                    top: "6px"
                                }}
                                variant = "standard"
                                />
                        </Grid>

                        {/* <Grid item>
                            <Button variant="outlined">06/15/2022</Button>
                        </Grid> */}

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
                        </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                        </AccordionDetails>
                        
                    </Accordion>

                        

                    </Grid>

             

        </div>
    )
}