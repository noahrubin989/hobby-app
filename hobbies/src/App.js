import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import HobbyCard from "./components/HobbyCard";

function App() {
  let [name, setName] = React.useState("John");

  return (
    <Box>
      <NavBar givenName={name} />
      <HobbyCard givenName={name} />
    </Box>
  );
}

export default App;
