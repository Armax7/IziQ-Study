import SearchBar from "../SearchBar/SearchBar";
import OptionsBar from "./navigation_helper/OptionsBar";
import style from "./Navigation.module.css";
import Link from "next/link";

import * as Chakra from "@chakra-ui/react";

function Navigation({
  avatarImage = "https://bit.ly/dan-abramov",
  logged = false,
}) {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  return (
    <Chakra.Flex
      background="#FFFFFF"
      boxShadow="0px 10px 33px 0px rgba(0, 0, 0, 0.25)"
      gap="3"
      h="70px"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
      paddingRight="40px"
      boxSizing="border-box"
    >
      <Link href={!logged ? "/" : "/home"}>
        <div className={style.logoApp}></div>
      </Link>
      <SearchBar
        onClick={() => alert("Missing search functionality on Navigation.jsx")}
      />

      <OptionsBar logged={logged} avatarImage={avatarImage} />
    </Chakra.Flex>
  );
}

export default Navigation;
