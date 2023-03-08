import { supabase } from "../supabaseClient";
import { userId } from "./supabase_get";

/**
 * Retrieves information from the Supabase database.
 * Returns an object that contains the data to be entered into the database;
 * Returns an empty object, if the user did not send data;
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
        { alias: "user_alias" },
        { birth_date: "user_birth_date" },
        { gender: "user_gender" },
        { occupation: "user_occupation" },
      ]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function postDeck() {
  try {
    const id = await userId();
    const {
      data: { decks },
      error: { error_decks },
    } = await supabase
      .from("decks")
      .eq("user_id", id)
      .insert([{ name: "deck_name", description: "deck_description" }]);

    const {
      data: { categories },
      error: { error_categories },
    } = await supabase
    .from("categories")
    .insert([{ name: "deck_category" }]);

    const {
      data: { subcategories },
      error: { error_subcategory },
    } = await supabase
      .from("subcategories")
      .insert([{ name: "deck_subcategory"}]);

    if (error_decks || error_categories || error_subcategory) throw error;
    return {decks, categories, subcategories}
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function postCard() {}
