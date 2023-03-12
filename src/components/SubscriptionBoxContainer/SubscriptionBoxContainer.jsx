import * as Chakra from "@chakra-ui/react";
import { SubcriptionBox } from "..";

const SubscriptionBoxContainer = ({ subscriptions, description }) => {
  // Divide el array de descripciones en tres sub-arrays
  const descriptions1 = description[0];
  const descriptions2 = description[1];
  const descriptions3 = description[2];

  return (
    <Chakra.Stack>
      <Chakra.Heading
        display="flex"
        justifyContent="space-evenly"
        color="#FFFFFF"
        mt={4}
        mb={5}
        fontWeight="bold"
      >
        Elige tu plan
      </Chakra.Heading>
      <Chakra.Box display="flex" justifyContent="space-evenly">
        {subscriptions.map((subscription, index) => (
          <SubcriptionBox
            key={subscription.id}
            subscription={subscription}
            description={index === 0 ? descriptions1 : index === 1 ? descriptions2 : descriptions3}
          />
        ))}
      </Chakra.Box>
    </Chakra.Stack>
  );
};

export default SubscriptionBoxContainer ;
