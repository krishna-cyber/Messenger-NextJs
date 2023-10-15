/** @format */
"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import HambergerMenu from "../components/HambergerMenu";
import MessageSection from "../components/MessageSection";
import UserContacts from "../components/UserContacts";
import { Divider } from "@chakra-ui/react";

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
      <HambergerMenu />
      <Divider orientation={"vertical"} />
      <UserContacts />
      <Divider orientation={"vertical"} />
      <MessageSection />
    </>
  );
};

export default page;
