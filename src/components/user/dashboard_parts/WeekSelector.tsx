import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from 'react';

interface WeekSelectorProps {
    selection_index: number,
    is_selected: boolean,
    start_date: string,
    end_date: string,
    display_week_callback: (start_date:string, end_date:string) => void,
    //This is the function which will be responsible for generating the <Week> component and rendering it into the main area of <Dashboard/>
    //callback will be passed down from dashboard
    display_selected_callback: (index: number) => void
}

export default function WeekSelector(props:WeekSelectorProps):JSX.Element {

    //const [isSelected, changeSelected] = useState<boolean>(false);

    const on_week_selector_press = ():void => {
        props.display_week_callback(props.start_date, props.end_date)
        //changeSelected(true);
        props.display_selected_callback(props.selection_index) //DashboardDrawer component is what actually manages passing the selection prop
    }

    return (
        <ListItemButton 
        sx={{ pl: 4 }}
        onClick = {on_week_selector_press}
        selected = {props.is_selected}>

            <ListItemText primary={`${props.start_date} - ${props.end_date}`} />
        </ListItemButton>
    )
}