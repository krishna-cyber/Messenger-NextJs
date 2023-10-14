/** @format */ "use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const EmpySection = () => {
  return (
    <Box
      background={"gray.100"}
      height={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Text fontWeight={"bold"} color={"gray.700"}>
        Select a chat or start a new conversation !!
      </Text>
    </Box>
  );
};

export default EmpySection;
