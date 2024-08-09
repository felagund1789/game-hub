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
      <Icon boxSize="60px" paddingTop={4}><BsChevronLeft /></Icon>
    ) : (
      <Image src={logo} boxSize="60px" objectFit="cover" />
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
