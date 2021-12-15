import React from 'react';
import hospital from "../../../Images/hospital.jpg"
import police from "../../../Images/police.jpg"
import school from "../../../Images/school.jpg"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./Service.css"
import { Button, Grid } from '@mui/material';
import { Box } from '@mui/system';



const services =[
    {
        id: 1,
        img:hospital,
        name: "Hospital"
    },
    {
        id: 2,
        img:police,
        name: "Police station"
    },
    {
        id: 3,
        img:school,
        name: "School"
    }
]


const Service = () => {
    return (
        <div>
            <div className='service-title'>
            <h1>Take Your Service</h1>
            </div>
            <Box sx={{ flexGrow: 1 }} className="service-container" sx={{mx:"auto"}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {services.map(service => (
                <Grid item xs={4} sm={4} md={4} key={service.id} className='grid-item' >
                        <Box className="card-box">
                        <CardMedia
                            component="img"
                            height="250"
                            width="340px"
                            image={service.img}
                            alt="Paella dish"
                        />
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {service.name}
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
        </div>
    );
};

{/* <Card sx={{ maxWidth: 345 }}>
<CardMedia
    component="img"
    height="194"
    image={service.img}
    alt="Paella dish"
/>
<CardContent>
    <Typography variant="body2" color="text.secondary">
        {service.name}
    </Typography>
</CardContent>
</Card> */}



export default Service;