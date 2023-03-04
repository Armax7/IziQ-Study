import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { supabase } from "../../pages/api/supabaseClient";

function FormLogin() {
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setSignUp] = useState(true);
  const [session, setSession] = useState("");

  const hangleSignIn = async () => {
    try {
      let { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      alert("User logged.");
      console.log("hey estoy loggueado");
      // console.log(user)
      // console.log(session)
    } catch (e) {
      alert(e.message);
    }
  };

  const handleClick = () => setShow(!show);

  const logIn = Chakra.useDisclosure();

  return (
    <>
      <Chakra.Box bg="#4D455D" w="45%" p={8} color="black" ml="480" h="560">
        <Chakra.Button
          backgroundColor="#F5E9CF"
          color="red"
          mr={25}
          onClick={logIn.onClose}
          ml="380"
        >
          X
        </Chakra.Button>

        <Chakra.FormControl isRequired>
          <Chakra.FormLabel textColor="#F5E9CF">E-mail</Chakra.FormLabel>
          <Chakra.Input
            width="auto"
            backgroundColor="#F5E9CF"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Chakra.FormControl>

        <Chakra.FormLabel textColor="#F5E9CF">Password</Chakra.FormLabel>
        <Chakra.InputGroup
          backgroundColor="#F5E9CF"
          textColor="black"
          size="md"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Chakra.Input pr="4.5rem" type={show ? "text" : "password"} />
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
            Did you forget your password ?.
          </Chakra.FormHelperText>
        </Chakra.FormControl>

        <Chakra.Button
          mr={82}
          backgroundColor="red.400"
          // onClick={logIn.onClose}
          onClick={hangleSignIn}
          ml="370"
          colorScheme="blue"
          marginTop="25px"
          marginBottom="25px"
          marginLeft="0px"
        >
          Sign In
        </Chakra.Button>

        {/* <Chakra.FormLabel
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
            left="-90px"
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
            left="-20px"
            colorScheme="twitter"
            leftIcon={<FaGoogle color="#E96479" />}
          >
            Google
          </Chakra.Button>
        </Chakra.HStack> */}
      </Chakra.Box>
    </>
  );
}

export default FormLogin;