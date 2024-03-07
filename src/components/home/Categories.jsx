import { Button, Flex, Show } from "@chakra-ui/react";
import categories from "constants/categories";
import useProductStore from "../../zustand-stores/filter-store";

// onclick and lifting up the state
function Categories() {
  const { setCategory, setUserType, setSearch } = useProductStore();

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
              fontSize={"xs"}
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
