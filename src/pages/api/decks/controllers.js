import { supabase } from "../supabaseClient";

export const getAllDecks = async () => {
  const getDecks = await supabase.from("decks").select("*")
  return getDecks.data
}

export const getDeckByUserId = async (id) => {
  const { data: getDeckByUserID, error } = await supabase
  .from("decks")
  .select("*")
  .match({ user_id: id })
if (error) {
  throw new Error(error.message);
}
if (!getDeckByUserID) {
  throw Error(`No se encontró el user con ID ${id}`);
}
return getDeckByUserID;
}

export const getDecksByName = async (name) => {
  const { data: getDecksByName, error } = await supabase
    .from("decks")
    .select("*")
    .ilike("name", `%${name}%`);
  if (error) {
    throw new Error(error.message);
  }
  if (getDecksByName.length === 0) {
    throw new Error(`No se encuentran coincidencias con el Name ${name}`);
  }
  return getDecksByName;
}