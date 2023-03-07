import * as Chakra from "@chakra-ui/react";
import styles from "./CardDetails.module.css"
import ImageIcon from "./CardDetails_helpers/ImageIcon"


function CardDetails({id,question="how do you say apple in spanish?",answer="manzana",image,Deck_id,learned}) {
  return (
    <Chakra.Flex   className={styles.card} backgroundColor="white" width="755px" margin="20px" borderRadius="10px" height="52px"  alignItems="center">
      <Chakra.Editable className={styles.input}  defaultValue={question}>
        <Chakra.EditablePreview  alignSelf="center" cursor="pointer" />
        <Chakra.EditableInput className={styles.editableInput} _focus={{border:"none",textAlign:"center",color:"#242424"}} />
      </Chakra.Editable>
      <Chakra.Box height="30px" backgroundColor="#242424">
        <Chakra.Divider orientation='vertical' backgroundColor="#242424"/>
      </Chakra.Box>
      <Chakra.Editable className={styles.input}   marginRight="10px"  defaultValue={answer}>
        <Chakra.EditablePreview alignSelf="center" cursor="pointer"/>
        <Chakra.EditableInput className={styles.editableInput} _focus={{border:"none",textAlign:"center",color:"#242424"}} />
      </Chakra.Editable>
      <ImageIcon/>
      <Chakra.Button bg="#EB455F" padding="0px" _hover={{color: "#000000", backgroundColor:"#EBEBEB" }} _focus={{border:"none" }} minWidth="27px" marginLeft="10px" height="26px"  color="white">x</Chakra.Button>
    </Chakra.Flex>
  )
}

export default CardDetails