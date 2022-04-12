import { Flex, Grid, Button, Icon } from "@chakra-ui/react";
import Link from "next/link";
import HeadingWithUnderline from "../../components/HeadingWithUnderline";
import categories from "../../constant/categories";

import ProductList from "./ProductList";
import SpecialProduct from "./SpecialProduct";

const ViewMore = () => {
  return (
    <Link href="dien-thoai" passHref>
      <Button as="a" variant="ghost" alignSelf="center">
        Xem danh sách điện thoại
      </Button>
    </Link>
  );
};

const Category = ({ category, models }) => {
  return (
    <Flex flexDir="column" bg="white" boxShadow="xl" py="8" mt="8">
      <Flex align="center" mb="2">
        <Icon as={categories[category].icon} fontSize="4xl" mx="2" />
        <HeadingWithUnderline fontSize="2xl" ml="8" m="0" p="0">
          {categories[category].label}
        </HeadingWithUnderline>
      </Flex>
      <Grid
        h="40rem"
        w="100%"
        my="2"
        as="article"
        templateRows={{
          base: "repeat(3, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        templateAreas={{
          base: '"hot hot" "new1 new2" "best best"',
          lg: '"hot hot best" "new1 new2 best"',
        }}
        gap={0.5}
      >
        <SpecialProduct area="new1" title="Điện thoại hot nhất tháng" />
        <SpecialProduct area="new2" title="Điện thoại mới ra mắt" />
        <SpecialProduct area="hot" title="Điện thoại mới ra mắt" />
        <SpecialProduct area="best" title="Điện thoại mới ra mắt" />
      </Grid>
      <Flex flexDir="column">
        <Flex
          m="4"
          justify="space-between"
          flexDir={{ base: "column", lg: "row" }}
        >
          <ProductList category="Bán chạy nhất" products={models.slice(0, 5)} />
          <ProductList category="Mới ra mắt" products={models.slice(0, 5)} />
          <ProductList
            category="Đáng tiền nhất"
            products={models.slice(0, 5)}
          />
        </Flex>
        <ViewMore />
      </Flex>
    </Flex>
  );
};

export default Category;
