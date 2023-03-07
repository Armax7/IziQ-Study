import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function Dropdown({
  options,
  optionsId = null,
  optionsValue = null,
  ...props
}) {
  if (!Array.isArray(options)) {
    throw new TypeError("Error: options should be an array");
  }

    return (
      <Chakra.Select {...props} >
        {options.map((elem, index) => (
          <option key={!optionsId ? index : optionsId} value={!optionsValue ? `option${index}` : optionsValue}>
            {Utils.isObject(elem) ? elem.name : elem}
          </option>
        ))}
      </Chakra.Select>
    );
}

export default Dropdown;
