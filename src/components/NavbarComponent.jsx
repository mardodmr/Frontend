import { Divider, Grid } from "@chakra-ui/react";
import NavbarSearch from "components/NavbarSearch";
import NavbarIcons from "components/NavbarIcons";
import NavbarLinks from "components/NavbarLinks";

function NavbarComponent() {
  return (
    <>
      <Grid templateColumns="1.2fr 0.4fr 1fr">
        <NavbarLinks />
        <NavbarSearch />
        <NavbarIcons />
      </Grid>
      <Divider margin={0} />
    </>
  );
}

export default NavbarComponent;
