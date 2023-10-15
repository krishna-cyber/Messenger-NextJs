/** @format */

import { Box, Button } from "@chakra-ui/react";
import React from "react";

const layout = ({ children }) => {
  return (
    <Box
      as={"main"}
      padding={"1.5"}
      display={"flex"}
      width={"100vw"}
      justifyContent={"space-between"}
      height={"100vh"}>
      {" "}
      {children}
    </Box>
  );
};

export default layout;
