import React, { useState } from 'react'
import { Routes, useLocation, useNavigate } from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import DevelopmentUrl from '../../data/api';
import Axios from 'axios';
import jwt_decode from "jwt-decode";
import imglogo from '../../image/logo.png'

import "../Signin/Signin.css";
import alchemylogo from "../../image/638-01.png"
import { useAuth } from '../../Component/Utils/Auth';

const Signin = () => {
const auth = useAuth()
const location = useLocation()
const redireactPath = location.state?.path || '/'
    const paperStyle = { padding: 20, height: '60vh', width: 350 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '30px 0' , color:"white" }
    const txtstyle = { margin: "10px 0"  }
    const signintxtStyle = { marginTop: "40px" }
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [loginstatus, setloginstatus] = useState(0);
    let message = <h5>Not Logged in</h5>;
    let navigate = useNavigate();
    let onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
    }
    let onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
    }


    let submithandler = (event) => {
        event.preventDefault();
        let formdata = {
            username: username,
            password: password
        };
        Axios.post(DevelopmentUrl + '/users/login', formdata).then(
            (res) => {
                let { token } = res.data;
                //console.log(token);
                localStorage.setItem('token', token);
                const toeken = localStorage.getItem("token")
                setloginstatus(res.status);
               
                if (res.status === 200) {
                    let isAdmin = jwt_decode(localStorage.getItem("token")).admin;
                    localStorage.setItem("admin", isAdmin);
                    console.log(isAdmin)
                    auth.login()
                    message =   
                    <Routes>

                        {!isAdmin ? navigate("/engineer/form", {replace:true}) : navigate("/admin/viewdata", {replace:true})}
                    </Routes>
                        // <Switch>
                        //     {!isAdmin ? <Redirect to='/home' /> : <Redirect to='/admin/dashboard' />}
            
                        // </Switch>
            
                    return message;
            
                }
            }
        ).catch(error => {
            console.log("error occured")
            console.log(error.data)
        })
    }
   
    return (
        <div className='' style={{width:"100%"}} >

          <div className='logoimg'>
              <img src={imglogo} />
          </div>
          <div className='maindivimag'>

          <div className='login'>
                <form onSubmit={submithandler}>
                    <Grid>
                        <Paper elevation={10} style={paperStyle}>
                            <Grid align='center'>
                            
                                <h2 style={{color:"#9a7036"}}>Log In</h2>
                            </Grid>
                            <TextField label='Username' placeholder='Enter username' type='text' id='username' fullWidth  style={signintxtStyle }  onChange={onchangeusernamehandler} />
                            <TextField label='Password' placeholder='Enter password' type='password' id='password' fullWidth  style={txtstyle} onChange={onchangepasswordhandler} />

                            {/* <FormControlLabel style={txtstyle}
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember me"
                         /> */}
                            <Button type='submit'  variant="contained" className="btnlogin" style={btnstyle} fullWidth>Log In</Button>
                            {/* <Typography >
                                <Link href="#" >
                                    Forgot password ?
                                </Link>
                            </Typography> */}
                            {/* <Typography > Not registered?
                            <Link href="/signup" >
                                Create account
                            </Link>
                        </Typography> */}
                        </Paper>
                    </Grid>
                </form>
            </div>
          </div>
          
        </div>

    )
}

export default Signin