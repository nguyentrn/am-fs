import { Flex, Heading } from "@chakra-ui/react";

import Banner from "../../../layouts/Banner";

const ModelListBanner = ({ itemCount, category }) => {
  return (
    <Banner pos="relative">
      <Flex
        pos="absolute"
        background="linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/title-background/phone1.jpg')"
        bgSize="cover"
        bgPos="center center"
        w="100%"
        h="100%"
      />
      <Flex flexDir="column" zIndex="1" m="auto">
        <Heading
          as="h1"
          mt="16"
          letterSpacing="wide"
          lineHeight="2.8rem"
          fontWeight="300"
          fontSize="5xl"
          display="flex"
          flexDir="column"
        >
          {category.label}
          <Flex
            as="span"
            fontSize="sm"
            fontWeight="500"
            letterSpacing="normal"
            alignSelf="center"
            color="whiteAlpha.800"
          >
            (Hiển thị {itemCount} sản phẩm)
          </Flex>
        </Heading>
      </Flex>
    </Banner>
  );
};

export default ModelListBanner;
