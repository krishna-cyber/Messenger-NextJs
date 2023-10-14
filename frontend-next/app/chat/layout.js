/** @format */

import { Box, Button } from "@chakra-ui/react";
import React from "react";
import HambergerMenu from "../components/HambergerMenu";
import MessageSection from "../components/MessageSection";
import UserContacts from "../components/UserContacts";

const layout = () => {
  return (
    <Box
      as={"main"}
      padding={"1.5"}
      display={"flex"}
      justifyContent={"space-between"}
      width={"100vw"}
      height={"100vh"}>
      {" "}
      <HambergerMenu />
      <UserContacts />
      <MessageSection />
    </Box>
  );
};

export default layout;
