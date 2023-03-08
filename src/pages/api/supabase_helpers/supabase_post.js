import { supabase } from "../supabaseClient";
import { userId } from "./supabase_get";

/**
 * Retrieves information from the Supabase database.
 * Returns an object that contains the data to be entered into the database;
 * Returns an alert, if the user did not send data;
 *
 * @return {Object[]} User details
 */
export async function postUserDetails() {
  try {
    const id = await userId();
    const { data, error } = await supabase
      .from("users_details")
      .eq("user_id", id)
      .insert([
        {
          alias: "user_alias",
          birth_date: "user_birth_date",
          gender: "user_gender",
          occupation: "user_occupation",
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
export async function postDeck() {
  try {
    const id = await userId();
    const { data, error } = await supabase
      .from("decks")
      .insert([
        {
          name: "deck_name",
          description: "deck_description",
          user_id: id,
          category_id: category_id,
          subcategory_id: subcategory_id,
        },
      ]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

export async function postCard() {}
