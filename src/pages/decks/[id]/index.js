import { useRouter } from "next/router";
import { CardContainer, CardDetailsContainer } from "../../../components";
import { useState, useEffect } from "react";
import { supabase } from "../../api/supabaseClient";
import * as SupaHelpers from "../../api/supabase_helpers";

function Decks() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  

  useEffect(async () => {
    const data = await SupaHelpers.get.cardsByDeckId(id);
    if (data) {
      setData(data);
    }
    const cards = await SupaHelpers.get.cardsByDeckId(id);
    if (cards){
     setCards(cards)
    }

  }, [id]);



  return (
    <div>
      <CardContainer cards={data} />
      <CardDetailsContainer dbCards={cards} props={cards}/>
    </div>
  );
}

export default Decks;
