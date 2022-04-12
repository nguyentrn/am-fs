import Link from "next/link";
import {
  Link as StyledLink,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
  Text,
} from "@chakra-ui/react";

import HeadingWithUnderline from "../../components/HeadingWithUnderline";
import { formatNumberWithComma } from "../../utils/formatPrice";

const ProductList = ({ category, products }) => {
  return (
    <Flex w={{ base: "100%", lg: "30%" }} flexDir="column">
      <HeadingWithUnderline fontSize="lg" mb="0" mt="4" alignSelf="flex-start">
        {category}
      </HeadingWithUnderline>

      <TableContainer>
        <Table variant="simple" size="md">
          <Tbody>
            {products.map((product, id) => (
              <Tr key={product.id}>
                <Td px="1" w="0" fontSize="lg" fontWeight="500">
                  {id + 1}.
                </Td>
                <Td px="1">
                  <Link
                    href={`dien-thoai/${product.slug}-i.${product.id}`}
                    passHref
                  >
                    <StyledLink display="flex" alignItems="center">
                      <Image src={product.img_url} h="2rem" mx="2" />
                      <Text fontWeight="600">{product.name}</Text>
                    </StyledLink>
                  </Link>
                </Td>
                <Td
                  px="1"
                  isNumeric
                  fontSize="sm"
                  color="red.400"
                  fontWeight="bold"
                >
                  {formatNumberWithComma(product.min_price / 1000)}k đ
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default ProductList;
