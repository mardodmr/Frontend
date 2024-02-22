import { Button, Flex, Show } from "@chakra-ui/react";
import useProductStore from "../../zustand-stores/filter-store";

// onclick and lifting up the state
function Categories() {
  const { setCategory, setUserType, setSearch } = useProductStore();

  const categories = [
    { name: "NEW!", value: "new" },
    { name: "PHONE CASES", value: "phone cases" },
    { name: "JEWELRY", value: "jewelry" },
    { name: "NECKLACE", value: "necklace" },
    { name: "CUSTOM GIFTS", value: "custom gifts" },
    { name: "ACCESSORIES", value: "accessories" },
    { name: "ART", value: "art" },
    { name: "BEAUTY", value: "beauty" },
  ];

  return (
    <Show above="lg">
      <Flex
        height={"40px"}
        minWidth="max-content"
        justify={"center"}
        bg={"black"}
        marginBottom={1}
      >
        {categories.map((catergory) => {
          return (
            <Button
              key={catergory.value}
              variant="solid"
              color="white"
              bg="black"
              borderRadius={0}
              onClick={() => {
                setCategory(catergory.value);
                setSearch("");
                setUserType("");
              }}
              fontSize={"sm"}
            >
              {" "}
              {catergory.name}{" "}
            </Button>
          );
        })}
      </Flex>
    </Show>
  );
}

export default Categories;
