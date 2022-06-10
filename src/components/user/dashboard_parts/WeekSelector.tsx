import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from 'react';

interface WeekSelectorProps {
    start_date: string,
    end_date: string,
    display_week_callback: (start_date:string, end_date:string) => void
    //This is the function which will be responsible for generating the <Week> component and rendering it into the main area of <Dashboard/>
    //callback will be passed down from dashboard
}

export default function WeekSelector(props:WeekSelectorProps):JSX.Element {

    return (
        <ListItemButton 
        sx={{ pl: 4 }}
        onClick = {() => {props.display_week_callback(props.start_date, props.end_date)}}>

            <ListItemText primary={`${props.start_date} - ${props.end_date}`} />
        </ListItemButton>
    )
}