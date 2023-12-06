import {useState} from "react"
import { Typography,TextField,Stack } from "@mui/material"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

const SignUp = ()=>{
    const[userName , setUserName] = useState<string>('')
    const[phoneNumber , setPhoneNumber] = useState<string>('')
    const[email,setEmail] = useState<string>('')
    const[userPassword,setUserPassword] = useState<string>('')
    const [signup,setSignup] = useState<boolean>(false)

    const handleClick=()=>{
        if(!userName || !phoneNumber || !email || !userPassword) {
            alert("Please provide all fields assigned with (*)!!") 
            return
        }
        localStorage.setItem('name',userName)
        localStorage.setItem('password',userPassword)
        setSignup(true)
        setUserName('')
        setUserPassword('')
    }

    return<Stack spacing={2}>
     
        <Typography variant="h5">Sign Up</Typography>

        <TextField label="User Name" 
                    variant="standard" 
                    value={userName} 
                    onChange={e=> setUserName(e.target.value)} required/>

        <TextField label="Phone Number" 
                    variant="standard" 
                    value={phoneNumber} 
                    onChange={e=> setPhoneNumber(e.target.value)} required/>

        <TextField label="Email" 
                    type="email"
                    variant="standard" 
                    value={email} 
                    onChange={e=> setEmail(e.target.value)} required/>

        <TextField label="Password" 
                    type="password" 
                    value={userPassword} 
                    variant="standard" 
                    onChange={e=> setUserPassword(e.target.value)} required/>

        <Stack direction='row' spacing={2}>
            <Typography variant="subtitle2">Already have an account?</Typography>
            <Link href='/login' underline="none">Login</Link>
        </Stack>

        <Button variant="contained" onClick={handleClick}  href={ signup? "/login" : '/' }>Sign Up</Button>
    </Stack>
}

export default SignUp