import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { IconButton, Flex } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import NavbarMenu from "components/NavbarMenu";
import PopoverMenu from "components/PopoverMenu";
import { CgHeart } from "react-icons/cg";

function NavbarIcons() {
  const { isAuthenticated } = useAuth();

  return (
    <Flex gap={"1rem"} align={"center"} justify={"flex-start"}>
      <Link>
        <IconButton icon={<CgHeart size={30} />} variant={"gohst"} />
      </Link>
      <div>{isAuthenticated ? <NavbarMenu /> : <PopoverMenu />}</div>
      <Link to="/cart">
        <IconButton icon={<CgShoppingCart size={30} />} variant={"gohst"} />
      </Link>
    </Flex>
  );
}

export default NavbarIcons;
