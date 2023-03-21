import * as Chakra from "@chakra-ui/react";
import { HiTrash } from "react-icons/hi";

function DeleteButton({ onClick: onClickProp = () => {}, ...props }) {
  return (
    <Chakra.Button onClick={onClickProp} {...props}>
      <HiTrash />
    </Chakra.Button>
  );
}

export default DeleteButton;
