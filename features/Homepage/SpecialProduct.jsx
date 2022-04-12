import { Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import colors from "../../theme/colors";

const SpecialProduct = ({ title, area }) => {
  return (
    <Link href="dien-thoai" passHref>
      <GridItem as="a" area={area} cursor="pointer">
        <Flex
          w="100%"
          h="100%"
          flexDir="column"
          color="whiteAlpha.800"
          align="center"
          justify="center"
          bg={`linear-gradient(${colors.primary[900]}bb, ${colors.primary[900]}bb), no-repeat center / cover url("images/title-background/phone3.jpg")`}
          // bg={`linear-gradient(${colors.primary[500]}bb, #4700F8bb), no-repeat center / cover url("images/title-background/phone3.jpg")`}
        >
          <Heading fontWeight="300" fontSize="xl" lineHeight="0">
            {title}
          </Heading>
          <Text fontWeight="600">Apple iPhone 13 Pro Max</Text>
        </Flex>
      </GridItem>
    </Link>
  );
};

export default SpecialProduct;
