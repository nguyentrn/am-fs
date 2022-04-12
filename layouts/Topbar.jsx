import { Flex, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useToggle } from "react-use";
import { BsChevronCompactUp, BsChevronCompactDown } from "react-icons/bs";

import Box from "./Box";

const Topbar = (props) => {
  return (
    <Box
      borderRadius="0"
      as="section"
      position="sticky"
      top="0"
      h={{ base: "12", sm: "14" }}
      w="100%"
      zIndex="3"
      bg="gray.800"
      color="whiteAlpha.900"
      fontWeight="600"
      {...props}
    />
  );
};

export default Topbar;
