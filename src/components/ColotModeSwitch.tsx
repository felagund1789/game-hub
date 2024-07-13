import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

const ColotModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColotModeSwitch;
