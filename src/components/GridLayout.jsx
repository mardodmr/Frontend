import { SimpleGrid } from "@chakra-ui/react";

function GridLayout({ children }) {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={10}
      padding="10px"
    >
      {children}
    </SimpleGrid>
  );
}

export default GridLayout;
