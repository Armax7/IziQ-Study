import { supabase } from "../supabaseClient";

export async function getCategoriesFromSb() {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id,name");

  if (error) {
    console.log(error);
    return error;
  }
  return categories;
}

export async function getCategoriesByName(name) {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id,name")
    .eq("name", name);

  if (error) {
    console.log(error);
    return error;
  }
  return categories;
}

export async function getCategoriesById(id) {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("id,name")
    .eq("id", id);

  if (error) {
    console.log(error);
    return error;
  }
  console.log(categories);
  return categories;
}

export async function postCategory({name}) {
  const { data, error } = await supabase
    .from("categories")
    .insert([{ name }])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
