import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import * as Chakra from "@chakra-ui/react";
import * as Components from "../../../components";
import * as SupaHelpers from "../../api/supabase_helpers";

function Decks() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(async () => {
    const cards = await SupaHelpers.get.cardsByDeckId(id);
    if (cards) {
      setCards(cards);
    }
  }, [id]);

  return (
    <div>
      <Chakra.VStack align={'stretch'} >
        <Components.CardContainer cards={cards} />
        <Components.CardDetailsContainer dbCards={cards} spacing={'1rem'} pb={'2rem'} />
        <Components.CardForm deckId={id}  />
      </Chakra.VStack>
    </div>
  );
}

export default Decks;
