import * as Chakra from "@chakra-ui/react";
import Feature from "./Feature";

function DeckContainer({decks,num_decks}) {
    const array = [
        {
            id:1,
            name:"English",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            total_cards:5,
            status:"learned",
            user_id:2313551_5656,
            category_id:321
        },
        {
            id:2,
            name:"French",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            total_cards:7,
            status:"learned",
            user_id:8984161561_5656,
            category_id:321
        },
        {
            id:3,
            name:"Spanish",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            total_cards:25,
            status:"learned",
            user_id:55615445561_5656,
            category_id:321
        },
        {
            id:4,
            name:"Arab",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            total_cards:25,
            status:"learned",
            user_id:55615445561_5656,
            category_id:321
        },
        
      
    ]// array must be changed by "decks" that came from params

  return (
    <Chakra.Stack spacing={8} direction='column' backgroundColor="#f2f2f2" margin="10px" justifyContent="space-evenly">
        <Chakra.Heading fontSize='md'marginLeft="5%"   >Decks {num_decks}</Chakra.Heading>
        <Chakra.Box display="flex" justifyContent="space-evenly">
        <Chakra.Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {array.map(deck=> <Feature key={deck.id}  name={deck.name} description={deck.description} total_cards={deck.total_cards}/> )}
        </Chakra.Grid>
        </Chakra.Box>
    </Chakra.Stack>
  )
}

export default DeckContainer