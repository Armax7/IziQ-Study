import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";

const Decks = () => {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const decks = await SupaHelpers.get.userDecks();
    setDecks(decks);
  }, [userID]);

  return (
    <div>
      <Components.DeckContainer decks={decks} />
    </div>
  );
};

export default Decks;
