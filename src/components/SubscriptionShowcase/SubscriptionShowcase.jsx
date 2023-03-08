import style from "./SubscriptionShowcase.module.css";
import Link from "next/link";
import * as Chakra from "@chakra-ui/react";

const SubscriptionShowcase = ({ suscription = "Premium" }) => {
  const beneficios = [
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
    <div className={style.containerGeneral}>
      <Chakra.Flex
        background="#878CFF"
        height="100%"
        width="100%"
        justifyContent="center"
        className={style.chakraFlexContainer}
      >
        <div className={style.containerPlan}>
          <div>
            <Chakra.Flex flexDirection="column">
              <Chakra.Container textAlign="center">
                <Chakra.Text
                  fontSize="28px"
                  fontWeight="bold"
                  paddingTop="15px"
                  paddingBottom="15px"
                >
                  {suscription}
                </Chakra.Text>
                <div className={style.br}></div>
              </Chakra.Container>
              <Chakra.Container>
                <Chakra.Flex flexDirection="column">
                  {beneficios.map((beneficio) => (
                    <Chakra.Flex marginBottom="14px">
                      <Chakra.Container width="min-content">
                        <Chakra.Text fontSize="26px" cursor="default">
                          ✔
                        </Chakra.Text>
                      </Chakra.Container>
                      <Chakra.Text
                        fontSize="16px"
                        fontWeight="bold"
                        cursor="default"
                      >
                        {beneficio.name}
                      </Chakra.Text>
                    </Chakra.Flex>
                  ))}
                </Chakra.Flex>
              </Chakra.Container>

              <Chakra.Flex
                width="75%"
                margin="auto"
                h="40px"
                marginBottom="10px"
              >
                <Chakra.Button
                  background="#5C66BB"
                  colorScheme="blue"
                  fontSize="18px"
                  borderRadius="10px"
                  w="50%"
                  h="100%"
                  onClick={() => alert("Cancelar Plan 'Confirmar decisión'")}
                >
                  Cancel Plan
                </Chakra.Button>
              </Chakra.Flex>

              <Chakra.Flex
                justifyContent="flex-end"
                width="80%"
                margin="auto"
                height="50px"
              >
                <Chakra.Button
                  background="#5C66BB"
                  colorScheme="blue"
                  w="60%"
                  h="100%"
                  fontSize="24px"
                  borderRadius="15px"
                  onClick={() => alert("Mantener Plan")}
                >
                  Keep Plan
                </Chakra.Button>
              </Chakra.Flex>
            </Chakra.Flex>
          </div>
        </div>

        <div className={style.containerTwo}>
          <Chakra.Flex height="40%" justifyContent="flex-end">
            <Chakra.Container
              height="min-content"
              width="100%"
              display="flex"
              justifyContent="flex-end"
              paddingTop="25px"
            >
              <Link href="/home">
                <a>
                  <Chakra.Text fontSize="18px" color="white" fontWeight="bold">
                    ⬅ Back to Home
                  </Chakra.Text>
                </a>
              </Link>
            </Chakra.Container>
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
            </Chakra.Container>
          </div>
        </div>
      </Chakra.Flex>
    </div>
  );
};

export default SubscriptionShowcase;
