import { Flex, IconButton } from "@chakra-ui/react";
import NavbarMenu from "components/navigation-bar/NavbarMenu";
import PopoverMenu from "components/navigation-bar/PopoverMenu";
import { useEffect } from "react";
import { Heart, ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import useAuthStore from "zustand-stores/auth-store";

function NavbarIcons() {
  const { checkAuth, isAuthenticated } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Flex gap={"1rem"} align={"center"} justify={"flex-start"}>
      <Link>
        <IconButton icon={<Heart size={27} />} variant={"gohst"} />
      </Link>
      <div>{isAuthenticated ? <NavbarMenu /> : <PopoverMenu />}</div>
      <Link to="/cart">
        <IconButton icon={<ShoppingCart size={25} />} variant={"gohst"} />
      </Link>
    </Flex>
  );
}

export default NavbarIcons;
