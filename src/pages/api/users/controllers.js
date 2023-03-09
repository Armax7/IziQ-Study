import { supabase } from "../supabaseClient";

//Obtener todo de la tabla user_detail
export const getAllUsersDetails = async () => {
  const getAllUsers = await supabase.from("users_details").select("*");
  return getAllUsers.data;
};

//function que buscar user por uuid
export const getUserDetailById = async (id) => {
  const { data: getUserByID, error } = await supabase
    .from("users_details")
    .select("*")
    .match({ users_uuid: id })
    .single();
  if (error) {
    throw new Error(error.message);
  }
  if (!getUserByID) {
    throw Error(`No se encontró el user con ID ${id}`);
  }
  return getUserByID;
};

//funcion para mostrar el id por usuario
export const getUserDetailByName = async (name) => {
  const { data: getUserByName, error } = await supabase
    .from("users_details")
    .select("*")
    .ilike("name", `${name}%`);
  if (error) {
    throw new Error(error.message);
  }
  if (getUserByName.length === 0) {
    throw new Error(`No se encuentran coincidencias con el Name ${name}`);
  }
  return getUserByName;
};
