import style from "./DeckForm.module.css";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../components";

const DeckForm = ({ number = 0 }) => {
  return (
    <form className={style.containerDeckForm}>
      <Chakra.Flex justifyContent="space-between">
        <Chakra.Text fontWeight="bold" fontSize="2xl">
          Create new Study Deck
        </Chakra.Text>
        <Chakra.Flex>
          <Chakra.Button
            colorScheme="blue"
            marginRight="5px"
            background="rgba(92, 102, 187, 1)"
            onClick={() => alert("Button Created")}
          >
            Create
          </Chakra.Button>
          <Chakra.Button
            colorScheme="blue"
            onClick={() => alert("Button Cancel")}
            background="rgba(92, 102, 187, 1)"
          >
            Cancel
          </Chakra.Button>
        </Chakra.Flex>
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
        <Components.Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          placeholder={"Select Category"}
          margin="15px auto"
          borderColor="#A1AAF3"
        />
        <Components.Dropdown
          options={["Option 1", "Option 2", "Option 3"]}
          placeholder={"Select Sub-Category"}
          borderColor="#A1AAF3"
        />
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
      <Components.CardForm />
    </form>
  );
};

export default DeckForm;
