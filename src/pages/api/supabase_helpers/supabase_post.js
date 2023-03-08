import { supabase } from "../supabaseClient";
import { userId } from "./supabase_get";

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
  } catch (error) {}
}

export async function postDeck() {}

export async function postCard() {}
