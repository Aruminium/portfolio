import React from "react";
import {Box, Typography } from "@mui/material";

const Footer = React.memo(() => {
  return (
      <Box
        height="100px"
        margin="auto"
        width="100%"
        color="primary"
        textAlign="center"
        lineHeight="100px"
      >
        <Typography variant="caption" sx={{ opacity: 0.5 }}>
          Copyright Bana7
        </Typography>
      </Box>
  );
});

export default Footer;