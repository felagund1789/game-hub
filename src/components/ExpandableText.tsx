import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  max?: number;
}

const ExpandableText = ({ children, max = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length < max) return <Text>{children}</Text>;

  return (
    <>
      <Text>
        {expanded ? children : children.substring(0, max) + "..."}
        <Button
          size="xs"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
