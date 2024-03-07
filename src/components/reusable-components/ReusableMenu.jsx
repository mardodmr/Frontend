import { HamburgerIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import useOrderStore from "zustand-stores/order-store";

function ReusableMenu() {
  const { setStatus } = useOrderStore();
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Menu closeOnSelect={true}>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          size={"lg"}
        >
          MenuItem
        </MenuButton>
        <MenuList>
          <MenuOptionGroup
            onChange={(value) => {
              setStatus(value);
            }}
            defaultValue="pending"
            type="radio"
          >
            <MenuItemOption value="pending">Pending</MenuItemOption>
            <MenuItemOption value="fulfilled">Fulfilled</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </div>
  );
}

export default ReusableMenu;
