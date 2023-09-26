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

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  // if (variant === "REGISTER")
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
            {variant === "REGISTER" ? (
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  placeholder='******'
                  type='password'
                  name='Cpassword'
                  id='Cpassword'
                />
              </FormControl>
            ) : null}
            {variant === "REGISTER" ? (
              <Button width={"full"} colorScheme='blue'>
                Sign up
              </Button>
            ) : (
              <Button width={"full"} colorScheme='blue'>
                Sign In
              </Button>
            )}
            {/* {
              <Button width={"full"} colorScheme='blue'>
                Sign in
              </Button>
            } */}
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
            {variant === "LOGIN" ? (
              <Text>
                <span className=' mr-3'>New to messenger?</span>

                <Button
                  colorScheme='blue'
                  onClick={() => setVariant("REGISTER")}
                  variant={"link"}>
                  Create new account.
                </Button>
              </Text>
            ) : (
              <Text>
                <span className=' mr-3'>Already Have an account?</span>

                <Button
                  colorScheme='blue'
                  onClick={() => setVariant("LOGIN")}
                  variant={"link"}>
                  Sign in
                </Button>
              </Text>
            )}
            {/* <Text>
              <span className=' mr-3'>New to messenger?</span>

              <Button
                colorScheme='blue'
                onClick={() => setVariant("REGISTER")}
                variant={"link"}>
                Create new account.
              </Button>
            </Text>{" "} */}
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default AuthForm;
