import React from "react";
import style from "../../components/SubscriptionShowcase/SubscriptionShowcase.module.css";
import Link from "next/link";
import * as Chakra from "@chakra-ui/react";
import * as Component from "../../components";

function CurrentPlan() {
  const suscription = "Premium";
  const benefits = [
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <Chakra.Flex
      background="#878CFF"
      height="100%"
      width="100%"
      justifyContent="center"
      className={style.chakraFlexContainer}
    >
      <Chakra.Container margin="auto 0" height="95%" marginTop="15px">
        <Component.SubscriptionShowcase
          suscription={suscription}
          benefits={benefits}
        />
      </Chakra.Container>

      <div className={style.containerTwo}>
        <Chakra.Flex height="35%" justifyContent="flex-end">
          <div>
            <Link href="/home">
              <a>
                <Chakra.Text
                  fontSize="18px"
                  color="white"
                  fontWeight="bold"
                  marginTop="30px"
                >
                  ⬅ Back to Home
                </Chakra.Text>
              </a>
            </Link>
          </div>
        </Chakra.Flex>
        <div className={style.containerUpgrade}>
          <Chakra.Container margin="0 auto">
            <Chakra.Text
              fontWeight="bold"
              fontSize="30px"
              textAlign="center"
              marginBottom="20px"
              color="black"
              cursor="default"
            >
              If this plan is not for you, maybe we can offer something better
            </Chakra.Text>
            <Chakra.Flex w="100%">
              <Chakra.Button
                margin="0 auto"
                fontWeight="bold"
                fontSize="26px"
                w="45%"
                h="60px"
                color="black"
                onClick={() => alert("Ir a la pagina de suscripciones")}
              >
                Upgrade Plan
              </Chakra.Button>
            </Chakra.Flex>

            {/*/////////////////////// */}
            <Chakra.Flex
              h="80px"
              justifyContent="center"
              boxSizing="border-box"
            >
              <Chakra.Button
                background="#5C66BB"
                colorScheme="blue"
                fontSize="18px"
                borderRadius="10px"
                margin="15px 5px"
                w="35%"
                h="45px"
                onClick={() => alert("Cancelar Plan 'Confirmar decisión'")}
              >
                Cancel Plan
              </Chakra.Button>
              <Chakra.Button
                background="#5C66BB"
                colorScheme="blue"
                fontSize="18px"
                margin="15px 5px"
                borderRadius="10px"
                w="35%"
                h="45px"
                onClick={() => alert("Mantener Plan")}
              >
                Keep Plan
              </Chakra.Button>
            </Chakra.Flex>

            {/*////////////////////// */}
          </Chakra.Container>
        </div>
      </div>
    </Chakra.Flex>
  );
}

export default CurrentPlan;
