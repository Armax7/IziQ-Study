import * as Chakra from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import * as SupaHelpers from "../../pages/api/supabase_helpers";
import React, { useEffect, useState } from "react";
import style from "./FormDrawerData.module.css";
import axios from "axios";

function FormDrawerData() {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  const btnRef = React.useRef();

  const [uuid, setUuid] = useState("");

  const [info, setInfo] = useState({});
  const [newData, setNewData] = useState({
    users_uuid: uuid,
    name: info?.name,
    lastname: info?.lastname,
    birth_date: info?.birth_date,
    gender: info?.gender,
    occupation: info?.occupation,
    alias: info?.alias,
  });

  useEffect(async () => {
    let allUsers = (await axios.get("http://localhost:3000/api/users")).data;
    let user = (await allUsers.filter((u) => u.users_uuid == uuid))[0];

    await setInfo(user);
  }, []);

  useEffect(async () => {
    let uuid = await SupaHelpers.get.userId();
    setUuid(uuid);
  }, [uuid]);

  //Funciones para agarrar los datos de los inputs
  const handleChange = (event) => {
    event.preventDefault();

    setNewData({ ...newData, [event.target.name]: event.target.value });
  };
  //Fin Funciones para agarrar los datos de los inputs

  //Funciones para los botones
  const handleUpdate = async (event) => {
    event.preventDefault();

    await axios.put("http://localhost:3000/api/users", {
      users_uuid: uuid,
      name: newData.name,
      lastname: newData.lastname,
      birth_date: newData.birth_date,
      gender: newData.gender,
      occupation: newData.occupation,
      alias: newData.alias,
    });

    event.target.reset();
  };

  //Fin Funciones para los botones

  return (
    <>
      <Chakra.Button
        ref={btnRef}
        onClick={onOpen}
        color="black"
        borderRadius="full"
        w="50px"
        h="50px"
      >
        <BsPencilSquare />
      </Chakra.Button>
      <Chakra.Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <form onSubmit={(event) => handleUpdate(event)}>
          <Chakra.DrawerOverlay />
          <Chakra.DrawerContent color="white" backgroundColor="blue.800">
            <Chakra.DrawerCloseButton color="white" />
            <Chakra.DrawerHeader
              borderBottom="1px solid grey"
              w="80%"
              color="white"
              fontWeight="bold"
            >
              Actualizar Datos
            </Chakra.DrawerHeader>

            <Chakra.DrawerBody className={style.drawerBody}>
              <Chakra.Stack spacing="24px">
                <Chakra.Box>
                  <Chakra.Text fontWeight="bold" color="white">
                    Alias
                  </Chakra.Text>
                  <Chakra.Input
                    variant="flushed"
                    placeholder="alias"
                    name="alias"
                    onChange={(event) => handleChange(event)}
                  />
                </Chakra.Box>
                <Chakra.Box>
                  <Chakra.FormControl isRequired>
                    <Chakra.Text fontWeight="bold" color="white">
                      Nombre
                    </Chakra.Text>
                    <Chakra.Input
                      name="name"
                      variant="flushed"
                      onChange={(event) => handleChange(event)}
                    />
                  </Chakra.FormControl>
                  <Chakra.FormControl isRequired>
                    <Chakra.Text fontWeight="bold" color="white">
                      Apellido
                    </Chakra.Text>
                    <Chakra.Input
                      name="lastname"
                      variant="flushed"
                      onChange={(event) => handleChange(event)}
                    />
                  </Chakra.FormControl>
                </Chakra.Box>
                <Chakra.Box>
                  <Chakra.Text fontWeight="bold" color="white">
                    Fecha de Nacimiento
                  </Chakra.Text>
                  <Chakra.Input
                    color="white"
                    placeholder="Select Date"
                    size="md"
                    type="date"
                    name="birth_date"
                    onChange={(event) => handleChange(event)}
                  />
                </Chakra.Box>
                <Chakra.Box>
                  <Chakra.Text fontWeight="bold" color="white">
                    Género
                  </Chakra.Text>
                  <Chakra.Input
                    variant="flushed"
                    name="gender"
                    onChange={(event) => handleChange(event)}
                  />
                </Chakra.Box>

                <Chakra.Box>
                  <Chakra.Text fontWeight="bold" color="white">
                    Ocupación
                  </Chakra.Text>
                  <Chakra.Input
                    name="occupation"
                    onChange={(event) => handleChange(event)}
                    variant="flushed"
                    placeholder="Por ejemplo: Estudiante"
                  />
                </Chakra.Box>
              </Chakra.Stack>
            </Chakra.DrawerBody>

            <Chakra.DrawerFooter>
              <Chakra.Button
                variant="outline"
                mr={3}
                onClick={onClose}
                color="white"
              >
                Cancelar
              </Chakra.Button>
              <Chakra.Button onClick={onClose} type="submit" colorScheme="blue">
                Actualizar
              </Chakra.Button>
            </Chakra.DrawerFooter>
          </Chakra.DrawerContent>
          <button type="submit">Submit</button>
        </form>
      </Chakra.Drawer>
    </>
  );
}

export default FormDrawerData;
