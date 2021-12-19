import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Rating, TextField, Typography } from '@mui/material';
import "./AddReview.css"
import useAuth from '../../../Hooks/useAuth';
import StarIcon from '@mui/icons-material/Star';


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

const AddReview = () => {

    const [reviews, setReview] = useState("")
    const [rating, setRating] = useState(2);
    const [hover, setHover] = useState(-1);
    const [done, setDone] = useState(false)
    const { user } = useAuth()
    const handleOnBlur = e => {
        setReview(e.target.value)
    }

    const handleOnSubmit = e => {
        const newReviews = { name: user.displayName, email: user.email, reviews, rating }
        console.log("is newReviews", newReviews);

        fetch("https://dry-savannah-86309.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setDone(true);
                    setTimeout(() => {
                        window.location.reload()
                        
                    }, 5000);
                }
            })


        e.preventDefault()
    }

    return (
        <div>
            <Box className="addReview-box">
                <Typography variant="h4" sx={{ textAlign: "center", mt: 7, mb:5 }}>
                    Type a new review.
                </Typography>
               
                <form onSubmit={handleOnSubmit}>
                    {done && <Typography variant="caption"> Thank you for Review</Typography>}
                    <TextField
                        sx={{ width: 1, my: 2, height: 50 }}
                        onBlur={handleOnBlur}
                        id="outlined-basic"
                        label="Write A Review"
                        name="review"
                        type="text"
                        className="review-field"
                        variant="outlined"
                    />
                     
                     <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            mx:'auto',
                            mt:8,
                            mb:8,
                        }}
                        >
                        <Rating
                            name="hover-feedback"
                            value={rating}
                            precision={0.5}
                            onChange={(event, newValue) => {
                            setRating(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                            setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {rating !== null && (
                            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
                        )}
                    </Box>
                     
                    <Box sx={{ textAlign: "center" }}>
                        <Button sx={{ py: 2, px: 4 }} type="submit" variant="contained">Submit</Button>
                    </Box>
                </form>
            </Box>
        </div>
    );
};

export default AddReview;