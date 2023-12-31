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
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import conversationUsers from "../static/messages";

const UserContacts = ({ url }) => {
  const [contacts, setContacts] = useState([]);
  const { data: session } = useSession();

  //fetching contacts from database
  async function fetchContacts() {
    const response = await axios.get("http://localhost:5000/api/contacts");
    const data = await response.data;
    setContacts(data.contacts);
  }

  //fetch conversations from database
  async function fetchConversations() {
    const conversations = conversationUsers;
    setContacts(conversations);
  }

  useEffect(() => {
    console.log(url);
    if (url == "contacts") {
      fetchContacts();
    } else if (url == "chat") {
      fetchConversations();
    }
    return () => {};
  }, [url]);

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

      {contacts &&
        contacts.map((contact, index) => {
          return (
            <Button
              variant={"ghost"}
              justifyContent={"flex-start"}
              borderRadius={"none"}
              size={"lg"}
              leftIcon={
                <Avatar size={"sm"} src={contact.avatar}>
                  <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
              }>
              <Text fontWeight={"bold"}>{contact.username}</Text>
            </Button>
          );
        })}
    </Box>
  );
};

export default UserContacts;
