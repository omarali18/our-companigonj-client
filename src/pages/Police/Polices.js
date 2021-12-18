import React from 'react';
import police from "../../Images/police.jpg"
import "./Polices.css"
import Footer from '../Shared/Footer/Footer';
import { Box } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

const polices = () => {
    return (
        <div className='police-container'>
            <Navbar/>
            <div className='poloice-title'><h1>Give your complaint</h1></div>
            <Box className='police-detail' sx={{mx:"auto", mt:5}}>
                <img src={police} width="100%" alt="" />
            </Box>
            <Footer/>
        </div>
    );
};

export default polices;