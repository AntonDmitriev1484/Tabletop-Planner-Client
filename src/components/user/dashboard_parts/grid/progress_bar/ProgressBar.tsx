// import Box from '@mui/material/Box';
// import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
// import Typography from '@mui/material/Typography';
// import React from "react";

// function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
//     return (
//       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//         <Box sx={{ width: '100%', mr: 1 }}>
//           <LinearProgress variant="determinate" {...props} />
//         </Box>
//         <Box sx={{ minWidth: 35 }}>
//           <Typography variant="body2" color="text.secondary">{`${Math.round(
//             props.value,
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     );
//   }

// export default function ProgressBar (props:any):JSX.Element {

//     return (
//         <div>
//         <Box sx={{ width: '100%' }}>
//             <LinearProgressWithLabel value={50} variant = "determinate"/>
//         </Box>
            
//         </div>
//     )
// }

import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//https://codesandbox.io/s/s8dusg?file=/demo.tsx:0-1106

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ 
        display: 'flexed', 
        alignItems: 'center',
        margin: 0,
        position: 'relative',
        top: '10px', //Make this a prop, that way it can adjust with button size

         }}>
      <Box sx={{ width: '200px', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel() {
  return (
     <Box sx={{ width: '100%'}}>

              <LinearProgressWithLabel value={50} />
 
     </Box>
  );
}
