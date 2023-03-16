import styles from "./CardDetails.module.css";
import { HiTrash } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import * as Components from "../../components";

const QK_EDIT_MODE = "edit-mode";

function CardDetails({
  onSubmitFn = () => alert("Submit button pressed without onSubmitFn"),
  onDeleteFn = () => alert("Delete button pressed without onDeleteFn"),
  id,
  question = "How do you say apple spanish?",
  answer = "Manzana",
  image = null,
  deck_id,
  learned,
  ...props
}) {

  return (
    <Chakra.Accordion
      className={styles.card}
      allowToggle
      flex="0 0 auto"
      margin="1rem"
      backgroundColor={"#c9ccfe"}
      borderColor={"transparent"}
      {...props}
    >
      <Chakra.AccordionItem>
        <Chakra.Flex
          className={styles.card}
          flex="0 0 auto"
          justifyContent="space-between"
          backgroundColor="white"
          w={"100%"}
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

          <Chakra.Image
            boxSize="4rem"
            alignSelf="center"
            borderRadius="5px"
            margin="0 5%"
            src={image}
            fallback={<Chakra.Box bgColor={"white"} boxSize="4rem" />}
          />
          <Chakra.Flex width="10%" justifyContent="flex-end">
            <Chakra.AccordionButton
              padding="0"
              margin="0 8px"
              name="Edit button"
              _focus={{ border: "none" }}
              _hover={{ backgroundColor: "transparent" }}
              backgroundColor="transparent"
              size="25px"
              h="25px"
            >
              <RiPencilFill size="25px" cursor="pointer" />
            </Chakra.AccordionButton>
            <Chakra.Button
              padding="0"
              margin="0px 8px"
              onClick={onDeleteFn}
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
        <Chakra.AccordionPanel>
          <Components.CardForm
            deckId={deck_id}
            onSubmitFn={onSubmitFn}
            submitBtnTxt={"Save"}
          />
        </Chakra.AccordionPanel>
      </Chakra.AccordionItem>
    </Chakra.Accordion>
  );
}

export default CardDetails;
