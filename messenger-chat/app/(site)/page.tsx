/** @format */
"use client";
import { Card, CardBody, Container, Heading } from "@chakra-ui/react";
import AuthForm from "./components/AuthForm";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <Container
      maxW={"container.xl"}
      className=' flex h-screen items-center justify-center flex-col'>
      <Image src='/images/logo.png' width={48} height={48} alt='logo' />
      <Heading as={"h4"}>Sign in to your account</Heading>
      <AuthForm />
    </Container>
  );
}
