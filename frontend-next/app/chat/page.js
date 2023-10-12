/** @format */
"use client";
import { Button } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const { data: session, status } = useSession();
  console.log("use session hook invoked" + { session });
  return (
    <>
      <p>This is chat page</p>
      <Button onClick={() => signOut()}>SignOut</Button>
      {/* <p>{session?.user.name}</p> */}
      <p>address is {session?.user?.address}</p>
      <p>{status}</p>
    </>
  );
};

export default page;
