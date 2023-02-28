import React, { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import PortfolioImage from "../../Assets/images/ImagePlaceHolder.png";

import { AiOutlineArrowRight } from "react-icons/ai";
import Socials from "../Socials";
import styled from "@emotion/styled";
const StyledButton = styled(Button)({
  color: "var(--light-blue) !important",
  "&:hover": {
    color: "#fff !important",
    backgroundColor: "transparent",
    textDecorationLine: "underline",
    textShadow: "0 0 .2em #cacedd, 0 0 0.4em #cacedd",
    transform: "scale(1.1)",
    transition: ".2s",
  },
});

export default function HomeAbout() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/project-cards", { replace: true }), [navigate]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container justifyContent="center" alignContent="center" spacing={{ sm: 0 }}>
      <Link to="/"></Link>
      <Grid item sx={12} md={6}>
        <Box
          component="img"
          sx={{
            width: { xs: "250px", md: "350px", lg: "425px" },
            height: { xs: "250px", md: "350px", lg: "425px" },
            borderRadius: "50%",
          }}
          src={PortfolioImage}
          alt="Christian Bega's Portfolio Image."
        ></Box>
      </Grid>
      <Grid item xs={12} md={6} mt={3}>
        <Typography component="h2" sx={{ fontSize: { xs: "65px", md: "75px", lg: "80px", lineHeight: "120%" }, fontWeight: "700" }}>
          Hello,
        </Typography>
        <Typography component="span" sx={{ fontSize: { xs: "55px", md: "65px", lg: "75px", lineHeight: "120%" }, display: "block" }}>
          I'm Christian,
        </Typography>
        <Typography variant="p" component="p" mt={3} maxWidth={500} mx="auto" sx={{ fontSize: { md: "18px" } }}>
          A MERN full stack web developer from Denver, Colorado. My passion for web development originated a few years back during my self-taught
          journey to become a web developer. I have since graduated from Denver University's full-stack boot camp. Where I learned the skills to
          design, develop, and deliver elegant user friendly web applications.
        </Typography>
        {/* <Box textAlign="center" marginY={5}>
          <StyledButton onClick={handleOnClick}>
            Learn more about me <AiOutlineArrowRight />
          </StyledButton>
        </Box> */}
        <Box textAlign="center" marginY={5}>
          <StyledButton onClick={handleOnClick}>
            View my work <AiOutlineArrowRight />
          </StyledButton>
        </Box>
        <Socials />
      </Grid>
    </Grid>
  );
}
