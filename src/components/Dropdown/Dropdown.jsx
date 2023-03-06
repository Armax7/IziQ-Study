import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function Dropdown({
  optionsProp,
  value = null,
  onChange = ()=>{},
  placeholderProp = "Select option",
  sizeProp = "md",
  variantProp = "Outline",
  colorSchemeProp = "whiteAlpha",
  hProp = "auto",
  wProp = "10rem",
  colorProp = "black",
  bgProp = "none",
  borderColorProp = "none",
}) {
  if (!Array.isArray(optionsProp)) {
    throw new TypeError("Error: options should be an array");
  }

  if(value === null || value === undefined){
    return (
      <Chakra.Select
        onChange={onChange}
        placeholder={placeholderProp}
        size={sizeProp}
        variant={variantProp}
        colorScheme={colorSchemeProp}
        h={hProp}
        w={wProp}
        color={colorProp}
        bg={bgProp}
        borderColor={borderColorProp}
      >
        {optionsProp.map((elem, index) => (
          <option key={index} value={`option${index}`}>
            {Utils.isObject(elem) ? elem.name : elem}
          </option>
        ))}
      </Chakra.Select>
    );
  }
  else {
    <Chakra.Select
        value={value}
        onChange={onChange}
        placeholder={placeholderProp}
        size={sizeProp}
        variant={variantProp}
        colorScheme={colorSchemeProp}
        h={hProp}
        w={wProp}
        color={colorProp}
        bg={bgProp}
        borderColor={borderColorProp}
      >
        {optionsProp.map((elem, index) => (
          <option key={index} value={`option${index}`}>
            {Utils.isObject(elem) ? elem.name : elem}
          </option>
        ))}
      </Chakra.Select>
  }

}

export default Dropdown;
