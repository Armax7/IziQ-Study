import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function FormSignUp() {
  const [input, setInput] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const singUp = Chakra.useDisclosure();

  return (
    <>
      <Chakra.Box bg="#4D455D" w="45%" p={8} color="black" ml="480" h="560">
        <Chakra.Button
          backgroundColor="#F5E9CF"
          color="red"
          mr={25}
          onClick={singUp.onClose}
          ml="380"
          v
        >
          X
        </Chakra.Button>

        <Chakra.Flex>
          <Chakra.FormControl isRequired>
            <Chakra.FormLabel textColor="#F5E9CF">First name</Chakra.FormLabel>
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

        <Chakra.FormLabel height="4" textColor="#F5E9CF">
          E-mail
        </Chakra.FormLabel>
        <Chakra.FormControl isInvalid={isError}>
          {!isError ? (
            <Chakra.FormHelperText>
              Enter the email you'd like to receive the newsletter on.
            </Chakra.FormHelperText>
          ) : (
            <Chakra.FormErrorMessage>
              Email is required.
            </Chakra.FormErrorMessage>
          )}
          <Chakra.Input
            backgroundColor="#F5E9CF"
            type="email"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}

          />
        </Chakra.FormControl>
        <Chakra.FormLabel textColor="#F5E9CF">Password</Chakra.FormLabel>
        <Chakra.InputGroup
          backgroundColor="#F5E9CF"
          textColor="black"
          size="md"
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
          // onClick={singUp.onClose}
          onClick={(e)=>{hangleSignUp(e)}}
          ml="370"
          colorScheme="blue"
          marginTop="25px"
          marginBottom="25px"
          marginLeft="0px"
        >
          Sign Up
        </Chakra.Button>

        <Chakra.FormLabel
          textAlign="center"
          textColor="#F5E9CF"
          textDecoration="underline"
        >
          Or register with
        </Chakra.FormLabel>

        <Chakra.HStack padding="10">
          <Chakra.Button
            backgroundColor="#F5E9CF"
            color="black"
            left="0px"
            mr={5}
            ml="280"
            colorScheme="facebook"
            leftIcon={<FaFacebook color="blue" />}
          >
            Facebook
          </Chakra.Button>
          <Chakra.Button
            backgroundColor="#F5E9CF"
            color="black"
            left="0px"
            colorScheme="twitter"
            leftIcon={<FaGoogle color="#E96479" />}
          >
            Google
          </Chakra.Button>
        </Chakra.HStack>
      </Chakra.Box>
    </>
  );
}

export default FormSignUp;
