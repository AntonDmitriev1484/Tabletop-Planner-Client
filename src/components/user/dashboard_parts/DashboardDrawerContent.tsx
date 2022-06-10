import { Add, ExpandLess, ExpandMore, MoreHoriz, PropaneSharp } from "@mui/icons-material";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from 'react';

import WeekSelector from "./WeekSelector";


function prev_week(date: Date):[monday_date:Date, sunday_date:Date] {

    let month: number = date.getMonth();
    let year: number = date.getFullYear();

    let monday: number = date.getDate() - (date.getDay() + 6) % 7;

    // if (monday < 0 ){ //If monday is a negative number then that means it's spilled back into the previous month

    // }

    // var prevMonday = date;
    // prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7);

    let monday_date: Date = new Date(year, month,  monday);
    let sunday_date: Date = new Date(year, month, monday+6);

    return [monday_date, sunday_date]

}


interface DashboardDrawerContentProps {
    display_week_callback: (start_date:string, end_date:string) => void
}

export default function DashboardDrawerContent(props:DashboardDrawerContentProps):JSX.Element {

    const [openWeeks, setOpenWeeks] = useState<boolean>(false);

    const [openUser, setOpenUser] = useState<boolean>(false);

    const [currentSelected, setCurrentSelected] = useState<number>(-1);
    //Indexing of every weekselector determines which one appears as currently selected

    const on_weeks_press = ():void => {
        setOpenWeeks(!openWeeks);
    }

    const on_user_press = ():void => {
        setOpenUser(!openUser);
    }

    const display_selected_callback = (index:number) => {
        setCurrentSelected(index);
    }

    function generate_week_selectors():JSX.Element[] {

        let start_date: Date = new Date();
    
        let week_selectors: JSX.Element[] = [];
    
        let monday_date: Date = new Date();
        let sunday_date: Date = new Date();

        let is_selected: boolean = false;
    
        for (let i = 0; i< 4; i++ ) {
    
            [monday_date, sunday_date] = prev_week(start_date);

            is_selected = (i === currentSelected);

            week_selectors.push(<WeekSelector 
                                start_date={monday_date.toLocaleDateString()} 
                                end_date={sunday_date.toLocaleDateString()} 
                                display_week_callback = {props.display_week_callback}
                                selection_index = {i}
                                is_selected = {is_selected}
                                display_selected_callback = {display_selected_callback}
                                />)
    
            start_date = new Date( monday_date.getFullYear(), monday_date.getMonth(), monday_date.getDate() - 1);
        }
    
        return week_selectors;
    }


    return (
        <List>
                <ListItem key={'weeks'} disablePadding>
                    <ListItemButton
                    onClick = {on_weeks_press}>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        <ListItemText primary={'Weeks'} />
                        {openWeeks ? <ExpandLess /> : <ExpandMore />}

                    </ListItemButton>
                </ListItem>

                <Collapse in={openWeeks} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>

                        {/* Try centering this later */}
                        {/* If user wants to add a week ahead of time */}
                        <ListItemButton 
                        sx={{ pl: 4 }}
                        onClick = {() => {/*TBD*/}}>
                                <ListItemIcon >
                                    <Add/>
                                </ListItemIcon>   
                        </ListItemButton>

                        {generate_week_selectors()}

                        {/* Try centering this later */}
                        <ListItemButton 
                        sx={{ pl: 4 }}
                        onClick = {() => {/*TBD*/}}>
                                <ListItemIcon >
                                    <MoreHoriz/>
                                </ListItemIcon>   
                        </ListItemButton>

                    </List>
                </Collapse>

                <Divider/>

                <ListItem key={'user'} disablePadding>
                    <ListItemButton
                    onClick = {on_user_press}>
                        <ListItemText primary={'User'} />
                        {openUser ? <ExpandLess /> : <ExpandMore />}

                    </ListItemButton>
                </ListItem>
        </List>
    )
}