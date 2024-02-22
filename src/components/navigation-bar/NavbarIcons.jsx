import { Link } from "react-router-dom";
import { IconButton, Flex } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import NavbarMenu from "components/navigation-bar/NavbarMenu";
import PopoverMenu from "components/navigation-bar/PopoverMenu";
import { CgHeart } from "react-icons/cg";
import useAuthStore from "zustand-stores/auth-store";

function NavbarIcons() {
  const { isAuthenticated } = useAuthStore();

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
