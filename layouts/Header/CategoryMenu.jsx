import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
  Icon,
} from "@chakra-ui/react";
import { groupBy } from "lodash";
import Link from "next/link";
import { useMemo } from "react";
import { BiCategory } from "react-icons/bi";
import categories from "../../constant/categories";

const CategoryMenu = () => {
  const groups = useMemo(
    () => Object.entries(groupBy(Object.values(categories), "group")),
    [categories.length]
  );

  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          aria-label="Danh mục"
          leftIcon={<BiCategory />}
          variant="ghost"
          size="md"
          color="whiteAlpha.900"
          textTransform="uppercase"
          border="2px"
          borderColor="whiteAlpha.600"
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.200" }}
        >
          Danh mục
        </MenuButton>
        <MenuList
          zIndex="4"
          color="blackAlpha.900"
          display="flex"
          w="100%"
          justifyItems="space-between"
        >
          {groups.map(([groupLabel, group]) => (
            <MenuGroup key={groupLabel} ml="2" title={groupLabel}>
              {group.map((category) => (
                <Link key={category.slug} href={`/${category.slug}`} passHref>
                  <MenuItem as="a" pl="3" fontWeight="400">
                    <Flex align="center">
                      <Icon as={category.icon} fontSize="xl" mr="3" />
                      {category.label}
                    </Flex>
                  </MenuItem>
                </Link>
              ))}
            </MenuGroup>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};
export default CategoryMenu;
