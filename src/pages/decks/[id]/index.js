import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as Components from "../../../components";
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
    if (cards) {
      setCards(cards);
    }
  }, [id]);

  return (
    <div>
      <Components.CardContainer cards={data} />
      <Components.CardDetailsContainer dbCards={cards} />
    </div>
  );
}

export default Decks;
