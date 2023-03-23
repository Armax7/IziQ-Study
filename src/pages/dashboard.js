import React, { useState } from "react";
import * as Chakra from "@chakra-ui/react";
import * as Icons from "react-icons/fi";
import MyChartBD from "../components/MyChart/MyChartDB";
import MyChartOccupactions from "../components/MyChart/MyChartOccupations";
import MyChartSize from "../components/MyChart/MyChartSize";
import MyChartStripe from "../components/MyChart/MyChartStripe";
import MyChartSupabase from "../components/MyChart/MyChartSupabase";
import MyChartUsersCreate from "../components/MyChart/MyChartUsersCreate";
import MyTableStripe from "../components/MyChart/MyTableStripe";
import MyComments from "../components/MyChart/MyComments";
import * as Components from "../components";

const dataStripe = {
  labels: ["Noviembrer", "Diciembre", "Enero", "Febrero", "Marzo", "April"],
  datasetLabel: "Sales",
  datasetData: [1, 14, 3, 5, 2, 9],
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
  datasetData: [64, 32, 64, 32, 64, 40, 32, 80],
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
  const [showChartHome, setShowChartHome] = useState(false);
  const [showChartBase, setShowChartBase] = useState(false);
  const [showChartStripe, setShowChartStripe] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleChartHome = () => {
    setShowChartHome(true);
    setShowChartBase(false)
    setShowChartStripe(false)
    setShowComments(false)
  };

  const handleChartSupabase = () => {
    setShowChartBase(true);
    setShowChartHome(false)
    setShowChartStripe(false)
    setShowComments(false)
  };

  const handleChartStripe = () => {
    setShowChartStripe(true);
    setShowChartHome(false)
    setShowChartBase(false)
    setShowComments(false)
  };

  const handleViewComments = () => {
    setShowComments(true);
    setShowChartHome(false)
    setShowChartBase(false)
    setShowChartStripe(false)
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
        backgroundColor="#2D3436"
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
              IziQ-Study
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
                  onClick={handleChartHome}
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
                <Chakra.Text cursor="pointer" onClick={handleChartSupabase}>
                  <Chakra.Icon as={Icons.FiDatabase} fontSize="2xl" />
                  Base de Datos
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer" onClick={handleChartStripe}>
                  <Chakra.Icon as={Icons.FiCreditCard} fontSize="2xl" />
                  Stripe
                </Chakra.Text>
              </Chakra.Flex>
              <br />
              <Chakra.Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                <Chakra.Text cursor="pointer" onClick={handleViewComments}>
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
              <Chakra.MenuList backgroundColor={"#657479"}>
                <Chakra.MenuItem color={"#0A0B0C"}>Perfil</Chakra.MenuItem>
                <Chakra.MenuItem color={"#0A0B0C"}>
                  Configuración
                </Chakra.MenuItem>
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
        backgroundColor="#96B1B4"
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
        <Chakra.Divider orientation="horizontal" />
        <br />
        <Chakra.Flex>
          <Chakra.Heading fontWeight="normal">My Dashboard</Chakra.Heading>
        </Chakra.Flex>
        <br />

        {showChartHome && (
          <>
            {" "}
            {/* fila 1 */}
            <Chakra.Grid
              h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(2, 4fr)"
              gap={12}
            >
              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"99%"} h={"80%"}>
                  <MyChartStripe data={dataStripe} />
                </Chakra.Box>
              </Chakra.GridItem>

              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"67%"} h={"30%"} ml={"12"}>
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
              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"97%"} h={"90%"}>
                  <MyChartUsersCreate data={dataUsersCreate} />
                </Chakra.Box>
              </Chakra.GridItem>

              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"67%"} h={"60%"} ml={"12"}>
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
              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"65%"} h={"50%"} ml={"12"}>
                  <MyChartBD data={dataDB} />
                </Chakra.Box>
              </Chakra.GridItem>

              <Chakra.GridItem rowSpan={2} colSpan={1} bg="#E6E6E6">
                <Chakra.Box w={"70%"} ml={"10"}>
                  <MyChartOccupactions data={dataOccupations} />
                </Chakra.Box>
              </Chakra.GridItem>
            </Chakra.Grid>
          </>
        )}
        {showChartBase && (
          <div>
            <MyChartSize data={dataSize} />
            <br />
            <Chakra.Divider orientation="horizontal" />
            <br />
            <MyChartUsersCreate data={dataUsersCreate} />
            <br />
            <Chakra.Divider orientation="horizontal" />
            <br />
            <MyChartSupabase data={dataSupabase} />
            <br />
            <Chakra.Divider orientation="horizontal" />
            <br />
            <MyChartBD data={dataDB} />
            <br />
            <Chakra.Divider orientation="horizontal" />
            <br />
            <MyChartOccupactions data={dataOccupations} />
          </div>
        )}
        {showChartStripe && (
          <div>
            <MyChartStripe data={dataStripe} />
            <br />
            <Chakra.Divider orientation="horizontal" />
            <br />
            <MyTableStripe />
          </div>
        )}
        {showComments && (
          <>
            <MyComments />
          </>
        )}
      </Chakra.Flex>

      {/* Column 3 */}
      <Chakra.Flex
        w={["100%", "100%", "30%"]}
        bgColor="#4B585A"
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
