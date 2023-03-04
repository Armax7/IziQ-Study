import * as Chakra from "@chakra-ui/react";
import { supabase } from "../../pages/api/supabaseClient";

function LogOutButton({
  colorScheme = "blue",
  backgroundColor = "red.400",
  marginRight = "82",
  marginLeft = "370",
  marginTop = "25px",
  marginBottom = "25px",
}) {
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (e) {
      console.log(e.message);
      alert(e.message);
    }
  };

  return (
    <Chakra.Button
      colorScheme={colorScheme}
      bg={backgroundColor}
      onClick={() => {
        handleLogout();
        alert("Logged out successfully.");
      }}
      mr={marginRight}
      ml={marginLeft}
      mt={marginTop}
      mb={marginBottom}
    >
      Log Out
    </Chakra.Button>
  );
}

export default LogOutButton;
