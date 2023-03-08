import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const userDecks = await SupaHelpers.get.userDecksByCreateDate();
    setDecks(userDecks);
  }, [userID]);

  const slicedDeck = decks.slice(0, 6);

  return (
    <div>
      <Components.DeckContainer decks={slicedDeck} />
    </div>
  );
}

export default Home;
