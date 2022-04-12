import { Flex } from "@chakra-ui/react";

const Main = (props) => {
  return (
    <Flex
      as="section"
      ml={{ base: "0", md: "2", lg: "3" }}
      flexDir="column"
      flexGrow="3"
      zIndex="1"
      {...props}
    />
  );
};

export default Main;
