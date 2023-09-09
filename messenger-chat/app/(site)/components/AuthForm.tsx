/** @format */
"use client";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  Divider,
  Box,
  AbsoluteCenter,
  useColorMode,
  Card,
  CardBody,
  Text,
  HStack,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";

import React from "react";
import Link from "next/link";

const AuthForm = () => {
  return (
    <Card className=' w-[40%] mt-2'>
      <CardBody>
        <form>
          <VStack>
            {" "}
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder='someone@example.com'
                type='email'
                name='email'
                id='email'
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder='******'
                type='password'
                name='email'
                id='email'
              />
            </FormControl>
            <Button width={"full"} colorScheme='blue'>
              Sign in
            </Button>
            <Box position='relative' padding='10' width={"full"}>
              <Divider borderWidth={"2px"} />
              <AbsoluteCenter bg={"white"} px='4'>
                or continue with
              </AbsoluteCenter>
            </Box>
            <HStack
              alignContent={"center"}
              className=' w-full flex justify-center'>
              <Card shadow={"md"} className=' w-1/3'>
                <Button colorScheme='blue'>
                  <AiFillGithub className='text-2xl' />
                </Button>
              </Card>{" "}
              <Card shadow={"md"} className=' w-1/3'>
                <Button>
                  {" "}
                  <AiFillGoogleCircle className='text-2xl' />
                </Button>
              </Card>
            </HStack>
            <Text>
              <span className=' mr-3'>New to messenger?</span>
              <Link href='/signup'>
                <Button colorScheme='blue' variant={"link"}>
                  Create new account.
                </Button>
              </Link>
            </Text>{" "}
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default AuthForm;
