import { supabase } from "../supabaseClient";

export async function getPlansFromSb() {
  const { data: plan, error } = await supabase
    .from("plans")
    .select("id,name,value");

  if (error) {
    console.log(error);
    throw error;
  }
  return plan;
}

export async function postPlan({ name, value }) {
  const { data, error } = await supabase
    .from("plans")
    .insert([{ name, value }])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function updatePlan({ id, name, value }) {
  const { data, error } = await supabase
    .from("plans")
    .update({ name, value })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function deletePlan({ id }) {
  const { data, error } = await supabase.from("plans").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
