import Navbartop from "../component/Navbartop";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import PicTbone from "../assets/image/PicTbone.png";
import PicTomato from "../assets/image/Tomatohome.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Stack height="100vh">
      <Navbartop />
      <Stack justifyContent={"center"} display="flex">
        <Grid container p={4} gap={3} alignItems={"center"}>
          <Grid item xs={12} md={4} marginLeft="10%">
            <Typography variant="h1" mt={5}>
              Meat Check
            </Typography>
            <Typography sx={{ marginY: 6 }}>
              Welcome to Meat Check !<br />
              We provide to helps you explore various meat options,
              <br /> Whether you're a cooking enthusiast, health-conscious
              individual, or simply curious about different types of meat.
            </Typography>
            <Button component={Link} to="/overview" variant="contained">
              Readmore
            </Button>

            <Box sx={{ flexgrow: 1, textAlign: "end", p: 6 }}>
              <img src={PicTomato} width="150px" height="150px" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={PicTbone} width="100%" />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
