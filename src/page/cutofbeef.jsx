import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import Beef from "../assets/image/BEEF.png";
import TomatoBack from "../component/Layout";
import Popover from "@mui/material/Popover";
//image for popover
import Tongue from "../assets/image/tonguepeel.png";
import Cheekmeat from "../assets/image/cheekmeat.png";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    minHeight: "100vh",
    alignItems: "center",
    paddingX: "20px", // เพิ่มระยะขวาของ Box
  },
  beefhover: {
    transition: "transform 0.3s", // เพิ่ม transition effect
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  beefpopover: {
    textAlign: "center",
    padding: "50px",
  },
  beefmainpart: {
    border: "1px solid white",
    borderRadius: "5px",
    backgroundColor: "#211413",
    color: "white",
    marginTop: "10px",
  },
};

const CutOfBeef = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "beef-popover" : undefined;

  return (
    <Box sx={styles.container}>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={2}
        marginTop={10}
        marginBottom={10}>
        <Grid item sx={{ color: "#FF5D5E" }}>
          <Typography variant="h1">The Butcher's Guide</Typography>
        </Grid>
        <Grid item sx={{ color: "#FF5D5E" }}>
          <Typography variant="h4">CUT OF BEEF</Typography>
        </Grid>
        <Grid item sx={styles.beefhover} onClick={handleClick}>
          <img src={Beef} alt="Beef" width="600px" />
        </Grid>
      </Grid>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}>
        <Box sx={styles.beefpopover}>
          <Typography sx={styles.beefmainpart}>HEAD</Typography>
          <img src={Tongue} />
          <Typography>description </Typography>
          <img src={Cheekmeat} />
          <Typography>description head</Typography>
          <img src={Beef} />
          <Typography>description head</Typography>
          <Typography sx={styles.beefmainpart}>CHUCK</Typography>
          <img src={Beef} />
          <Typography>description chuck</Typography>
          <Typography sx={styles.beefmainpart}>BRISKET</Typography>
          <img src={Beef} />
          <Typography>description brisket</Typography>
          <Typography sx={styles.beefmainpart}>SHALK</Typography>
          <img src={Beef} />
          <Typography>description shalk</Typography>
          <Typography sx={styles.beefmainpart}>rib</Typography>
          <img src={Beef} />
          <Typography>description rib</Typography>
          <Typography sx={styles.beefmainpart}>Loin</Typography>
          <img src={Beef} />
          <Typography>description loin</Typography>
          <Typography sx={styles.beefmainpart}>sirloin</Typography>
          <img src={Beef} />
          <Typography>description sirloin</Typography>
          <Typography sx={styles.beefmainpart}>plate</Typography>
          <img src={Beef} />
          <Typography>description plate</Typography>
          <Typography sx={styles.beefmainpart}>flank</Typography>
          <img src={Beef} />
          <Typography>description flank</Typography>
          <Typography sx={styles.beefmainpart}>rump/round</Typography>
          <img src={Beef} />
          <Typography>description round</Typography>
        </Box>
      </Popover>
      <Grid>
        <TomatoBack />
      </Grid>
    </Box>
  );
};

export default CutOfBeef;
