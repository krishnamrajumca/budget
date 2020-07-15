import React, { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

import { useHistory } from 'react-router-dom'
import {isMobileNumber} from '../utils/validations'

const Register = (props)=>{
    const [mobile, setMobile] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [isValidPassword,setValidPassword] = useState('')
    let history = useHistory()
  
    const login = ()=>{
        // history.push('home')
        console.log(history)
    }
    const onPasswordBlur = () =>{
        console.log(password)
        setValidPassword('')
        if(password.length < 8 && password.length !==0)
            setValidPassword('Password length')
    }
    
    console.log(mobile.match(/^\d{10}$/))
    return(
        <div className="vh100 gray-bg login">
            <Card className="login-card">
                <CardHeader
                    title="Register"
                />
                <CardContent>
                    <div className="mtb20">
                        <TextField
                            onChange={e=>setUsername(e.target.value)}
                            onBlur={onPasswordBlur}
                            id="user-input"
                            label="User Name"
                            className="w100"
                            required
                            value={username}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon/>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="mtb20">
                        <TextField
                            onChange={e=>setMobile(e.target.value)}
                            id="user-input"
                            label="Mobile"
                            type="number"
                            error = {!isMobileNumber(mobile)}
                            helperText={!isMobileNumber(mobile) ? "Invalid" :""}
                            className="w100"
                            value={mobile}
                            required
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SmartphoneIcon/>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div  className="mtb20">
                        <TextField
                            onChange={e=>setPassword(e.target.value)}
                            onBlur={onPasswordBlur}
                            id="password-input"
                            label="Password"
                            type="password"
                            required
                            error={isValidPassword.length !==0}
                            helperText={isValidPassword}
                            className="w100"
                            value={password}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyIcon/>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div  className="mtb20">
                        <TextField
                            onChange={e=>setCPassword(e.target.value)}
                            id="cpassword-input"
                            label="Confirm Password"
                            type="password"
                            required
                            className="w100"
                            value={cpassword}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKeyIcon/>
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    
                     <div className="mtb20">
                        <Button variant="contained" color="primary" size="large" className="w100" onClick={login}>
                            Register
                        </Button>
                     </div>
                     
                </CardContent>
            </Card>
        </div>
    )
}

export default Register;