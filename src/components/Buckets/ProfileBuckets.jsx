import { supabase } from "../../pages/api/supabaseClient";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../../pages/api/supabase_helpers";
import styles from "./ProfileBuckets.module.css";
import axios from "axios";

export const PATH = {
  path: "",
};

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
      console.log("este es data ", data);
      await axios.put(`${process.env.NEXT_PUBLIC_HOST}/api/users`, {
        users_uuid: userID,
        image: data.path,
      });
      console.log("userID", userID);
      console.log("data.path", data.path);
      PATH.path = data.path;
      alert("Se subio el archivo correctamente");
    } else if (error) {
      console.log(error);
      alert(error.message);
    }
  };

  const handleDeleteClick = () => {
    setSelectedFile(null);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="file" className={styles.fileInput}>
        Choose an image
      </label>
      <input
        type="file"
        id="file_input"
        name="file_input"
        accept=".jpg, .jpeg, .png"
        onChange={(e) => {
          setSelectedFile(e.target.files[0]);
        }}
        className={styles.fileInput}
      />
      {selectedFile && (
        <div className={styles.selectedFile}>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Archivo seleccionado"
            className={styles.selectedFileImg}
          />
          <button onClick={handleUpload} className={styles.selectedFileButton}>
            {" "}
            Upload{" "}
          </button>
          <button
            onClick={handleDeleteClick}
            className={styles.selectedFileButton}
          >
            {" "}
            Delete{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileBuckets;
