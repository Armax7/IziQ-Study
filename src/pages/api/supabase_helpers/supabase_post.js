import { supabase } from "../supabaseClient";
import { userId } from "./supabase_get";

/**
 * Recupera información de la base de datos de Supabase.
 * Devuelve un objeto que contiene los datos que se ingresarán en la base de datos;
 * Devuelve una alerta si existe error;
 *
 * @return {Objeto[]} Detalles del usuario
 */

export async function postUserDetails(alias, birth_date, gender, occupation) {
  try {
    const id = await userId();
    const { data, error } = await supabase
      .from("users_details")
      .eq("user_id", id)
      .insert([
        {
          user_id: id,
          alias,
          birth_date,
          gender,
          occupation,
        },
      ]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

/**
 * Retrieves information from the Supabase database.
 * Returns an object that contains the data to be entered into the BD, with respect to the Deck;
 * Returns an alert on error;
 *
 * @return {Object[]} User details
 */
export async function postDeck(name, description, category_id, subcategory_id) {
  try {
    const id = await userId();
    const { data, error } = await supabase.from("decks").insert([
      {
        name,
        description,
        user_id: id,
        category_id,
        subcategory_id,
      },
    ]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

/**
 * Retrieves information from the Supabase database.
 * Returns an object that contains the data to enter the BD, with respect to the Card;
 * Returns an error alert, on almost error;
 *
 * @return {Object[]} User details
 */
export async function postCard(question, answer, image) {
  try {
    const deck_id = await supabase.from("decks").select("deck_id");
    const { data, error } = await supabase
      .from("cards")
      .eq("deck_id", deck_id)
      .insert([{ question, answer, image, deck_id: deck_id }]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}