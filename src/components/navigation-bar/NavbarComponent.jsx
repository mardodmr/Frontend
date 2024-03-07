import NavbarSearch from "components/navigation-bar/NavbarSearch";
import NavbarIcons from "components/navigation-bar/NavbarIcons";
import NavbarLinks from "components/navigation-bar/NavbarLinks";
import { Divider, Grid } from "@chakra-ui/react";

function NavbarComponent() {
  return (
    <>
      <Grid templateColumns="1.2fr 0.4fr 1fr">
        <NavbarLinks />
        <NavbarSearch />
        <NavbarIcons />
      </Grid>
      <Divider margin={0} variant={"dashed"} />
    </>
  );
}

export default NavbarComponent;
