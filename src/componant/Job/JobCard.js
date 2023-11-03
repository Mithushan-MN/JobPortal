import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './JobCard.css'
import { differenceInMinutes } from 'date-fns'





const JobCard = (props) => {
  return (
    
      <Box className="JobBox">
        <Grid container className="JobGrid">
            <Grid item  xs>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography variant='subtitle2' className="company">{props.companyName}</Typography>
            </Grid>
            <Grid item container xs className="skillGrid">
                {props.skills.map(skill =><Grid key={skill} item className="skillset">{skill}</Grid>)}
            </Grid>
            <Grid item container direction="column" alignItems="flex-end"xs >
                <Typography>
                    {differenceInMinutes(Date.now(), props.postedOn)} mins ago | {props.type} | {props.location}
                </Typography>
                <Grid item>
                 <Box mt={2}>
                  <Button onClick={props.open} variant='outlined'>Check</Button>
                 </Box>
                </Grid>
            </Grid> 
            
        </Grid>
      </Box>
    
  )
}

export default JobCard
