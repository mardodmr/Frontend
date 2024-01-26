import { Flex, Divider } from "@chakra-ui/react";
import SeachNav from "components/SeachNav";
import NavbarLinks from "./NavbarLinks";
import NavbarIcons from "./NavbarIcons";

function NavbarComponent() {
  return (
    <>
      <Flex
        marginLeft="25%"
        marginRight="25%"
        marginBottom={"1%"}
        marginTop={"1%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <NavbarLinks />
        <SeachNav />
        <NavbarIcons />
      </Flex>
      <Divider margin={0} />
    </>
  );
}

export default NavbarComponent;
