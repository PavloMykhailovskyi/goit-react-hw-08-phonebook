import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { login } from "redux/auth/operations";

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            login({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }
    
    return (
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h3" component="h2" sx={{ mb: 4 }}>
          Log in
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="email"
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 4 }}>
            Log in
          </Button>
        </form>
      </Box>
    );
}