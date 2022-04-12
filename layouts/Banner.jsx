import { Flex } from "@chakra-ui/react";
import colors from "../theme/colors.js";

const Banner = (props) => {
  return (
    <Flex
      as="section"
      h={{ base: "48rem", md: "40rem" }}
      bg={`linear-gradient(to right,${colors.primary[600]},${colors.primary[300]})`}
      color="whiteAlpha.900"
      pb="72"
      clipPath={{ xl: "polygon(0 0,0 100%,100% 80%,100% 0)" }}
      // clipPath={{ xl: "polygon(0 0,0 75%,30% 100%,100% 75%,100% 0)" }}
      // maxHeight="48rem"
      // minHeight="40rem"
      {...props}
    />
  );
};

export default Banner;
