import { AuthNav } from "components/AuthNav/AuthNav"
import { Navigation } from "components/Navigation/Navigation"
import { UserMenu } from "components/UserMenu/UserMenu";
import { useAuth } from "hooks"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar() {
const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between'}}>
      <AppBar position="static" sx={{mb: 5}}>
        <Toolbar sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}