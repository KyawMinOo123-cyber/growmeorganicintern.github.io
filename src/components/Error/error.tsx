import { Stack,Typography } from "@mui/material"
import Button from "@mui/material/Button"

const Error = ()=>{
    return<Stack className="error" spacing={3}>
        <Typography variant="h1" color='error'>404.Page Not Found!</Typography>
        <Button variant="outlined" color="primary" href="/login" size="medium" style={{width:"200px",marginLeft:"75%"}} >Go Back</Button>
    </Stack>
}

export default Error