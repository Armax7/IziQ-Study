import * as Chakra from "@chakra-ui/react";

import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../pages/api/supabaseClient";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function FormSignUp() {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      const { user } = data;

      const { data: insertData, error: insertError } = await supabase
        .from("users_details")
        .insert([
          {
            users_uuid: user.id,
            name,
            lastname,
          },
        ]);

      if (insertError) {
        throw insertError;
      }
      alert("Check your email to confirm Sign Up");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setName("");
    setLastname("");
    setEmail("");
    setPassword("");
  };

  const isError = input === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const singUp = Chakra.useDisclosure();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/home",
      },
    });
    setRedirect(true);
    alert(`You have registered with ${JSON.stringify(data.provider)}`);
  }

  async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "http://localhost:3000/home",
      },
    });
    setRedirect(true);
    alert(`You have registered with ${JSON.stringify(data.provider)}`);
  }

  async function signout() {
    const { error } = await supabase.auth.signOut();
  }

  return (
    <>
      {
        <Chakra.Box>
          <Chakra.Flex bg="blue.800">
            <Chakra.FormControl isRequired>
              <Chakra.FormLabel textColor="#F5E9CF" margin="8">
                First name
              </Chakra.FormLabel>
              <Chakra.Input
                width="auto"
                backgroundColor="#F5E9CF"
                type="text"
                name=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Chakra.FormControl>

            <Chakra.FormControl isRequired>
              <Chakra.FormLabel
                paddingLeft="25px"
                textindent="500px"
                textColor="#F5E9CF"
                margin="8"
              >
                Last name
              </Chakra.FormLabel>
              <Chakra.Input
                left="5"
                width="auto"
                backgroundColor="#F5E9CF"
                type="text"
                name=""
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </Chakra.FormControl>
          </Chakra.Flex>

          <Chakra.FormLabel height="4" margin="4" textColor="#F5E9CF">
            E-mail
          </Chakra.FormLabel>
          {/* <Chakra.FormControl isInvalid={isError}> */}
          {/* {!isError ? (
                    <Chakra.FormHelperText>
                      Enter the email you'd like to receive the newsletter on.
                    </Chakra.FormHelperText>
                  ) : (
                    <Chakra.FormErrorMessage>
                      Email is required.
                    </Chakra.FormErrorMessage>
                  )} */}
          <Chakra.Input
            backgroundColor="#F5E9CF"
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* </Chakra.FormControl> */}
          <Chakra.FormLabel textColor="#F5E9CF">Password</Chakra.FormLabel>
          <Chakra.InputGroup
            backgroundColor="#F5E9CF"
            textColor="black"
            size="md"
            borderRadius="full"
          >
            <Chakra.Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              name=""
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Chakra.InputRightElement width="4.5rem">
              <Chakra.Button
                w="1.rem"
                size="sm"
                onClick={handleClick}
                backgroundColor="#E96479"
                color="black"
                colorScheme="blue"
              >
                {show ? "Hide" : "Show"}
              </Chakra.Button>
            </Chakra.InputRightElement>
          </Chakra.InputGroup>

          <Chakra.FormControl isRequired>
            <Chakra.FormHelperText color textColor="blue.400">
              Did you forget your password ?
            </Chakra.FormHelperText>
          </Chakra.FormControl>

          <Chakra.Button
            mr={82}
            backgroundColor="red.400"
            type="submit"
            onClick={(e) => {
              handleSignUp(e);
              handleSubmit(e);
            }}
            colorScheme="blue"
            marginTop="25px"
            marginBottom="25px"
            marginRight="auto"
          >
            Sign Up
          </Chakra.Button>

          <Chakra.FormLabel
            textAlign="center"
            textColor="blue.200"
            textDecoration="underline"
          >
            Or register with
          </Chakra.FormLabel>

          <Chakra.HStack padding="10">
            <Chakra.Button
              backgroundColor="#F5E9CF"
              color="black"
              marginRight="auto"
              colorScheme="facebook"
              leftIcon={<FaFacebook color="blue" />}
              onClick={(e) => {
                signInWithFacebook(e);
              }}
            >
              Facebook
            </Chakra.Button>
            <Chakra.Button
              backgroundColor="#F5E9CF"
              color="black"
              marginLeft="auto"
              marginRight="auto"
              colorScheme="twitter"
              leftIcon={<FaGoogle color="#E96479" />}
              onClick={(e) => {
                signInWithGoogle(e);
              }}
            >
              Google
            </Chakra.Button>
          </Chakra.HStack>
        </Chakra.Box>
      }
    </>
  );
}

export default FormSignUp;
