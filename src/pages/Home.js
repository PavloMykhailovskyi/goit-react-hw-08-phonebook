import { Container, Typography } from "@mui/material";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h1" color='primary' sx={{mt:10}}>
            Phonebook
                </Typography>
        </Container>
      </div>
    );
}