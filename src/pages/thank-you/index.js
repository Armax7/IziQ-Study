import React from "react";
import * as Chakra from "@chakra-ui/react";
import Link from "next/link";
import { ThankYou } from "../../components/ThankYou/ThankYou";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";

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
      <ButtonHome />
    </Chakra.Container>
  );
}

export default ThankYouPage;
