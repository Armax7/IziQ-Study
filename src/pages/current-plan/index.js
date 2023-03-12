import React from "react";
import style from "../../styles/currentPlan.module.css";
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
        <div className={style.containerPlan}>
          <Component.SubscriptionShowcase
            suscription={suscription}
            benefits={benefits}
          />
          <div className={style.containerPlanButtons}>
            {/*/////////////////////// */}
            <Chakra.Flex
              position="relative"
              h="80px"
              paddingLeft="10%"
              boxSizing="border-box"
              paddingTop="10px"
            >
              <Chakra.Button
                background="#5C66BB"
                colorScheme="blue"
                fontSize="18px"
                borderRadius="10px"
                w="45%"
                h="40px"
                onClick={() => alert("Cancelar Plan 'Confirmar decisión'")}
              >
                Cancel Plan
              </Chakra.Button>
            </Chakra.Flex>
            <Chakra.Flex
              position="relative"
              marginTop="-30px"
              w="90%"
              justifyContent="flex-end"
            >
              <Chakra.Button
                background="#5C66BB"
                colorScheme="blue"
                fontSize="18px"
                margin="15px 5px"
                borderRadius="10px"
                w="60%"
                h="45px"
                onClick={() => alert("Mantener Plan")}
              >
                Keep Plan
              </Chakra.Button>
            </Chakra.Flex>
            {/*////////////////////// */}
          </div>
        </div>
      </Chakra.Container>

      <div className={style.containerTwo}>
        <Chakra.Flex height="35%" justifyContent="flex-end">
          <div>
            <Link href="/home">
              <a>
                <Chakra.Text
                  className={style.backHome}
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
              className={style.textChange}
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
                className={style.buttonUpgrade}
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
          </Chakra.Container>
        </div>
      </div>
    </Chakra.Flex>
  );
}

export default CurrentPlan;
