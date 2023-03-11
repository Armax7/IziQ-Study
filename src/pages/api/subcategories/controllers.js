import { supabase } from "../supabaseClient";

export async function getSubcategoriesFromSb() {
  const { data: subcategories, error } = await supabase
    .from("subcategories")
    .select("id,name,category_id");

  if (error) {
    console.log(error);
    throw error;
  }

  return subcategories;
}

export async function getSubCategoriesByName(name) {
  const { data: subcategories, error } = await supabase
    .from("subcategories")
    .select("id,name,category_id")
    .ilike("name", `%${name}%`);

  if (error) {
    console.log(error);
    throw error;
  }
  return subcategories;
}
