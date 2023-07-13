import React from "react";
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Star(props) {
  return (
    <Box
      sx={{ position: "absolute", top: "4%", left: "2%" }}
      onClick={() => props.handleLike(!props.isFilled)} // Toggle the isFilled value
    >
      {props.isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Box>
  );
}
