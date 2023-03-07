import * as Chakra from "@chakra-ui/react";
import styles from "./CardDetails.module.css"
import ImageIcon from "./CardDetails_helpers/ImageIcon"
import {HiTrash} from "react-icons/hi"
import {RiPencilFill} from "react-icons/ri"


function CardDetails({id,question="how do you say apple in spanish?",answer="manzana asd asd asd asdasd a sd",image,Deck_id,learned}) {
  return (
    <Chakra.Flex className={styles.card} flex="0 0 auto" padding="15px" backgroundColor="white"  margin="20px">
      <Chakra.Text className={styles.input} borderRight="1px solid #c2c2c2">{question}</Chakra.Text>
      <Chakra.Text className={styles.input}>{answer}</Chakra.Text>
      <Chakra.Flex width="10%" justifyContent="space-between">
        <RiPencilFill size="30px" cursor="pointer" />
        <HiTrash size="30px" cursor="pointer" />
      </Chakra.Flex>
    </Chakra.Flex>
  )
}

export default CardDetails