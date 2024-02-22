import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useProductStore from "../../zustand-stores/filter-store";

function NavbarSearch() {
  const { setCategory, setUserType, setSearch } = useProductStore();

  return (
    <Flex paddingLeft={"2rem"} paddingRight={"2rem"} align={"center"}>
      <InputGroup size="sm">
        <InputLeftElement children={<Search2Icon color="gray.600" />} />
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          borderRadius={"10px"}
          onChange={(e) => {
            setCategory("");
            setSearch(e.target.value);
            setUserType("");
          }}
        />
      </InputGroup>
    </Flex>
  );
}

export default NavbarSearch;
