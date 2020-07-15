import React, { useEffect,useState } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { useHistory } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'

import {loginAction} from '../../reducers/actions'
import BackDrop from '../utils/backdrop';
const Login = (props)=>{
    const [checked, setChecked] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loginReducer.loggedIn)
    const logging = useSelector(state => state.loginReducer.logging)
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    
    const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
    
    
    console.log("use effect",loginDetails)
    if(loginDetails){
        console.log("....")
        setUsername(loginDetails.username);
        setPassword(loginDetails.password)
    }
  },[]);
 
  useEffect(()=>{
    console.log(loggedIn)
    if(loggedIn)
        history.push('dashboard')
  },[loggedIn,history])
  const login = ()=>{
      const loginDetails = {username,password}
      console.log(username,password)
      if(checked){
          const details = {...loginDetails,checked}
        localStorage.setItem("loginDetails",JSON.stringify(details))
      }
      dispatch(loginAction(loginDetails))
  }
  console.log(loggedIn)
    return(
        <div className="vh100 gray-bg login">
            <Card className="login-card">
                <CardHeader
                    title="Login"
                />
                <CardContent>
                    <div className="mtb20">
                        <TextField
                            onChange={e=>setUsername(e.target.value)}
                            id="user-input"
                            label="Username"
                            className="w100"
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
                    <div  className="mtb20">
                        <TextField
                            onChange={e=>setPassword(e.target.value)}
                            id="password-input"
                            label="Password"
                            type="password"
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
                    <div>
                        
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={checked}
                                onChange={handleChange}
                                color="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                            }
                            label="Remember me"
                        />
                    </div>
                     <div className="mtb20">
                        <Button variant="contained" color="primary" size="large" className="w100" onClick={login}>
                            Login
                        </Button>
                     </div>
                     <div className="mtb20">
                        <Button color="primary" className="signup_here" onClick={()=>history.push("register")}>Don't have an account? sign up here</Button>
                     </div>
                </CardContent>
            </Card>
            <BackDrop visible={logging}/>
        </div>
    )
}

export default Login;