
import { Grid } from '@mui/material';
import './App.css';
import Header from './componant/Header/Header';
import SearchBar from './componant/Header/searchbar/SearchBar';
import JobCard from './componant/Job/JobCard';
import NewJobModel from './componant/Job/NewJobModel';
import { JobData } from './Data';
import { useEffect, useState } from 'react';
import { db,app} from './firebase';
import { Firestore, collection, getDocs, orderBy } from 'firebase/firestore';
import ViewJobModel from './componant/Job/ViewJobModel';

function App() {

  const [jobs,setJobs]=useState([]);
  const jobCollectionRef = collection(db, "jobs")

  const [newJobModel,setNewJobModel]=useState(false)
  const[viewJob, setViewJob] = useState({})

  // const fetchJobs = async ()=>{
  //   const req = await db.collection('jobs').orderBy('PostedOn', 'desc').get();
  //   console.log(req)
  // }

  // const postJob = async jobDetails =>{
  //   await Firestore.collection('jobs').add({
  //     ...jobDetails,
  //     postedOn: app.Firestore.Fieldvalue.serverTimestand()
  //   })
  // }

  useEffect(()=>{
    
    const getjob =async()=>{
      const data=await getDocs(jobCollectionRef);
      setJobs(data.docs.map((doc)=> ({...doc.data(),id:doc.id}))) 
    };

    getjob()
  },[])

  return (
    <div className="App">
        <Header openNewJobModel={()=>setNewJobModel(true)}/>
        <NewJobModel closeModel={()=>setNewJobModel(false)} newJobModel={newJobModel}/>
        <ViewJobModel job={viewJob} closeModel={() => setViewJob({})}/>
        <Grid container justifyContent="center">
            <Grid item xs={10}>
                <SearchBar/>
                <>
                {jobs.map((job) => (
                // <h1>{job.location}</h1>
                <JobCard open={()=>setViewJob(job)} key={job.id} {...job} />
                ))}
              </>
              
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
