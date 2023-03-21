import Link from "next/link";

import * as Chakra from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill, BsFillBookmarksFill } from "react-icons/bs";
import { CgPathTrim } from "react-icons/cg";
import React, { useEffect, useState } from "react";

import * as Components from "../../../components";
import * as SupaHelpers from "../../../pages/api/supabase_helpers";
import axios from "axios";

const OptionsBar = ({ logged = false, avatarImage }) => {
  const SignIn = Chakra.useDisclosure();
  const singUp = Chakra.useDisclosure();
  const btnRef = React.useRef();

  //Creo un estado local en el cual se guarda datos del usuario (en este caso el nombre)
  const [userData, setUserData] = useState("");
  const [path, setPath] = useState("");
  const [myUuid, setMyUuid] = useState("");
  const [allData, setAllData] = useState({});

  useEffect(async () => {
    let uuid = await SupaHelpers.get.userId();
    setMyUuid(uuid);
    let allUsers = (await axios.get("http://localhost:3000/api/users")).data;
    let userData = (await allUsers?.filter((u) => u.users_uuid == uuid))[0];
    //Accedemos a ese dato por medio de un metodo en supaHelpers
    let user = await SupaHelpers.get.userNameFull();
    setUserData(user); //Seteamos el valor obtenido
    setAllData(userData);
  }, [allData]);

  return (
    <>
      {logged == true ? (
        <div>
          <Chakra.ButtonGroup gap="3">
            <Chakra.Box>
              <Chakra.Menu>
                <Chakra.MenuButton
                  as={Chakra.IconButton}
                  aria-label="Menu-Pages"
                  borderRadius="50%"
                  background="#F2F2F2"
                  icon={<GiHamburgerMenu />}
                  variant="outline"
                />
                <Chakra.MenuList>
                  <Link href="/home">
                    <Chakra.MenuItem>Pagina Principal</Chakra.MenuItem>
                  </Link>
                  <Link href="/subscriptions">
                    <Chakra.MenuItem>Suscripciones</Chakra.MenuItem>
                  </Link>
                  <Link href="/current-plan">
                    <Chakra.MenuItem>Mi Suscripcion Actual</Chakra.MenuItem>
                  </Link>
                  <Link href="/about">
                    <Chakra.MenuItem>About</Chakra.MenuItem>
                  </Link>
                </Chakra.MenuList>
              </Chakra.Menu>
            </Chakra.Box>

            <Chakra.Box>
              <Chakra.Menu>
                <Chakra.MenuButton
                  as={Chakra.IconButton}
                  aria-label="Search database"
                  borderRadius="50%"
                  background="#F2F2F2"
                  icon={<BsFillBookmarksFill />}
                  variant="outline"
                />
                <Chakra.MenuList>
                  <Link href="/decks">
                    <Chakra.MenuItem>Mis Mazos</Chakra.MenuItem>
                  </Link>
                  <Link href={"/community"}>
                    <Chakra.MenuItem>Mazos de la Comunidad</Chakra.MenuItem>
                  </Link>
                </Chakra.MenuList>
              </Chakra.Menu>
            </Chakra.Box>
            <Chakra.IconButton
              borderRadius="50%"
              aria-label="Search database"
              icon={<BsFillBellFill />}
            />

            {/* ============= Menu Profile =============*/}
            <Chakra.Box>
              <Chakra.Menu>
                <Chakra.MenuButton
                  as={Chakra.Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  w="40px"
                  h="40px"
                >
                  <Chakra.Avatar
                    w="40px"
                    h="40px"
                    src={`https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/${allData?.image}`}
                  />
                </Chakra.MenuButton>
                <Chakra.MenuList alignItems={"center"}>
                  <br />
                  <Chakra.Center>
                    <Chakra.Avatar
                      size={"2xl"}
                      src={`https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/${allData?.image}`}
                    />
                  </Chakra.Center>
                  <br />
                  <Chakra.Center>
                    <p>{userData ? userData : "Username"}</p>
                  </Chakra.Center>
                  <br />
                  <Chakra.MenuDivider />
                  <Chakra.MenuItem>
                    <Link href="/profile">Profile</Link>
                  </Chakra.MenuItem>
                  <Chakra.MenuItem>Account Settings</Chakra.MenuItem>
                  <Chakra.Flex align={"center"} justify={"center"}>
                    <Components.LogOutButton />
                  </Chakra.Flex>
                </Chakra.MenuList>
              </Chakra.Menu>
            </Chakra.Box>
          </Chakra.ButtonGroup>
        </div>
      ) : (
        <Chakra.Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Chakra.Button
            ref={btnRef}
            onClick={SignIn.onOpen}
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"link"}
            _focus={{ border: "none" }}
          >
            Sign In
          </Chakra.Button>
          <Chakra.Drawer
            isOpen={SignIn.isOpen}
            placement="right"
            onClose={SignIn.onClose}
            finalFocusRef={btnRef}
            size="sm"
          >
            <Chakra.DrawerContent
              bgColor="blue.800"
              backgroundPosition="bottom"
              bgRepeat="no-repeat"
              bgSize="contain"
            >
              <Chakra.DrawerCloseButton
                backgroundColor="#F5E9CF"
                color="red"
                justifyItems="center"
              />

              <Chakra.DrawerBody
                bgRepeat="no-repeat"
                bgPosition="bottom"
                bgImage="https://media2.giphy.com/media/NFA61GS9qKZ68/giphy.gif?cid=ecf05e47xn3ry5qvntn307ou1nsjwfz32kxi7ymcgbprf7jw&rid=giphy.gif&ct=g"
              >
                <Components.FormLogIn />
              </Chakra.DrawerBody>
            </Chakra.DrawerContent>
          </Chakra.Drawer>

          <Chakra.Button
            ref={btnRef}
            onClick={singUp.onOpen}
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg="#EB455F"
            href={"#"}
            _focus={{ border: "none" }}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Chakra.Button>

          <Chakra.Drawer
            isOpen={singUp.isOpen}
            placement="right"
            onClose={singUp.onClose}
            finalFocusRef={btnRef}
            size="md"
          >
            <Chakra.DrawerContent bg="blue.800">
              <Chakra.DrawerCloseButton backgroundColor="#F5E9CF" color="red" />

              <Chakra.DrawerBody
                bgRepeat="no-repeat"
                bgPosition="bottom"
                bgSize="contain"
                bgImage="https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif?cid=ecf05e47vbmb4kob20y613bgho10pj1kpbo0yup2taljq7ir&rid=giphy.gif&ct=g"
              >
                <Components.FormSignUp />
              </Chakra.DrawerBody>
            </Chakra.DrawerContent>
          </Chakra.Drawer>
        </Chakra.Stack>
      )}
    </>
  );
};

export default OptionsBar;
