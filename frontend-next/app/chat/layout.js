/** @format */

import { Box, Divider } from "@chakra-ui/react";
import HambergerMenu from "../components/HambergerMenu";
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
      <HambergerMenu />
      <Divider orientation={"vertical"} />
      {children}
    </Box>
  );
};

export default layout;
