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
import useAuthStore from "zustand-stores/auth-store";
import ReusableModal from "components/reusable-components/ReusableModal";
import title from "constants/profileElement";
import UpdateProfile from "components/user-forms/UpdateProfile";
import css from "style-sheets/nav.module.css";

function NavbarMenu() {
  const { logoutUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/", { replace: true });
  };

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<CgProfile size={30} />}
        variant={"gohst"}
      />
      <MenuList className={css.nav_menu}>
        <MenuItem>
          <ReusableModal
            trigger={"Profile"}
            title={title}
            children={<UpdateProfile />}
          />
        </MenuItem>
        <MenuItem onClick={() => navigate("/orders")}>Orders</MenuItem>
        <MenuItem onClick={() => navigate("/products")}>Products</MenuItem>
        <MenuDivider />
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default NavbarMenu;
