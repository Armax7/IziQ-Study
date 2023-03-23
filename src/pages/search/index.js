import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Components from "../../components";

import * as SupaHelpers from "../api/supabase_helpers";

import * as Chakra from "@chakra-ui/react";


  function Search() {
    const router = useRouter();

  const [decks, setDecks] = useState([]);
  const [filteredDecks, setFilteredDecks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

 
  useEffect(() => {
    async function fetchData() {
      const userDecks = await SupaHelpers.get.allDecks();
      setDecks(userDecks);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const term = router.query.term;
    if (term) {
      setSearchTerm(term);
    }
  }, [router.query]);

  useEffect(() => {
    if (searchTerm) {
      filterDecks(searchTerm);
    }
  }, [searchTerm]);

  const filterDecks = (term) => {
    const filtered = decks.filter((deck) =>
      deck.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDecks(filtered);
  };
let decksitos = decks.slice(0,15)

return(

<div> 
<Chakra.Box textAlign="center" fontSize="xl"> 
<h1> ✨ Busca entre todos los mazos de la comunidad 📋 ✨ </h1>
</Chakra.Box>
<Components.DeckContainer decks={filteredDecks}    />
<Components.DeckContainer decks={decksitos}/>
</div>

)
}


export default Search