import { motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import styled from "@emotion/styled";
import theme from "../theme";
import CustomCursor from "./CustomCursor";
import DarkModeToggle from "./DarkModeToggle";

<DarkModeToggle />;


const transitionVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.5 } },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <motion.div initial="initial" animate="animate" exit="exit" variants={transitionVariants}>
        <CustomCursor />
        <Container>{children}</Container>
      </motion.div>
    </ThemeProvider>
  );
};

export default Layout;

const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-family: "Helvetica Neue", sans-serif;
  min-height: 100vh;
`;
