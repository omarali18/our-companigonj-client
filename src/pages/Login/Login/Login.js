import React, { useState } from 'react';
import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from "../../../Images/city.png";
import Navbar from '../../Shared/Navbar/Navbar';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signinWithGoogle, isLoading, authError,isLogin } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleSubmitForm = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault()
    }
    const handleGoogleSignin = () => {
        signinWithGoogle(location, navigate)
    }
    return (
        <div>
            <Navbar/>
            <Container>
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                    <Typography variant="h5" sx={{ color: "#60CCDA" }} gutterBottom>Login</Typography>
                    {isLoading && <CircularProgress />}
                    <form onSubmit={handleSubmitForm}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnChange}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            onBlur={handleOnChange}
                            id="standard-basic"
                            label="Password"
                            name="password"
                            type="password"
                            variant="standard" />
                        <Button
                            sx={{ width: "75%", mt: 2, mb: 3 }}
                            type="submit"
                            variant="contained"
                        >Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register"><Button variant="text">New User? Please Register</Button></NavLink>

                        {isLogin && <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            User Login successfully..!!
                        </Alert>}
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </form>
                    <p>---------------------------------------</p>
                    <Button onClick={handleGoogleSignin} variant="contained">Googel sign in</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} alt="" sx={{ width: 1 }}></img>
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default Login;