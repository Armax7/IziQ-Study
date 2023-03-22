import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icons from "react-icons/fi";
import MyChartBD from "../components/MyChart/MyChartDB";
import MyChartOccupactions from "../components/MyChart/MyChartOccupations";
import MyChartSize from "../components/MyChart/MyChartSize";
import MyChartStripe from "../components/MyChart/MyChartStripe";
import MyChartSupabase from "../components/MyChart/MyChartSupabase";
import MyChartUsersCreate from "../components/MyChart/MyChartUsersCreate";
import * as Components from "../components";

const dataStripe = {
  labels: ["Noviembrer", "Diciembre", "Enero", "Febrero", "Marzo", "April"],
  datasetLabel: "Sales",
  datasetData: [12, 10, 3, 5, 2, 0],
  datasetBackgroundColor: "rgba(25, 9, 12, 0.7)",
};

const dataSupabase = {
  labels: ["Email", "Google", "Facebook"],
  datasetLabel: "Autenticacion de usuarios",
  values: [12, 19, 3],
};

const dataUsersCreate = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasetLabel: "Usuarios autenticados ultimos 10 dias",
  datasetData: [5, 2, 0, 7, 5, 0, 3, 0, 0, 1],
};

const dataDB = {
  labels: [
    "cards",
    "categories",
    "decks",
    "profile",
    "reviews",
    "subcategories",
    "users_details",
  ],
  datasetLabel: "Tamaño de Base de Datos",
  datasetData: [64, 32, 64, 32, 64, 40, 32, 32, 80],
};

const dataSize = {
  labels: ["Uso", "Disponible"],
  datasetLabel: "Tamaño de Base de Datos en MB",
  datasetData: [78, 512],
};

const dataOccupations = {
  labels: [
    "Estidiante",
    "Maestro",
    "Profesionista",
    "Sin especificar",
    "Ninguna anterior",
  ],
  datasetLabel: "Tamaño de Base de Datos en kB",
  datasetData: [20, 14, 18, 10, 9],
};

const autors = ["Lore Qaba", "Susana Perez", "Hafi Galo"];

const decks = ["Japonés Mock", "Inglés Frutas Mock", "Pokemon Mock"];

