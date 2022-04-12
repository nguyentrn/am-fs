import { Flex } from "@chakra-ui/react";

const Body = (props) => {
  return (
    <Flex as="main" minH="calc(100vh - 5rem)" flexDir="column" {...props} />
  );
};

export default Body;
