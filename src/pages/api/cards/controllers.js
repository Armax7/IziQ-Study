import axios from "axios";
import { supabase } from "../supabaseClient";
import * as SupaHelper from "../supabase_helpers";

const HOST = process.env.NEXT_PUBLIC_HOST;

export const getAllCards = async () => {
  let { data: cards, error } = await supabase.from("cards").select();

  if (error) {
    console.log(error);
    throw error;
  }

  return cards;
};

export const getCardById = async (id) => {
  const { data: getCardById, error } = await supabase
    .from("cards")
    .select()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }

  return getCardById;
};

export const getCardsByDeckId = async (deckId) => {
  const { data: getCardByDeckId, error } = await supabase
    .from("cards")
    .select()
    .eq("deck_id", deckId)
    .order("created_at");

  if (error) {
    console.log(error);
    throw error;
  }

  try {
    const total_cards = await SupaHelper.get.countCardsInDeck(deckId);
    await axios.put(`http://${HOST}/api/decks`, { id: deckId, total_cards });
  } catch (error) {
    throw error;
  }

  return getCardByDeckId;
};

export const getCardByNameQuestion = async (name) => {
  const { data: getCardByQuestion, error } = await supabase
    .from("cards")
    .select()
    .ilike("question", `${name}%`);

  if (error) {
    console.log(error);
    throw error;
  }

  return getCardByQuestion;
};

export async function postCard({
  question,
  answer,
  deck_id,
  image = null,
  learned = false,
}) {
  const { data, error } = await supabase
    .from("cards")
    .insert([{ question, answer, image, learned, deck_id }])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  try {
    const total_cards = await SupaHelper.get.countCardsInDeck(deck_id);
    await axios.put(`http://${HOST}/api/decks`, { id: deck_id, total_cards });
  } catch (error) {
    throw error;
  }

  return data;
}

export async function updateCard({ id, question, answer, image, learned }) {
  const { data, error } = await supabase
    .from("cards")
    .update({ question, answer, image, learned })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function deleteCard({ id }) {
  const { data, error } = await supabase
    .from("cards")
    .select()
    .eq("id", id);

  const { error: deleteError } = await supabase
    .from("cards")
    .delete()
    .eq("id", id);

  if (error || deleteError) {
    console.log(error || deleteError);
    throw error || deleteError;
  }

  const deck_id = data.at(0).deck_id;

  try {
    const total_cards = await SupaHelper.get.countCardsInDeck(deck_id);
    await axios.put(`http://${HOST}/api/decks`, {id: deck_id, total_cards})
  } catch (error) {
    throw error;
  }
}
