import * as Chakra from "@chakra-ui/react";
import styles from "./CardForm.module.css";
import { useState } from "react";
import { Move, Trash, Image } from "./utils";

const CardForm = () => {
  const initialValues = {
    question: "",
    answer: "",
    image: "",
    learned: false,
  };
  const [formData, setFormData] = useState(initialValues);

  return (
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
      <Chakra.Heading fontSize="28px" lineHeight="42px" display="inline-flex">
        <div className={styles.functions}>
          <div className={styles.move}>
            <Move />
          </div>
          <div className={styles.trash}>
            <Trash />
          </div>
        </div>
      </Chakra.Heading>
      <div className={styles.line}></div>
      <div className={styles.form_line}>
        <Chakra.FormControl mr="30px" pt="25px">
          <Chakra.Input
            type="text"
            id="question"
            value={formData.question}
            onChange={(e) => setFormData(e.target.value)}
            variant="filled"
          />
          <Chakra.FormLabel color="#797979" mt="5px" htmlFor="question">
            Question
          </Chakra.FormLabel>
        </Chakra.FormControl>
        <Chakra.FormControl mr="30px" pt="25px">
          <Chakra.Input
            type="text"
            id="answer"
            value={formData.answer}
            onChange={(e) => setFormData(e.target.value)}
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
  );
};

export { CardForm };
