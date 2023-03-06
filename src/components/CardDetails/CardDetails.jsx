import * as Chakra from "@chakra-ui/react";


function CardDetails({id,question="r u there?",answer="yes",image,Deck_id,learned}) {
  return (
    <Chakra.Flex border="1px solid #2c2c2c"  boxShadow='lg' backgroundColor="white"  borderRadius="10px" height="400px" justifyContent="center" alignItems="center" width="600px">
      <Chakra.Flex height="350px" width="100%" >
        <Chakra.Flex flexDir="column" width="100%" justifyContent="center" alignItems="center" >
          <Chakra.Heading as='h3' size='lg'>
            {question}
          </Chakra.Heading>
          <Chakra.Image src='https://bit.ly/dan-abramov' boxSize='200px' alt='Dan Abramov' />
        </Chakra.Flex>

        <Chakra.Divider orientation='vertical' width="2px" backgroundColor="#2c2c2c" />
        <Chakra.Flex flexDir="column" width="100%" justifyContent="center" alignItems="center">
          <Chakra.Heading as='h3' size='lg'>
            {answer}
          </Chakra.Heading>
        </Chakra.Flex>

      </Chakra.Flex>
    </Chakra.Flex>
  )
}

export default CardDetails