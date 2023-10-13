/** @format */
import {
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Box,
  useToast,
  Divider,
  Text,
  AbsoluteCenter,
  Input,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const [variant, setVariant] = useState("register");
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const formSubmit = ({ username, email, password }) => {
    //registration and login using next auth
    if (variant === "register") {
      axios
        .post(`http://localhost:5000/api/${variant}`, {
          username,
          email,
          password,
        })
        .then((res) => {
          if (res.status === 200) {
            toast({
              title: `Success`,
              description: `${res.data.message}`,
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top-right",
            });
            signIn("credentials", {
              email,
              password,
              callbackUrl: "http://localhost:3000/chat",
            });
          }
          //if something goes wrong
          else {
            toast({
              title: `Something went wrong`,
              description: `Please try again later`,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast({
            title: err.response.data.message,
            description: `Provided email has already registered user.`,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top-right",
          }); //toast error
        });
    }
    if (variant === "login") {
      signIn("credentials", {
        email,
        password,
      });
    }
  };
  return (
    <Card width={"40%"}>
      <CardBody>
        <form onSubmit={handleSubmit(formSubmit)}>
          <VStack>
            {variant === "register" && (
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
            )}
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
            {variant === "register" && (
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
                    validate: (value) => {
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
            )}
            {variant === "register" ? (
              <Button
                width={"full"}
                type={"submit"}
                isLoading={isSubmitting}
                loadingText={"User registration in progress"}
                colorScheme='blue'>
                Sign up
              </Button>
            ) : (
              <Button
                width={"full"}
                type={"submit"}
                isLoading={isSubmitting}
                loadingText={"Submitting"}
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
              display={"flex"}
              width={"full"}
              justifyContent={"center"}>
              <Card shadow={"md"} width={"33.33%"}>
                <Button colorScheme='blue'>
                  <AiFillGithub fontSize={"1.5rem"} />
                </Button>
              </Card>{" "}
              <Card shadow={"md"} width={"33.33%"}>
                <Button>
                  {" "}
                  <AiFillGoogleCircle fontSize={"1.5rem"} />
                </Button>
              </Card>
            </HStack>
            {variant === "login" ? (
              <Text>
                <Box marginRight={"0.75rem"} display={"inline-block"}>
                  New to messenger?
                </Box>

                <Button
                  colorScheme='blue'
                  onClick={() => {
                    reset();
                    setVariant("register");
                  }}
                  variant={"link"}>
                  Create new account.
                </Button>
              </Text>
            ) : (
              <Text>
                <Box marginRight={"0.75rem"} display={"inline-block"}>
                  Already Have an account?
                </Box>

                <Button
                  colorScheme='blue'
                  onClick={() => {
                    reset();
                    setVariant("login");
                  }}
                  variant={"link"}>
                  Sign in
                </Button>
              </Text>
            )}
          </VStack>
        </form>
      </CardBody>
    </Card>
  );
};

export default AuthForm;
