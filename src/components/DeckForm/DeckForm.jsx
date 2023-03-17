import style from "./DeckForm.module.css";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import * as Components from "../../components";
import * as SupaHelpers from "../../pages/api/supabase_helpers";

const QK_USER_ID = "user-id";

const DeckForm = () => {
  const queryClient = ReactQuery.useQueryClient();

  const {
    isLoading,
    isError,
    data: userId,
    error,
  } = ReactQuery.useQuery([QK_USER_ID], async () => {
    const response = SupaHelpers.get.userId();
    return response;
  });

  if (isLoading) {
    return <Chakra.Spinner size={"xl"} />;
  }

  if (isError) {
    return (
      <Chakra.Alert status="error">
        <Chakra.AlertIcon />
        <Chakra.AlertTitle>Error: </Chakra.AlertTitle>
        <Chakra.AlertDescription>{error}</Chakra.AlertDescription>
      </Chakra.Alert>
    );
  }

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
    </form>
  );
};

export async function getServerSideProps() {
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QK_USER_ID], async () => {
    const response = SupaHelpers.get.userId();
    return response;
  });

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

export default DeckForm;
