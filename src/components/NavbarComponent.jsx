import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import {
  Flex,
  Image,
  Text,
  Divider,
  IconButton,
  HStack,
  Button,
} from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import NavbarMenu from "components/NavbarMenu";
import PopoverMenu from "components/PopoverMenu";
import SeachNav from "components/SeachNav";
import { CgHeart } from "react-icons/cg";
import icon from "assets/website_logo.png";

function NavbarComponent() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Flex
        marginLeft="25%"
        marginRight="25%"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <HStack spacing={"5%"}>
          <Image src={icon} boxSize="80px" padding="10px" />
          <Text margin={0} fontSize="lg" color="black">
            Art·sy
          </Text>
          <Link to="/">
            <Button color={"black"} variant={"link"} width={"100%"}>
              HOME
            </Button>
          </Link>
          <Link to="/about">
            <Button color={"black"} variant={"link"} width={"100%"}>
              ABOUT US
            </Button>
          </Link>
        </HStack>
        <SeachNav />
        <HStack spacing={"25%"}>
          <Link>
            <IconButton icon={<CgHeart size={30} />} variant={"gohst"} />
          </Link>
          {isAuthenticated ? <NavbarMenu /> : <PopoverMenu />}
          <Link to="/cart">
            <IconButton icon={<CgShoppingCart size={30} />} variant={"gohst"} />
          </Link>
        </HStack>
      </Flex>
      <Divider />
    </>
  );
}

export default NavbarComponent;
