import { Box, Typography } from "@mui/material";
import React from "react";

const Heading = ({ headinText, className }) => {
  return (
    <Box>
      <Typography
        className={`lg:!text-[48px] Mukta700 text-[20px] lg:!leading-[48px] leading-[24px] text-center !font-bold text-[--black] ${className}`}
      >
        {headinText}
      </Typography>
    </Box>
  );
};

export default Heading;
