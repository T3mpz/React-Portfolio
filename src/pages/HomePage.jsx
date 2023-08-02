import { Container, styled } from "@mui/material";
import Hero from "../components/Home/hero.component";
import AboutMe from "../components/AboutMe/aboutMe.component";
import RecentWork from "../components/recentWork/recentWork.component";

const StyledHeroContainer = styled(Container)({
  minHeight: "75vh",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  position: "relative",
});
export default function HomePage() {
  return (
    <>
      <Hero />
      <StyledHeroContainer id="main-content-section">
        <AboutMe />
        <RecentWork />
      </StyledHeroContainer>
    </>
  );
}
