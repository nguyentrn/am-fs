import Link from "next/link";
import { Flex } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Flex
        as="a"
        px={{ base: 2, sm: 8 }}
        alignSelf="center"
        fontSize="xl"
        color="white"
        whiteSpace="nowrap"
      >
        Góc Review
      </Flex>
    </Link>
  );
};

export default Logo;
