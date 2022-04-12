import { Flex, Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Flex
      pos="absolute"
      top="0"
      bottom="0"
      left="0"
      right="0"
      h="100vh"
      justify="center"
      align="center"
    >
      <ChakraSpinner size="xl" />
    </Flex>
  );
};

export default Spinner;
