import { supabase } from "../../pages/api/supabaseClient";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../../pages/api/supabase_helpers";

const ProfileBuckets = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userID, setUserID] = useState("");

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserID(userID);
  }, [userID]);

  const handleUpload = async () => {
    const { data, error } = await supabase.storage
      .from("images-client")
      .upload(`${userID}/profile/` + selectedFile?.name, selectedFile);

    if (data) {
      alert("Archivo subido correctamente");
    } else if (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleDeleteClick = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <label for="file">Choose an image</label>
      <input
        type="file"
        id="file_input"
        name="file_input"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => {
          setSelectedFile(e.target.files[0]);
        }}
      />
      {selectedFile && (
        <>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Archivo seleccionado"
            width={"80px"}
          />
          <button onClick={handleUpload}> Upload </button>
          <button onClick={handleDeleteClick}> Delete </button>
        </>
      )}
    </div>
  );
};

export default ProfileBuckets;
