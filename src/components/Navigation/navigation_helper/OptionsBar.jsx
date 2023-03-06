import Link from "next/link";

import * as Chakra from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";
import { CgPathTrim } from "react-icons/cg";
import React from "react";

import * as Components from "../../../components";

const OptionsBar = ({ logged = false, avatarImage }) => {
  const SignIn = Chakra.useDisclosure();
  const singUp = Chakra.useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      {logged ? (
        <div>
          <Chakra.ButtonGroup gap="3">
            <Chakra.IconButton
              borderRadius="50%"
              aria-label="Search database"
              icon={<GiHamburgerMenu />}
            />
            <Chakra.IconButton
              borderRadius="50%"
              aria-label="Search database"
              icon={<CgPathTrim />}
            />
            <Chakra.IconButton
              borderRadius="50%"
              aria-label="Search database"
              icon={<BsFillBellFill />}
            />

            {/* ============= Menu Profile =============*/}
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
                <Chakra.Avatar w="40px" h="40px" src={avatarImage} />
              </Chakra.MenuButton>
              <Chakra.MenuList alignItems={"center"}>
                <br />
                <Chakra.Center>
                  <Chakra.Avatar size={"2xl"} src={avatarImage} />
                </Chakra.Center>
                <br />
                <Chakra.Center>
                  <p>Username</p>
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
          >
            Sign In
          </Chakra.Button>

          <Chakra.Drawer
            isOpen={SignIn.isOpen}
            placement="top"
            onClose={SignIn.onClose}
            finalFocusRef={btnRef}
            size="full"
          >
            <Chakra.DrawerContent>
              <Chakra.DrawerCloseButton
                backgroundColor="#F5E9CF"
                color="red"
                mr={960}
                mt="3"
              />
              <Chakra.DrawerBody>
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
            bg={"pink.400"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Chakra.Button>

          <Chakra.Drawer
            isOpen={singUp.isOpen}
            placement="top"
            onClose={singUp.onClose}
            finalFocusRef={btnRef}
            size="full"
          >
            <Chakra.DrawerContent>
              <Chakra.DrawerCloseButton
                backgroundColor="#F5E9CF"
                color="red"
                mr={960}
                mt="3"
              />
              <Chakra.DrawerBody>
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
