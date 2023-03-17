/**
 * Post images to a Bucket created in the BD.
* Inside the Bucket create a folder with the user ID
 * Inside the user ID folder, create a PROFILE subfolder where the user's profile photo is stored.
 */
import { supabase } from "../supabaseClient";
import * as SupaHelpers from "./supabase_get"

export const profileImageBucket  = async () => {
    const userID = await SupaHelpers.userId();
    const { data, error } = await supabase.storage
      .from("images-client")
      .upload(`${userID}/profile/` + File?.name, File);

    if (data) {
      alert("Se subio el archivo correctamente");
    } else if (error) {
      console.log(error);
      alert(error.message);
    }
  };