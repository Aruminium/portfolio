import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      height="5px"
      margin="auto"
      width="100%"
      color="primary"
      textAlign="center"
      lineHeight="50px"
    >
      <Typography variant="caption" sx={{ opacity: 0.5 }}>
        Copyright Bana7
      </Typography>
    </Box>
  );
};

export default Footer;
