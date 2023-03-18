import { supabase } from "../../pages/api/supabaseClient";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../../pages/api/supabase_helpers";
import styles from "./ProfileBuckets.module.css";

const ProfileBuckets = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userID, setUserID] = useState("");
  const [deckID, setDeckID] = useState("");

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserID(userID);
    const deckID = await SupaHelpers.get.userDecks();
    setDeckID(deckID);
  }, [userID, deckID]);

  const handleUpload = async () => {
    const { data, error } = await supabase.storage
      .from("images-client")
      .upload(`${userID}/decks/${deckID}/` + selectedFile?.name, selectedFile);

    if (data) {
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
