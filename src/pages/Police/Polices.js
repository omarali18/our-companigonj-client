import React from 'react';
import Header from '../Shared/Header/Header';
import police from "../../Images/police.jpg"
import "./Polices.css"
import Footer from '../Shared/Footer/Footer';
import { Box } from '@mui/material';

const polices = () => {
    return (
        <div className='police-container'>
            <Header/>
            <div className='poloice-title'><h1>Give your complaint</h1></div>
            <Box className='police-detail' sx={{mx:"auto", mt:5}}>
                <img src={police} width="100%" alt="" />
            </Box>
            <Footer/>
        </div>
    );
};

export default polices;