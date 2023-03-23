import * as Chakra from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import * as SupaHelpers from "../../pages/api/supabase_helpers";
import React, { useEffect, useState } from "react";
import style from "./FormDrawerData.module.css";

function FormDrawerData() {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure();
  const btnRef = React.useRef();

  const [newNameUser, setNewNameUser] = useState("");
  const [biblio, setBiblio] = useState("");

  const handleChange = (event) => {
    setBiblio(event.target.value);
  };

  useEffect(async () => {
    let userName = await SupaHelpers.get.userNameFull();
    console.log("user", userName);
    setNewNameUser(userName);
  }, []);

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
                <Chakra.Text color="white" fontWeight="bold">
                  Foto de Perfil
                </Chakra.Text>
                <Chakra.Input variant="flushed" placeholder="URL" />
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Alias
                </Chakra.Text>
                <Chakra.Input variant="flushed" placeholder="alias" />
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Nombre Completo{" "}
                </Chakra.Text>
                <Chakra.Input variant="flushed" placeholder={newNameUser} />
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
                />
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Género
                </Chakra.Text>
                <Chakra.Input variant="flushed" />
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Estado
                </Chakra.Text>
                <Chakra.Input variant="flushed" />
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Tel.
                </Chakra.Text>
                <Chakra.InputGroup>
                  <Chakra.InputLeftElement
                    pointerEvents="none"
                    children={<BiPhone color="white" />}
                  />
                  <Chakra.Input
                    color="white"
                    type="tel"
                    variant="flushed"
                    placeholder="Phone number"
                  />
                </Chakra.InputGroup>
              </Chakra.Box>
              <Chakra.Box>
                <Chakra.Text fontWeight="bold" color="white">
                  Ocupación
                </Chakra.Text>
                <Chakra.Input
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
            <Chakra.Button colorScheme="blue">Actualizar</Chakra.Button>
          </Chakra.DrawerFooter>
        </Chakra.DrawerContent>
      </Chakra.Drawer>
    </>
  );
}

export default FormDrawerData;
