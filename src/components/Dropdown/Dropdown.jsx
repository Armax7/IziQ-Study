import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function Dropdown({
  options,
  ...props
}) {
  if (!Array.isArray(options)) {
    throw new TypeError("Error: options should be an array");
  }

    return (
      <Chakra.Select {...props} >
        {options.map((elem, index) => {
          if (Utils.isObject(elem)) {
            return (
              <option key={index} value={elem.value}>
                {elem.label || elem.name}
              </option>
            )
          }
          return (
            <option key={index} value={`option${index}`}>
              {elem}
            </option>
          )
        })}
      </Chakra.Select>
    );
}

export default Dropdown;
