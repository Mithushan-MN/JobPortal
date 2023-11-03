import { Box, Button, MenuItem, Select } from '@mui/material'
import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div>
        <Box className="searchbox">
            <Select defaultValue="Full Time">
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select defaultValue="Remote">
                <MenuItem value="In Office">In Office</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
            </Select>
            <Button disableElevation>Search</Button>
        </Box>
      
    </div>
  )
}

export default SearchBar
