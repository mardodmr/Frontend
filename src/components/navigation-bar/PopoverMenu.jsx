import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function PopoverMenu() {
  return (
    <Popover isLazy={true}>
      <PopoverTrigger>
        <IconButton icon={<CgProfile size={30} />} variant={"gohst"} />
      </PopoverTrigger>
      <PopoverContent width={"auto"}>
        <PopoverArrow />
        <PopoverHeader>
          <Link to="/login">
            <Button
              width={"100%"}
              size={"sm"}
              fontSize={"xs"}
              variant={"solid"}
              bg={"black"}
              color={"white"}
            >
              LOGIN
            </Button>
          </Link>
        </PopoverHeader>
        <PopoverBody>
          <HStack>
            <Text margin={0} fontSize={"sm"}>
              A new customer?
            </Text>
            <Link to="/register">
              <Button
                paddingBottom={"4px"}
                width={"100%"}
                color={"red"}
                size={"xs"}
                variant={"link"}
              >
                {` Register`}
              </Button>
            </Link>
          </HStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default PopoverMenu;
