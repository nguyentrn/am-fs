import { Flex, Text, Heading, Image, ListItem } from "@chakra-ui/react";

import Box from "../../layouts/Box";
import { BodyContainer } from "../../layouts/Container";

const convertContent = (content, contentId) => {
  if (content.type === "custom") {
    return content.content;
  }

  if (content.type === "p") {
    return (
      <Flex
        key={contentId}
        as="p"
        fontSize="md"
        my="2"
        mx={{ base: "8", sm: "10" }}
        fontWeight="500"
      >
        {content.content}
      </Flex>
    );
  }

  if (content.type === "img") {
    return (
      <Flex as="figure" flexDir="column" align="center" my="2" key={contentId}>
        <Image alignSelf="center" src={content.source} maxH="50vh" alt="sss" />
        <Text
          as="figcaption"
          color="gray.600"
          fontStyle="italic"
          fontSize="sm"
          mt="1"
        >
          {content.caption}
        </Text>
      </Flex>
    );
  }
};

const BlogArticle = ({ article }) => {
  return (
    <BodyContainer zIndex="1">
      <Box
        w="100%"
        minH="calc(100vh - 18rem)"
        py="8"
        px={{ base: "0", sm: "8", xl: "32" }}
      >
        <Flex
          mt="2"
          mb="4"
          px={{ base: "8", sm: "12", lg: "20" }}
          flexDir="column"
          fontStyle="italic"
          color="blackAlpha.600"
        >
          {article.opening?.map((content, contentId) =>
            convertContent(content, contentId)
          )}
        </Flex>

        {article.main.map((h2, h2Id) => (
          <Flex key={h2Id} flexDir="column">
            <Heading
              as="h2"
              fontSize="3xl"
              mt="6"
              mb="2"
              ml="6"
              px="2"
              whiteSpace="pre-wrap"
              _before={{ content: `"${h2Id + 1}."`, mr: 2, ml: -7 }}
            >
              {h2.label}
            </Heading>
            {h2.contents.map((content, contentId) =>
              convertContent(content, `${h2Id}${contentId}`)
            )}
          </Flex>
        ))}
      </Box>
    </BodyContainer>
  );
};

export default BlogArticle;
