import React, { useEffect, useState } from 'react';
import { Button, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from "../Shared/Footer/Footer"
import "./Hospitals.css"
import Navbar from '../Shared/Navbar/Navbar';

const Hospitals = () => {
    const [hospitals,setHospitals] = useState([])

    useEffect( ()=>{
        fetch("https://dry-savannah-86309.herokuapp.com/hospitals")
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setHospitals(data)
        })
    } ,[])
    return (
        <div className='hospitals-container'>
            <Navbar/>
            <div className='hospital-head'><h1>Our all hospital</h1></div>
            <Box sx={{ flexGrow: 1 }} className="service-container" sx={{mx:"auto"}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} sx={{mb:10}}>
                {hospitals.map(hospital => (
                <Grid item xs={4} sm={4} md={4} key={hospital._id} className='grid-item' >
                        <Box className="card-box">
                        <CardMedia
                            component="img"
                            height="250"
                            width="340px"
                            image={hospital.img}
                            alt="Paella dish"
                        />
                            <Typography variant="h5" color="white" sx={{textAlign: 'center', py:3}}>
                                {hospital.name}
                            </Typography>
                        </Box>
                        <Box className='detail-button'>
                        <Typography variant="h4" color="white" sx={{textAlign: 'center' }} >
                                See more potion
                            </Typography>
                            <Button className='detail' sx={{mt:2}}>More     Detail</Button>
                        </Box>
                </Grid>
                ))}
            </Grid>
            </Box>
            <Footer/>
        </div>
    );
};

export default Hospitals;