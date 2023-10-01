/** @format */
"use client";

import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  useToast,
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
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const toast = useToast();
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    delete data.confirmPassword;
    //make promise based toast using chakra ui
    axios
      .post(`http://localhost:5000/api/${variant.toLowerCase()}`, data)
      .then((res) => {
        toast({
          title: `${res.data.message}`,
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        toast({
          title: `${err.response.data.message}`,
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      });
  };
  return (
    <Card className=' w-[40%] mt-2'>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            {" "}
            {variant === "REGISTER" ? (
              <FormControl isRequired isInvalid={errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder='Username'
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Username is required",
                    },
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
            ) : null}
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder='someone@example.com'
                type='email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder='******'
                type='password'
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum length should be 6",
                  },
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter and one number",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            {variant === "REGISTER" ? (
              <FormControl isRequired isInvalid={errors.confirmPassword}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  placeholder='******'
                  type='password'
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    validate: (value: string) => {
                      if (value === watch("password")) {
                        return true;
                      } else {
                        return "Passwords do not match";
                      }
                    },
                  })}
                />
                <FormErrorMessage>
                  <p>
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </p>
                </FormErrorMessage>
              </FormControl>
            ) : null}
            {variant === "REGISTER" ? (
              <Button
                width={"full"}
                type={"submit"}
                isLoading={isSubmitting}
                colorScheme='blue'>
                Sign up
              </Button>
            ) : (
              <Button
                width={"full"}
                type={"submit"}
                isLoading={isSubmitting}
                colorScheme='blue'>
                Sign In
              </Button>
            )}
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
