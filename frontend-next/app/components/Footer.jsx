/** @format */

"use client";
import { Flex, Input, Button, IconButton } from "@chakra-ui/react";
import { VscSend } from "react-icons/vsc";

const Footer = () => {
  return (
    <Flex w='100%' mt='5' p={"2"} gap={"4"}>
      <Input
        placeholder='Type Something...'
        variant='filled'
        _focus={{
          border: "1px solid black",
        }}
      />
      <IconButton type='submit' colorScheme='blue' icon={<VscSend />} />
    </Flex>
  );
};

export default Footer;
