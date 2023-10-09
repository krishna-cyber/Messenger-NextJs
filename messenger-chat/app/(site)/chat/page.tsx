/** @format */
"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { Button } from "@chakra-ui/react";

const ChatPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
  });
  return (
    <div>
      <h1>Chat Page</h1>
      <Button
        onClick={() => {
          signOut();
        }}>
        Sign out
      </Button>
    </div>
  );
};

export default ChatPage;
