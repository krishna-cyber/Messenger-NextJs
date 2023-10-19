/** @format */
"use client";
import {
  Avatar,
  AvatarBadge,
  Box,
  Divider,
  Text,
  Heading,
  Button,
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

      <Button
        variant={"ghost"}
        justifyContent={"flex-start"}
        borderRadius={"none"}
        size={"lg"}
        leftIcon={
          <Avatar
            size={"sm"}
            src='https://miraclelearningcentre.com/wp-content/uploads/2020/11/Gary.png'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        }>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Button>
      <Button
        variant={"ghost"}
        justifyContent={"flex-start"}
        borderRadius={"none"}
        size={"lg"}
        leftIcon={
          <Avatar
            size={"sm"}
            src='https://st2.depositphotos.com/1006318/5909/v/380/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg?forcejpeg=true'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        }>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Button>
      <Button
        variant={"ghost"}
        justifyContent={"flex-start"}
        borderRadius={"none"}
        size={"lg"}
        leftIcon={
          <Avatar
            size={"sm"}
            src='https://th.bing.com/th/id/R.42c4d08885da7d7e25b043ef0a6a209c?rik=a5iCH%2b2wUYvgcw&pid=ImgRaw&r=0&sres=1&sresct=1'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        }>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Button>
      <Button
        variant={"ghost"}
        justifyContent={"flex-start"}
        borderRadius={"none"}
        size={"lg"}
        leftIcon={
          <Avatar
            size={"sm"}
            src='https://th.bing.com/th/id/R.97425ce8c2fdabbcf3303a16f6f5f4e1?rik=2KBgQm8T2UQOrQ&riu=http%3a%2f%2fwww.meherinternational.com%2fwp-content%2fuploads%2f2017%2f04%2fclient.jpg&ehk=%2bBcgIJDRAR%2bVZkBrk0xzgN%2f6HMMkQz2uR%2fCwLf1wKKs%3d&risl=&pid=ImgRaw&r=0'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        }>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Button>
      <Button
        variant={"ghost"}
        justifyContent={"flex-start"}
        borderRadius={"none"}
        size={"lg"}
        leftIcon={
          <Avatar
            size={"sm"}
            src='https://th.bing.com/th/id/OIP.Pe9nT8ehAFrDjoBK444LAAHaHa?pid=ImgDet&rs=1'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
        }>
        <Text fontWeight={"bold"}>Krishna Tiwari</Text>
      </Button>
    </Box>
  );
};

export default UserContacts;
