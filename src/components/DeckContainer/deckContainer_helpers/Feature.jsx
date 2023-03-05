///---------------------------Mock para DeckCover-------------------
///Esto sera remplazado por DeckCover

import * as Chakra from "@chakra-ui/react";

function Feature({ name, description,total_cards, ...rest }) {
   
    return (
        <Chakra.Box p={7} boxShadow='md' id={name} backgroundColor="#ffffff" transition="box-shadow.3s ease, transform .2s ease" _hover={{boxShadow: "lg"}} maxWidth="400px" cursor="pointer" borderWidth='1px' {...rest}  >
            <Chakra.Heading fontSize='xl'>{name}</Chakra.Heading>
            <Chakra.Text mt={3}>{description}</Chakra.Text>
            <Chakra.Tag size="sm"mt={3} variant='solid'backgroundColor="#5C66BB" colorScheme='teal'>{total_cards} cards</Chakra.Tag>
      </Chakra.Box>
    )
  }


export default Feature

///Borrar todo una vez exista el componente DeckCover
