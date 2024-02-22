import { Button } from "@chakra-ui/react";

function BlackButton({ children }) {
  return (
    <Button variant="solid" color="white" bg="black" borderRadius={0}>
      {" "}
      {children}{" "}
    </Button>
  );
}

export default BlackButton;
