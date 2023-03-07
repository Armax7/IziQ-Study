import { useRouter } from "next/router";
import { CardContainer } from "../../../components";
import { useState, useEffect } from "react";
import { supabase } from "../../api/supabaseClient";

function Decks() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(async () => {
    const data = await loadCard();
    console.log(data);
    if (data) {
      setData(data);
    }
  }, [id]);

  const loadCard = async () => {
    try {
      const { data, error } = await supabase
        .from("cards")
        .select("id,question,answer,image,deck_id")
        .eq("deck_id", id);

      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };

  return (
    <div>
      <CardContainer cards={data} />
    </div>
  );
}

export default Decks;
