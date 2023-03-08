import * as Chakra from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";
import { DeckContainer } from "../../components";
import * as SupaHelpers from "../../pages/api/supabase_helpers";

export default function UserArea() {
  const [user, setUser] = useState(null);
  const [showDeckContainer, setShowDeckContainer] = useState(false);
  const [userSession, setUserSession] = useState("");

  useEffect(async () => {
    setUser(supabase.auth.getUser());
    const user = await supabase.auth.getUser();
    setUserSession(user.data.user.email);
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

  return (
    <div>
      {user && (
        <>
          <h1>Welcome</h1>
          <p>Sesion de {userSession}</p>
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
        </>
      )}
    </div>
  );
}
