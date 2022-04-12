import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import categories from "../../constant/categories";
import App from "../../layouts/App";
import Banner from "../../layouts/Banner";
import Box from "../../layouts/Box";
import Container from "../../layouts/Container";
import Category from "./Category";

const CategoryMenuItem = ({ category }) => {
  return (
    <Box
      key={category.slug}
      w={{ base: "48%", sm: "52" }}
      h="40"
      justify="center"
      align="center"
      m={{ base: "1", sm: "1" }}
      cursor="pointer"
      boxShadow="md"
    >
      <Icon as={category.icon} fontSize="5xl" />
      <Text fontSize="lg" fontWeight="500" mt="2">
        {category.label}
      </Text>
    </Box>
  );
};

const HomePage = ({ phones }) => {
  return (
    <App>
      <Banner
        clipPath=""
        minH="calc(100vh - 5rem)"
        h="100%"
        bg="gray.200"
        // bg="primary.800"
        p="0"
        m="0"
        color="blackAlpha.900"
        justify="center"
        align="center"
      >
        <Container maxW="62rem" flexDir="column" align="center">
          <Flex flexWrap="wrap" justify="center" align="center">
            {Object.values(categories).map((category) => (
              <CategoryMenuItem key={category.slug} category={category} />
            ))}
          </Flex>
          <Button alignSelf="center" variant="ghost" size="lg" mt="4">
            Xem thêm
          </Button>
        </Container>
      </Banner>
      <Container flexDir="column">
        <Category category="dien-thoai" models={phones} />
        <Category category="may-tinh-bang" models={phones} />
      </Container>
    </App>
  );
};

export default HomePage;
