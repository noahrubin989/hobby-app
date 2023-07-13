import * as React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material/";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">HobbyFinder</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
