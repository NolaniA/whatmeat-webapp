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
import Beefrib from "../assets/image/beefrib.png";
import Bottomsirloin from "../assets/image/bottomsirloin.png";
import Brisket from "../assets/image/brisketbeef.png";
import Chuckbeef from "../assets/image/chuckbeef.png";
import Flank from "../assets/image/flank.png";
import Fulltenderloin from "../assets/image/fulltenderloin.png";
import Neckbeef from "../assets/image/neckbeef.png";
import Oprib from "../assets/image/oprib.png";
import Porterhousesteak from "../assets/image/porterhousesteak.png";
import Ribeyeroats from "../assets/image/ribeyeroats.png";
import Ribeyeroll from "../assets/image/ribeyeroll.png";
import Ribeyesteak from "../assets/image/ribeyesteak.png";
import Shank from "../assets/image/fullshank.png";
import Shankcut from "../assets/image/shankcut.png";
import Shortloin from "../assets/image/shortloin.png";
import Shortplate from "../assets/image/shortplate.png";
import Shortrib from "../assets/image/shortrib.png";
import Striploin from "../assets/image/striploin.png";
import Striploinsteak from "../assets/image/striploinsteak.png";
import Tbonesteak from "../assets/image/tbonesteak.png";
import Tenderloin from "../assets/image/tenderloin.png";
import Tomahawk from "../assets/image/tomahawk.png";
import Topsirloinsteak from "../assets/image/topsirloinsteak.png";

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
          <img src={Beef} alt="Beef" width="100%" />
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
          <img src={Tongue} width="100%" />
          <Typography>Tongue </Typography>
          <img src={Cheekmeat} width="100%" />
          <Typography>Cheek meat</Typography>
          <Typography sx={styles.beefmainpart}>CHUCK</Typography>
          <img src={Chuckbeef} width="100%" />
          <Typography>Chuck</Typography>
          <img src={Neckbeef} width="100%" />
          <Typography>Neck</Typography>
          <Typography sx={styles.beefmainpart}>BRISKET</Typography>
          <img src={Brisket} width="100%" />
          <Typography>Brisket</Typography>
          <Typography sx={styles.beefmainpart}>SHALK</Typography>
          <img src={Shank} width="100%" />
          <Typography>Shalk</Typography>
          <img src={Shankcut} width="100%" />
          <Typography>Shalk cut</Typography>
          <Typography sx={styles.beefmainpart}>RIB</Typography>
          <img src={Beefrib} width="100%" />
          <Typography>Rib</Typography>
          <img src={Shortrib} width="100%" />
          <Typography>Short rib</Typography>
          <img src={Tomahawk} width="100%" />
          <Typography>Tomahawk</Typography>
          <img src={Oprib} width="100%" />
          <Typography>OP rib</Typography>
          <img src={Ribeyeroll} width="100%" />
          <Typography>Rib eye roll</Typography>
          <img src={Ribeyeroats} width="100%" />
          <Typography>Rib eye roats</Typography>
          <img src={Ribeyesteak} width="100%" />
          <Typography>Rib eye steak</Typography>
          <Typography sx={styles.beefmainpart}>Loin</Typography>
          <img src={Shortloin} width="100%" />
          <Typography>Short loin</Typography>
          <img src={Porterhousesteak} width="100%" />
          <Typography>Porterhouse steak</Typography>
          <img src={Tbonesteak} width="100%" />
          <Typography>T-bone</Typography>
          <Typography sx={styles.beefmainpart}>sirloin</Typography>
          <img src={Striploin} width="100%" />
          <Typography>Striploin</Typography>
          <img src={Striploinsteak} width="100%" />
          <Typography>Striploin steak</Typography>
          <img src={Fulltenderloin} width="100%" />
          <Typography>Tenderloin</Typography>
          <img src={Tenderloin} width="100%" />
          <Typography>Tenderloin cut</Typography>
          <img src={Topsirloinsteak} width="100%" />
          <Typography>Top sirloin steak</Typography>
          <img src={Bottomsirloin} width="100%" />
          <Typography>Bottom sirloin</Typography>
          <Typography sx={styles.beefmainpart}>plate</Typography>
          <img src={Shortplate} width="100%" />
          <Typography>Short plate</Typography>
          <Typography sx={styles.beefmainpart}>flank</Typography>
          <img src={Flank} width="100%" />
          <Typography>Flank</Typography>
          <Typography sx={styles.beefmainpart}>rump/round</Typography>
          <img src={Beef} width="100%" />
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
