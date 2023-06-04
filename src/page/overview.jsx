import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Picheadbeef from "../assets/image/Headbeef.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs>
          <img src={{ Picheadbeef }} />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography variant="caption">
            Welcome to Meat Check, a tool that helps you explore various meat
            options! Whether you're a cooking enthusiast, health-conscious
            individual, or simply curious about different types of meat.
          </Typography>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
