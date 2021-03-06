//My MUI Theme
//https://mui.com/material-ui/customization/theming/
import { createTheme } from '@mui/material/styles';
//import { createMuiTheme } from '@material-ui/core/styles'

//Import error fixed by: https://lifesaver.codes/answer/module-not-found-error-when-bundling-with-webpack-5-7260


//https://bareynol.github.io/mui-theme-creator/ For theme creation

// const theme = createTheme({
//     palette: {
//         primary: {
//           main: '#022B3A',
//         },
//         secondary: {
//           main: '#1f7A8C',
//         },
//         type: 'dark',
//       }
//     });


// export default theme;

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     status?: {
//       danger?: string;
//     };
//   }
// }

//Dark mode seems like it'll be a complete pain in the ass
//Need to somehow extend this if you want to get any other properties working in TS
const theme:any = createTheme({
  palette: {
    primary: {
      main: '#390879',
    },
    secondary: {
      main: '#b8df10',
    },
  },
});

export default theme;