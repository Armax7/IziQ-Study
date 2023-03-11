import { supabase } from "../supabaseClient";

export async function getPlansFromSb() {
  const { data: plan, error } = await supabase
    .from("plan")
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
