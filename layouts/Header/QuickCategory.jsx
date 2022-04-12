import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";

import categories from "../../constant/categories";

const QuickCategory = () => {
  return (
    <Flex ml="2">
      {Object.values(categories)
        .slice(0, 3)
        .map((category) => (
          <Link href={`/${category.slug}`} key={category.slug} passHref>
            <Flex as="a" cursor="pointer" color="white" p="2" align="center">
              <Icon as={category.icon} fontSize="2xl" mr="1" />
              <Text fontSize="sm">{category.label}</Text>
            </Flex>
          </Link>
        ))}
    </Flex>
  );
};

export default QuickCategory;
