import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import'./Header.css'
import { blue } from '@mui/material/colors'
import { FaUser } from 'react-icons/fa';
import { BiLogIn } from "react-icons/bi";

export default function Header(props) {
  return (
    <Box py={10} className='box'>
        <Grid container justifyContent="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                <Typography variant='h5'>Open Job Listing</Typography>
                <div className='headrit'>
                  <button onClick={props.openNewJobModel} disableElevation className='headrit'>Post a Job</button>
                  <FaUser className='headicon'/>
                  <BiLogIn className='headicon'  />
                </div>
                
                </Box>
            </Grid>
        </Grid>
    </Box>
    
  )
}
