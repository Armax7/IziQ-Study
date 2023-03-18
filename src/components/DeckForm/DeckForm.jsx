import style from "./DeckForm.module.css";
import axios from "axios";
import { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import * as ReactQuery from "@tanstack/react-query";
import * as Components from "../../components";
import * as SupaHelpers from "../../pages/api/supabase_helpers";

const HOST = process.env.NEXT_PUBLIC_HOST;
const QK_USER_ID = "user-id";
const QK_CATEGORIES = "categories";
const QK_SUBCATEGORIES = "subcategories";

const DeckForm = () => {
  const [deckFormData, setDeckFormData] = useState({
    description: "",
    status: "active",
    category_id: "",
    subcategory_id: "",
    rating: 0,
  });

  const queryClient = ReactQuery.useQueryClient();

  const userId = ReactQuery.useQuery({
    queryKey: [QK_USER_ID],
    queryFn: getUserID,
    onSuccess: (data) => {
      setDeckFormData({ ...deckFormData, user_id: data });
    },
  });
  const categories = ReactQuery.useQuery({
    queryKey: [QK_CATEGORIES],
    queryFn: getCategories,
  });

  const subcategories = ReactQuery.useQuery({
    queryKey: [QK_SUBCATEGORIES],
    queryFn: () => getSubcategoriesByCategoryId(deckFormData.category_id),
  });

  console.log(deckFormData.category_id);

  if (userId.isLoading || categories.isLoading) {
    return <Chakra.Spinner size={"xl"} />;
  }

  async function handleCategoryOnChange(event) {
    setDeckFormData(() => {
      return {
        ...deckFormData,
        category_id: event.target.value,
      };
    });
    await queryClient.fetchQuery({
      queryKey: [QK_SUBCATEGORIES],
      queryFn: () => getSubcategoriesByCategoryId(event.target.value),
    });
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
          options={categories.data}
          onChange={handleCategoryOnChange}
          placeholder={"Select Category"}
          margin="15px auto"
          borderColor="#A1AAF3"
        />
        <Components.Dropdown
          isDisabled={!deckFormData.category_id || subcategories.isLoading}
          options={!deckFormData.category_id ? [] : subcategories.data}
          placeholder={"Select Sub-Category"}
          borderColor="#A1AAF3"
        />
      </Chakra.Flex>
    </form>
  );
};

export async function getServerSideProps() {
  const queryClient = new ReactQuery.QueryClient();

  await queryClient.prefetchQuery([QK_USER_ID], getUserID);
  await queryClient.prefetchQuery([QK_CATEGORIES], getCategories);

  await queryClient.prefetchQuery([QK_SUBCATEGORIES], () =>
    getSubcategoriesByCategoryId()
  );

  return {
    props: {
      dehydratedState: ReactQuery.dehydrate(queryClient),
    },
  };
}

async function getUserID() {
  const response = SupaHelpers.get.userId();
  return response;
}

async function getCategories() {
  const response = await axios
    .get(`http://${HOST}/api/categories`)
    .then((res) => res.data);

  return response;
}

async function getSubcategoriesByCategoryId(categoryId) {
  console.log(categoryId);
  if (!categoryId) {
    const response = await axios
      .get(`http://${HOST}/api/subcategories/`)
      .then((res) => res.data);

    return response;
  } else {
    const response = await axios
      .get(`http://${HOST}/api/subcategories/category/${categoryId}`)
      .then((res) => res.data);

    return response;
  }
}

export default DeckForm;
