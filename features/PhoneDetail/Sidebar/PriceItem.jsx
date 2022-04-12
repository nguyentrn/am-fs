import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import formatPrice from "../../../utils/formatPrice";

const PriceItem = ({ version, maxPrice }) => {
  return (
    <Link key={`${version.id}_${version.store_id}`} href={version.url} passHref>
      <Flex
        as="a"
        justify="space-around"
        align="center"
        h="9"
        my="1"
        cursor="pointer"
      >
        <Flex
          w={{ base: "32" }}
          justify="center"
          align="center"
          borderRadius="md"
          bg={`${version.store_color}`}
          h="100%"
        >
          <Image
            src={`/images/stores/${version.store_id}.png`}
            maxW="24"
            maxH="6"
          />
        </Flex>
        <Flex
          bg="red.300"
          minW="28"
          maxW="28"
          h="100%"
          borderRadius="md"
          pos="relative"
          overflow="hidden"
        >
          <Flex
            top="0"
            feft="0"
            bottom="0"
            bg="red.500"
            pos="absolute"
            w={`${(version.price / maxPrice) * 100}%`}
            h="100%"
          />

          <Text
            textAlign="center"
            m="auto"
            zIndex="1"
            fontWeight="600"
            fontSize="md"
            color="whiteAlpha.900"
          >
            {formatPrice(version.price)}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default PriceItem;
