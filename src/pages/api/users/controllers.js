import { supabase } from "../supabaseClient";


//Obtener todo de la tabla user_detail
export const getAllUsersDetails = async () => {
  const getAllUsers = await supabase.from("users_details").select("*");
  return getAllUsers.data;
};


//function que buscar user por uuid
export const getUserDetailById = async (id) => {
  const findUserDetailByID = await supabase
  .from("users_details")
  .select("*")
  .match({ users_uuid: id })
  .single();
  if (!findUserDetailByID) {
    throw Error(`No se encontró el user con ID ${id}`);
  }
  return findUserDetailByID.data
};