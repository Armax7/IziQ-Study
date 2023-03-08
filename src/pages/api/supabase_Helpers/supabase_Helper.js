import { supabase } from "../supabaseClient";

export const getAllCard = async () => {
  const { data: cards, error } = await supabase
  .from("cards")
  .select("*")
  
if (error) {
  alert(error);
  return null;
}
console.log(cards);
//console.log(typeof decks);
//setDecks(decks);
return cards;

}


export const getAllDeck = async () => {
  const { data: decks, error } = await supabase
    .from("decks")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    alert(error);
    return null;
  }
  console.log(decks);
  //console.log(typeof decks);
  //setDecks(decks);
  return decks;
};