export default function Dashboard() {
  const [showAll, setShowAll] = useState(false);
  const [showSupabase, setShowSupabase] = useState(false);
  const [showStripe, setShowStripe] = useState(false);

  const handleClickSupabase = () => {
    setShowSupabase(true);
  };

  const handleClickStripe = () => {
    setShowStripe(true);
  };

  const handleClickAll = () => {
    setShowAll(true);
  };

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
        backgroundColor="#020254"
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
                <Chakra.Text
                  cursor="pointer"
                  onClick={handleClickAll}
                  textAlign="center"
                >
                  <Chakra.Icon
                    as={Icons.FiHome}
                    fontSize="2x2"
                    className="active-icon"
                  />
                  Home
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer" onClick={handleClickSupabase}>
                  <Chakra.Icon as={Icons.FiDatabase} fontSize="2xl" />
                  Base de Datos
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer" onClick={handleClickStripe}>
                  <Chakra.Icon as={Icons.FiCreditCard} fontSize="2xl" />
                  Stripe
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer">
                  <Chakra.Icon as={Icons.FiMessageCircle} fontSize="2xl" />
                  Comentarios
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer">
                  <Chakra.Icon as={Icons.FiFlag} fontSize="2xl" />
                  Reportes
                </Chakra.Text>
                <br />
              </Chakra.Flex>
            </Chakra.Flex>
          </Chakra.Flex>
          <br />
          <Chakra.Menu>
            <Chakra.Flex flexDir="column" alignItems="center" mb={100} mt={8}>
              <Chakra.MenuButton>
                <Chakra.Avatar
                  my={3}
                  src="https://mckdtyupusnhcabyhyja.supabase.co/storage/v1/object/public/images-client/IziQ-Study/Admin/IziQ-Study.png"
                />
              </Chakra.MenuButton>
              <Chakra.Text textAlign="center">Admin</Chakra.Text>
              <Chakra.MenuList backgroundColor={"darkblue"}>
                <Chakra.MenuItem color={"red"}>Perfil</Chakra.MenuItem>
                <Chakra.MenuItem color={"red"}>Configuración</Chakra.MenuItem>
                <Chakra.MenuItem>
                  <Components.LogOutButton />
                </Chakra.MenuItem>
              </Chakra.MenuList>
            </Chakra.Flex>
          </Chakra.Menu>
        </Chakra.Flex>
      </Chakra.Flex>

      {/* Column 2 */}
      <Chakra.Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        p="3%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
        backgroundColor="#fff6"
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
          $1,750.00 USD
        </Chakra.Text>
        <br />
        <Chakra.Flex>
          <Chakra.Heading fontWeight="normal">Gráficos</Chakra.Heading>
        </Chakra.Flex>
        <br />
        {/* fila 1 */}
        <Chakra.Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 4fr)"
          gap={12}
        >
          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"99%"} h={"80%"}>
              <MyChartStripe data={dataStripe} />
            </Chakra.Box>
          </Chakra.GridItem>

          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"67%"} h={"30%"}>
              <MyChartSupabase data={dataSupabase} />
            </Chakra.Box>
          </Chakra.GridItem>
        </Chakra.Grid>
        {/* fila 2 */}
        <br />
        <Chakra.Grid
          h="200px"
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(2, 4fr)"
          gap={12}
        >
          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"97%"} h={"90%"}>
              <MyChartUsersCreate data={dataUsersCreate} />
            </Chakra.Box>
          </Chakra.GridItem>

          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"67%"} h={"60%"}>
              <MyChartSize data={dataSize} />
            </Chakra.Box>
          </Chakra.GridItem>
        </Chakra.Grid>
        {/* fila 3 */}
        <br />
        <Chakra.Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 4fr)"
          gap={12}
        >
          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"65%"} h={"50%"}>
              <MyChartBD data={dataDB} />
            </Chakra.Box>
          </Chakra.GridItem>

          <Chakra.GridItem rowSpan={2} colSpan={1} bg="white">
            <Chakra.Box w={"70%"}>
              <MyChartOccupactions data={dataOccupations} />
            </Chakra.Box>
          </Chakra.GridItem>
        </Chakra.Grid>

        {showSupabase ? (
          <div>
            <MyChartSize data={dataSize} />
          </div>
        ) : showStripe ? (
          <div>
            <MyChartStripe data={dataStripe} />
          </div>
        ) : null}
      </Chakra.Flex>

      {/* Column 3 */}
      <Chakra.Flex
        w={["100%", "100%", "30%"]}
        bgColor="#F5B559"
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
            5
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
              <Chakra.Text mt={2}>{autors[0]}</Chakra.Text>
            </Chakra.Box>
            <Chakra.Box textAlign="center">
              <Chakra.Avatar src="avatar-3.jpg" />
              <Chakra.Text mt={2}>{autors[1]}</Chakra.Text>
            </Chakra.Box>
            <Chakra.Box textAlign="center">
              <Chakra.Avatar src="avatar-4.jpg" />
              <Chakra.Text mt={2}>{autors[2]}</Chakra.Text>
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
                <Chakra.ListIcon as={Icons.FiList} color="green.500" />
                {decks[0]}
              </Chakra.ListItem>
              <Chakra.ListItem>
                <Chakra.ListIcon as={Icons.FiList} color="green.500" />
                {decks[1]}
              </Chakra.ListItem>
              <Chakra.ListItem>
                <Chakra.ListIcon as={Icons.FiList} color="green.500" />
                {decks[2]}
              </Chakra.ListItem>
            </Chakra.List>
          </Chakra.Flex>
        </Chakra.Flex>
      </Chakra.Flex>
    </Chakra.Flex>
  );
}
