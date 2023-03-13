import { supabase } from "../supabaseClient";

export const getAllCards = async () => {
  const getAllCards = await supabase.from("cards").select("*");
  return getAllCards.data;
};

export const getCardByDeckID = async (id) => {
  const { data: getCardById, error } = await supabase
    .from("cards")
    .select("*")
    .match({ deck_id: id });
  if (error) {
    throw new Error(error);
  }
  if (!getCardById) {
    throw Error(`No se encontro la card con Deck ${id}`);
  }
  return getCardById;
};

export const getCardByNameQuestion = async (name) => {
  const { data: getCardByQuestion, error } = await supabase
    .from("cards")
    .select("*")
    .ilike("question", `${name}%`);
  if (error) {
    throw new Error(error.message);
  }
  if (getCardByQuestion.length === 0) {
    throw new Error(`No se encuentran coincidencias con el Name ${name}`);
  }
  return getCardByQuestion;
};

export async function createCards(req, res) {}

export async function updateCards(req, res) {}

export async function deleteCards(req, res) {}
