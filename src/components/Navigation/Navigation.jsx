import SearchBar from "../SearchBar/SearchBar";
import OptionsBar from "./navigation_helper/OptionsBar";
import style from "./Navigation.module.css";
import Link from "next/link";

import * as Chakra from "@chakra-ui/react";
import * as SupaHelpers from "../../pages/api/supabase_helpers";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";
//loreqaba@finews.biz
//Loreqaba

function Navigation({ avatarImage = "https://bit.ly/dan-abramov" }) {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();

  const [logged, setLogged] = useState(false);
  useEffect(async () => {
    let status = await SupaHelpers.get.loggedStatus();
    setLogged(status);
  }, [logged]);

  return (
    <Chakra.Flex
      background="#FFFFFF"
      boxShadow="0px 2px 6px rgba(0, 0, 0, 0.316)"
      position="relative"
      z-index="10"
      gap="3"
      h="70px"
      margin="0 auto"
      alignItems="center"
      justifyContent="space-between"
      paddingRight="40px"
      boxSizing="border-box"
    >
      <Link href={!logged ? "" : "/home"}>
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
