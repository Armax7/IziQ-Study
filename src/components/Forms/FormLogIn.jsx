import * as Chakra from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";
import UserArea from "../UserArea/UserArea";
import styles from "./FormLogin.module.css";
import { useRouter } from "next/router";
import { FaFacebook, FaGoogle } from "react-icons/fa";


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
      if(email === "iziq.study@gmail.com" && password ==="admin123"){
        await router.push("./dashboard", undefined, {shallow:true})
        alert("Welcome Admin")
      }else{
        alert("Welcome");
      console.log("hey estoy loggueado");
      setIsLoggedIn(true);
      await router.push("/home", undefined, { shallow: true });
      router.reload();
      }      

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

  const [redirect, setRedirect] = useState(false);


  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/home",
      },
    });
    setRedirect(true);
  }

  async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "facebook",
      options: {
        redirectTo: "http://localhost:3000/home",
      },
    });
    setRedirect(true);
  }

  return (
    <>
      <Chakra.Box bg="blue.800" color="black">
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
          colorScheme="blue"
          marginTop="25px"
          marginBottom="25px"
          marginLeft="0px"
        >
          Log In
        </Chakra.Button>

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
    </>
  );
}

export default FormLogIn;
