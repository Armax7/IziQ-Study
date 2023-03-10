import * as Chakra from "@chakra-ui/react";
import styles from "./CardDetails.module.css";
import { HiTrash } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";

function CardDetails({
  id,
  question = "How do you say apple spanish?",
  answer = "Manzana",
  image = "https://bit.ly/dan-abramov",
  Deck_id,
  learned,
}) {
  const onClick = (e) => {
    return alert(`You press ${e.currentTarget.name}`);
  };
  return (
    <Chakra.Flex
      className={styles.card}
      flex="0 0 auto"
      padding="15px"
      backgroundColor="white"
      margin="20px"
      justifyContent="space-between"
    >
      <Chakra.Flex width="80%">
      <Chakra.Flex
        paddingRight="50px"
        flexDir="column"
        borderRight="1px solid #c2c2c2"
        width="50%"
      >
        <Chakra.Text color="#6E6E6E" paddingLeft="20px">
          Question
        </Chakra.Text>
        <Chakra.Text paddingLeft="20px" className={styles.input}>
          {question}
        </Chakra.Text>
      </Chakra.Flex>
      <Chakra.Flex flexDir="column" width="50%">
        <Chakra.Text color="#6E6E6E" paddingLeft="30px">
          Answer
        </Chakra.Text>
        <Chakra.Text className={styles.input} paddingLeft="30px">
          {answer}
        </Chakra.Text>
      </Chakra.Flex>
      </Chakra.Flex>
      <Chakra.Flex width="20%" justifyContent="flex-end">
        {image && (
          <Chakra.Image
            boxSize="50px"
            alignSelf="center"
            borderRadius="5px"
            margin="0 5%"
            src={image}
            alt="Card"
          />
        )}
        <Chakra.Button
          padding="0"
          margin="0px 8px"
          onClick={(e) => onClick(e)}
          name="Edit button"
          _focus={{ border: "none" }}
          _hover={{ backgroundColor: "transparent" }}
          backgroundColor="transparent"
          size="25px"
          h="25px"
        >
          <RiPencilFill size="25px" cursor="pointer" />
        </Chakra.Button>
        <Chakra.Button
          padding="0"
          margin="0px 8px"
          onClick={(e) => onClick(e)}
          name="Delete button"
          _focus={{ border: "none" }}
          _hover={{ backgroundColor: "transparent" }}
          backgroundColor="transparent"
          size="25px"
          h="25px"
        >
          <HiTrash size="25px" cursor="pointer" />
        </Chakra.Button>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}

export default CardDetails;
