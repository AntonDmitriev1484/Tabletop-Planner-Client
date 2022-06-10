import { ExpandLess, ExpandMore, PropaneSharp } from "@mui/icons-material";
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

    const on_weeks_press = ():void => {
        setOpenWeeks(!openWeeks);
    }

    const on_user_press = ():void => {
        setOpenUser(!openUser);
    }

    function generate_week_selectors():JSX.Element[] {

        let start_date: Date = new Date();
    
        let week_selectors: JSX.Element[] = [];
    
        let monday_date: Date = new Date();
        let sunday_date: Date = new Date();
    
        for (let i = 0; i< 4; i++ ) {
    
            [monday_date, sunday_date] = prev_week(start_date);

            week_selectors.push(<WeekSelector 
                                start_date={monday_date.toLocaleDateString()} 
                                end_date={sunday_date.toLocaleDateString()} 
                                display_week_callback = {props.display_week_callback}
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

                        {generate_week_selectors()}


                    </List>
                </Collapse>

                <Divider/>

                <ListItem key={'user'} disablePadding>
                    <ListItemButton
                    onClick = {on_user_press}>
                        {/* <ListItemIcon>
                        </ListItemIcon> */}
                        <ListItemText primary={'User'} />
                        {openUser ? <ExpandLess /> : <ExpandMore />}

                    </ListItemButton>
                </ListItem>
        </List>
    )
}