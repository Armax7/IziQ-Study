import * as Chakra from "@chakra-ui/react";
import styles from "./DeckCover.module.css";

const DeckCover = ({ name, description, total_cards, status, rating, ...props }) => {
  return (
    <Chakra.Box className={styles.container} {...props}>
      <Chakra.Heading className={styles.head} fontSize="xl">
        {name}
      </Chakra.Heading>
      <Chakra.Text className={styles.description} fontSize="sm">{description}</Chakra.Text>
      <div className={styles.tags_container}>
        <Chakra.Tag
          className={styles.tag}
          size="lg"
          variant="solid"
          colorScheme="#a1aaf3"
          borderRadius="30px"
        >
          {total_cards} Cards
        </Chakra.Tag>
        <Chakra.Tag
          className={styles.tag}
          size="lg"
          variant="solid"
          colorScheme="#a1aaf3"
          borderRadius="30px"
        >
          {rating} Stars
        </Chakra.Tag>
      </div>
    </Chakra.Box>
  );
};

export { DeckCover };
