import * as Components from "../../components";
import { supabase } from "../api/supabaseClient";
import { useEffect, useState } from "react";
import { getAllDeck } from "../api/supabase_helper/supabase_helper";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const getIdUser = async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
      const userID = user.data.user.id;
      setUserId(userID);
    };

    getIdUser();

    const decks = await getAllDeck();
    setDecks(decks);
  }, [userID]);

  const deckFilter = decks.filter((e) => e.user_id === userID).slice(0, 6);

  return (
    <div>
      <Components.DeckContainer decks={deckFilter} />
    </div>
  );
}

export default Home;
