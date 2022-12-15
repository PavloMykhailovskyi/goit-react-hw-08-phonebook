import { Box, Typography, Button } from "@mui/material";
import { useAuth } from "hooks"
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const handleLogOut = () => { dispatch(logOut()); console.log('click');}

    return (
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
        <Typography variant="body1" sx={{mr:2}}>Welcome, {user.name}</Typography>
        <Button sx={{color: 'white'}} type="button" variant='outlined' onClick={handleLogOut}>
          Logout
        </Button>
      </Box>
    );
}