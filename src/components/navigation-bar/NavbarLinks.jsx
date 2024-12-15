import { Link } from "react-router-dom";
import { Flex, Image, Text } from "@chakra-ui/react";
import css from "style-sheets/nav.module.css";
import icon from "assets/website_logo.png";

function NavbarLinks() {
  return (
    <Flex gap={"1rem"} align={"center"} justify={"flex-end"}>
      <Image src={icon} boxSize="80px" padding="10px" />
      <Text letterSpacing={"3px"} margin={0} fontSize="lg" color="black">
        ART
        <span style={{ fontWeight: "bold" }}>·</span>
        SY
      </Text>
      <Link to="/" reloadDocument>
        <button className={css.nav_link}>HOME</button>
      </Link>
      <Link to="/about">
        <button className={css.nav_link}>ABOUT US</button>
      </Link>
    </Flex>
  );
}

export default NavbarLinks;
