import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "../theme";
import FloatingObject from "../components/FloatingObject";
import MusicPlayer from "../components/MusicPlayer";
import ParallaxHero from "../components/ParallaxHero";
import Contact from "../components/contact";
import Collections from "../components/Collections";
import GSAPAnimations from "../components/GSAPAnimations";
import { NextSeo } from "next-seo";
import Image from "next/image";

<Image src="/images/hero.jpg" alt="HookKast Hero" width={800} height={500} />;

<NextSeo
  title="HookKast | Minimalist Fashion & Music"
  description="HookKast blends streetwear with music culture."
  canonical="https://hookkast.com"
  openGraph={{
    url: "https://hookkast.com",
    title: "HookKast",
    description: "HookKast blends streetwear with music culture.",
    images: [{ url: "/images/hero.jpg", alt: "HookKast Hero" }],
    site_name: "HookKast",
  }}

/>;
<GSAPAnimations>
  <ParallaxHero />
  <Collections />
  <Contact />
</GSAPAnimations>;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header>
          <Logo>HookKast</Logo>
          <Nav>
            <NavItem>Home</NavItem>
            <NavItem>Collections</NavItem>
            <NavItem>Music</NavItem>
            <NavItem>About</NavItem>
          </Nav>
        </Header>
        <HeroSection>
        <FloatingObject />
          <motion.img
            src="/hero-image.webp"
            alt="HookKast Fashion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <HeroText>
          as={motion.h2}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
            Jakesy Robert x HookKast</HeroText>
          <MusicPlayer />
        </HeroSection>
      </Container>
    </ThemeProvider>
  );

}

const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  color: ${(props) => props.theme.colors.text};
  font-family: "Helvetica Neue", sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const HeroText = styled.h2`
  font-size: 32px;
  margin-top: 20px;
`;
