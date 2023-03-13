import { supabase } from "../supabaseClient";

export const getAllDecks = async () => {
  const getDecks = await supabase.from("decks").select("*");
  return getDecks.data;
};

export const getDeckByUserId = async (id) => {
  const { data: getDeckByUserID, error } = await supabase
    .from("decks")
    .select("*")
    .match({ user_id: id });
  if (error) {
    throw new Error(error.message);
  }
  if (!getDeckByUserID) {
    throw Error(`No se encontró el user con ID ${id}`);
  }
  return getDeckByUserID;
};

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
};

export const postNewDeck = async ({
  name,
  description = null,
  user_id,
  category_id,
  subcategory_id,
  total_cards = 0,
  rating = 0,
}) => {
  const { data: postDeck, error } = await supabase
    .from("decks")
    .insert([
      {
        name,
        description,
        status: "active",
        category_id,
        subcategory_id,
        user_id,
        total_cards,
        rating,
      },
    ])
    .select("*");
  if (error) {
    throw error;
  }
  return postDeck;
};

export const modificatedDeck = async ({
  id,
  name,
  description,
  total_cards,
  status,
  category_id,
  subcategory_id,
  rating,
}) => {
  const { data: updateDeck, error } = await supabase
    .from("decks")
    .update([
      {
        name,
        description,
        total_cards,
        status,
        category_id,
        subcategory_id,
        rating,
      },
    ])
    .eq("id", id)
    .select("*")  
  if (error) {
    throw error;
  }
  return updateDeck;
};
