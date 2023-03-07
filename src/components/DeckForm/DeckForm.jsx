import style from "./DeckForm.module.css";
import * as Chakra from "@chakra-ui/react";

const DeckForm = ({ number = 0 }) => {
  return (
    <form className={style.containerDeckForm}>
      <Chakra.Flex justifyContent="space-between">
        <Chakra.Text fontWeight="bold" fontSize="2xl">
          Create new Study Deck
        </Chakra.Text>
        <Chakra.Button colorScheme="blue" background="rgba(92, 102, 187, 1)">
          Create
        </Chakra.Button>
      </Chakra.Flex>
      <div>
        <Chakra.FormControl>
          <Chakra.Input
            variant="flushed"
            placeholder='Enter a title, "Learn English'
            type="text"
            borderColor="#1E1E1E"
            borderBottom="2px solid #1E1E1E"
            w="40%"
          />
          <Chakra.FormLabel color="rgba(121, 121, 121, 1)">
            Title
          </Chakra.FormLabel>
        </Chakra.FormControl>
        <Chakra.FormControl>
          <Chakra.Input
            variant="flushed"
            placeholder="Add a description..."
            type="text"
            borderColor="#1E1E1E"
            borderBottom="2px solid #1E1E1E"
            w="40%"
          />
          <Chakra.FormLabel color="rgba(121, 121, 121, 1)">
            Description
          </Chakra.FormLabel>
        </Chakra.FormControl>
      </div>
      <Chakra.Flex width="50%" margin="auto" flexDirection="column">
        <Chakra.Select
          placeholder="Select Category"
          margin="15px auto"
          borderColor="#A1AAF3"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Chakra.Select>
        <Chakra.Select placeholder="Select Sub-Category" borderColor="#A1AAF3">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Chakra.Select>
      </Chakra.Flex>
      <Chakra.Text
        fontWeight="bold"
        fontSize="17px"
        marginTop="20px"
        marginBottom="20px"
      >
        Total Cards{" "}
        <span
          style={{
            padding: "5px 10px 5px 10px",
            borderRadius: "50%",
            background: "#A1AAF3",
          }}
        >
          {number}
        </span>
      </Chakra.Text>
      <div>
        <h1>Component CardForm</h1>
      </div>
    </form>
  );
};

export default DeckForm;
