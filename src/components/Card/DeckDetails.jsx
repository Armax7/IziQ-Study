import * as Chakra from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Stars } from "..";
import { supabase } from "../../pages/api/supabaseClient";



function DeckDetails({deckDetails,deck_id}) {
  const [numberOfReviews,setNumberOfReviews] = useState()
  

  useEffect(async()=>{
    const reviews = await supabase
      .from('reviews')
      .select('*')
      .eq('deck_id', deck_id)
      setNumberOfReviews(reviews.data.length)
  },[])

  console.log(numberOfReviews);


  return (
    <Chakra.Flex flexDir="column" width="80%" color="#313131" margin="20px 0">
        <Chakra.Flex justifyContent="space-between" alignItems="center">
            <Chakra.Heading margin="0 5px" >{deckDetails?.name}</Chakra.Heading>
            <Chakra.Text color="gray">{deckDetails?.description}</Chakra.Text>
        </Chakra.Flex>
        <Chakra.Box bgColor="black">
            <Chakra.Divider />
        </Chakra.Box>
        <Chakra.Flex justifyContent="flex-end" alignItems="center">
            <Stars rating={deckDetails?.rating} deck_id={deck_id}/>
            <Chakra.Text color="gray" >({numberOfReviews} reviews)</Chakra.Text>
        </Chakra.Flex>
    </Chakra.Flex>
  )
}

export default DeckDetails