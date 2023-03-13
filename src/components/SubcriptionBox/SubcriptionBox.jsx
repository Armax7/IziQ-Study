import * as Chakra from "@chakra-ui/react";
import { Check } from "./utils";
import styles from "./SubcriptionBox.module.css";
import {checkout} from "./subscriptionBox_helper/checkout";
const SubcriptionBox = ({ subscription,description,id="price_1MkVSUFcHuX0pfzL21JHgbME"}) => {
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
      {subscription === "Gratis" ? (
        <Chakra.Text fontWeight="bold" fontSize="35px" mb={2} ml={1}>
          {subscription.name}
        </Chakra.Text>
      ) : (
        <Chakra.Flex>
          <Chakra.Text fontWeight="extrabold" fontSize="32px" mb={2} ml={1}>
            {subscription.name}
          </Chakra.Text>
          <Chakra.Text
            color="#797979"
            fontSize="18px"
            fontWeight="semibold"
            ml="auto"
          >
            1 usuario
          </Chakra.Text>
        </Chakra.Flex>
      )}

      <Chakra.Text
        fontSize="20px"
        fontWeight="bold"
        mt={3}
        mb={-0.5}
        ml={1}
        color="#797979"
      >
        {subscription.price_per_month ? (
          <>
            {subscription.price_per_month}
            <span className={styles.per}> USD por mes</span>
          </>
        ) : (
          "\u200B"
        )}
      </Chakra.Text>
      <Chakra.Flex></Chakra.Flex>
      <Chakra.Text
        fontSize="20px"
        fontWeight="bold"
        mb={4}
        ml={1}
        color="#797979"
      >
        {subscription.price_per_year ? (
          <>
            {subscription.price_per_year}
            <span className={styles.per}> USD por año</span>
          </>
        ) : (
          "\u200B"
        )}
      </Chakra.Text>
      <Chakra.Divider
        my="4"
        borderWidth="1.9px"
        borderRadius="4px"
        mb={6}
        mt={6}
      />

      {description.map((description, index) => [
        <Chakra.Flex>
          <Chakra.Box
            key={`${index}-box`}
            mt={1}
            mr={2}
            style={{ maxWidth: "30px", minWidth: "20px" }}
          >
            <Check />
          </Chakra.Box>
          <Chakra.Text
            key={`${index}-text`}
            fontSize="15px"
            fontWeight="medium"
            mb={1}
          >
            {description}
          </Chakra.Text>
        </Chakra.Flex>,
      ])}

      {subscription.name !== "Free" && (
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
            onClick={(()=>{
              checkout({
                  lineItems:[
                      {
                          price:id,
                          quantity:1
                      }
                  ]
              })
          })}
          >
            Obtener plan
          </Chakra.Button>
          <Chakra.Text fontSize="12px" mt={5} ml={2} color="#8C8C8C">
            {/* Añadir ruta de Términos y Condiciones */}

            <Chakra.Link href="#" _hover={{ textDecoration: "none" }}>
              Se aplican <span className={styles.term_cond}>Términos y Condiciones</span>
            </Chakra.Link>
          </Chakra.Text>
        </>
      )}
    </Chakra.Box>
  );
};

export default SubcriptionBox;
