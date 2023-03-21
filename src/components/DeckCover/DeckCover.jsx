import * as Chakra from "@chakra-ui/react";
import * as Components from "../../components";
import styles from "./DeckCover.module.css";
import Stars from "../Rating/Stars";

const DeckCover = ({
  name,
  description,
  total_cards,
  status,
  rating,
  isOwnedDeck = true,
  ...props
}) => {
  return (
    <Chakra.Box className={styles.container} {...props}>
      <Chakra.Flex>
        <Chakra.Box w={"85%"}>
          <Chakra.Heading className={styles.head} fontSize="xl">
            {name}
          </Chakra.Heading>
          <Chakra.Text className={styles.description} fontSize="sm">
            {description}
          </Chakra.Text>
        </Chakra.Box>
        <Chakra.Flex>
          <Components.DeleteButton onClick={(e)=>alert(`${e} clicked`)} />
        </Chakra.Flex>
      </Chakra.Flex>
      <div className={styles.tags_container}>
        <Chakra.Tag
          className={styles.tag}
          size="lg"
          variant="solid"
          colorScheme="#a1aaf3"
          borderRadius="10px"
          boxShadow="0px 4px 10px rgba(0, 0, 0, 0.25)"
        >
          {total_cards} Cards
        </Chakra.Tag>
        <Stars rating={rating} readOnly={true} />
      </div>
    </Chakra.Box>
  );
};

export { DeckCover };
