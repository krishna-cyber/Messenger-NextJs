/** @format */
"use client";
import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const UserContacts = ({ url }) => {
  return (
    <Box
      as={"section"}
      minWidth={"30%"}
      display={"flex"}
      flexDirection={"column"}
      gap={"4"}
      pt={"2"}>
      <Heading as={"h2"} size={"lg"}>
        {url == "chat" ? "Messages" : "Contacts"}
      </Heading>
      <Divider />
      <Box display={"flex"} alignItems={"center"} gap={"3"}>
        <Avatar size={"sm"} src='https://bit.ly/broken-link'>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Box>

      <Avatar size={"sm"} src='https://bit.ly/broken-link'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
      <Avatar size={"sm"} src='https://bit.ly/broken-link'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
      <Avatar size={"sm"} src='https://bit.ly/broken-link'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
      <Avatar size={"sm"} src='https://bit.ly/broken-link'>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
    </Box>
  );
};

export default UserContacts;
