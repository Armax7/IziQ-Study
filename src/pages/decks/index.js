import * as Components from "../../components";
import { supabase } from "../api/supabaseClient";
import { useEffect, useState } from "react";
import {  getAllDeck } from "../api/supabase_Helpers/supabase_Helper";

const Decks = () => {
 
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);



  useEffect(async () => {
    const getIdUser = async () => {
      const user = await supabase.auth.getUser();
      const userID = user.data.user.id;
      setUserId(userID);
    };


    getIdUser();


    const decks = await getAllDeck();
    setDecks(decks);
  }, [userID]);


  const deckFilter = decks.filter((e) => e.user_id === userID);

  


  return (
    <div>
      <Components.DeckContainer decks={deckFilter} />
    </div>
  );
};

export default Decks;
