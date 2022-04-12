import { Heading, Text } from "@chakra-ui/react";

const ModelDetailHeading = ({ modelName }) => {
  return (
    <Heading
      as="h1"
      display="flex"
      flexDir="column"
      color="whiteAlpha.900"
      textAlign={{ base: "center", md: "initial" }}
    >
      <Text as="span" fontWeight="500" fontSize="md">
        Giá bán của
      </Text>
      <Text as="span" fontWeight="200">
        {modelName}
      </Text>
    </Heading>
  );
};

export default ModelDetailHeading;
