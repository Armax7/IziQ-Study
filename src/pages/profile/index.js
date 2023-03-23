import * as Chakra from "@chakra-ui/react";
import * as SupaHelpers from "../api/supabase_helpers";

import { useEffect, useState } from "react";
import * as Components from "../../components";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState([]);

  useEffect(async () => {
    let nameUser = await SupaHelpers.get.userNameFull();
    setUserName(nameUser);
    let dataSupa = await SupaHelpers.get.userData();
    console.log("dataSupa", dataSupa);
    setData(dataSupa);
  }, []);

  console.log(data);
  return (
    <Chakra.Flex w="100%" h="100vh" margin="auto" justifyContent="center">
      <Chakra.Flex
        height="90vh"
        margin="auto"
        flexDirection="column"
        width="45%"
        alignItems="center"
      >
        <Chakra.Flex width="80%">
          <Components.FormDrawerData />
        </Chakra.Flex>
        <Chakra.Container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="15%"
        >
          <Chakra.Image
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            borderRadius="full"
            width="230px"
            height="230px"
          />

          <Chakra.Container>
            <Chakra.Text
              textAlign="center"
              fontSize="42px"
              color="white"
              fontWeight="bold"
              textDecoration="underline"
            >
              {userName}
            </Chakra.Text>
          </Chakra.Container>
        </Chakra.Container>
      </Chakra.Flex>
      <Chakra.Flex
        flexDirection="column"
        width="55%"
        justifyContent="center"
        alignItems="center"
        padding="0 2%"
        h="100vh"
      >
        <Chakra.Flex
          margin="auto"
          width="100%"
          height="40%"
          background="rgb(217,217,217, 40%)"
          borderRadius="20px"
        >
          <Chakra.Flex
            flexDirection="column"
            w="95%"
            border="1px"
            borderColor="blue.500"
            color="white"
            fontSize="20px"
            fontWeight="bold"
            margin="auto"
            padding="25px"
            borderRadius="15px"
          >
            <Chakra.Text>▪ Nacimiento</Chakra.Text>
            <Chakra.Text>▪ Alias</Chakra.Text>
            <Chakra.Text>▪ Género</Chakra.Text>
            <Chakra.Text>▪ Estado</Chakra.Text>
            <Chakra.Text>▪ Teléfono</Chakra.Text>
            <Chakra.Text>▪ Ocupación</Chakra.Text>
          </Chakra.Flex>
        </Chakra.Flex>
        <Chakra.Flex
          margin="auto"
          width="100%"
          height="40%"
          background="rgb(217,217,217, 40%)"
          borderRadius="20px"
        >
          Seccion 2
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
};

export default Profile;
