import React, { useEffect, useState } from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './Reviews.css'

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

const Reviews = () => {
    const[reviews, setReviews] = useState([])

    useEffect( ()=>{
        fetch("https://dry-savannah-86309.herokuapp.com/review")
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    console.log(reviews);
    return (
        <div className='review-container'> 
            <div className='review-title'>
            <h1>Website Review</h1>
            </div>
             <Box sx={{ flexGrow: 1, mx:"auto" }} className="service-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                {reviews.map(review => (
                <Grid item xs={4} sm={4} md={4} key={review.id}>
                        <Box className="review-box" >
                       
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {review.name}
                            </Typography>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            <Box
                                sx={{
                                    width: 200,
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                                >
                                <Rating
                                    name="text-feedback"
                                    value={review.rating}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                <Box sx={{ ml: 2 }}>{labels[review.rating]}</Box>
                            </Box>
                            </Box>
                            <Typography variant="h4" color="white" sx={{textAlign: 'center', py:3}}>
                                {review.reviews}
                            </Typography>
                        </Box>
                       
                </Grid>
                ))}
            </Grid>
            </Box>
        </div>
    );
};

export default Reviews;