import styles from "./CardDetails.module.css";
import { HiTrash } from "react-icons/hi";
import { RiPencilFill } from "react-icons/ri";
import { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../components";

function CardDetails({
  onSubmitFn = () => alert("Submit button pressed without onSubmitFn"),
  onDeleteFn = () => alert("Delete button pressed without onDeleteFn"),
  id,
  question = "How do you say apple spanish?",
  answer = "Manzana",
  image = null,
  deck_id,
  learned,
  isCardOwned = false,
  ...props
}) {
  const [accordionIndex, setAccordionIndex] = useState(-1);

  function handleOnClickEdit(event) {
    accordionIndex < 0 ? setAccordionIndex(0) : setAccordionIndex(-1);
  }

  function handleOnSubmit(event) {
    setAccordionIndex(-1);
    return onSubmitFn(event);
  }

  async function handleDelete(event) {
    event.preventDefault();
    await onDeleteFn({ id });
  }

  return (
    <Chakra.Accordion
      index={accordionIndex}
      className={styles.card}
      allowToggle
      flex="0 0 auto"
      margin="1rem"
      backgroundColor={"#c9ccfe"}
      borderColor={"transparent"}
      fontFamily="Montserrat, Noto Sans Arabic, Helvetica Neue, Helvetica, Arial, sans-serif"
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
              <Chakra.Text
                color="#360568"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                paddingTop="5px"
                paddingLeft="10px"
                fontWeight="bold"
              >
                Pregunta
              </Chakra.Text>
              <Chakra.Text paddingLeft="10px" className={styles.input}>
                {question}
              </Chakra.Text>
            </Chakra.Flex>
            <Chakra.Flex flexDir="column" width="50%">
             <Chakra.Text
                color="#360568"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
                paddingTop="5px"
                paddingLeft="10px"
                fontWeight="bold"
              >
                Respuesta
              </Chakra.Text>
              <Chakra.Text className={styles.input} paddingLeft="10px">
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
              visibility={isCardOwned ? "visible" : "hidden"}
              onClick={handleOnClickEdit}
              padding="30px 0 0 0"
              margin="0 8px"
              name="Edit button"
              _focus={{ border: "none" }}
              _hover={{ backgroundColor: "transparent" }}
              backgroundColor="transparent"
              size="25px"
              h="25px"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
              fontSize="3xl"
            >
              ✏️
            </Chakra.AccordionButton>
            <Chakra.Button
              visibility={isCardOwned ? "visible" : "hidden"}
              padding="30px 0px 0 0"
              margin="0px 20px 0px 0px"
              onClick={handleDelete}
              name="Delete button"
              _focus={{ border: "none" }}
              _hover={{ backgroundColor: "transparent" }}
              backgroundColor="transparent"
              size="25px"
              h="25px"
              textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
              fontSize="3xl"
            >
              🗑️
            </Chakra.Button>
          </Chakra.Flex>
        </Chakra.Flex>
        <Chakra.AccordionPanel>
          <Components.CardForm
            deckId={deck_id}
            cardId={id}
            onSubmitFn={handleOnSubmit}
            submitBtnTxt={"Save"}
          />
        </Chakra.AccordionPanel>
      </Chakra.AccordionItem>
    </Chakra.Accordion>
  );
}

export default CardDetails;
