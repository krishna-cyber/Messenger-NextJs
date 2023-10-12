/** @format */
"use client";
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
  console.log(session?.user);
  return (
    <div>
      <h1>Chat Page</h1>
      <p>logged in as {session?.user?.name}</p>
      <p> address of the user is {session?.user.address}</p>

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
