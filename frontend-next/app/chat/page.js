/** @format */
"use client";
import { Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });
  console.log("use session hook invoked" + { session });
  return (
    <>
      <p>This is chat page</p>
      <Button onClick={() => signOut()}>SignOut</Button>
      <p>{session?.user.username}</p>
      <p>address is {session?.user?.address}</p>
      <p>{status}</p>
    </>
  );
};

export default page;
