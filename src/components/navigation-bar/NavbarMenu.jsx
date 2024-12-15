import {
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import UpdateProfile from "components/forms/user-forms/UpdateProfile";
import ReusableModal from "components/reusable-components/ReusableModal";
import title from "constants/profileElement";
import { User } from "react-feather";
import { useNavigate } from "react-router-dom";
import css from "style-sheets/nav.module.css";
import useAuthStore from "zustand-stores/auth-store";

function NavbarMenu() {
  const { logoutUser, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    checkAuth();
    navigate("/", { replace: true });
  };

  return (
    <Menu>
      <MenuButton as={IconButton} icon={<User size={30} />} variant={"gohst"} />
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
