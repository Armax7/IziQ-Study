import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function Dropdown({
  optionsProp,
  value = null,
  onChange = () => {},
  placeholderProp = "Select option",
  size = "md",
  variant = "Outline",
  colorScheme = "whiteAlpha",
  h = "auto",
  w = "10rem",
  color = "black",
  bg = "none",
  borderColor = "none",
}) {
  if (!Array.isArray(optionsProp)) {
    throw new TypeError("Error: options should be an array");
  }

  if (value === null || value === undefined) {
    return (
      <Chakra.Select
        onChange={onChange}
        placeholder={placeholderProp}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        h={h}
        w={w}
        color={color}
        bg={bg}
        borderColor={borderColor}
      >
        {optionsProp.map((elem, index) => (
          <option key={index} value={`option${index}`}>
            {Utils.isObject(elem) ? elem.name : elem}
          </option>
        ))}
      </Chakra.Select>
    );
  } else {
    <Chakra.Select
      value={value}
      onChange={onChange}
      placeholder={placeholderProp}
      size={size}
      variant={variant}
      colorScheme={colorScheme}
      h={h}
      w={w}
      color={color}
      bg={bg}
      borderColor={borderColor}
    >
      {optionsProp.map((elem, index) => (
        <option key={index} value={`option${index}`}>
          {Utils.isObject(elem) ? elem.name : elem}
        </option>
      ))}
    </Chakra.Select>;
  }
}

export default Dropdown;
