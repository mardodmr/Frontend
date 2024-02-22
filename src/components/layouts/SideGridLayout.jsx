import GridLayout from "components/layouts/GridLayout";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function SideGridLayout(props) {
  return (
    <Grid templateColumns="repeat (3, 1fr)">
      <Show above="lg">
        <GridItem colSpan={1} bg={"red"}>
          {props.sidePanel}
        </GridItem>
      </Show>
      <GridItem colStart={2} colEnd={3}>
        <GridLayout>{props.grid}</GridLayout>
      </GridItem>
    </Grid>
  );
}

export default SideGridLayout;
