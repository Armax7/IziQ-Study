import * as Chakra from "@chakra-ui/react";
import * as Utils from "../../utils";

function Dropdown({
  optionsC: optionsCategories,
  placeholder = "Select Deck...",
  placeholder2= "Select Sub..",
  optionsSub,
  onChangue2,
  ...props
  
}) {
  if (!Array.isArray(optionsCategories)) {
    throw new TypeError("Error: options should be an array");
  }
  

    return (
      <div>
      <Chakra.Select placeholder={placeholder} {...props} >
        {optionsCategories.map((elem, index) => {
          if (Utils.isObject(elem)) {
            return (
              <option key={index} value={elem.id}>
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
      <Chakra.Select   placeholder={placeholder2} {...props} onChangue={onChangue2} >
      {optionsSub.map((elem, index) => {
          if (Utils.isObject(elem)) {
            return (
              <option key={index} value={elem.id}>
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
      </div>
    );
}

export default Dropdown;
