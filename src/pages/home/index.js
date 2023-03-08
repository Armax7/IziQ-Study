import { supabase } from "../api/supabaseClient";
import { useEffect, useState } from "react";
import {  getAllDeck } from "../api/supabase_helper/supabase_helper";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const getIdUser = async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
      const userID =  user.data.user.id;
      setUserId(userID);
    };

    getIdUser();

    const decks = await getAllDeck();
    setDecks(decks);
  }, [userID]);

  return (
    <>
      <h1>Esto es Home</h1>
    </>
   
  )
}

export default Home