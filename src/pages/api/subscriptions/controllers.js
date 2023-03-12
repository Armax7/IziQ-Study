import { supabase } from "../supabaseClient";

export async function getSubscriptionsFromSb() {
  const { data: subscriptions, error } = await supabase
    .from("subscriptions")
    .select("id,name,price_per_month,price_per_year");

  if (error) {
    console.log(error);
    throw error;
  }

  return subscriptions;
}

export async function getSubscriptionById(id) {
  const { data: subscriptions, error } = await supabase
    .from("subscriptions")
    .select("id,name,price_per_month,price_per_year")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }
  return subscriptions;
}

export async function postSubscription({
  name,
  price_per_month,
  price_per_year,
}) {
  const { data, error } = await supabase
    .from("subscriptions")
    .insert([{ name, price_per_month, price_per_year }])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function updateSubscription({
  id,
  name,
  price_per_month,
  price_per_year,
}) {
  const { data, error } = await supabase
    .from("subscriptions")
    .update({ name, price_per_month, price_per_year })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function deleteSubscription({ id }) {
  const { data, error } = await supabase
    .from("subscriptions")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
