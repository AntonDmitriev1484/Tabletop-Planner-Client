import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import Test_component from './Test.js'
// import Home from './Home.js'
// import Dashboard from './Dashboard.js'
//import mui_theme from '../styles/mui_theme.js'

import { ThemeProvider} from '@mui/material/styles';




function App( /* props */) {

    return (
        <BrowserRouter>
            {/* <ThemeProvider theme={mui_theme}>
                <Routes>
                    <Route exact path = "/" element= {<Home/>}/>
                    <Route exact path = "client/test"  element= {<Test_component/>}/>
                    <Route exact path = "dash/" element = {<Dashboard/>}/>
                </Routes>
            </ThemeProvider> */}
        </BrowserRouter>
            
    )


}


export default App;
