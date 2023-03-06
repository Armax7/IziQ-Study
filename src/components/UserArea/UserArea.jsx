import * as Chakra from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";
import { DeckContainer } from "../../components";
import DeckForm from "../Forms/DeckForm"

export default function UserArea() {
  const [user, setUser] = useState(null);
  const [showDeckContainer, setShowDeckContainer] = useState(false);
  const [createANewDeck, setCreateANewDeck] = useState(false)

  useEffect(async () => {
    setUser(supabase.auth.getUser());
    const user = await supabase.auth.getUser();
    console.log(user.data);
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  };

  const handleViewDecks = () => {
    setShowDeckContainer(!showDeckContainer);
  };

  const handleCreateNewDeck = () => {
    setCreateANewDeck(!createANewDeck)
  }

  return (
    <div>
      {user && (
        <>
          <h1>User area</h1>
          <p>Sesion de ...</p>
          <p>Sesion activa</p>
          <Chakra.Button
            mr={82}
            backgroundColor="red.400"
            onClick={() => {
              handleLogout();
              alert("Logged out successfully.");
            }}
            ml="370"
            colorScheme="blue"
            marginTop="25px"
            marginBottom="25px"
            marginLeft="0px"
          >
            Log Out
          </Chakra.Button>
          <Chakra.Button
            mr={82}
            backgroundColor="red.400"
            onClick={handleViewDecks}
            ml="370"
            colorScheme="blue"
            marginTop="25px"
            marginBottom="25px"
            marginLeft="0px"
          >
            {showDeckContainer ? "Hide your Deck(s)" : "View your Deck(s)"}
          </Chakra.Button>
          {showDeckContainer && <DeckContainer />}
          <Chakra.Button
            mr={82}
            backgroundColor="red.400"
            onClick={handleCreateNewDeck}
            ml="370"
            colorScheme="blue"
            marginTop="25px"
            marginBottom="25px"
            marginLeft="0px"
          >
            {createANewDeck ? "Create a new Deck" : "Hide form"}
          </Chakra.Button>
          {createANewDeck && <DeckForm />}
        </>
      )}
    </div>
  );
}