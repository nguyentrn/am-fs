import { Flex, Image } from "@chakra-ui/react";

const ModelDetailImage = ({ img_url }) => {
  return (
    <Flex
      w={{ base: "12rem", md: "72", lg: "80" }}
      m={{ base: "auto", md: "initial" }}
      justify="center"
    >
      <Flex
        w={{ base: "60", md: "60", lg: "64" }}
        h={{ base: "60", md: "60", lg: "64" }}
        bg="whiteAlpha.900"
        p={{ base: "2", md: "2", lg: "4" }}
        borderRadius="md"
        justify="center"
      >
        <Image src={img_url} />
      </Flex>
    </Flex>
  );
};

export default ModelDetailImage;
