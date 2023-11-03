import React from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import './JobCard.css'
import { Close } from '@mui/icons-material';

const ViewJobModel = (props) => {
  return (
    <div>
        <Dialog  open={!!Object.keys(props.job).length}    fullWidth>
        <DialogTitle>
            
            <Box display="flex" justifyContent="space-between">
            {props.job.title} @ {props.job.companyName}
            <IconButton onClick={props.closeModel}>
                <Close/>
            </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Box display="flex" flexDirection="column" gap="1rem">
                <Box display="flex">
                    <Typography variant='caption'>Job Type: </Typography>
                    <Typography variant='body2'>{props.job.type}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant='caption'>Job Location: </Typography>
                    <Typography variant='body2'>{props.job.location}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant='caption'>Job Description: </Typography>
                    <Typography variant='body2'> {props.job.description}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant='caption'>Company Name: </Typography>
                    <Typography variant='body2'>{props.job.companyName}</Typography>
                </Box>
                <Box display="flex">
                    <Typography variant='caption'>Company Url: </Typography>
                    <Typography variant='body2'>{props.job.companyUrl}</Typography>
                </Box>
            </Box>
        </DialogContent>
        <DialogActions></DialogActions>
        </Dialog>
      
    </div>
  )
}

export default ViewJobModel
