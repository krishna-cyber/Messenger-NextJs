/** @format */
"use client";
import { Box, Divider } from "@chakra-ui/react";
import HambergerMenu from "../components/HambergerMenu";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const layout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });
  return (
    <Box
      as={"main"}
      padding={"1.5"}
      display={"flex"}
      width={"100vw"}
      justifyContent={"space-between"}
      height={"100vh"}>
      {" "}
      <HambergerMenu avatar={session?.user.avatar} />
      <Divider orientation={"vertical"} />
      {children}
    </Box>
  );
};

export default layout;
