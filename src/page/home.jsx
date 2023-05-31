import Navbartop from "../component/Navbartop";
import { Button, Grid, Stack, Typography } from "@mui/material";
import PicTbone from "../assets/image/PicTbone.png";
import PicTomato from "../assets/image/Tomatohome.png";

const Home = () => {
  return (
    <Stack>
      <Stack>
        <Navbartop />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} textAlign="center">
            <Typography variant="h1">Meat Check</Typography>
            <Typography variant="caption">
              Welcome to Meat Check, a tool that helps you explore various meat
              options! Whether you're a cooking enthusiast, health-conscious
              individual, or simply curious about different types of meat.
            </Typography>
            <Typography sx={{ marginTop: "30px" }}>
              <Button variant="contained">Read more</Button>
            </Typography>
            <img
              src={PicTomato}
              style={{
                width: "150px",
                height: "150px",
                position: "absolute",
                top: "80% ",
                left: "40%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <img src={PicTbone} style={{ transform: "rotate(30deg)" }} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
