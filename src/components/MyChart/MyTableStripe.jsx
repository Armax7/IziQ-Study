import * as Chakra from "@chakra-ui/react";
import React from "react";

export default function MyTableStripe() {
  return (
    <div>
      <Chakra.TableContainer>
        <Chakra.Table variant="simple">
          <Chakra.TableCaption>Mis ultimas donaciones</Chakra.TableCaption>
          <Chakra.Thead>
            <Chakra.Tr>
              <Chakra.Th>Customer_ID</Chakra.Th>
              <Chakra.Th>Fecha</Chakra.Th>
              <Chakra.Th isNumeric>Total(USD)</Chakra.Th>
            </Chakra.Tr>
          </Chakra.Thead>
          <Chakra.Tbody>
            <Chakra.Tr>
              <Chakra.Td>cus_NYjDjgLzstB9wN</Chakra.Td>
              <Chakra.Td>2023-02-20</Chakra.Td>
              <Chakra.Td isNumeric>4</Chakra.Td>
            </Chakra.Tr>
            <Chakra.Tr>
              <Chakra.Td>cus_NYjDjgMttrtJ7aV</Chakra.Td>
              <Chakra.Td>2023-02-21</Chakra.Td>
              <Chakra.Td isNumeric>3</Chakra.Td>
            </Chakra.Tr>
            <Chakra.Tr>
              <Chakra.Td>cus_NYjDjgAbhtZ3qC</Chakra.Td>
              <Chakra.Td>2023-02-22)</Chakra.Td>
              <Chakra.Td isNumeric>2</Chakra.Td>
            </Chakra.Tr>
          </Chakra.Tbody>
          <Chakra.Tfoot>
            <Chakra.Tr>
              <Chakra.Th></Chakra.Th>
              <Chakra.Th>Total</Chakra.Th>
              <Chakra.Th isNumeric>9</Chakra.Th>
            </Chakra.Tr>
          </Chakra.Tfoot>
        </Chakra.Table>
      </Chakra.TableContainer>
    </div>
  );
}
