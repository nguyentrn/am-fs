import { Flex, Text, Heading } from "@chakra-ui/react";

import Banner from "../../layouts/Banner";
import Container from "../../layouts/Container";

const BlogBanner = ({ header }) => {
  return (
    <Banner pos="relative">
      <Flex
        pos="absolute"
        bg="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/title-background/phone1.jpg')"
        bgSize="cover"
        bgPos="center center"
        w="100%"
        h="100%"
      />
      <Container zIndex="1" p="4" maxW="60rem">
        <Flex w="100%" align="flex-end" justify="center" mb="4">
          <Flex flexDir="column">
            <Heading
              as="h1"
              letterSpacing="wide"
              lineHeight="2.8rem"
              fontWeight="300"
            >
              {header.title}
            </Heading>
            <Flex alignSelf="flex-start">
              <Text fontSize="sm" color="whiteAlpha.800" mr="6">
                Đăng bởi <strong>{header.author}</strong>
              </Text>
              <Text fontSize="sm" color="whiteAlpha.800">
                Cập nhật ngày <strong>{header.updated_at}</strong>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Banner>
  );
};

export default BlogBanner;
