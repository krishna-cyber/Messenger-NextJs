/** @format */
import {
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Button,
  Box,
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

const AuthForm = () => {
  const [variant, setVariant] = useState("register");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
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
