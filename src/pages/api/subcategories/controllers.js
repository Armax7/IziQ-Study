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

export async function getSubCategoriesById(id) {
  const { data: subcategories, error } = await supabase
    .from("subcategories")
    .select("id,name,category_id")
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }
  return subcategories;
}

export async function getSubCategoriesByCategoryId(category_id) {
  const { data: subcategories, error } = await supabase
    .from("subcategories")
    .select("id,name,category_id")
    .eq("category_id", category_id);

  if (error) {
    console.log(error);
    throw error;
  }
  return subcategories;
}

export async function postSubCategory({ name, category_id }) {
  const { data, error } = await supabase
    .from("subcategories")
    .insert([{ name, category_id }])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function updateSubCategory({ id, name, category_id }) {
  const { data, error } = await supabase
    .from("subcategories")
    .update({ name, category_id })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

export async function deleteSubCategory({ id }) {
  const { data, error } = await supabase
    .from("subcategories")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
