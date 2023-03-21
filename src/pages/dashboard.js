import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icons from "react-icons/fi";
import Link from "next/link";

export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");

  return (
    <Chakra.Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      flexDir={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Chakra.Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
      >
        <Chakra.Flex
          flexDir="column"
          h={[null, null, "100vh"]}
          justifyContent="space-between"
        >
          <Chakra.Flex flexDir="column" as="nav">
            <Chakra.Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "2xl", "3xl", "4xl"]}
              alignSelf="center"
              letterSpacing="tight"
            >
              Dashboard
            </Chakra.Heading>
            <Chakra.Flex
              flexDir={["row", "row", "column", "column", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
              justifyContent="center"
            >
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href={"/dashboard"}>
                  <a>
                    <Chakra.Text>
                      <Chakra.Icon
                        as={Icons.FiHome}
                        fontSize="2xl"
                        className="active-icon"
                      />
                      Home
                    </Chakra.Text>
                  </a>
                </Link>
              </Chakra.Flex>
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href={"/statistics-supabase"}>
                  <a>
                    <Chakra.Text>
                      <Chakra.Icon as={Icons.FiDatabase} fontSize="2xl" />
                      Base de Datos
                    </Chakra.Text>
                  </a>
                </Link>
              </Chakra.Flex>
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href={"/statistics-stripe"}>
                  <a>
                    <Chakra.Text>
                      <Chakra.Icon as={Icons.FiCreditCard} fontSize="2xl" />
                      Stripe
                    </Chakra.Text>
                  </a>
                </Link>
              </Chakra.Flex>
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href={"/comments"}>
                  <a>
                    <Chakra.Text>
                      <Chakra.Icon as={Icons.FiMessageCircle} fontSize="2xl" />
                      Comentarios
                    </Chakra.Text>
                  </a>
                </Link>
              </Chakra.Flex>
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Link href={"/reports"}>
                  <a>
                    <Chakra.Text>
                      <Chakra.Icon as={Icons.FiFlag} fontSize="2xl" />
                      Reportes
                    </Chakra.Text>
                  </a>
                </Link>
              </Chakra.Flex>
            </Chakra.Flex>
          </Chakra.Flex>
          <Chakra.Flex flexDir="column" alignItems="center" mb={100} mt={5}>
            <Chakra.Avatar my={2} src="avatar-1.jpg" />
            <Chakra.Text textAlign="center">Admin</Chakra.Text>
          </Chakra.Flex>
        </Chakra.Flex>
      </Chakra.Flex>

      {/* Column 2 */}
      <Chakra.Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
      >
        <Chakra.Heading fontWeight="normal" mb={4} letterSpacing="tight">
          Bienvenido{" "}
          <Chakra.Flex display="inline-flex" fontWeight="bold">
            IziQ-Study
          </Chakra.Flex>
        </Chakra.Heading>
        <Chakra.Text color="gray" fontSize="sm">
          Mis Ingresos
        </Chakra.Text>
        <Chakra.Text fontWeight="bold" fontSize="2xl">
          $5,750.20
        </Chakra.Text>

        <Chakra.Flex>
          <Chakra.Heading fontWeight="normal">Users</Chakra.Heading>
        </Chakra.Flex>

        <Chakra.Flex flexDir="column">
          <Chakra.Flex overflow="auto"></Chakra.Flex>
          <Chakra.Flex align="center">
            <Chakra.Divider />
            <Chakra.IconButton
              icon={
                display == "show" ? (
                  <Icons.FiChevronUp />
                ) : (
                  <Icons.FiChevronDown />
                )
              }
              onClick={() => {
                if (display == "show") {
                  changeDisplay("none");
                } else {
                  changeDisplay("show");
                }
              }}
            />
            <Chakra.Divider />
          </Chakra.Flex>
        </Chakra.Flex>
      </Chakra.Flex>

      {/* Column 3 */}
      <Chakra.Flex
        w={["100%", "100%", "30%"]}
        bgColor="#F5F5F5"
        p="3%"
        flexDir="column"
        overflow="auto"
        minW={[null, null, "300px", "300px", "400px"]}
      >
        <Chakra.Flex alignContent="center">
          <Chakra.InputGroup
            bgColor="#fff"
            mb={4}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <Chakra.InputLeftElement
              pointerEvents="none"
              children={<Icons.FiSearch color="gray" />}
            />
            <Chakra.Input
              type="number"
              placeholder="Search"
              borderRadius="10px"
            />
          </Chakra.InputGroup>
          <Chakra.IconButton
            icon={<Icons.FiBell />}
            fontSize="sm"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
          />
          <Chakra.Flex
            w={30}
            h={25}
            bgColor="#B57295"
            borderRadius="50%"
            color="#fff"
            align="center"
            justify="center"
            ml="-3"
            mt="-2"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Chakra.Flex>
        </Chakra.Flex>
        <Chakra.Heading letterSpacing="tight">Mejor Contenido</Chakra.Heading>
        <br />
        <Chakra.Heading letterSpacing="tight" size="md" my={4}>
          Top 3: Mejores Autores
        </Chakra.Heading>
        <Chakra.Flex>
          <Chakra.AvatarGroup size="md" max={3} spacing={5}>
            <Chakra.Box textAlign="center">
              <Chakra.Avatar src="avatar-2.jpg" />
              <Chakra.Text mt={2}>Nombre autor 1</Chakra.Text>
            </Chakra.Box>
            <Chakra.Box textAlign="center">
              <Chakra.Avatar src="avatar-3.jpg" />
              <Chakra.Text mt={2}>Nombre autor 2</Chakra.Text>
            </Chakra.Box>
            <Chakra.Box textAlign="center">
              <Chakra.Avatar src="avatar-4.jpg" />
              <Chakra.Text mt={2}>Nombre autor 3</Chakra.Text>
            </Chakra.Box>
          </Chakra.AvatarGroup>
        </Chakra.Flex>
        <br />
        <Chakra.Heading letterSpacing="tight" size="md" my={4}>
          Top Mejores Decks
        </Chakra.Heading>
        <Chakra.Flex>
          <Chakra.Flex>
            <Chakra.List spacing={2}>
              <Chakra.ListItem>
                <Chakra.ListIcon as={Icons.FaCheck} color="green.500" />
                Primer deck
              </Chakra.ListItem>
              <Chakra.ListItem>
                <Chakra.ListIcon as={Icons.FaCheck} color="green.500" />
                Segundo deck
              </Chakra.ListItem>
              <Chakra.ListItem>
                <Chakra.ListIcon as={Icons.FaCheck} color="green.500" />
                Tercer deck
              </Chakra.ListItem>
            </Chakra.List>
          </Chakra.Flex>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
