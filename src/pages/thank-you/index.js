import React from "react";
import * as Chakra from "@chakra-ui/react";
import Link from "next/link";
import { ThankYou } from "../../components/ThankYou/ThankYou";
import { BottonHome } from "../../components/ThankYou/BottonHome";

function ThankYouPage() {
  return (
    <Chakra.Container
      maxW="1920px"
      w="100wh"
      minH="calc(100vh - 70px)"
      bg="#F6F7FB"
      overflow="hidden"
    >
      <Chakra.Box mt="115px">
        <ThankYou />
      </Chakra.Box>
      <BottonHome />
    </Chakra.Container>
  );
}

export default ThankYouPage;
