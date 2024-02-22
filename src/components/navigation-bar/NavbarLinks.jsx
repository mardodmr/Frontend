import { Link } from "react-router-dom";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import icon from "assets/website_logo.png";

function NavbarLinks() {
  return (
    <Flex gap={"1rem"} align={"center"} justify={"flex-end"}>
      <Image src={icon} boxSize="80px" padding="10px" />
      <Text margin={0} fontSize="lg" color="black">
        Art·sy
      </Text>
      <Link to="/" reloadDocument>
        <Button color={"black"} variant={"link"} width={"100%"}>
          HOME
        </Button>
      </Link>
      <Link to="/about">
        <Button color={"black"} variant={"link"} width={"100%"}>
          ABOUT US
        </Button>
      </Link>
    </Flex>
  );
}

export default NavbarLinks;
