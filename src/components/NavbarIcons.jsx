import { Link } from "react-router-dom";
import { useAuth } from "context/auth-context";
import { IconButton, HStack } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import NavbarMenu from "components/NavbarMenu";
import PopoverMenu from "components/PopoverMenu";
import { CgHeart } from "react-icons/cg";

function NavbarIcons() {
  const { isAuthenticated } = useAuth();

  return (
    <HStack spacing={"25%"}>
      <Link>
        <IconButton icon={<CgHeart size={30} />} variant={"gohst"} />
      </Link>
      {isAuthenticated ? <NavbarMenu /> : <PopoverMenu />}
      <Link to="/cart">
        <IconButton icon={<CgShoppingCart size={30} />} variant={"gohst"} />
      </Link>
    </HStack>
  );
}

export default NavbarIcons;
