import { supabase } from "../supabaseClient";

export const getAllDecks = async () => {
  const { data: decks, error } = await supabase.from("decks").select();

  if (error) {
    console.log(error);
    throw error;
  }

  return decks;
};

export const getDeckById = async (uuid) => {
  const { data: deckById, error } = await supabase
    .from("decks")
    .select()
    .eq("id", uuid);

  if (error) {
    console.log(error);
    throw error;
  }

  return deckById;
};

export const getDeckByUserId = async (userId) => {
  const { data: getDeckByUserID, error } = await supabase
    .from("decks")
    .select()
    .eq("user_id", userId);

  if (error) {
    console.log(error);
    throw error;
  }

  return getDeckByUserID;
};

export const getDecksByName = async (name) => {
  const { data: getDecksByName, error } = await supabase
    .from("decks")
    .select()
    .ilike("name", `%${name}%`);

  if (error) {
    console.log(error);
    throw error;
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
    .select();
  if (error) {
    throw error;
  }
  return postDeck;
};

export const updateDeck = async ({
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
    .update({
      name,
      description,
      total_cards,
      status,
      category_id,
      subcategory_id,
      rating,
    })
    .eq("id", id)
    .select();
  if (error) {
    throw error;
  }
  return updateDeck;
};

export async function deleteDeck({ id }) {
  const { data, error } = await supabase.from("decks").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
