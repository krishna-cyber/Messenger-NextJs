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
      maxW={"container.xl"}
      className=' flex h-screen items-center justify-center flex-col'>
      {session ? router.push("/chat") : <AuthForm />}
    </Container>
  );
}
