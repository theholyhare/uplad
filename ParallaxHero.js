import { Parallax } from "react-scroll-parallax";
import styled from "@emotion/styled";

export default function ParallaxHero() {
  return (
    <HeroContainer>
      <Parallax speed={-10}>
        <HeroImage src="/images/hero.jpg" alt="HookKast Hero" />
      </Parallax>
      <Parallax speed={5}>
        <HeroText>Jakesy Robert x HookKast</HeroText>
      </Parallax>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  position: absolute;
`;

const HeroText = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: white;
  position: relative;
`;
