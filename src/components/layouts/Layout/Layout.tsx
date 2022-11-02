import { motion } from "framer-motion";
import Header from "components/layouts/Header/Header";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "components/layouts/Footer/Footer";

type LayoutProps = Required<{
  readonly children: ReactNode;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box padding={"48px 40px"} >
        <Header />
        {children}
        <Footer />
      </Box>
    </motion.div>
  );
};

export default Layout;
