import { Button, ButtonGroup } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import buttonStyle from "constants/chakraBlackButtonProps";

function Buttons() {
  return (
    <ButtonGroup size="md" spacing="2">
      <Button {...buttonStyle}>Buy now</Button>
      <Button leftIcon={<AddIcon />}>Wishlist</Button>
    </ButtonGroup>
  );
}

export default Buttons;
