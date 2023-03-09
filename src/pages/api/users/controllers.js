import { supabase } from "../supabaseClient";


//Obtener todo de la tabla user_detail
export const getAllUsersDetails = async () => {
  const getAllUsers = await supabase.from("users_details").select("*");
  return getAllUsers.data;
};