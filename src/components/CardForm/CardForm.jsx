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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [property]: value,
    });
  };

  return (
    <Chakra.Box className={styles.container}>
      <Chakra.Heading className={styles.head}>
        <div className={styles.number}>1</div>
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
        <Chakra.FormControl className={styles.form}>
          <Chakra.Input
            type="text"
            id="question"
            value={formData.question}
            onChange={handleOnChange}
          />
          <Chakra.FormLabel className={styles.label} htmlFor="question">
            Question
          </Chakra.FormLabel>
        </Chakra.FormControl>
        <Chakra.FormControl className={styles.form}>
          <Chakra.Input
            type="text"
            id="answer"
            value={formData.answer}
            onChange={handleOnChange}
          />
          <Chakra.FormLabel htmlFor="answer">
            <div className={styles.label}></div>Answer
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
