import * as Chakra from "@chakra-ui/react";
import { Check } from "./utils";
import Link from "next/link";
import { Planes } from "./Mock";

const ThankYou = () => {

  // Luego reemplazar con los datos recibidos
  const plan = Planes[0]

  return (
    <Chakra.Container
    >
      <Chakra.Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        m={{ base: "40% 0", lg: "8% 0 0 0" }}
      >
        <Chakra.Box
          w={{ base: "27%", lg: "17%" }}
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
          textAlign="center"
          whiteSpace="nowrap"
          color="#2B3467"
          mt={2}
        >
          Ahora eres {plan.name}
        </Chakra.Heading>
        <Chakra.Text
          color="#1E1E1E"
          fontFamily="Poppins, sans-serif"
          fontStyle="normal"
          fontWeight="medium"
          fontSize={{ base: "16px", md: "24px" }}
          lineHeight={{ base: "36px", md: "48px" }}
          textAlign="center"
          mb="35px"
        >
          ¡Gracias por su compra!
        </Chakra.Text>
        <Link href="/current-plan" passHref>
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
    </Chakra.Container>
  );
};

export { ThankYou };
