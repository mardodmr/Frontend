import { useBanner } from "context/banner-context";
import { Button, Flex, Show } from "@chakra-ui/react";

// onclick and lifting up the state
function Categories({ setTag }) {
  const { setUserType } = useBanner();

  const handleClick = (e) => {
    e.preventDefault();
    setTag(e.target.innerText);
    setUserType("");
  };

  const categories = [
    "ALL",
    "PHONE CASES",
    "JEWELRY",
    "NECKLACE",
    "CUSTOM GIFTS",
    "ACCESSORIES",
    "ART",
    "BEAUTY",
  ];

  return (
    <Show above="lg">
      <Flex
        minWidth="max-content"
        justify={"center"}
        bg={"black"}
        marginBottom={"10"}
      >
        {categories.map((catergory) => {
          return (
            <Button
              key={catergory}
              variant="solid"
              color="white"
              bg="black"
              borderRadius={0}
              onClick={handleClick}
            >
              {" "}
              {catergory}{" "}
            </Button>
          );
        })}
      </Flex>
    </Show>
  );
}

export default Categories;
