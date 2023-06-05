import { ButtonBase, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PicTomato from "../assets/image/Tomatohome.png";

const styles = {
  tomatoContainer: {
    position: "absolute",
    Typography: { alignProperty: "center" },
    bottom: "30px",
    right: "20px",
    transition: "transform 0.3s", // เพิ่ม transition effect
    "&:hover": {
      transform: "scale(1.2)", // เพิ่ม transform scale เมื่อ hover
    },
  },
};

const layout = () => {
  return (
    <ButtonBase sx={styles.tomatoContainer} component={Link} to="/overview">
      <img src={PicTomato} width="50px" height="50px" />
      <ListItem sx={{ alignmentBaseline: "central" }}>Back to main</ListItem>
    </ButtonBase>
  );
};

export default layout;
