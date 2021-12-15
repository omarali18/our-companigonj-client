import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from "../../Shared/Header/Header"
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import "./Home.css"


const Home = () => {
    return (
        <div className='home-container'>
            <Header/>
            <Banner/>
            <Service/>
            <h1>this is home</h1>
            <Footer/>

        </div>
    );
};

export default Home;