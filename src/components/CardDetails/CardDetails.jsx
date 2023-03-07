import * as Chakra from "@chakra-ui/react";
import styles from "./CardDetails.module.css"
import {HiTrash} from "react-icons/hi"
import {RiPencilFill} from "react-icons/ri"


function CardDetails({id,question="How do you say apple spanish?",answer="Manzana",image="https://bit.ly/dan-abramov",Deck_id,learned}) {
  const onClick = (e)=>{
    return alert(`You press ${e.currentTarget.name}`)
  }
  return (
    <Chakra.Flex className={styles.card} flex="0 0 auto" padding="15px" backgroundColor="white"  margin="20px">
      <Chakra.Flex paddingRight="50px" flexDir="column" borderRight="1px solid #c2c2c2">
          <Chakra.Text color="#6E6E6E" paddingLeft="20px"  >Question</Chakra.Text>
          <Chakra.Text paddingLeft="20px" className={styles.input} >{question}</Chakra.Text>
      </Chakra.Flex>
      <Chakra.Flex flexDir="column">
        <Chakra.Text color="#6E6E6E" paddingLeft="30px" >Answer</Chakra.Text>
        <Chakra.Text className={styles.input} paddingLeft="30px">{answer}</Chakra.Text>
      </Chakra.Flex>
      <Chakra.Flex width="50%" marginLeft="51px" justifyContent="flex-end" >
        {image && <Chakra.Image boxSize='50px' alignSelf="center" borderRadius="5px"  margin="0 30px" src={image} alt="Card" />}
        <Chakra.Button padding="0" margin="0px 8px"onClick={(e) => onClick(e)} name="Edit button" _focus={{border:"none"}} _hover={{backgroundColor:"transparent"}} backgroundColor="transparent" size="25px" h="25px">
          <RiPencilFill margin="0 20px" size="25px" cursor="pointer" />
        </Chakra.Button >
        <Chakra.Button padding="0" margin="0px 8px"onClick={(e) => onClick(e)} name="Delete button" _focus={{border:"none"}} _hover={{backgroundColor:"transparent"}} backgroundColor="transparent" size="25px" h="25px">
          <HiTrash margin="0 20px" size="25px" cursor="pointer"/>
        </Chakra.Button >
      </Chakra.Flex>
    </Chakra.Flex>
  )
}

export default CardDetails

