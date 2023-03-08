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
    const id = await userId()
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
    return {}
  }
}

export async function postDeck() {}

export async function postCard() {}
