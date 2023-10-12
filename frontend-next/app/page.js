/** @format */
"use client";
import { Container } from "@chakra-ui/react";
import AuthForm from "./components/AuthForm";
export default function Home() {
  return (
    <Container
      maxW={"container.lg"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}>
      <AuthForm />
    </Container>
  );
}
