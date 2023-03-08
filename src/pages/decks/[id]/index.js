import { useRouter } from "next/router";
import { CardContainer } from "../../../components";
import { useState, useEffect } from "react";
import { supabase } from "../../api/supabaseClient";
import * as SupaHelpers from "../../api/supabase_helpers";

function Decks() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);

  useEffect(async () => {
    const data = await SupaHelpers.get.cardsByDeckId(id);
    if (data) {
      setData(data);
    }
  }, [id]);

  return (
    <div>
      <CardContainer cards={data} />
    </div>
  );
}

export default Decks;
