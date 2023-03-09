import * as Chakra from "@chakra-ui/react";
import styles from "./CardForm.module.css";
import { useState } from "react";
import { Image } from "./utils";
import { supabase } from "../../pages/api/supabaseClient"; //this is for temporal POST card

/// This is a temporal function to POST a card on DB
/// Pls remove after implementing back end
async function temporalPostCard(
  question,
  answer,
  image = null,
  learned = false,
  deck_id
) {
  const { data, error } = await supabase
    .from("cards")
    .insert([{ question, answer, image, learned, deck_id }])
    .select();
  if (error) {
    console.log(error);
    return error;
  }
  return data;
}
/// Temporal function ends, erase up to here.

function CardForm({ deckId, ...props }) {
  const initialValues = {
    question: "",
    answer: "",
    image: "",
    learned: false,
  };

  const [formData, setFormData] = useState(initialValues);

  const handleOnChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log("Added: ", await temporalPostCard(formData));
  };

  return (
    <Chakra.Box {...props}>
      <Chakra.Box
        mx="auto"
        w="90%"
        bg="#FFFFFF"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="15px"
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        color="#000000"
        mb="25px"
      >
        <Chakra.Heading
          fontSize="28px"
          lineHeight="42px"
          display="inline-flex"
        ></Chakra.Heading>
        <div className={styles.form_line}>
          <Chakra.FormControl mr="30px" pt="25px">
            <Chakra.Input
              type="text"
              name="question"
              id="question"
              value={formData.question}
              onChange={handleOnChange}
              variant="filled"
            />
            <Chakra.FormLabel color="#797979" mt="5px" htmlFor="question">
              Question
            </Chakra.FormLabel>
          </Chakra.FormControl>
          <Chakra.FormControl mr="30px" pt="25px">
            <Chakra.Input
              type="text"
              name="answer"
              id="answer"
              value={formData.answer}
              onChange={handleOnChange}
              variant="filled"
            />
            <Chakra.FormLabel color="#797979" mt="5px" htmlFor="answer">
              Answer
            </Chakra.FormLabel>
          </Chakra.FormControl>
          <div className={styles.image_container}>
            <div className={styles.image_column}>
              <div className={styles.image_icon}>
                <Image />
              </div>
              <div className={styles.image_text}>Image</div>
            </div>
          </div>
        </div>
      </Chakra.Box>
      <Chakra.Box
        textAlign="center"
        mx="auto"
        w="90%"
        h="65px"
        bg="#FFFFFF"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="15px"
        fontFamily="Poppins"
        fontStyle="normal"
        fontWeight="600"
        color="#000000"
        mb="25px"
      >
        <Chakra.Button
          mx="auto"
          w="100%"
          h="65px"
          borderRadius="15px"
          bg="transparent"
          fontFamily="Poppins"
          fontStyle="normal"
          fontWeight="600"
          color="#000000"
          _hover={{ backgroundColor: "transparent", color: "#000000" }}
          _focus={{ outline: "none" }}
          onClick={handleOnSubmit}
        >
          <span className={styles.line_add}>+ ADD CARD</span>
        </Chakra.Button>
      </Chakra.Box>
    </Chakra.Box>
  );
}

export default CardForm;
