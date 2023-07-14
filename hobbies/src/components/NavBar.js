import * as React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material/";

export default function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">HobbyFinder</Typography>
          <Typography>Welcome Back, {props.givenName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
