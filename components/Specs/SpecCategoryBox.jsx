import { Flex, Heading, Icon } from "@chakra-ui/react";

import Box from "../../layouts/Box";

const SpecCategoryBox = (props) => {
  return (
    <Box
      flexDir="column"
      key={props.category}
      boxSizing="border-box"
      px={{ base: "4", md: "8" }}
      py={{ base: "3", md: "6" }}
      mb={{ base: "3", md: "6" }}
      bg={props.theme === "dark" ? "gray.800" : "white"}
      color={props.theme === "dark" ? "whiteAlpha.900" : "blackAlpha.900"}
    >
      <Flex align="center" mb="0">
        <Icon as={props.icon} fontSize="3xl" mr="3" />
        <Heading as="h3" fontSize="xl" mb="0">
          {props.heading}
        </Heading>
      </Flex>
      {props.children}
    </Box>
  );
};

export default SpecCategoryBox;
