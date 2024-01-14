import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "context/auth-context";

function NavbarMenu() {
  const { userLogOutLogic } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogOutLogic();
    navigate("/", { replace: true });
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<CgProfile size={30} />}
        variant={"gohst"}
      />
      <MenuList>
        <MenuItem onClick={() => navigate("/edit-profile")}>
          My Profile
        </MenuItem>
        <MenuItem onClick={() => navigate("/orders")}>My Orders</MenuItem>
        <MenuItem onClick={() => navigate("/products")}>My Products</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default NavbarMenu;