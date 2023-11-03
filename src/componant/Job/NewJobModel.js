import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FilledInput, Grid, IconButton, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import './JobCard.css'
import { Close } from '@mui/icons-material';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

const NewJobModel = (props) => {

    // const [jobDetails, setJobDetails] = useState({
    //     companyName:"",
    //     title:"",
    //     type:"Full Time",
    //     companyUrl:"",
    //     link:"",
    //     description:"",
    //     location:"Remote",
    //     skills:[],

    // })

    // const handleChange = (e) =>{
    //     e.persist();
    //     setJobDetails((oldState) => ({
    //         ...oldState,
    //         [e.target.name]: [e.target.value],
    //     }))
    // }

    // const addRemoveSkill = (skill) =>
    // jobDetails.skills.includes(skill)
    // ? setJobDetails((oldState) =>({
    //     ...oldState, skills:oldState.skills.filter((s)=> s !== skill),
    // }))
    // : setJobDetails((oldState => ({
    //     ...oldState,skills: oldState.skills.concat(skill),
    // })))


    // const handleSubmit = async ()=>{
    //     await props.postJob(jobDetails);
    // }

    const skills=[
        "JavaScript",
        "React",
        "Node",
        "Vue",
        "FIrebase",
        "MongoDB",
        "Sql",
    ];


    const [newJobTitle,setNewJobTitle] = useState("");
    const [newJobType,setNewJobType] = useState("Full Time");
    const [newJobCompanyName,setNewCompanyName] = useState("");
    const [newJobCompanyUrl,setNewCompanyUrl] = useState("");
    const [newJobCompanyLink,setNewCompanyLink] = useState("");
    const [newJobDescription,setNewDescription] = useState("");
    const [newJobLocation,setNewLocation] = useState("Remote");
    const [newJobSkills,setNewJobSkills] = useState([]);
  

    const jobCollectionRef = collection(db,"jobs")


    const onsubmitJobs = async()=>{
        try{
            await addDoc(jobCollectionRef,{
                companyName: newJobCompanyName,
                title: newJobTitle,
                type: newJobType,
                companyUrl: newJobCompanyUrl,
                link: newJobCompanyLink,
                description: newJobDescription,
                location: newJobLocation,
                skills: newJobSkills,
            })
            Swal.fire({
                title: 'Success!',
                text: `Room has been successfully created.`,
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
              });
        } catch (err){
            console.error(err);
        }
    }



  return (
    <div>
      <Dialog open={props.newJobModel}>
        
        <DialogTitle>
            
            <Box display="flex" justifyContent="space-between">
            Post Job
            <IconButton onClick={props.closeModel}>
                <Close/>
            </IconButton>
            </Box>
        </DialogTitle>
        
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FilledInput onChange={(e) => setNewJobTitle(e.target.value)} autoComplete='off' placeholder='*job title' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Select value={newJobType} onChange={(e) => setNewJobType(e.target.value)} defaultValue="Full Time" disableUnderline variant='filled' fullWidth>
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                    <MenuItem value="Contract">Contract</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput onChange={(e) => setNewCompanyName(e.target.value)} autoComplete='off' placeholder='*Company Name' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput onChange={(e) => setNewCompanyUrl(e.target.value)} autoComplete='off' placeholder='*Company URL' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <Select value={newJobLocation} onChange={(e) => setNewLocation(e.target.value)} defaultValue="Remote"  disableUnderline variant='filled' fullWidth>
                    <MenuItem value="In Office">In Office</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput onChange={(e) => setNewCompanyLink(e.target.value)} autoComplete='off' placeholder='*Job Link' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput onChange={(e) => setNewDescription(e.target.value)} autoComplete='off' placeholder='*Job Description' disableUnderline fullWidth rows={4}/>
                </Grid>
            </Grid>
            <Box>
                <Typography pt={2}>Skills</Typography>
                <Box display="flex" className="newjobskillGrid">
                    {skills.map((skill) =>
                        <Box onChange={(e) => setNewJobSkills(e.target.value)} key={skill} className="newjobskillset" >{skill}</Box>
                    )}
                </Box>
            </Box>
        </DialogContent>

        <DialogActions>
            <Box
            
            color="red"
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
            <Typography variant='caption'>*Require Fields</Typography>
            <Button onClick={onsubmitJobs} variant='contained' disableElevation >
                Post Job
            </Button>
            </Box>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewJobModel
