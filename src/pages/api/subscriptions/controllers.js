import { supabase } from "../supabaseClient";

export async function getSubscriptionsFromSb() {
  const { data: subscriptions, error } = await supabase
    .from("subscriptions")
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return subscriptions;
}
