import * as Chakra from "@chakra-ui/react";
import styles from "./Checkout.module.css"
import { MdCheckCircle } from "react-icons/md";

function Checkout() {

  return (
    <Chakra.Flex width="100%" justifyContent="center">
      <Chakra.FormControl width="38%" height="660px" padding="30px" display="flex" flexDir="column" >
        <Chakra.FormLabel>Email</Chakra.FormLabel>
        <Chakra.Input className={styles.input} type='email' placeholder="Ejemplo@gmail.com" />
        <Chakra.FormLabel>Informacion de tarjet</Chakra.FormLabel>
        <Chakra.Input type='text' placeholder='1234 1234 1234 1234' borderRadius="10px 10px 0 0" />
        <Chakra.Flex>
          <Chakra.Input className={styles.input} type='text' placeholder='MM / YY' borderRadius="0 0 0 10px" />
          <Chakra.Input className={styles.input} type='text' placeholder='CVC' borderRadius="0 0 10px 0" />
        </Chakra.Flex>
        <Chakra.FormLabel>Pais o region</Chakra.FormLabel>
        <Chakra.Select variant='outline' borderRadius="10px 10px 0 0">
          <option>Argentina</option>
          <option>Colombia</option>
          <option>Mexico</option>
        </Chakra.Select>
        <Chakra.Input className={styles.input} type='text' placeholder='Código postal' borderRadius="0 0 10px 10px" />
        <Chakra.FormLabel>Periodo de facturación</Chakra.FormLabel>
        <Chakra.Select margin="0 0 30px 0" variant='outline'>
          <option>Mensual</option>
          <option>Anual</option>
        </Chakra.Select>
        <Chakra.Flex margin="0 0 10px 0" justifyContent="space-between">
          <Chakra.Text fontSize='md'>
            Sub total
          </Chakra.Text>
          <Chakra.Text fontSize='md'>
            99.9
          </Chakra.Text>
        </Chakra.Flex>
        <Chakra.Divider margin="0 0 10px 0" />
        <Chakra.Flex margin="0 0 30px 0" justifyContent="space-between">
          <Chakra.Text fontSize='lg'>
            Total
          </Chakra.Text>
          <Chakra.Text fontSize='lg'>
            99.9
          </Chakra.Text>
        </Chakra.Flex>
        <Chakra.Button bg="#E96479" color="white" >Efectuar compra</Chakra.Button>
      </Chakra.FormControl>
      <Chakra.Box  width="38%" height="660px" padding="30px">
        <Chakra.Box borderRadius="10px 10px 10px 10px" h="100%" boxShadow=" 2px 2px 3px 2px rgba(0,0,0,0.3)">
        <Chakra.Box height="27%" backgroundColor="#5C66BB" color="white" display="grid" placeContent="center" borderRadius="10px 10px 0 0" >
          <Chakra.Heading justifySelf="center" size="lg">Premium</Chakra.Heading>
          <Chakra.Flex alignItems="flex-end">
            <Chakra.Heading size="3xl">$99.9</Chakra.Heading>
            <Chakra.Text fontSize="md">
              /mes
            </Chakra.Text>
          </Chakra.Flex>
        </Chakra.Box>
        <Chakra.Box height="73%" backgroundColor="white"  borderRadius="0 0 10px 10px"  >
          <Chakra.List spacing={30} padding="60px 75px 0">
            <Chakra.ListItem>
              <Chakra.ListIcon as={MdCheckCircle} color='#E96479' />
              Funcionalidad de este plan que mejora la experiencia dentro de la página
            </Chakra.ListItem>
            <Chakra.ListItem>
              <Chakra.ListIcon as={MdCheckCircle} color='#E96479' />
              Funcionalidad de este plan que mejora la experiencia dentro de la página
            </Chakra.ListItem>
            <Chakra.ListItem>
              <Chakra.ListIcon as={MdCheckCircle} color='#E96479' />
              Funcionalidad de este plan que mejora la experiencia dentro de la página
            </Chakra.ListItem>
            <Chakra.ListItem>
              <Chakra.ListIcon as={MdCheckCircle} color='#E96479' />
              Funcionalidad de este plan que mejora la experiencia dentro de la página
            </Chakra.ListItem>
          </Chakra.List>
        </Chakra.Box>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Flex>
  )
}

export default Checkout