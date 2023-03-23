import * as Chakra from "@chakra-ui/react";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

function SearchBar({onSearch}) {
  const [search, setSearch] = useState("");

  const handleSearch = () => { onSearch(search); };

  return (
    <div style={{ display: "flex", width: "500px" }}>
      <Chakra.Input
        placeholder="Search"
        w="80%"
        borderRadius="50px 0 0 50px"
        border="none"
        margin="auto 0"
        background="#F2F2F2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Chakra.Button
        width="20%"
        border="none"
        margin="auto 0"
        borderRadius="0 50px  50px 0"
        color="black"
        background="#F2F2F2"
        onClick={handleSearch}
      >
        <BiSearchAlt2 />
      </Chakra.Button>
    </div>
  );
}

export default SearchBar;
