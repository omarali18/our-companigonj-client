import React, { useEffect, useState } from 'react';
import police from "../../Images/police.jpg"
import "./Polices.css"
import Footer from '../Shared/Footer/Footer';
import { Box, Grid, Typography } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';



const Polices = () => {
    const [polices,setPolices] = useState([])
    useEffect( () =>{
        fetch("https://dry-savannah-86309.herokuapp.com/polices")
        .then(res => res.json())
        .then(data =>setPolices(data))
    } ,[])

    return (
        <div className='police-container'>
            <Navbar/>
            <div className='poloice-title'><h1>Give your complaint</h1></div>
            <Box className='police-detail' sx={{mx:"auto", mt:5}}>
                <img src={police} width="100%" alt="" />
               <Box sx={{mt:8, mb:8}}>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {polices.map(service => (
                <Grid item xs={4} sm={4} md={4} key={service.id} className='grid-item' >
                        <Box className="card-box">
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {service.name}
                            </Typography>
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {service.rank}
                            </Typography>
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {service.phone}
                            </Typography>
                        </Box>
                       
                </Grid>
                ))}
            </Grid>
               </Box>
            </Box>
           
            <Footer/>
        </div>
    );
};

export default Polices;