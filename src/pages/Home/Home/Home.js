import { CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from "../../Shared/Header/Header"
import Banner from '../Banner/Banner';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Service/>
            <h1>this is home</h1>
            

        </div>
    );
};

export default Home;