import {useState,useEffect} from "react"
import { Typography,TextField,Stack } from "@mui/material"
import Button from "@mui/material/Button"
import Link from "@mui/material/Link"

const Login = () =>{
    const[name , setName] = useState<string>('')
    const[password,setPassword] = useState<string>('')
    const [login , setLogin] = useState<boolean>(false)

    const [signupName,setSignupName] = useState<string>('')
    const [signupPassword, setSignupPassword] = useState<string >('')


    useEffect(()=>{
        const storedName = localStorage.getItem('name');
        const storedPassword = localStorage.getItem('password')

        if(storedName && storedPassword){
            setSignupName(storedName)
            setSignupPassword(storedPassword)
        }else{
            return
        }
    },[])

    const handleLogin = () =>{
        if(!signupName || !signupPassword){
            alert('User not registered!')
        }
     else if(!name || !password){
        alert('Please provide both fields')
        return
      }else if(name !== signupName || password !== signupPassword){
        alert("User name OR Password did not match!")
        return
      }else{
        alert('Loged In Successfully')
        setName('')
        setPassword('')
        setLogin(true)
      }
    }

    return<Stack spacing={2}>
     
        <Typography variant="h5">Login</Typography> 

        <TextField label="Name" 
                    variant="standard" 
                    value={name} 
                    onChange={e=> setName(e.target.value)} required/>

        <TextField label="Password" 
                    type="password" 
                    value={password} 
                    variant="standard" 
                    onChange={e=> setPassword(e.target.value)} required/>

        <Stack direction='row' spacing={2}>
            <Typography variant="subtitle2">Don't have an account?</Typography>
            <Link href='/' underline="none">Sign up!</Link>
        </Stack>

        <Button variant="contained" onClick={handleLogin} href={login? '/pages' : "/login"}>Login</Button>
    </Stack>
}

export default Login