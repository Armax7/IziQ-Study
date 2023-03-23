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

export const updateUserDetails = async ({
  users_uuid,
  name,
  lastname,
  alias,
  birth_date,
  gender,
  status,
  occupation,
  subscription_id,
  plan_id,
}) => {
  const { data: updateUser, error } = await supabase
    .from("users_details")
    .update({
      name,
      lastname,
      alias,
      birth_date,
      gender,
      status,
      occupation,
      subscription_id,
      plan_id,
    })
    .eq("users_uuid", users_uuid)
    .select();
  if (error) {
    throw error;
  }
  return updateUser;
};

export async function postUserDetails({
  users_uuid,
  name,
  lastname,
  alias,
  birth_date,
  gender,
  status,
  occupation,
  subscription_id,
  plan_id,
}) {
  const { data, error } = await supabase
    .from("users_details")
    .insert([
      {
        users_uuid,
        name,
        lastname,
        alias,
        birth_date,
        gender,
        status,
        occupation,
        subscription_id,
        plan_id,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}
