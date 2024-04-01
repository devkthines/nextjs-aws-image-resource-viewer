'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

interface MyComponentProps {
    src: string;
  }

  const SimplePaperImages: React.FC<MyComponentProps> = (props) => {
    // Component logic here
    return (
      <div className=''>
       <Paper elevation={3} sx={{margin:'25px', width: 'fit-content', height:'auto'}}>
        <Image alt="test" width={300} height={300} src={props.src}/>
       </Paper>
      </div>
    );
  };

  export default SimplePaperImages;