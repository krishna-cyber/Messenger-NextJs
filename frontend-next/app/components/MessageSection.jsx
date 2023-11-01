/** @format */

import React from "react";
import EmptySection from "./EmpySection";
import { Box } from "@chakra-ui/react";

const MessageSection = ({ conversationID }) => {
  //if conversationID is not null then render the message section
  if (conversationID) {
    return (
      <Box as={"section"} width={"full"}>
        Message Section
      </Box>
    );
  } else {
    return (
      <Box as={"section"} width={"full"}>
        <EmptySection />
      </Box>
    );
  }
};

export default MessageSection;
