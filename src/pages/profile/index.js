import * as Chakra from "@chakra-ui/react";
import * as SupaHelpers from "../api/supabase_helpers";

import { useEffect, useState } from "react";
import * as Components from "../../components";
import axios from "axios";

import * as Component from "../../components";

import style from "./profile.module.css";

const Profile = () => {
  const [userName, setUserName] = useState("");
  const [myUuid, setMyUuid] = useState("");
  const [allData, setAllData] = useState({});
  const [path, setPath] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getAllData = async () => {
    let allUsers = (await axios.get("http://localhost:3000/api/users")).data;
    return allUsers;
  };

  useEffect(async () => {
    let uuid = await SupaHelpers.get.userId();
    setMyUuid(uuid);

    let info = await getAllData();
    let user = (await info?.filter((u) => u.users_uuid == uuid))[0];

    setAllData(user);
  }, [allData, path]);

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
            src={`https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/${allData?.image}`}
            alt="Dan Abramov"
            borderRadius="full"
            width="230px"
            height="230px"
            className={style.stylesImg}
            onClick={() => setIsModalOpen(true)}
          />
          {/** */}
          <Chakra.Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <Chakra.ModalOverlay />
            <Chakra.ModalContent>
              <Chakra.ModalHeader>Seleccionar imagen</Chakra.ModalHeader>
              <Chakra.ModalCloseButton />
              <Chakra.ModalBody>
                <Component.ProfileBuckets />
              </Chakra.ModalBody>
            </Chakra.ModalContent>
          </Chakra.Modal>
          {/** */}
          <Chakra.Container>
            <Chakra.Text
              textAlign="center"
              fontSize="42px"
              color="white"
              fontWeight="bold"
              textDecoration="underline"
            >
              {`${allData?.name ? allData.name : ""} ${
                allData?.lastname ? allData.lastname : ""
              }`}
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
            <Chakra.Text>▪ Nacimiento: {allData?.birth_date}</Chakra.Text>
            <Chakra.Text>▪ Alias: {allData?.alias}</Chakra.Text>
            <Chakra.Text>▪ Género: {allData?.gender}</Chakra.Text>
            <Chakra.Text>▪ Ocupación: {allData?.occupation}</Chakra.Text>
            <Chakra.Text>▪ Estado: {allData?.status}</Chakra.Text>
          </Chakra.Flex>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
};

export default Profile;
