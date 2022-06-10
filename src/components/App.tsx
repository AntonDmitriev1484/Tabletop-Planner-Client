import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Test_component from './Test.js'
import Home from './entry/Home'
 import Dashboard from './user/Dashboard'
import mui_theme from '../styles/mui_theme'

import { ThemeProvider} from '@mui/material/styles';
import { CssBaseline, Paper } from '@mui/material';




function App(props:any) {

    return (
        <BrowserRouter>
            {/* <CssBaseline /> */}
            
            <ThemeProvider theme={mui_theme}>
                <Routes>
                    
                    <Route path = "/" element= {<Home/>}/>
                    {/* <Route exact path = "client/test"  element= {<Test_component/>}/> */}
                    <Route  path = "dash/" element = {<Dashboard/>}/>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
            
    )


}


export default App;
