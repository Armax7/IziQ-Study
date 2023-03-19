import style from "./DeckForm.module.css";
import axios from "axios";
import { useState } from "react";
import * as Utils from "../../utils";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../components";
import * as ReactQuery from "@tanstack/react-query";
import * as SupaHelpers from "../../pages/api/supabase_helpers";

const HOST = process.env.NEXT_PUBLIC_HOST;
const QK_USER_ID = "user-id";
const QK_CATEGORIES = "categories";
const QK_SUBCATEGORIES = "subcategories";

const DeckForm = ({
  onCreateFn = (data) =>
    alert(`No onCreateFn found \n\n received data: \n${JSON.stringify(data)}`),
  onCloseFn = () => alert("No onCancelFn found"),
  className: classNameProp = style.containerDeckForm,
  ...props
}) => {
  const [deckFormData, setDeckFormData] = useState({
    name: "",
    description: "",
    status: "active",
    category_id: "",
    subcategory_id: "",
    rating: 0,
  });

  const [submitted, setSubmitted] = useState(false);

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

  if (userId.isLoading || categories.isLoading) {
    return <Chakra.Spinner size={"xl"} />;
  }

  async function handleCategoryOnChange(event) {
    setDeckFormData(() => {
      return {
        ...deckFormData,
        category_id: event.target.value,
        subcategory_id: "",
      };
    });

    await queryClient.fetchQuery({
      queryKey: [QK_SUBCATEGORIES],
      queryFn: () => getSubcategoriesByCategoryId(event.target.value),
    });
  }

  function handleSubcategoryOnChange(event) {
    setDeckFormData(() => {
      return {
        ...deckFormData,
        subcategory_id: event.target.value,
      };
    });
  }

  function handleInputOnChange(event) {
    event.preventDefault();
    setDeckFormData(() => {
      return {
        ...deckFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleOnSubmit(event) {
    event.preventDefault()
    setSubmitted(true);
    await onCreateFn(deckFormData);
    await onCloseFn();
  }

  async function handleOnCancel(event) {
    setDeckFormData({
      ...deckFormData,
      name: "",
      description: "",
      category_id: "",
      subcategory_id: "",
    });
    setSubmitted(false);
    await onCloseFn();
  }

  return (
    <form className={classNameProp} onSubmit={handleOnSubmit} {...props}>
      <Chakra.Flex justifyContent="space-between">
        <Chakra.Text fontWeight="bold" fontSize="2xl">
          Create new Study Deck
        </Chakra.Text>
        <Chakra.Flex>
          <Chakra.Button
            type="submit"
            colorScheme="blue"
            marginRight="5px"
            background="rgba(92, 102, 187, 1)"
          >
            Create
          </Chakra.Button>
          <Chakra.Button
            colorScheme="blue"
            onClick={handleOnCancel}
            background="rgba(92, 102, 187, 1)"
          >
            Cancel
          </Chakra.Button>
        </Chakra.Flex>
      </Chakra.Flex>
      <div>
        <Chakra.FormControl
          isRequired
          isInvalid={Utils.isSpace(deckFormData.name) && submitted}
        >
          <Chakra.Input
            name="name"
            value={deckFormData.name}
            onChange={handleInputOnChange}
            variant="flushed"
            placeholder='Enter a title, "Learn English'
            type="text"
            borderColor="#1E1E1E"
            borderBottom="2px solid #1E1E1E"
            w="40%"
          />
          <Chakra.Flex>
            <Chakra.FormLabel color="rgba(121, 121, 121, 1)">
              Título
            </Chakra.FormLabel>
            <Chakra.FormErrorMessage>
              El mazo requiere un título
            </Chakra.FormErrorMessage>
          </Chakra.Flex>
        </Chakra.FormControl>
        <Chakra.FormControl>
          <Chakra.Input
            name="description"
            value={deckFormData.description}
            onChange={handleInputOnChange}
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
        <Chakra.FormControl
          isRequired
          isInvalid={!deckFormData.category_id && submitted}
        >
          <Chakra.Flex>
            <Chakra.FormLabel color="rgba(121, 121, 121, 1)">
              Select Category:
            </Chakra.FormLabel>
            <Chakra.FormErrorMessage>
              El mazo requiere un una categoría
            </Chakra.FormErrorMessage>
          </Chakra.Flex>
          <Components.Dropdown
            isRequired
            options={categories.data}
            onChange={handleCategoryOnChange}
            placeholder={"Select Category"}
            margin="15px auto"
            borderColor="#A1AAF3"
          />
        </Chakra.FormControl>
        <Chakra.FormControl
          isRequired
          isInvalid={!deckFormData.subcategory_id && submitted}
        >
          <Chakra.Flex>
            <Chakra.FormLabel color="rgba(121, 121, 121, 1)">
              Select Sub-Category:
            </Chakra.FormLabel>
            <Chakra.FormErrorMessage>
              El mazo requiere una sub-categoría
            </Chakra.FormErrorMessage>
          </Chakra.Flex>
          <Components.Dropdown
            isRequired
            isDisabled={!deckFormData.category_id || subcategories.isLoading}
            options={!deckFormData.category_id ? [] : subcategories.data}
            value={deckFormData.subcategory_id}
            onChange={handleSubcategoryOnChange}
            placeholder={"Select Sub-Category"}
            borderColor="#A1AAF3"
          />
        </Chakra.FormControl>
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
  const response = await SupaHelpers.get.userId();
  return response;
}

async function getCategories() {
  const response = await axios
    .get(`http://${HOST}/api/categories`)
    .then((res) => res.data);

  return response;
}

async function getSubcategoriesByCategoryId(categoryId) {
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
