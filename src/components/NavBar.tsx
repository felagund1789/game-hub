import { Box, HStack, Icon, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link, useLocation } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";

const NavBar = () => {
  const { pathname } = useLocation();
  const img =
    pathname.indexOf("games/") > -1 ? (
      <Icon boxSize="48px" minWidth="48px" margin={4} paddingTop={3}>
        <BsChevronLeft />
      </Icon>
    ) : (
      <Image
        src={logo}
        boxSize="48px"
        minWidth="48px"
        margin={4}
        objectFit="cover"
      />
    );

  return (
    <HStack padding="10px">
      <Link to="/">{img}</Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
