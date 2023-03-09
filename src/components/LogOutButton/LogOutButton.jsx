import * as Chakra from "@chakra-ui/react";
import { supabase } from "../../pages/api/supabaseClient";

function LogOutButton({
  colorScheme = "blue",
  backgroundColor = "red.400",
  marginRight = "auto",
  marginLeft = "auto",
  marginTop = "auto",
  marginBottom = "auto",
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
      <a href="/">Log Out</a>
    </Chakra.Button>
  );
}

export default LogOutButton;
