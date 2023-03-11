import * as Chakra from "@chakra-ui/react";
import { Check } from "./utils";
import styles from "./SubcriptionBox.module.css";
import subscriptions from "./mock";

const SubcriptionBox = () => {
  const subscription = subscriptions[1];

  return (
    <Chakra.Box
      borderRadius="15px"
      overflow="hidden"
      p={4}
      w={{ base: "100%", md: "345px" }}
      minHeight="480px"
      maxHeight="480px"
      bg="#FFFFFF"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
    >
      {subscription.name === "Gratis" ? (
        <Chakra.Text fontWeight="bold" fontSize="35px" mb={2} ml={1}>
          {subscription.name}
        </Chakra.Text>
      ) : (
        <Chakra.Flex>
          <Chakra.Text fontWeight="extrabold" fontSize="32px" mb={2} ml={1}>
            {subscription.name}
          </Chakra.Text>
          <Chakra.Text color="#797979" fontSize="18px" fontWeight="semibold" ml="auto">
            1 usuario
          </Chakra.Text>
        </Chakra.Flex>
      )}

      <Chakra.Text fontSize="20px" fontWeight="bold" mt={3} mb={-.5} ml={1} color="#797979">
        {subscription.pricePerMonth ? (
          <>
            {subscription.pricePerMonth}
            <span className={styles.per}> por mes</span>
          </>
        ) : (
          "\u200B"
        )}
      </Chakra.Text>
      <Chakra.Flex></Chakra.Flex>
      <Chakra.Text fontSize="20px" fontWeight="bold" mb={4} ml={1} color="#797979">
        {subscription.pricePerYear ? (
          <>
            {subscription.pricePerYear}
            <span className={styles.per}> por año</span>
          </>
        ) : (
          "\u200B"
        )}
      </Chakra.Text>
      <Chakra.Divider my="4" borderWidth="1.9px" borderRadius="4px" mb={6} mt={6}/>
      <Chakra.Flex>
        <Chakra.Box 
          mt={1}
          mr={2}
          style={{ maxWidth: "30px", minWidth: "20px" }}
        >
          <Check />
        </Chakra.Box>
        <Chakra.Text fontSize="15px" fontWeight="medium" mb={4}>
          {subscription.descriptionLimited}
        </Chakra.Text>
      </Chakra.Flex>
      <Chakra.Flex mt={1}>
        <Chakra.Box
          mt={1}
          mr={2}
          style={{ maxWidth: "30px", minWidth: "20px" }}
        >
          <Check />
        </Chakra.Box>
        <Chakra.Text fontSize="15px" fontWeight="medium" mb={4}>
          {subscription.descriptionFull}
        </Chakra.Text>
      </Chakra.Flex>
      {subscription.name !== "Gratis" && (
        <>
          <Chakra.Button
            bg="#5C66BB"
            mt={14}
            ml={-2}
            py={6}
            fontWeight="bold"
            fontSize="20px"
            _hover={{ bg: "#A1AAF3" }}
            w="105%"
            borderRadius="50px"
            color="#FFFFFF"
          >
            Obtener plan
          </Chakra.Button>
          <Chakra.Text fontSize="12px" mt={5} ml={2} color="#8C8C8C">

          {/* Añadir ruta de Términos y Condiciones */}

            <Chakra.Link href="#">
              Se aplican <span className={styles.term_cond}>Términos y Condiciones</span>
            </Chakra.Link>
          </Chakra.Text>
        </>
      )}
    </Chakra.Box>
  );
};

export { SubcriptionBox };
