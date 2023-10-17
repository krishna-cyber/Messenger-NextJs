/** @format */
"use client";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Divider,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  BsChatDots,
  BsPeople,
  BsPeopleFill,
  BsChatDotsFill,
} from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
const HambergerMenu = ({ avatar }) => {
  const router = useRouter();
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState("1");
  return (
    <VStack
      width={expand == true ? "20%" : "7%"}
      justifyContent={"space-between"}
      padding={"2"}>
      <Box
        alignSelf={"flex-start"}
        display={"flex"}
        flexDirection={"column"}
        gap={"6"}
        alignItems={"flex-start"}>
        {" "}
        <IconButton
          icon={<FcMenu />}
          aria-label='menu'
          onClick={() => {
            setExpand(!expand);
          }}
        />
        <Divider />
        <Link href='/chat'>
          <Button
            size={"lg"}
            color={"gray.700"}
            leftIcon={active == "1" ? <BsChatDotsFill /> : <BsChatDots />}
            variant={active == 1 ? "solid" : "ghost"}
            onClick={() => {
              setActive("1");
            }}>
            {expand == true ? "Messages" : ""}
          </Button>
        </Link>
        <Divider />
        <Link href='/chat/contacts'>
          <Button
            size={"lg"}
            color={"gray.700"}
            leftIcon={active == "2" ? <BsPeopleFill /> : <BsPeople />}
            variant={active == 2 ? "solid" : "ghost"}
            onClick={() => {
              setActive("2");
            }}>
            {expand == true ? "Contacts" : ""}
          </Button>
        </Link>
        <Divider />
        <Button
          size={"lg"}
          color={"gray.700"}
          leftIcon={<BiLogOut />}
          variant={active == 3 ? "solid" : "ghost"}
          onClick={() => {
            setActive("3");
            signOut();
          }}>
          {expand == true ? "Logout" : ""}
        </Button>
      </Box>

      <Avatar
        colorScheme={"messenger"}
        src={avatar}
        alignSelf={"flex-start"}
        size={"md"}>
        <AvatarBadge boxSize='1.2em' bg='green.500' />
      </Avatar>
    </VStack>
  );
};

export default HambergerMenu;
