/** @format */
"use client";
import { Container } from "@chakra-ui/react";
import AuthForm from "./components/AuthForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <Container
      maxW={"container.lg"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}>
      {status && status === "authenticated" && router.push("/chat")}
      <AuthForm />
    </Container>
  );
}
