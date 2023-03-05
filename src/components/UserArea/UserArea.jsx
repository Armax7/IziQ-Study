import * as Chakra from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../../pages/api/supabaseClient";

export default function UserArea() {
  const [user, setUser] = useState(null);
  

  useEffect(async () => {
    setUser(supabase.auth.getUser());

    const user = await supabase.auth.getUser();
    console.log(user.data);
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      {user && (
        <>
          <h1>User area</h1>
          <p>Sesion de ...</p>
          <p>Sesion activa</p>
          <Chakra.Button
            mr={82}
            backgroundColor="red.400"
            onClick={() => {
                handleLogout();
                alert("Logged out successfully.");
              }}
            ml="370"
            colorScheme="blue"
            marginTop="25px"
            marginBottom="25px"
            marginLeft="0px"
          >
            Log Out
          </Chakra.Button>
        </>
      )}
    </div>
  );
}
