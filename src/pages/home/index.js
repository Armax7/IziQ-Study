import { supabase } from "../api/supabaseClient";
import { useEffect, useState } from "react";
import {  getAllDeck } from "../api/supabase_helper/supabase_helper";

function Home() {
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);
  return (
    <>
      <h1>Esto es Home</h1>
    </>
   
  )
}

export default Home