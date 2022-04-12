import { Flex } from "@chakra-ui/react";
import { forwardRef } from "react";
import colors from "../theme/colors";

const Box = forwardRef((props, ref) => {
  return (
    <Flex
      bg="white"
      shadow="lg"
      borderRadius="md"
      flexDir="column"
      ref={ref}
      {...props}
    />
  );
});

export default Box;
