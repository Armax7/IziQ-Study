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
