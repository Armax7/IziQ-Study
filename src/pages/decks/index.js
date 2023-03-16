import * as Components from "../../components";
import { useEffect, useState } from "react";
import * as SupaHelpers from "../api/supabase_helpers";
import * as Chakra from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";




const Decks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [userID, setUserId] = useState("");
  const [decks, setDecks] = useState([]);

  useEffect(async () => {
    const userID = await SupaHelpers.get.userId();
    setUserId(userID);

    const decks = await SupaHelpers.get.userDecks();
    setDecks(decks);
  }, [userID]);

  return (
    <div>
      <Components.DeckContainer decks={decks} />

      <Chakra.Button colorScheme='teal' onClick={onOpen}>
        Open
      </Chakra.Button>
       
        <Chakra.Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            
            size="full"
          >
            <Chakra.DrawerContent>
              <Chakra.DrawerCloseButton
                backgroundColor="#F5E9CF"
                color="red"
                mr={960}
                mt="3"
              />
              <Chakra.DrawerBody>
              <Components.DeckForm />
              </Chakra.DrawerBody>
            </Chakra.DrawerContent>
          </Chakra.Drawer>
        
    </div>
  );
};

export default Decks;
