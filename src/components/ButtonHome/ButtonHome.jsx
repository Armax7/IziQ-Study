import * as Chakra from "@chakra-ui/react";
import { Arrow } from "./utils";
import Link from "next/link";

const ButtonHome = () => {
  return (
    <Link href="/home" passHref>
      <Chakra.Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt={5}
        m={{ base: "40% 10px", lg: "10% 0 0 -2%" }}
      >
        <Chakra.Box w="2%">
          <Arrow />
        </Chakra.Box>
        <Chakra.Text as="a" fontWeight="bold" cursor="pointer">
          Volver al Inicio
        </Chakra.Text>
      </Chakra.Box>
    </Link>
  );
};

export { ButtonHome };
