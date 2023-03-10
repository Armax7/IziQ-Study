import * as Chakra from "@chakra-ui/react";
import { Check, Arrow } from "./utils";
import Link from "next/link";

const ThankYou = () => {
  return (
    <Chakra.Container
      maxW="1920px"
      w="100wh"
      minH="calc(100vh - 70px)"
      bg="#F6F7FB"
      overflow="hidden"
    >
      <Chakra.Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m={{ base: "40% 0", lg: "8% 0 0 0" }}
      >
        <Chakra.Box
          w={{ base: "17%", lg: "7%" }}
          h={{ base: "auto", lg: "83px" }}
          mr={{ base: 0, lg: "13px" }}
          mb={{ base: "13px", lg: 0 }}
        >
          <Check />
        </Chakra.Box>
        <Chakra.Heading
          fontFamily="Poppins, sans-serif"
          fontStyle="normal"
          fontWeight="bold"
          fontSize={{ base: "32px", md: "64px" }}
          color="#2B3467"
          margin={{ base: 0, lg: "13px 0 0 0" }}
        >
          Ahora eres Premium
        </Chakra.Heading>
        <Chakra.Text
          color="#1E1E1E"
          fontFamily="Poppins, sans-serif"
          fontStyle="normal"
          fontWeight="medium"
          fontSize={{ base: "16px", md: "24px" }}
          lineHeight={{ base: "36px", md: "48px" }}
          textAlign={{ base: "center", md: "left" }}
          mb="35px"
        >
          ¡Gracias por su compra!
        </Chakra.Text>

        {/* Agregar ruta para ver los beneficios del plan comprado */}
        
        <Link href="/" passHref>
          <Chakra.Button
            as="a"
            bg="#5C66BB"
            _hover={{ bg: "#A1AAF3" }}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="50px"
            color="#FFFFFF"
            w="500px"
            padding="27px"
            fontFamily="Poppins, sans-serif"
            fontStyle="normal"
            fontWeight={600}
          >
            Ver beneficios
          </Chakra.Button>
        </Link>
      </Chakra.Flex>

      <Link href="/" passHref>
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
          <Chakra.Text
            as="a"
            fontWeight="bold"
            cursor="pointer"
          >
            Volver al Inicio
          </Chakra.Text>
        </Chakra.Box>
      </Link>
    </Chakra.Container>
  );
};

export { ThankYou };
