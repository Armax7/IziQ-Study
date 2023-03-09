import style from "./SubscriptionShowcase.module.css";
import Link from "next/link";
import * as Chakra from "@chakra-ui/react";

const SubscriptionShowcase = ({
  suscription = "Premium",
  benefits = [
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
  ],
}) => {
  return (
    <div className={style.containerPlan}>
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
            {benefits?.map((beneficio) => (
              <Chakra.Flex marginBottom="14px">
                <Chakra.Container width="min-content">
                  <Chakra.Text fontSize="26px" cursor="default">
                    ✔
                  </Chakra.Text>
                </Chakra.Container>
                <Chakra.Text fontSize="16px" fontWeight="bold" cursor="default">
                  {beneficio.name}
                </Chakra.Text>
              </Chakra.Flex>
            ))}
          </Chakra.Flex>
        </Chakra.Container>
      </Chakra.Flex>
    </div>
  );
};

export default SubscriptionShowcase;
