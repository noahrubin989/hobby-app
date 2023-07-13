import cardData from "../data/data";
import Count from "./Count";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function HobbyCard() {
  let [like, setLike] = React.useState(Array(cardData.length).fill(false));
  let [count, setCount] = React.useState(Array(cardData.length).fill(0));

  const handleLike = (i) => {
    setLike((prev) => {
      let updatedArr = [...prev];
      updatedArr[i] = !updatedArr[i];
      return updatedArr;
    });
  };

  const handleUpvote = (i) => {
    setCount((prev) => {
      let updatedArr = [...prev];
      updatedArr[i] = updatedArr[i] + 1;
      return updatedArr;
    });
  };

  const handleDownvote = (i) => {
    setCount((prev) => {
      let updatedArr = [...prev];
      updatedArr[i] = updatedArr[i] - 1;
      return updatedArr;
    });
  };

  return (
    <Box>
      <Grid container spacing={2} sx={{ padding: "2%" }}>
        {cardData.map((card, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "#f3f3f3",
                      paddingY: "5%",
                    }}
                  >
                    {card.icon}
                  </CardMedia>
                  <Box
                    sx={{ position: "absolute", top: "4%", left: "2%" }}
                    onClick={() => handleLike(index)}
                  >
                    {like[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "4%",
                      left: "80%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                      }}
                    >
                      <ArrowDownwardIcon
                        onClick={() => handleDownvote(index)}
                      />
                      <ArrowUpwardIcon onClick={() => handleUpvote(index)} />
                    </Box>
                    <Count number={count[index]} />
                    {/* Replaced the line below with the line above */}
                    {/* <Typography>{count[index]} votes</Typography> */}
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: "1em",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ height: "70px" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
