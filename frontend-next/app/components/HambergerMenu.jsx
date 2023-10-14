/** @format */
"use client";
import { Button, Divider, IconButton, VStack } from "@chakra-ui/react";
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
import { set } from "react-hook-form";

const HambergerMenu = () => {
  const router = useRouter();
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState("1");
  return (
    <VStack
      width={expand == true ? "20%" : "5%"}
      alignItems={"flex-start"}
      padding={"2"}
      gap={"6"}>
      <IconButton
        icon={<FcMenu />}
        aria-label='menu'
        onClick={() => {
          setExpand(!expand);
        }}
      />
      <Divider />
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
      <Button
        size={"lg"}
        color={"gray.700"}
        leftIcon={<BiLogOut />}
        variant={active == 3 ? "solid" : "ghost"}
        onClick={() => {
          setActive("3");
        }}>
        {expand == true ? "Logout" : ""}
      </Button>
    </VStack>
  );
};

export default HambergerMenu;
