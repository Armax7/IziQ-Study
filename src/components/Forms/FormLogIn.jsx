import * as Chakra from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";
import UserArea from "../UserArea/UserArea";
import styles from "./FormLogin.module.css";
import { useRouter } from "next/router";

function FormLogIn() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [session, setSession] = useState("");

  useEffect(() => {
    setSession(supabase.auth.getUser());

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
    });
  }, [isLoggedIn]);

  const handleSignIn = async () => {
    try {
      let { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      alert("User logged.");
      console.log("hey estoy loggueado");
      setIsLoggedIn(true);
      await router.push("/home", undefined, { shallow: true });
      router.reload();

      // console.log(user)
      // console.log(session)
    } catch (e) {
      console.log("error", e);
      alert(e.message);
    }
  };

  const changeForm = () => {
    //setear el estado de isSingUp
    setIsSignUp((value) => !value);
  };

  const handleClick = () => setShow(!show);

  const logIn = Chakra.useDisclosure();

  return (
    <>
      <Chakra.Box bg="#4D455D" w="45%" p={8} color="black" ml="480" h="560">
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
          onClick={handleSignIn}
          ml="370"
          padding="0"
          w="100px"
          colorScheme="blue"
          marginTop="25px"
          marginBottom="25px"
          marginLeft="0px"
        >
          Log In
        </Chakra.Button>
      </Chakra.Box>
    </>
  );
}

export default FormLogIn;
